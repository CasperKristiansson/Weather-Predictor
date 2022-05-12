import numpy as np
import datetime
import time

import tensorflow as tf
from tensorflow import keras
from sklearn.preprocessing import MinMaxScaler
from tensorflow.keras.backend import square, mean
import pandas as pd
import matplotlib.pyplot as plt


class Model:
    def __init__(self):
        self.model = None
        self.df = None
    
    def load_model(self, file_name):
        '''
        Method for loading a previously trained model.

        :param file_name: Name of the file to load.

        :return: None
        '''
        def loss_mse_warmup(y_true, y_pred):
            warmup_steps = 50
            """
            Calculate the Mean Squared Error between y_true and y_pred,
            but ignore the beginning "warmup" part of the sequences.
            Custom loss function for use with keras.
            
            y_true is the desired output.
            y_pred is the model's output.
            """

            y_true_slice = y_true[:, warmup_steps:, :]
            y_pred_slice = y_pred[:, warmup_steps:, :]

            return mean(square(y_true_slice - y_pred_slice))

        self.model = keras.models.load_model(file_name, custom_objects={'loss_mse_warmup': loss_mse_warmup})
    
    def load_old_data(self):
        '''
        Loads the old data to use to predict the future weather data

        :return: None

        For testing sake you can drop data for a specific period
        To see how the prediction gets affected by it.
        200000 -> 50000 = 70% Worse Prediction
        200000 -> 100000 = 30% Worse Prediction
        
        The time for predicting is pretty much the same regardless of the
        Input width.
        '''
        self.df = pd.read_csv('..\\Data\\Processed Data\\smhi_data.csv', low_memory=False)
        self.df['Date'] = pd.to_datetime(self.df['Date'], format='%Y-%m-%d %H:%M:%S')
        self.df['Day'] = self.df['Date'].dt.day_of_year
        self.df['Hour'] = self.df['Date'].dt.hour
        self.df.set_index('Date', inplace=True)
        col = self.df.pop('Day')
        self.df.insert(0, col.name, col)

        # self.df = self.df.drop(self.df.index[:150000])

    def example(self):
        '''
        Example for plotting previous predictions.
        '''
        def plot_comparison(start_idx, length=100, train=True):
            """
            Plot the predicted and true output-signals.
            
            :param start_idx: Start-index for the time-series.
            :param length: Sequence-length to process and plot.
            :param train: Boolean whether to use training- or test-set.
            """
            
            if train:
                x = x_train_scaled
                y_true = y_train
            else:
                x = x_test_scaled
                y_true = y_test
            
            end_idx = start_idx + length
            
            x = x[start_idx:end_idx]
            y_true = y_true[start_idx:end_idx]
            
            x = np.expand_dims(x, axis=0)

            y_pred = self.model.predict(x)
            
            y_pred_rescaled = y_scaler.inverse_transform(y_pred[0])
            
            signal_pred = y_pred_rescaled[:, 0]
            signal_true = y_true[:, 0]

            print(len(signal_true))

            plt.figure(figsize=(15,5))
            plt.plot(signal_true, label='true')
            plt.plot(signal_pred, label='pred')
            p = plt.axvspan(0, 50, facecolor='black', alpha=0.15)
            plt.ylabel('Temperature')
            plt.legend()
            plt.show()

        print(df.head())

        now = datetime.datetime.now()

        desired_dataframe = pd.DataFrame(columns=['Day', 'Temperature', 'Air Pressure', 'Humidity', 'Hour', 'Date'])

        for i in range(24*7):
            offset_day = now + datetime.timedelta(hours=i)

            data = {
                'Day': offset_day.timetuple().tm_yday,
                'Temperature': float('nan'),
                'Air Pressure': float('nan'),
                'Humidity': float('nan'),
                'Hour': offset_day.hour,
                'Date': offset_day
            }

            desired_dataframe = desired_dataframe.append(data, ignore_index=True)
        
        desired_dataframe.set_index('Date', inplace=True)

        df = df.append(desired_dataframe)


        df_targets = df[['Temperature', 'Air Pressure', 'Humidity']]

        x_data = df.values[:-(24 * 7)]
        y_data = df_targets.values[:-(24 * 7)]

        x_train = x_data[:191903]
        x_test = x_data[191903:]

        y_train = y_data[:191903]
        y_test = y_data[191903:]

        x_scaler = MinMaxScaler()
        x_train_scaled = x_scaler.fit_transform(x_train)
        x_test_scaled = x_scaler.transform(x_test)

        y_scaler = MinMaxScaler()
        y_train_scaled = y_scaler.fit_transform(y_train)
        y_test_scaled = y_scaler.transform(y_test)

        plot_comparison(start_idx=0, length=(24*7), train=True)

    
    def get_prediction(self, period):
        '''
        The method will return the predicted weather data for the next period.
        The period is specified in hours in the future. See "Time Series Prediction"
        notebook for a bit more information on how the data is transformed so the
        neural network can work with it.

        :param period: The period in hours in the future.

        :return: The predicted weather data.
        '''
        df_targets = self.df[['Temperature', 'Air Pressure', 'Humidity']].shift(-period)

        x_data = self.df.values[:-period]
        y_data = df_targets.values[:-period]

        x_scaler = MinMaxScaler()
        x_train_scaled = x_scaler.fit_transform(x_data)

        y_scaler = MinMaxScaler()
        _ = y_scaler.fit_transform(y_data)

        x_train_scaled = np.expand_dims(x_train_scaled, axis=0)
        y_pred = self.model.predict(x_train_scaled)

        y_pred_rescaled = y_scaler.inverse_transform(y_pred[0])

        return y_pred_rescaled[:, 0][-1], y_pred_rescaled[:, 1][-1], y_pred_rescaled[:, 2][-1]

if __name__ == '__main__':
    model = Model()
    model.load_model('saved_model\\weather_model')
    model.load_old_data()

    result_df = pd.DataFrame(columns=['Date', 'Temperature', 'Air Pressure', 'Humidity'])
    start_date = datetime.datetime.now()
    period = 24 * 7     # The amount of steps to predict in the future.

    start_time = time.time()
    for i in range(1, period + 1):
        prediction = model.get_prediction(i)
        result_df = result_df.append({
            'Date': start_date + datetime.timedelta(hours=i),
            'Temperature': prediction[0],
            'Air Pressure': prediction[1],
            'Humidity': prediction[2]
        }, ignore_index=True)

        print(i, {'Temperature': prediction[0], 'Air Pressure': prediction[1], 'Humidity': prediction[2]}, time.time() - start_time)

    # result_df.to_csv('prediction.csv')
