# Screenshot Combiner
Made this mainly to combine all my genshin artifacts into a single image.  

## Usage
1. Install [Python](https://www.python.org/downloads/) and [Node.js](https://nodejs.org/en/download/current/).  
2. Run `install.bat` to get the required modules (py: `pyautogui`; js: `canvas`).  
3. Edit `savescreenshot.py` line 1 to have the full path to the current directory with double backslashes plus `\\input\\screenshots`.  
4. If you would like to, you can edit the interval between screenshots in `savescreenshot.py` line 17 (interval in seconds).
5. Run `run.bat` to start capturing screenshots. Press `Ctrl + C` to end screenshot capturing and generate the image.
6. If you are using this for Genshin Impact artifacts, you don't need to mess with the values in the JS (`4-5`, `21-23`).
   If not, mess with them until the output is giving you what you want.

## Example Output
https://cdn.discordapp.com/attachments/481625288883699713/878454701866225704/output.png
<h6>The llama pictures are where I minimised the game by accident + The first one is the initial screenshot.</h6>

## Important Note
I made this as a one-time-use script. Making it public so others can use it if they want to. If there are any issues,
I probably won't fix them. Feel free to make a pull request if you want to improve the scripts.
