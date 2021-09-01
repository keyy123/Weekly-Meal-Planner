[![Header](https://user-images.githubusercontent.com/30008919/130834373-af7ed6ae-b97b-464e-91df-c1d23738bcb1.JPG)<br />
https://www.linkedin.com/in/kheyyon-parker/


# Weekly-Meal-Planner

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

The _**Weekly Meal Planner** is a simple application that will allow users to store recipes into a weekly meal plan that will hold the total calories and macronutrients (i.e., Protein) of the user's own collection of recipes which must be added manually. I would advise the user to have an account or access to sites with recipes such as 'FitMenCook' to utilize the app effectively. It is a react on rails project which utilizes postgresQL as the database client. It is an complementary project to the Maintenance calculator._

<br>

## MVP

> The Minimum Viable Product should be a well-planned, easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

The _**Weekly Meal Planner**  MVP requirements are the following: 

### Backend(Server)
- Build a **Ruby on Rails** API with RESTful JSON endpoints
- Build a database with minimum of 3 tables and 1 association between tables
- Use **only** Rails to build models
- Build Full CRUD for minimum of one controller of the non-user tables _(```index```, ```show```, ```create```, ```update```, ```destroy```)_

### Frontend(client)
- Build a react app via ```npx-create-react-app```
-Build 8 separate components in an organized file structure
-Use _only_ React for DOM manipulation
-Access data from your **Rails API** and render data in react components
-Use **React-Router** for client-side routing
-Build full CRUD actions for minimum 1 non-auth based service _(```index```, ```show```, ```create```, ```update```, ```destroy```)_

### Styling
- Style using CSS, SASS, SCSS, Styled Components, or Material_UI
- Use Flexbox or Grid
- Use 2 media queries to design for 3 different screen sizes (1 must be desktop)

### Deployment
- Deploy the fully functional front-end via Surge or Netlify.
- Deploy the back-end via Heroku.
- Deploy early and often(this will help to debug small issues before they become large issues)

### Linting
- Indent properly.
- Utilize high-quality, semantic variable names.
- Follow ```camelCase```, ```snake_case```, and ```kebab-case``` convention.
- Remove unnecessary boilerplate React files and code.
- Remove all ```console.log()``` s and commented out code (functional notes and comments are okay).


### Procedural
- Initialize a **git repo on Github**, with a link to your hosted project.
- Have **frequent commits**, making a robust commit history at least every day. (**75 commits minimum**)
- Use effective and **safe branching and merging** processes.

<br>

### Goals

- _Enable user auth,_
- _Enable full CRUD on weekly meal plans_
- _Enable full CRUD on recipes_

<br>

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React       | _The only way to react is react_ |
|   React Router   | _Client-side routing_ |
|    Material-UI   |_Library of re-usable and customizable components_ |
|    React-Lotte   | _Animation Library from AirBnB ported for react_
<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

![Wireframe Paths](https://user-images.githubusercontent.com/30008919/130834011-82b60294-99c2-4afc-ad6b-9a8eec5c7fad.JPG)


- Desktop Landing

![Landing Page - Desktop](https://user-images.githubusercontent.com/30008919/130842522-cfd84090-f2fd-4272-a777-1edf829ef181.JPG)


-Tablet Landing
![Landing Page - Tablet](https://user-images.githubusercontent.com/30008919/130842629-3aa47a3c-155b-4b8f-9d00-0bbab372057d.JPG)

-Mobile Landing
![Mobile - Landing Page](https://user-images.githubusercontent.com/30008919/130842925-a8c08d86-b0e5-485d-b3cc-241cbd3a8ce5.JPG)

- Resource Index

- Tablet Resource Index

- ![Tablet - index   show](https://user-images.githubusercontent.com/30008919/130847825-b67621b8-c889-4ab3-89bf-6ec5ef0cdfa1.JPG)


- Mobile Resource Index + Show 

![Index + Show - Mobile](https://user-images.githubusercontent.com/30008919/130847624-79cfd09b-152e-411a-8527-89e64c987351.JPG)


#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. Include a link to your component tree

[Component Tree Sample](https://gist.git.generalassemb.ly/davidtwhitlatch/414107e2560ae0bb65e233570f2fe056#file-component-tree-png)

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ animations/
      |__ cooking.json
      |__ fatigue.josn
      |__ path.json
|__ assets/
      |__logov3.png
      |__logo.png
      |__Logo.gif
      |__kitty.gif
      |__FooterImage.png.png
|__ components/
      |__ Footer
          |__Footer.jsx
       |__ui
           |__ Theme.js
       |_containers
            |__ MainContainer.jsx
       |__layout
            |__Layout.css
            |__Layout.jsx
        
  
      
|__ services/

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Forms    |    H     |     10+ hrs      |     10+ hrs     |    10+ hrs    |
| Create CRUD Actions x 2 |    H     |     20+ hrs      |     20+ hrs     |     20+hrs     |
| Screens             |   H     |   10+hrs        | 10+hrs      | 10+hrs |
| Services            |     H    |    10+hrs      |   10+hrs     |  10+hrs  |
| TOTAL               |          |      50+hrs      |     50+hrs     |     50+hrs     |



<br>

### Server (Back End)

#### ERD Model

![ERD Table](https://user-images.githubusercontent.com/30008919/130863041-e63e7af8-f023-491e-8904-7e7bfaa080bd.JPG)

***

## Post-MVP
- Voice Enabled Input
- Grocery List (API from local grocers)
- Google Maps integration
- Calorie Tracking and handling on menu
- Chart.js library for macros as well 
- Add a feedback section to get feedback from beta-testers
***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

### Thank you w3Schools - you're amazing
functionality: _This function works like a history.push to go back 1 specific page

  ```
const goBack = () => {
    window.history.back();
  }
  
  ...

    <button onClick={() => goBack()}>Back</button>
```  



## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.

React Lottie - read lottie animation and google

Hero Page - udemy

@material-ui - YT,udemy, google, @material-ui

deployment - google, heroku, and feedback 
