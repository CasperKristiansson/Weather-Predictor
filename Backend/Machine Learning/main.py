""""""
__author__ = "Casper Kristiansson"
__copyright__ = "WeatherBrain"

__maintainer__ = "Casper Kristiansson"
__email__ = "casperkr@kth.se"
__status__ = "Development"

from library.model import Model


def main():
    ml_model = Model()
    model = ml_model.load_model('saved_model\weather_model')
    print(model)


if __name__ == '__main__':
    main()
