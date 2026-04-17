import { select } from "@inquirer/prompts";
import chalk from "chalk";
import { questions } from "./questions.js";

export async function startCLI() {
  const action = await select({
    message: chalk.magentaBright("Welcome to 🎮 Trivia Quiz CLI"),
    choices: [
      { name: "Start Quiz", value: "start" },
      { name: "Exit", value: "exit" },
    ],
  });

  let score = 0;
  const startTime = Date.now();

  switch (action) {
    case "start":
      for (const question of questions) {
        const answer = await select({
          message: question.question,
          choices: question.choices,
        });

        if (answer === question.answer) {
          console.log(chalk.green("Nice one😅 You got that it🎊\n"));
          score++;
        } else {
          console.log(chalk.red("Oopsie, not quite!😒 Keep going though💪 "));
          console.log(
            chalk.greenBright(`The right answer is ${question.answer}\n`),
          );
        }
      }

      const endTime = Date.now();

      console.log(chalk.yellow(" Well, that's it.See your score and Feel free to play again🤗"));
      console.log(`Score: ${score}/${questions.length}`);
      console.log(`Time: ${(endTime - startTime) / 1000} seconds`);
      break;

    case "exit":
      console.log(chalk.magenta("Thank you for engaging. Goodbye 👋."));

      process.exit(0);
  }

  // loop again
  startCLI();
}
