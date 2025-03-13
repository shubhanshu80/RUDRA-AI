'''import os
import eel
from backend.feature import *
eel.init("frontend")
os.system('start chrome.exe --app="http://127.0.0.1:8000/frontend/index.html"')


playAssistantSound()

eel.start("index.html",mode=None, host="localhost",block=True)'''


import os
import eel

from backend.command import *
from backend.feature import * 
from backend.auth import recoganize
#from backend import recoganize # Ensure the function is properly imported
eel.init("frontend")

@eel.expose
def init():
    subprocess.call([r'device.bat'])
    eel.hideLoader()
    speak("Ready for Face Authentication")
    flag = recoganize.AuthenticateFace()
    if flag == 1:
        eel.hideFaceAuth()
        speak("Face Authentication Successful")
        eel.hideFaceAuthSuccess()
        speak("Hello, Welcome Sir, How can i Help You")
        eel.hideStart()
        playAssistantSound()
    else:
        speak("Face Authentication Fail")      
    

 # Ensure 'frontend' is the correct directory

# Open Chrome with the correct syntax
os.system('start chrome.exe --app="http://localhost:8000/index.html"')

# Call the function after defining or importing it
playAssistantSound()
eel.start("index.html",mode=None, host="localhost",block=True)
# Start Eel with a different port if needed
#eel.start("index.html", mode=None, host="localhost", port=8001, block=True)
