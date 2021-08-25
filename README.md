[![Header](https://user-images.githubusercontent.com/30008919/130834373-af7ed6ae-b97b-464e-91df-c1d23738bcb1.JPG)https://www.linkedin.com/in/kheyyon-parker/]


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

The _**Weekly Meal Planner** is a simple application that will allow user to store recipes into a weekly meal plan that will hold the total calories and macronutrients (i.e., Protein) of the user's own collection of recipes which must be added manually. I would advise the user to have an account or access to sites with recipes such as 'FitMenCook' to utilize the app effectively. It is a react on rails project which utilizes postgresQL as the database client. It is an complementary project to the Maintenance calculator._

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

<br>

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD

![Wireframe Paths](https://user-images.githubusercontent.com/30008919/130834011-82b60294-99c2-4afc-ad6b-9a8eec5c7fad.JPG)


- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index
 
![Dummy Link](url)

- Mobile Resource Index

#### Component Tree

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. Include a link to your component tree

[Component Tree Sample](https://gist.git.generalassemb.ly/davidtwhitlatch/414107e2560ae0bb65e233570f2fe056#file-component-tree-png)

#### Component Architecture

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
|__ services/

```

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

> Use this section to display an image of a computer generated ERD model. You can use draw.io, Lucidchart or another ERD tool.

[ERD Sample](https://drive.google.com/file/d/1kLyQTZqfcA4jjKWQexfEkG2UspyclK8Q/view)
<br>

***

## Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
