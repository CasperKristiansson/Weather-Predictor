import bme680
import time
from datetime import datetime
from azure.iot.device import IoTHubDeviceClient, Message

CONNECTION_STRING = "HostName=weatherbrain.azure-devices.net;DeviceId=hallonpi;SharedAccessKey=GJKS+h3SpsalLEzZy8acSQTC6Q4GzKdbji34NFg1VCY="

# Initialise sensor via I2C bus
try:
    sensor = bme680.BME680(bme680.I2C_ADDR_PRIMARY)
except (RuntimeError, IOError):
    sensor = bme680.BME680(bme680.I2C_ADDR_SECONDARY)

# These oversampling settings can be tweaked to
# change the balance between accuracy and noise in
# the data.

sensor.set_humidity_oversample(bme680.OS_2X)
sensor.set_pressure_oversample(bme680.OS_4X)
sensor.set_temperature_oversample(bme680.OS_8X)
sensor.set_filter(bme680.FILTER_SIZE_3)



client = IoTHubDeviceClient.create_from_connection_string(CONNECTION_STRING)


print('Polling:')
i = 0
while True:
    # check if the sensor is reading
    if sensor.get_sensor_data():
        output = '{0:.2f} C,{1:.2f} hPa,{2:.3f} %RH'.format(
            sensor.data.temperature,
            sensor.data.pressure,
            sensor.data.humidity)
        #print(output)

        dateNow = datetime.now()
        temp = sensor.data.temperature - 1.5
        #Make the sensor readings readable for the stream analytics job, which is in csv format
        data = str('date,temperature,air_pressure,humidity\n{0},{1},{2},{3:.0f}'.format(
                dateNow,temp, sensor.data.pressure,sensor.data.humidity
            )
        )
        print(data)
        i=i+1
        #Event data is sent to the iot hub once every hour
        if i==3600:
            client.send_message(data)
            i=0
            print('sent to azure')
        #Sleep for one second
        time.sleep(1)

