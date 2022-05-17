import sys
sys.path.insert(0, "")

import library.time_series_forecasting as tsf
import unittest
import pandas as pd


class TestTimeSeriesForecasting(unittest.TestCase):
    def test_time_series_forecasting(self):
        dataframe = pd.read_csv('..\\Data\\Processed Data\\Combined Cleaned.csv')
        train_df, val_df, test_df, num_features, column_indices, time_series = tsf.get_train_test_data(dataframe)

        self.assertIsInstance(train_df, pd.DataFrame)
        self.assertIsInstance(val_df, pd.DataFrame)
        self.assertIsInstance(test_df, pd.DataFrame)
        self.assertIsInstance(num_features, int)
        self.assertIsInstance(column_indices, dict)
        self.assertIsInstance(time_series, pd.Series)


if __name__ == '__main__':
    unittest.main()