<!-- TABLE OF CONTENTS -->

# VillageHub app

<summary><h2 style="display: inline-block">Table of Contents</h2></summary>
<ol>
<li>
    <a href="#about-the-project">About The Project</a>
    <ul>
    <li><a href="#built-with">Built With</a></li>
    </ul>
</li>
<li>
    <a href="#getting-started">Getting Started</a>
    <ul>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#running-the-app">Running the app</a></li>
    </ul>
</li>

</ol>

<!-- ABOUT THE PROJECT -->

## About The Project

“VillageHub” is a platform that connects people from vulnerable groups (at poverty risk) to jobs in the agricultural field and connecting manufacturing processes, with optional housing enrollment. The app also features a shop where clients can purchase products made by the participants in the program

This repo handles both the backend and the frontend sides of the project.

All the api requests from the frontend side accesses the backend side to send or receive data from the database. 
Certain actions (like adding, deleting or updating an activity or housing) are secured and an unauthorized action redirects a guest
to the register page.

This application was developed during the Codecool organized Hackathon in 36 hours.


Application features include:

- A registration and login form<br/><br/>

- A form page for administrators to add activities and housing<br/><br/>

- Activity page where workers can see the available activities and participate in them<br/><br/>

- A housing page where administrators can assign workers to housing<br/><br/>

- A shop page where products made by the participants can be sold<br/><br/>


## Future implementation

- Add the rest of the user roles in the frontend
- Implement the shop section in the frontend
- Better design structure
- Frontend validations and security


### Built With

- Maven
- Spring Boot
- Spring Security
- Java
- Postgresql
- React
- Node.js

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/github_username/repo_name.git
   ```
2. Create your own application.properies file in a new resources directory in the backend folder and write
   ```
   spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.PostgreSQLDialect
   spring.jpa.hibernate.ddl-auto=create-drop
   spring.datasource.url=databaseURL
   spring.datasource.username=yourUsername
   spring.datasource.password=yourPassword
   spring.jpa.show-sql=false
   ```
   
3. Install NPM packages
    ```sh
    npm install
    ```
4. Make sure your device can run all the technologies in the build section

<!-- ACKNOWLEDGEMENTS -->

# React App

## Running the app

In the project frontend directory, you can run:

    npm start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
