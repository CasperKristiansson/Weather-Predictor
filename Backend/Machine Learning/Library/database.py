""""""
__author__ = "Casper Kristiansson"
__copyright__ = "WeatherBrain"

__maintainer__ = "Casper Kristiansson"
__email__ = "casperkr@kth.se"
__status__ = "Development"

import sqlalchemy
import pandas
import urllib


class Database:
    def __init__(self):
        self.username = 'weatherbrain'
        self.password = '@weatherbrain1'
        self.hostname = 'tcp:weatherbrain.database.windows.net'
        self.port = '1433'
        self.database_name = 'weatherbrain'

        self.connection = None
        self.engine = None
    
    def connect(self):
        driver = "{ODBC Driver 17 for SQL Server}"

        self.connection = f"""Driver={driver};Server={self.hostname},1433;Database={self.database_name};
        Uid={self.username};Pwd={self.password};Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30;
        """

        params = urllib.parse.quote_plus(self.connection)
        self.engine = sqlalchemy.create_engine(f'mssql+pyodbc:///?autocommit=true&odbc_connect={params}', echo=True)

        self.connection = self.engine.connect()

    
    def disconnect(self):
        if self.connection is not None:
            self.connection.close()


if __name__ == "__main__":
    db = Database()
    db.connect()
