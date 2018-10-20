from pymongo import MongoClient
from pprint import pprint


MDB_URL = "127.0.0.1:27017"
client = MongoClient(MDB_URL)

db=client.admin
serverStatusResult = db.command("serverStatus")
#pprint(serverStatusResult)

with open("src/data.txt", "r") as infile:
    lines = infile.readlines()
infile.close()

collection = db.prattles
for l in lines:
    if l.rstrip("\n") != "":
        ls = l.split()
        if len(ls) == 4:
            collection.insert_one({"type":"QA", "content":{"0":ls[1], "1":ls[2], "2":ls[3]}})
        elif len(ls) == 2:
            collection.insert_one({"type":"S", "content":{"0":ls[1]}})

        if len(ls) == 3:
            print(ls)
