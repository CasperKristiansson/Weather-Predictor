""""""
__author__ = "Casper Kristiansson"
__copyright__ = "WeatherBrain"

__maintainer__ = "Casper Kristiansson"
__email__ = "casperkr@kth.se"
__status__ = "Development"

from Library.data_management import DataManagement


def main():
    data_management = DataManagement()
    data = data_management.load_temperature()
    print(data)


if __name__ == '__main__':
    main()
