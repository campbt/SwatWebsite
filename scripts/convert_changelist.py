# Converts the changelist.txt file in this scripts folder into the html for the changelist webpage
import re
filename = "changelist.txt"

NUM_OF_CHANGES_FOR_SPLIT = 10
INCLUDE_BETAS = False

betaPattern = re.compile("\d+\.\d+\.\d+\.\d+")
versionString = None
changes = []

def printContents():
    if versionString != None:
        isBeta = betaPattern.match(versionString.strip())

        if INCLUDE_BETAS or not isBeta:
            print("VerHead('" + versionString + "');")
            numOfChanges = len(changes)
            if numOfChanges < NUM_OF_CHANGES_FOR_SPLIT:
                for change in changes:
                    print("VerData('" + change + "');")
            else:
                halfWay = numOfChanges / 2
                for i in range(0,halfWay):
                    print("VerData('" + changes[i] + "');")
                print("VerCol2()");
                for i in range(halfWay, numOfChanges):
                    print("VerData('" + changes[i] + "');")
            print("VerFoot();")
            print("")

for line in open(filename, "r"):
    line = line.strip()
    if "--------" in line:
        printContents()
        changes = []
        versionString = None
    elif "Bugfixes" in line or "bugfixes" in line:
        # Ignore bugfix line
        pass
    elif len(line) < 1:
        #Ignore empty lines
        pass
    else:
        # Assume this is a change line
        if versionString == None:
            line = line.replace(":","")
            versionString = line
        else:
            line = line.replace("+ ","", 1)
            line = line.replace("'","\\'")
            changes.append(line)

printContents()
