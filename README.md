# Trivia CLI Game

A simple command-line quiz game built using Node.js.  
It asks multiple-choice questions, checks answers, and shows your final score.

---

## How to Run

Install dependencies:

npm install

Run the application:

node bin/index.js

Or:

trivia-quiz-cli

---

## How It Works

- Start the game in the terminal
- You get multiple-choice questions
- Select one answer per question
- Instant feedback is shown 
- Final score is displayed at the end

---

## Technologies Used

- Node.js
- Inquirer (@inquirer/prompts)
- Chalk (for terminal styling)
- Commander (for CLI setup)

---

## Project Structure

bin/
  index.js

src/
  lib/
    menu.js
    questions.js

---

## Notes

This project was built for learning how CLI applications work in Node.js. It focuses on user input, loops, async functions, and basic program flow in a terminal environment.