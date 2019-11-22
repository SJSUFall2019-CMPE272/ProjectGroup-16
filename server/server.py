from flask import Flask, request

app = Flask(__name__)

# ----------------------------------------------------------------------------
# Helper Function Definitions.

# TODO: Move this data to a database instead of reading a file.
# This function opens the housing data file and returns an object containing
# all of the data.
def getHousingData():
    retVal = {}
    housingData = []
    # Note: You will need to replace this with the path to the dataset on your machine.
    file = open("/Users/matthewbrown/Documents/CMPE272/ProjectGroup-16/server/datasets/finalDataSet.csv", "r")
    for line in file:
        if line.split(",")[0] != "address":
            house = {}
            houseList = line.split(",")
            if len(houseList) == 11:
                house["address"] = houseList[0]
            else:
                house["address"] = ",".join(houseList[0:len(houseList) - 11])
            house["city"] = houseList[-10]
            house["state"] = houseList[-9]
            house["zipCode"] = int(houseList[-8])
            house["latitude"] = float(houseList[-7])
            house["longitude"] = float(houseList[-6])
            house["numberOfRooms"] = int(houseList[-5])
            house["squareFeet"] = int(houseList[-4])
            house["price"] = int(houseList[-3])
            house["distanceFromPublicTransportation"] = float(houseList[-2])
            house["distanceFromWholeFoods"] = float(houseList[-1])
            housingData.append(house)
    retVal["housingData"] = housingData
    return retVal

# This is to initialize the housing data and put it into a list of objects.
housingData = getHousingData()

# ----------------------------------------------------------------------------
# Endpoint Definitions.

# This endpoint is just here to let people know that it's running.
@app.route("/")
def hello():
    return "Hello World!"

# This endpoint will return all of the housing data.
@app.route("/houses")
def houses():
    return housingData

# This starts the server and listens for requests.
# If you are running this locally you can open your browser to "localhost:5000/"
if __name__ == '__main__':
    app.run(debug=True)