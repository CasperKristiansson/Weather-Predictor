""""""
__author__ = "Casper Kristiansson"
__copyright__ = "WeatherBrain"

__maintainer__ = "Casper Kristiansson"
__email__ = "casperkr@kth.se"
__status__ = "Development"


def get_train_test_data(dataframe):
    column_indices = {name: i for i, name in enumerate(dataframe.columns)}
    num_features = dataframe.shape[1]

    n = len(dataframe)
    train_df = dataframe[:int(n*0.7)]
    val_df = dataframe[int(n*0.7):int(n*0.9)]
    test_df = dataframe[int(n*0.9):]

    train_mean = train_df.mean()
    train_std = train_df.std()

    train_df = (train_df - train_mean) / train_std
    val_df = (val_df - train_mean) / train_std
    test_df = (test_df - train_mean) / train_std

    return train_df, val_df, test_df, num_features, column_indices
