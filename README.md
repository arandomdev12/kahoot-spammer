# Kahoot Bot

![Kahoot Bot in Action](https://imgur.com/trjCtRg)

Welcome to the **Kahoot Bot**, a fun script for joining Kahoot games with multiple bots. This tool automates the process of joining a Kahoot game and answering questions randomly. Designed for educational purposes and to demonstrate automation capabilities.

---

## ⚠️ Disclaimer

This bot is created solely for educational purposes. Using bots to disrupt or interfere with live games may violate Kahoot's terms of service and/or local laws. Please use responsibly and only in controlled or personal environments.

---

## 🛠 Features

- Joins a Kahoot game using the specified game PIN.
- Generates random bot names with a customizable prefix.
- Answers quiz questions randomly.
- Handles events such as game start, quiz start, question start, and quiz end.

---

## 🚀 Getting Started

Follow these steps to set up and run the Kahoot bot on your local machine:

### Prerequisites

- **Node.js**: Ensure you have Node.js installed on your computer. [Download Node.js](https://nodejs.org/)

### Installation

1. Clone this repository or download the script file.
   ```bash
   git clone https://github.com/your-username/kahoot-bot.git
   cd kahoot-bot
   ```

2. Install the required package:
   ```bash
   npm install kahoot.js-latest
   ```

3. Open the script file and set your desired game PIN:
   ```javascript
   CODE_TO_JOIN = 3158647; // Replace with your Kahoot game PIN
   PREFIX = "KahootBot"; // Customize bot name prefix if desired
   ```

### Running the Bot

Run the script using Node.js:
```bash
node kahoot-bot.js
```

The bot will join the Kahoot game with 40 clients (customizable in the script) and respond to quiz events.

---

## 📋 How It Works

1. The bot joins the specified Kahoot game PIN using 40 clients (bots).
2. Each bot is assigned a random username using the specified prefix.
3. The bot listens for game events:
   - **Joined**: Logs when a bot joins the game.
   - **QuizStart**: Logs when the quiz starts.
   - **QuestionStart**: Randomly selects and submits an answer for each question.
   - **QuizEnd**: Logs when the quiz ends.
4. The bots delay their joining to mimic human behavior.

---

## 🛠 Customization

- **Number of Bots**: Adjust the number of bots in the `for` loop:
  ```javascript
  for (let i = 0; i < 40; i++) { // Change 40 to the desired number of bots
  ```

- **Join Delay**: Modify the delay between bot joins:
  ```javascript
  await delay(100); // Adjust milliseconds
  ```

- **Answer Selection**: Customize the answer logic in the `QuestionStart` event:
  ```javascript
  question.answer(Math.floor(Math.random() * 4));
  ```

---

## 📜 Use Cases

- **Testing**: Use the bot to stress-test a Kahoot game in a controlled environment.
- **Demonstration**: Showcase automation with Node.js.
- **Learning**: Understand event-driven programming with the `kahoot.js-latest` library.

---

## ❗ Limitations

- Bots answer questions randomly; they are not designed to "win" the game.
- The script is not designed to bypass Kahoot's bot protection mechanisms.

---

## 🧑‍💻 Contributions

Feel free to fork this repository and submit pull requests with improvements or features.

---

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

### Enjoy responsibly! 🎉
