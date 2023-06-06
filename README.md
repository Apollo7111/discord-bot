# CS:GO Case Openning Discord Bot

## Description
This is a Discord bot written in JavaScript using the Discord.js library. The bot has various functionalities, including rolling a random number and opening virtual cases with a chance to get different items.

## Prerequisites
Before running the bot, make sure you have the following installed:

Node.js

npm (Node Package Manager)

## Installation
1. Clone this repository: ```git clone https://github.com/Apollo7111/discord-bot.git```
2. Navigate to the project directory: `cd discord-bot`
3. Install the required dependencies: `npm install`
4. Create a .env file in the root directory and add the following variables: `DISCORD_BOT_ID=your_discord_bot_token`
5. Start the bot: `node index.js`

## Usage
To use the bot, invite it to your Discord server and give it the necessary permissions. The bot will respond to the following commands:

* `!roll [number]`: Rolls a random number between 1 and the specified number. If no number is provided, it defaults to rolling a number between 1 and 100 if [number] isn't given.

* `!case`: Opens a virtual case with a chance to get different items. The bot will simulate the opening process and display the item obtained along with its quality and price (if available). (There is currently one case 'gamma case')

Please note that the bot relies on external APIs to fetch item prices, so the prices may not always be available or up to date.

## Configuration
Feel free to explore the code in `index.js` and `items.js` to understand and customize the bot's functionality further.

