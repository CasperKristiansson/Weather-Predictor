"""https://www.tensorflow.org/tutorials/structured_data/time_series"""

__author__ = "Casper Kristiansson"
__copyright__ = "WeatherBrain"

__maintainer__ = "Casper Kristiansson"
__email__ = "casperkr@kth.se"
__status__ = "Development"

import tensorflow as tf
import IPython
import IPython.display


MAX_EPOCHS = 20
OUT_STEPS = 24
CONV_WIDTH = 3


def compile_and_fit(model, window, patience=2):
    early_stopping = tf.keras.callbacks.EarlyStopping(monitor='val_loss',
                                                        patience=patience,
                                                        mode='min')

    model.compile(loss=tf.losses.MeanSquaredError(),
                    optimizer=tf.optimizers.Adam(),
                    metrics=[tf.metrics.MeanAbsoluteError()])

    return model.fit(window.train, epochs=MAX_EPOCHS, validation_data=window.val, callbacks=[early_stopping])


def multi_step_last_baseline(window):
    """
    https://www.tensorflow.org/tutorials/structured_data/time_series#baselines

    :param window: The window to predict.
    """
    class MultiStepLastBaseline(tf.keras.Model):
        def call(self, inputs):
            return tf.tile(inputs[:, -1:, :], [1, OUT_STEPS, 1])

    last_baseline = MultiStepLastBaseline()
    last_baseline.compile(loss=tf.losses.MeanSquaredError(),
                          metrics=[tf.metrics.MeanAbsoluteError()])

    window.plot(last_baseline)

    return last_baseline.evaluate(window.val), last_baseline.evaluate(window.test, verbose=0)


def repeat_baseline(window):
    """
    https://www.tensorflow.org/tutorials/structured_data/time_series#baselines

    :param window: The window to predict.
    """
    class RepeatBaseline(tf.keras.Model):
        def call(self, inputs):
            return inputs

    repeat_baseline = RepeatBaseline()
    repeat_baseline.compile(loss=tf.losses.MeanSquaredError(),
                            metrics=[tf.metrics.MeanAbsoluteError()])

    window.plot(repeat_baseline)

    return repeat_baseline.evaluate(window.val), repeat_baseline.evaluate(window.test, verbose=0)


def multi_linear(window, num_features):
    """
    https://www.tensorflow.org/tutorials/structured_data/time_series#single-shot_models

    :param window: The window to predict.
    :param num_features: The shape of the input dataframe
    """
    multi_linear_model = tf.keras.Sequential([
        # Take the last time-step.
        # Shape [batch, time, features] => [batch, 1, features]
        tf.keras.layers.Lambda(lambda x: x[:, -1:, :]),
        # Shape => [batch, 1, out_steps*features]
        tf.keras.layers.Dense(OUT_STEPS*num_features,
                            kernel_initializer=tf.initializers.zeros()),
        # Shape => [batch, out_steps, features]
        tf.keras.layers.Reshape([OUT_STEPS, num_features])
    ])

    history = compile_and_fit(multi_linear_model, window)
    IPython.display.clear_output()
    window.plot(multi_linear_model)

    return multi_linear_model.evaluate(window.val), multi_linear_model.evaluate(window.test, verbose=0)


def multi_dense(window, num_features):
    """
    https://www.tensorflow.org/tutorials/structured_data/time_series#single-shot_models

    :param window: The window to predict.
    :param num_features: The shape of the input dataframe
    """
    multi_dense_model = tf.keras.Sequential([
        # Take the last time step.
        # Shape [batch, time, features] => [batch, 1, features]
        tf.keras.layers.Lambda(lambda x: x[:, -1:, :]),
        # Shape => [batch, 1, dense_units]
        tf.keras.layers.Dense(512, activation='relu'),
        # Shape => [batch, out_steps*features]
        tf.keras.layers.Dense(OUT_STEPS*num_features,
                            kernel_initializer=tf.initializers.zeros()),
        # Shape => [batch, out_steps, features]
        tf.keras.layers.Reshape([OUT_STEPS, num_features])
    ])

    history = compile_and_fit(multi_dense_model, window)
    IPython.display.clear_output()
    window.plot(multi_dense_model)

    return multi_dense_model.evaluate(window.val), multi_dense_model.evaluate(window.test, verbose=0)


def multi_convolutional(window, num_features):
    """
    https://www.tensorflow.org/tutorials/structured_data/time_series#single-shot_models

    :param window: The window to predict.
    :param num_features: The shape of the input dataframe
    """
    multi_conv_model = tf.keras.Sequential([
        # Shape [batch, time, features] => [batch, CONV_WIDTH, features]
        tf.keras.layers.Lambda(lambda x: x[:, -CONV_WIDTH:, :]),
        # Shape => [batch, 1, conv_units]
        tf.keras.layers.Conv1D(256, activation='relu', kernel_size=(CONV_WIDTH)),
        # Shape => [batch, 1,  out_steps*features]
        tf.keras.layers.Dense(OUT_STEPS*num_features,
                            kernel_initializer=tf.initializers.zeros()),
        # Shape => [batch, out_steps, features]
        tf.keras.layers.Reshape([OUT_STEPS, num_features])
    ])

    history = compile_and_fit(multi_conv_model, window)
    IPython.display.clear_output()
    window.plot(multi_conv_model)

    return multi_conv_model.evaluate(window.val), multi_conv_model.evaluate(window.test, verbose=0)


def multi_recurrent(window, num_features):
    """
    https://www.tensorflow.org/tutorials/structured_data/time_series#single-shot_models

    :param window: The window to predict.
    :param num_features: The shape of the input dataframe
    """
    multi_lstm_model = tf.keras.Sequential([
        # Shape [batch, time, features] => [batch, lstm_units].
        # Adding more `lstm_units` just overfits more quickly.
        tf.keras.layers.LSTM(32, return_sequences=False),
        # Shape => [batch, out_steps*features].
        tf.keras.layers.Dense(OUT_STEPS*num_features,
                            kernel_initializer=tf.initializers.zeros()),
        # Shape => [batch, out_steps, features].
        tf.keras.layers.Reshape([OUT_STEPS, num_features])
    ])

    history = compile_and_fit(multi_lstm_model, window)
    IPython.display.clear_output()
    window.plot(multi_lstm_model)

    return multi_lstm_model.evaluate(window.val), multi_lstm_model.evaluate(window.test, verbose=0)


def auto_regression(window, num_features):
    """
    https://www.tensorflow.org/tutorials/structured_data/time_series#advanced_autoregressive_model

    :param window: The window to predict.
    :param num_features: The shape of the input dataframe
    """
    class FeedBack(tf.keras.Model):
        def __init__(self, units, out_steps, num_features):
            super().__init__()
            self.out_steps = out_steps
            self.units = units
            self.lstm_cell = tf.keras.layers.LSTMCell(units)
            # Also wrap the LSTMCell in an RNN to simplify the `warmup` method.
            self.lstm_rnn = tf.keras.layers.RNN(self.lstm_cell, return_state=True)
            self.dense = tf.keras.layers.Dense(num_features)
        
        def call(self, inputs, training=None):
            # Initialize the LSTM state.
            prediction, state = self.warmup(inputs)

            predictions = [prediction]
            # Run the rest of the prediction steps.
            for _ in range(1, self.out_steps):
                # Use the last prediction as input.
                x = prediction
                # Execute one lstm step.
                x, state = self.lstm_cell(x, states=state,
                                        training=training)
                # Convert the lstm output to a prediction.
                prediction = self.dense(x)
                # Add the prediction to the output.
                predictions.append(prediction)

            # predictions.shape => (time, batch, features)
            predictions = tf.stack(predictions)
            # predictions.shape => (batch, time, features)
            predictions = tf.transpose(predictions, [1, 0, 2])

            return predictions

    feedback_model = FeedBack(units=32, out_steps=OUT_STEPS, num_features=num_features)
    print('Output shape (batch, time, features): ', feedback_model(window.example[0]).shape)

    history = compile_and_fit(feedback_model, window)
    IPython.display.clear_output()
    window.plot(feedback_model)

    return feedback_model.evaluate(window.val), feedback_model.evaluate(window.test, verbose=0)
