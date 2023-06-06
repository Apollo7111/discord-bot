Discord Bot
This is a Discord bot written in JavaScript using the Discord.js library. The bot has various functionalities, including rolling a random number and opening virtual cases with a chance to get different items.

Prerequisites
Before running the bot, make sure you have the following installed:

Node.js
npm (Node Package Manager)
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/your-username/discord-bot.git
Navigate to the project directory:
bash
Copy code
cd discord-bot
Install the required dependencies:
Copy code
npm install
Create a .env file in the root directory and add the following variables:
makefile
Copy code
DISCORD_BOT_ID=your_discord_bot_token
Start the bot:
Copy code
node index.js
Usage
To use the bot, invite it to your Discord server and give it the necessary permissions. The bot will respond to the following commands:

!roll [number]: Rolls a random number between 1 and the specified number. If no number is provided, it defaults to rolling a number between 1 and 100.

!case: Opens a virtual case with a chance to get different items. The bot will simulate the opening process and display the item obtained along with its quality and price (if available).

Please note that the bot relies on external APIs to fetch item prices, so the prices may not always be available or up to date.

Contributing
Contributions are welcome! If you have any ideas or suggestions, feel free to open an issue or submit a pull request.

License
This project is licensed under the MIT License.
