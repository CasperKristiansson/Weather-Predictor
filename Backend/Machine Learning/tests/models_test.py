import sys
sys.path.insert(0, "")

import library.models as models
from library.window_generator import WindowGenerator
import library.time_series_forecasting as tsf

import unittest
import pandas as pd

class ModelsTest(unittest.TestCase):
    def setUp(self):
        self.dataframe = pd.read_csv('..\\Data\\Processed Data\\Combined Cleaned.csv')
        self.dataframe = self.dataframe.dropna()

        self.train_df, self.val_df, self.test_df, self.num_features, self.column_indices, self.time_series = tsf.get_train_test_data(self.dataframe)
        self.window = WindowGenerator(input_width=24, label_width=24, shift=24,
                                train_df=self.train_df, val_df=self.val_df, test_df=self.test_df, label_columns=['Temperature'],
                                show_plot=True)
    
    def test_multi_step_last_baseline(self):
        result = models.multi_step_last_baseline(self.window)
        self.assertIsInstance(result[0], float)
        self.assertIsInstance(result[1], float)
    
    def test_repeat_baseline(self):
        result = models.repeat_baseline(self.window)
        self.assertIsInstance(result, tuple)
    
    def test_multi_linear(self):
        result = models.multi_linear(self.window, self.num_features)
        self.assertIsInstance(result[0], float)
        self.assertIsInstance(result[1], float)
    
    def test_multi_dense(self):
        result = models.multi_dense(self.window, self.num_features)
        self.assertIsInstance(result[0], float)
        self.assertIsInstance(result[1], float)
    
    def test_multi_conv(self):
        result = models.multi_conv(self.window, self.num_features)
        self.assertIsInstance(result[0], float)
        self.assertIsInstance(result[1], float)
    
    def test_multi_recurrent(self):
        result = models.multi_recurrent(self.window, self.num_features)
        self.assertIsInstance(result[0], float)
        self.assertIsInstance(result[1], float)
    
    def test_auto_regression(self):
        result = models.auto_regression(self.window, self.num_features)
        self.assertIsInstance(result[0], float)
        self.assertIsInstance(result[1], float)
    

if __name__ == '__main__':
    unittest.main()
