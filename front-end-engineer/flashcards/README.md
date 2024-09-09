# Flashcard Quiz App

## Table of Contents
* [Project Overview](#project-overview)
* [Project Goals](#project-goals)
* [Built With](#built-with)
* [Setup Instructions](#setup-instructions)
* [Credits](#credits)

## Project Overview

This project is part of Codecademy’s Full-Stack Engineer track. Instead of following a step-by-step tutorial, the project involves open-ended requirements. The goal is to build a flashcard-style quiz app using Redux and Redux Toolkit. Users can create topics, quizzes for those topics, and flashcards for quizzes. They can also interact with the flashcards by flipping them over.

The project challenges you to manage state across multiple slices (topics, quizzes, and cards) and implement the app using React with Redux.

## Project Goals

1. **Create a Flashcard Quiz App with Redux**  
   * Users can create and manage topics.
   * Users can add quizzes to topics and include flashcards in quizzes.
   * Each quiz will allow users to flip flashcards and see the back of the card.

2. **Use Redux for State Management**  
   * Manage app state using Redux with separate slices for topics, quizzes, and flashcards.
   * Topics will have associated quizzes, and quizzes will contain flashcards.

3. **URL Routing with React Router**  
   * Use `react-router` for navigation.
   * Handle the following routes:
     * `/topics/new`: Create a new topic.
     * `/topics`: View all topics.
     * `/topics/:topicId`: View a topic and its associated quizzes.
     * `/quizzes/new`: Create a new quiz.
     * `/quizzes`: View all quizzes.
     * `/quizzes/:quizId`: View a quiz and flip its cards over.

4. **State Structure and Slices**  
   * Manage state with three slices: topics, quizzes, and cards.
   * The state will include objects keyed by IDs for each topic, quiz, and card.
   * Quizzes will be associated with topics by `topicId`, and cards with quizzes by `cardIds`.

5. **My Project**  
   * My [project](https://github.com/rkadlick/Codecademy-Projects/tree/main/full-stack-engineer/flashcards) implements this quiz app, allowing users to create topics, quizzes, and cards, and flip cards to see the back side.

## Built With
* React
* Redux Toolkit
* JavaScript (ES6+)
* CSS (for styling)

## Setup Instructions

1. **Clone or Download the Repository**
   * You can clone the repository using Git or download it as a ZIP file.
   * To clone the repository, run:
     ```bash
     git clone https://github.com/rkadlick/Codecademy-Projects.git
     ```
   * To download as a ZIP file, click the “Code” button on the GitHub page and select “Download ZIP.”

2. **Navigate to the Project Directory**
   * Open the project folder on your computer, under `Codecademy-Projects/full-stack-engineer/flashcard-quiz-app`.

3. **Install Dependencies**
   * Run the following command to install the required dependencies:
     ```bash
     npm install
     ```

4. **Run the Application**
   * Start the development server using:
     ```bash
     npm start
     ```
   * Open your browser and go to `http://localhost:3000` to view the app.

5. **Explore and Test**
   * Use the app to create topics, quizzes, and flashcards.
   * Test flipping cards and ensure all state management is functioning correctly.

## Credits
This project was part of the Full-Stack Engineer path at [Codecademy](https://www.codecademy.com).
