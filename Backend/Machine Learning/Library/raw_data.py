""""""
__author__ = "Casper Kristiansson"
__copyright__ = "WeatherBrain"

__maintainer__ = "Casper Kristiansson"
__email__ = "casperkr@kth.se"
__status__ = "Development"

import pandas


def load_temperature_raw():
    """This methid loads the raw temperature data from
    text files and recompiled the data into a dataframe.

    :return: Dataframe with temperature data.
    """
    # with open(r'Data\\Raw Data\\Temperature 1756-1858.txt') as f:
    #     data = f.readlines()
    
    # with open(r'Data\\Raw Data\\Temperature 1859-1960.txt') as f:
    #     data += f.readlines()
    
    # with open(r'Data\\Raw Data\\Temperature 1961-2012.txt') as f:
    #     data += f.readlines()
    
    # with open(r'Data\\Raw Data\\Temperature 2013-2017.txt') as f:
    #     data += f.readlines()

    with open(r'..\\Data\\Raw Data\\Non-homogenized SLP series in hPa.txt') as f:
        data = f.readlines()
    
    with open(r'..\\Data\\Raw Data\\2013-2017, hPa, automatic station.txt') as f:
        data += f.readlines()

    data_length = len(data)

    result = []

    for data_index, row in enumerate(data):
        row = row.replace('\n', '').split(' ')
        row = [x for x in row if x != '']

        date = pandas.to_datetime(row[0] + '-' + row[1] + '-' + row[2])

        row[2] = date
        row = row[2:]

        for row_index in range(1, len(row)):
            row[row_index] = float(row[row_index])

        while len(row) < 4:
            row.append(None)
        
        data = [[row[0], row[1], row[2], row[3]]]

        result.append(
            pandas.DataFrame(data, columns=['date', 'hPa_one', 'hPa_two', 'hPa_three'])
        )

        if data_index % 1000 == 0:
            print(f'{data_index}/{data_length}')

    return pandas.concat(result)


if __name__ == '__main__':
    dataframe = load_temperature_raw()
    dataframe.to_csv(r'..\\Data\\Raw Data\\hPa.csv', index=False)
