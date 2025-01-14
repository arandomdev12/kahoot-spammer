const Kahoot = require("kahoot.js-latest");



CODE_TO_JOIN = 3158647;
PREFIX = "KahootBot";




console.log("Starting to join Kahoot...");

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const clients = [];

  for (let i = 0; i < 40; i++) {
    const client = new Kahoot();
    clients.push(client);

    // Set up listeners for each client
    setupListeners(client);

    const username = PREFIX + (Math.floor(1000 + Math.random() * 9000));
    client.join(CODE_TO_JOIN, username); // Replace 4122539 with your Kahoot game PIN
    await delay(100); // Stagger the joining process
  }
}

function setupListeners(client) {
  client.on("Joined", () => {
    console.log(`Client ${client.name} joined the Kahoot!`);
  });

  client.on("QuizStart", () => {
    console.log("The quiz has started!");
  });

  client.on("QuestionStart", question => {
    console.log("A new question has started, answering the first answer.");
    question.answer(Math.floor(Math.random() * 4));
  });

  client.on("QuizEnd", () => {
    console.log("The quiz has ended.");
  });
}

main();
