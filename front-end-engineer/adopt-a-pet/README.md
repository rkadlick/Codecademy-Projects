# Adopt a Pet!

## Table of Contents
* [Project Overview](#project-overview)
* [Project Goals](#project-goals)
* [Built With](#built-with)
* [Setup Instructions](#setup-instructions)
* [Credits](#credits)

## Project Overview

This project is part of the Front-End Development track and will give you the opportunity to practice using React Router to add client-side routing to a React Application. Specifically, you will be building a pet adoption website that allows users to view all animals of a particular species and view the profiles of specific animals.

The project comes with a starting code that renders a `HomePage` component, which fetches and displays all adoptable pets. You will need to implement routing to ensure users can view individual pet profiles and navigate between different sections of the website.

## Project Goals

1. **Add Client-Side Routing with React Router**
   * Implement React Router to handle navigation between pages, such as the homepage and individual pet detail pages.
   * Use URL parameters to display specific pet profiles based on the pet’s ID.

2. **Filter Pets by Species**
   * Modify the `HomePage` component to display pets of a specific species based on the URL, allowing users to view pets by category.

3. **Display Pet Details**
   * Implement the `PetDetailsPage` component to display a pet’s detailed information when the user navigates to a specific pet’s ID in the URL.

4. **Handle Not Found Pages**
   * Redirect users to a `PetNotFoundPage` when a specific pet’s details are unavailable or the pet does not exist in the database.

5. **Add Search Functionality**
   * Implement a search bar that allows users to search for pets by name and be redirected to a `SearchPage`, where results are filtered based on the query parameter.

6. **My Project**
   * My [project](https://github.com/rkadlick/Codecademy-Projects/tree/main/front-end-development/adopt-a-pet) implements these features to create a fully functional pet adoption platform with seamless navigation and filtering options.

## Built With
* React
* React Router
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
   * Open the project folder on your computer under `Codecademy-Projects/front-end-development/adopt-a-pet`.

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
   * Use the app to search for pets, view pet details, and navigate through different species.
   * Modify and test the routes to ensure navigation is functional and error pages are displayed correctly.

## Credits
This project was part of the Front-End Development path at [Codecademy](https://www.codecademy.com).
