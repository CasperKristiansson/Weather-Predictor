""""""
__author__ = "Casper Kristiansson"
__copyright__ = "WeatherBrain"

__maintainer__ = "Casper Kristiansson"
__email__ = "casperkr@kth.se"
__status__ = "Development"

import pandas as pd

import library.time_series_forecasting as tsf
from library.window_generator import WindowGenerator
import library.models as models


def main():
    dataframe = pd.read_csv('..\\Data\\Processed Data\\Combined Cleaned.csv')

    #? How should the NaN pascal values be handled? The model will crash if these values exist
    #? Get average value or just drop the values
    dataframe = dataframe.dropna()

    train_df, val_df, test_df, num_features, column_indices, time_series = tsf.get_train_test_data(dataframe)
    window = WindowGenerator(input_width=48, label_width=24, shift=24,
                             train_df=train_df, val_df=val_df, test_df=test_df, label_columns=['Temperature'],
                             show_plot=True)

    print(window)

    models.multi_recurrent(window, num_features)


if __name__ == '__main__':
    main()
