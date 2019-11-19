import googlemaps
import json
import sys
import os
import numpy
import pandas as pd
from datetime import datetime
os.getcwd()
os.chdir('D:/D drive/CMPE 272/project')
df = pd.read_csv('public transport address.csv',header = None,error_bad_lines=False)
df.columns = ['street address']
df['lat'] = 0
df['lng'] = 0
gmaps = googlemaps.Client(key='AIzaSyBNcYlVyf13gf1Jl9DEY0Ty-l7JkCRAEsM')
for i in range(0, df.shape[0]):
    geocode_result = gmaps.geocode(df.iloc[i, 0])
    df.iloc[i, 1] = geocode_result[0]['geometry']['location']['lat']
    df.iloc[i, 2] = geocode_result[0]['geometry']['location']['lng']

print(df)
df.to_csv('public transport address process.csv', header = False, index = False)
# Geocoding an address
#geocode_result = gmaps.geocode('1600 Amphitheatre Parkway, Mountain View, CA')
#geocode_result = gmaps.geocode('777 the alameda san jose CA 95126')
#print(geocode_result)
#print(geocode_result[0]['geometry']['location']['lat'])
#print(geocode_result[0]['geometry']['location']['lng'])

# Look up an address with reverse geocoding
#reverse_geocode_result = gmaps.reverse_geocode((40.714224, -73.961452))
#print(reverse_geocode_result)
# Request directions via public transit
#now = datetime.now()
#directions_result = gmaps.directions("Sydney Town Hall","Parramatta, NSW",mode="transit",departure_time=now)

