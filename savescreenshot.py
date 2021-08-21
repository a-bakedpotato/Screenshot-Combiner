path = 'C:\\Users\\your username\\Desktop\\read screen\\input\\screenshots'; #full path to screenshots folder

import os, os.path;
import pyautogui;
import time;

while True:
    t = time.time();
    
    dir = [name for name in os.listdir('./input/screenshots') if os.path.isfile(os.path.join('./input/screenshots', name))];

    screenshot = pyautogui.screenshot();
    screenshot.save(path + '\\' + str(len(dir)) + '.png');
    print('Took screenshot #' + str(len(dir)));
    
    t = time.time() - t;
    time.sleep(2 - t);