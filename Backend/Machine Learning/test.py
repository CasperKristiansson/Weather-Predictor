import datetime

now = datetime.datetime.now()

print(now)

# Convert 2022-05-12 17:06:06.870732 to 1996-10-01T03:00:00.0000000

new_date = datetime.datetime.strptime(str(now), '%Y-%m-%d %H:%M:%S.%f')

print(new_date)