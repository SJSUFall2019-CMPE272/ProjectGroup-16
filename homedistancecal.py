import sys
import os
import pandas as pd
import numpy as np
import math
import heapq
os.getcwd()
os.chdir('D:/D drive/CMPE 272/project')
df = pd.read_csv('housingData.csv',header = None,error_bad_lines=False)
df2 = pd.read_csv('public transport address process.csv',header = None,error_bad_lines=False)
df['shortest distance'] = 0
h = []
for i in range(1, df.shape[0]):
    for j in range(1, df2.shape[0]):
        lats = float(df.iloc[i, 4])
        late = float(df2.iloc[j, 1])
        lngs = float(df.iloc[i,5])
        lnge = float(df2.iloc[j,2])
        distance = math.acos(math.sin(math.pi*lats/180.0)*math.sin(math.pi*late/180.0)+math.cos(math.pi*lats/180.0)*math.cos(math.pi*late/180.0)*math.cos(math.pi*lngs/180.0-math.pi*lnge/180.0))*3963
        heapq.heappush(h, distance)
    df.iloc[i,9] = heapq.heappop(h)
df.iloc[0,9] = 'shortest distance to public trans'
df.to_csv('housing data with distance to transportation.csv', header = False, index = False)
