""""""
__author__ = "Casper Kristiansson"
__copyright__ = "WeatherBrain"

__maintainer__ = "Casper Kristiansson"
__email__ = "casperkr@kth.se"
__status__ = "Development"

import pandas


class DataManagement:
    def __init__(self):
        pass

    def load_temperature(self):
        """Loads temperature data from file and returns a pandas dataframe
        
        :return: pandas dataframe with temperature data
        """
        return pandas.read_csv('Data\Processed Data\Temperature.csv', index_col=0, parse_dates=True,)

    def load_air_pressure(self):
        pass


if __name__ == '__main__':
    data_management = DataManagement()
    dataframe = data_management.load_temperature()
    print(dataframe)
