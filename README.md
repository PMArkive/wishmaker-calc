# Wishmaker-calc
Web app to calculate when to save for a shiny Wishmaker

## Disclaimer
The site won't always work 100% due to 2-4 bytes being able to change while the character is stationary that I don't know how to calculate - if this happens you can either make a new save and try again, or wait 30 minutes in-game time before trying again.

If you do need help, you may be able to find it on the [Pokemon RNG Discord](https://www.discord.gg/d8JuAvg) - While I personally am not always available to help, there are others who might be willing to lend a hand.

## Usage
1. [Click here to go to the site](https://zaksabeast.github.io/wishmaker-calc/build)
2. Upload your save file
   - If the site tells you to save again, save again and repeat step 2.
   - Otherwise, you will see the time you need to save your game for a shiny Wishmaker
3. Download the [jirachi.lua](https://raw.githubusercontent.com/zaksabeast/wishmaker-calc/master/jirachi.lua) file from this repository
4. Edit `jirachi.lua` where it says `EDIT THESE VALUES` with the information the website gave you
5. Calculate your save delay [using the guide below](#calculating-your-save-delay)
6. Load up your save and lua script in an emulator (vba-rr)
7. Save your game when website's given time appears
8. After saving the game, Validate your seed [using the guide below](#validating-your-seed)

## Calculating your save delay
1. Load the emulator with your game, save, and `jirachi.lua`
2. Open the menu to save your game (but don't save)
3. Pause the game when it prompts if you are sure you want to save the game
4. Make note of the current time the lua script shows
5. Unpause while saving the game (by holding down `A`, then pressing `ctrl + p`)
   - There will be a second or two the lua script will appear to pause
   - Make note of the time at this pause, since this is where the game will be saved at
6. Subtract the time the game saved at from the time you started saving
   - This is your save delay

## Validating your seed
1. Upload the save to the Wishmaker-calc website
2. The site will tell you the current Jirachi seed of the save
3. Verify it's the seed you wanted

## Running locally
1. Download and install npm and node from here: https://www.npmjs.com/get-npm
2. Download the source from the repository using one of these two methods
   - Use git to clone the repository here: https://github.com/zaksabeast/wishmaker-calc
   - Download the source from here: https://github.com/zaksabeast/wishmaker-calc/archive/master.zip
3. Open a command prompt/terminal in the source folder
4. Install the node dependencies using `npm i`
5. Start the website using `npm start`
6. If a web browser doesn't automatically open up, go to this url in your web browser: http://localhost:3000/

## Contributing
Pull requests are welcome!

If you'd like to help but don't know what to do, there's a few things I'd really like to clean up some day:
- Adding redux and removing class based React components
- Remove the save handler adding the results directly to a `div` tag (and set results in the shared state instead)
- Better organization of the Jirachi and GBA specific functions
- Remove the one or two `for` loops
