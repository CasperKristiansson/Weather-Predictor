import os
import numpy as np
import datetime

import tensorflow as tf
from tensorflow import keras
from sklearn.preprocessing import MinMaxScaler
from tensorflow.keras.backend import square, mean
import pandas as pd
import matplotlib.pyplot as plt

class Model:
    def __init__(self):
        self.model = None
    
    def load_model(self, file_name):
        def loss_mse_warmup(y_true, y_pred):
            warmup_steps = 50
            """
            Calculate the Mean Squared Error between y_true and y_pred,
            but ignore the beginning "warmup" part of the sequences.
            
            y_true is the desired output.
            y_pred is the model's output.
            """

            y_true_slice = y_true[:, warmup_steps:, :]
            y_pred_slice = y_pred[:, warmup_steps:, :]

            mse = mean(square(y_true_slice - y_pred_slice))
            
            return mse

        self.model = keras.models.load_model(file_name, custom_objects={'loss_mse_warmup': loss_mse_warmup})

        # print(self.model.summary())
    
    def save_model(self, file_name):
        self.model.save(file_name)
    
    def example(self):
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

        df = pd.read_csv('..\\Data\\Processed Data\\smhi_data.csv', low_memory=False)
        df['Date'] = pd.to_datetime(df['Date'], format='%Y-%m-%d %H:%M:%S')
        df['Day'] = df['Date'].dt.day_of_year
        df['Hour'] = df['Date'].dt.hour
        df.set_index('Date', inplace=True)
        col = df.pop('Day')
        df.insert(0, col.name, col)

        print(df.head())
            

        df_targets = df[['Temperature', 'Air Pressure', 'Humidity']].shift(-24)

        x_data = df.values[:-(24 * 7)]
        y_data = df_targets.values[:-(24 * 7)]

        x_train = x_data[:191903]
        x_test = x_data[191903:]

        print(x_test)

        y_train = y_data[:191903]
        y_test = y_data[191903:]

        x_scaler = MinMaxScaler()
        x_train_scaled = x_scaler.fit_transform(x_train)
        x_test_scaled = x_scaler.transform(x_test)

        y_scaler = MinMaxScaler()
        y_train_scaled = y_scaler.fit_transform(y_train)
        y_test_scaled = y_scaler.transform(y_test)

        print(y_test_scaled)

        # plot_comparison(start_idx=0, length=(24*7), train=True)


        now = datetime.datetime.now()

        # Create a new dataframe with the columns Day, Temperature, Air Pressure Humidity and Hour
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

        x_data = desired_dataframe.values

        x_scaler = MinMaxScaler()
        x_train_scaled = x_scaler.fit_transform(x_train)
        x_test_scaled = x_scaler.transform(x_data)

        x = np.expand_dims(x_test_scaled, axis=0)
        prediction = self.model.predict(x)

        # y_pred_rescaled = y_scaler.inverse_transform(prediction[0])
            
        # signal_pred = y_pred_rescaled[:, 0]

        # plt.figure(figsize=(15,5))
        # plt.plot(signal_pred, label='pred')
        # p = plt.axvspan(0, 50, facecolor='black', alpha=0.15)
        # plt.ylabel('Temperature')
        # plt.legend()
        # plt.show()


    def get_desired_dataframe(self):
        

        print(prediction)
            
        # signal_pred = y_pred_rescaled[:, 0]
        # signal_true = y_true[:, 0]

        # print(len(signal_true))

        # plt.figure(figsize=(15,5))
        # plt.plot(signal_true, label='true')
        # plt.plot(signal_pred, label='pred')
        # p = plt.axvspan(0, 50, facecolor='black', alpha=0.15)
        # plt.ylabel('Temperature')
        # plt.legend()
        # plt.show()

if __name__ == '__main__':
    model = Model()
    model.load_model('saved_model\\weather_model')

    print(model.example())
    # model.get_desired_dataframe()
