# Wishmaker-calc
Web app to calculate when to save for a shiny Wishmaker

## Usage

1. [Follow the instructions to run the site locally](#running-locally)
2. Upload your save file
   - You will see the time you need to save your game for a shiny Wishmaker
3. Download the `jirachi.lua` file from this repository
4. Edit `jirachi.lua` where it says `EDIT THESE VALUES` with the information the website gave you
5. Load up your save in an emulator (such as vba-rr) as well as the lua script
   - The lua will show you the current time in the game, and when you need to save
6. Save your game when your needed time appears

## Running locally
1. Download and install npm and node from here: https://www.npmjs.com/get-npm
2. Download the source from the repository using one of these two methods
   - Use git to clone the repository here: https://github.com/zaksabeast/wishmaker-calc
   - Download the source from here: https://github.com/zaksabeast/wishmaker-calc/archive/master.zip
3. Open a command prompt/terminal in the source folder
4. Install the node dependencies using `npm i`
5. Start the website using `npm start`
6. If a web browser doesn't automatically open up, go to this url in your web browser: http://localhost:3000/

## Disclaimer
The site won't always work 100% due to 2-4 bytes being able to change while the character is stationary that I don't know how to calculate - if this happens you can either make a new save and try again, or wait 30 minutes in-game time before trying again.

## Contributing
Pull requests are welcome!

If you'd like to help but don't know what to do, there's a few things I'd really like to clean up some day:
- Adding redux and removing class based React components
- Remove the save handler adding the results directly to a `div` tag (and set results in the shared state instead)
- Better organization of the Jirachi and GBA specific functions
- Remove the one or two `for` loops
