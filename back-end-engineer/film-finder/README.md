# Film Finder

## Table of Contents
* [Project Overview](#project-overview)
* [Project Goals](#project-goals)
* [Built With](#built-with)
* [Setup Instructions](#setup-instructions)
* [Credits](#credits)

## Project Overview

You’ve caught up on your list of TV shows and movies and want to get recommendations for what to watch next, but aren’t sure where to look. In this project, you’ll use your knowledge of HTTP requests and asynchronous JavaScript to create a movie discovery app that recommends random movies by genre. You’ll be able to choose from several genres, and like or dislike a movie to get another suggestion.

## Project Goals

1. **Project Context**
   * This project involves using The Movie Database (TMDb) API to fetch and display random movies based on selected genres. You’ll make asynchronous HTTP requests to fetch movie data and allow users to like or dislike a recommendation to get another suggestion.

2. **Project Objectives**
   * Use the TMDb API to fetch movie data based on genres
   * Implement HTTP requests using JavaScript's Fetch API
   * Allow users to interact with movie recommendations (like/dislike)
   * Develop locally on your computer or using Codecademy’s platform

3. **My Project**
   * My [project](https://github.com/rkadlick/Codecademy-Projects/tree/main/back-end-engineer/film-finder) features a movie discovery app that provides random movie suggestions from various genres. Users can like or dislike a recommendation and get a new movie suggestion in the same genre.

4. **Output Example**
   * A simple movie discovery interface that fetches random movie recommendations by genre. Users can either accept the recommendation or request a new one by clicking "like" or "dislike."

## Built With
* HTML
* CSS
* JavaScript
* Fetch API

## Setup Instructions

1. **Clone or Download the Repository**
   * You can clone the repository using Git or download it as a ZIP file.
   * To clone the repository, run:
     ```bash
     git clone https://github.com/rkadlick/Codecademy-Projects.git
     ```
   * To download as a ZIP file, click the “Code” button on the GitHub page and select “Download ZIP.”

2. **Navigate to the Project Directory**
   * Open the project folder on your computer, under Codecademy-Projects/back-end-engineer/film-finder

3. **Get an API Key**
   * Before running the project, you need to obtain an API key from [The Movie Database](https://www.themoviedb.org/documentation/api). Follow these steps:
     1. Create an account on TMDb.
     2. Navigate to your account’s settings page.
     3. Go to the API section and request an API key.
     4. Use "https://codecademy.com" as the URL when asked for a project URL.
   
4. **Add the API Key**
   * In the `script.js` file, there's a missing variable `tmdbKey` which is required to make the API work. You must replace the placeholder in the code with your own TMDb API key:
     ```javascript
     const tmdbKey = 'your_api_key_here';
     ```

5. **Open the HTML File**
   * Open `index.html` in your preferred web browser (e.g., Chrome, Firefox, Safari).
   * You can do this by double-clicking the `index.html` file or dragging it into your browser window.

6. **View the Project**
   * The project will display as a static webpage that allows you to interact with movie recommendations based on selected genres.

## Credits
This was a practice project from the Back-End Engineer path at [Codecademy](https://www.codecademy.com).
