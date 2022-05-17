# IoT-Device Documentation
The Raspberry Pi Model B+ is connected to a BME680 sensor which can read temperature, air pressure, humidity and gasses. In our project we are not in need of the gas-readings. In our prediction model we are only interested in the first three mentioned. The Pi uses a python script to do all te actions needed. The libraries in the script are the BME680 library, time for setting a timeout, datetime for the timestamp and an azure library for uploading the data to the cloud. The device is connected to cloud via an Azure IoT-hub. The data uploaded to the IoT-hub is then fetched as an input to a Stream Analytics Job which takes the input and sends it to the SQL Database so that it can fetched for the web-app and the machine learning. 

## Step by step testing
The first step was to make sure the sensors were working correctly. To do this we first imported the python library for the BME680. The library has a few example programs that prints the data in a terminal. 

When the sensors were connected and working it was time to upload the data to the cloud. This is done through an Azure IoT-hub, Azure has an extension in VSCode where you can monitor the device-to-cloud messages. 
