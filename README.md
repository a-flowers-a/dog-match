# Fetch's Dog match challenge

Web frontend app challenge that shows list of dogs that can be adopted. The user login with any credentials, navigates through the dog's list presented to select favorite dogs, when the user's selected at leas one favorite dog, he can create a match, which is generated by Fetch's services (`https://frontend-take-home-service.fetch.com`) and the match is presented.

[See the app up and running](https://elegant-baklava-943222.netlify.app/signIn).

<br>
Due to the time, there are two main improvements to be made to the functionality:

1. Loader
2. Associate the fav dogs to the Dog object, so it persist when navigating in pages or filtering breed.
3. Persist user's session.
   <br>

This frontend app project uses React library and was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
<br>

The main structure of the frontend project is:

1. Components: there are all the base components used in pages.
2. Pages: containers where components are integrated and logic for fetching data is performed.
3. Context: there are all the global state related files using React context API, the implementation of each global state is based on **Provider** Design Pattern.
4. Services: in this folder are the files used to perform http requests. Axios library is mainly used for this and **Singleton** design pattern is used to handle this tasks efficiently.
5. Types and Constants: those folders are used to store globally used types and constants.
6. GlobalStyles: this folder stores styles that are shared among the components. **Note:** SCSS is used to ease this goal.

<br>

## Run app with docker

Run web application with Docker containers in developer mode

Preconditions:

1. Have Docker and docker-compose installed.
2. Have Docker's deamon running.
3. Port 3000 should be available

At the terminal in the root folder run the command `docker-compose up -d --build`. This will always build the project's image and run a container for it. Then open your browser on `localhost:3000` and the app should be shown.

To stop the container just run `docker-compose down`, this will also delete the container when it has stopped.
