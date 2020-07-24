
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and modified to achieve scss support, build compression and optimization.


## Table of Contents

- [Run/Build the application ](#run/build-the-application)
- [React Coding standards ](#react-coding-standards)
- [Project Structure](#project-structure)


## Run/Build the application

- Create a .env file in project root directory and copy the contents of .env-ref to .env file.
- Open terminal window and install npm dependencies by running 
`npm install`
- Start the application in dev mode by running `npm start` the application will start in a new browser window at `localhost:3000`
- To build the project run `npm run build`. The build files will generate inside `\build` directory at project root.


## React Coding standards 


Following are the coding standards that one must follow while working on this boilerplate.

Following are the coding standards that one must follow while working on this boilerplate.

- Mandatory to follow AirBnB [AirBnB coding standards](https://github.com/airbnb/javascript/blob/master/README.md)

- Mandatory to use [Prettier](https://prettier.io/) VSCode Extension for code formatting.

- JS Linting before every commit `npm run lint`. AirBnB lint configurations are already loaded.

- Precise commits before every commit. `npm run precise-commits`.

- Husky pre-commit hook is configured to validate linting and precise-commits.

- Do not modify linter rules without consulting.

- Follow 2 space indentation rule. Install `ext install EditorConfig.EditorConfig` VS Code plugin. The `.editorconfig` in project root dir will overwite default indentation settings of VS code to meet project standards.

- HOC patterns at places where necessary e.g. Login and authentication 

- ES6 use destructor pattern wherever possible and use ES6 as a standard everywhere possible 

- All external url’s and configurations should be env based.

- All api responses should be wrapped and referenced in the frontend

- Use propTypes and defaultProps for specifying props meta in all components. This will reduce `undefined` errors. 

- Use React 16 concepts, Context API, Hooks etc wherever possible

- Have discussion before putting stuff to redux store keep a store document do not overuse REDUX.

- Do not mix and match local state and redux state keep a single source fo truth.

- Use containerized and clean architecture. Look at the example container in this boilerplate.

- Consult before installing any new npm packages.

- Use only camelCase variable names do not mix with underscore names, For constants name use uppercase and underscore. 

- Avoid using and 3rd party css library and based on timelines avoid even using any component library. React Material Ui is fine based on the use case. 

- Scss -> Use a global scss file to define all common and global css and import and override at the component level.

- Only theming properties should be written in resources.scss file. (scss mixins, variables etc)

- Strictly follow BEM css/scss standards for all styles.

- File naming conventions
  - Containers should be named as `.container.jsx`
  - Components should be named as `.component.jsx`
  - Services should be named as `.service.js`

## Project Structure
The enitre applcation code and logic should be inside `/src` dir

- Directory structure of `/src`
> /assets

> /components

> /environments

> /hoc

> /app

> /services

> /store

> /utils

- All the images, icons, fonts and external assets should be kept inside `/assets` directory.
- Application level shared component should be written inside `/components` directory.
- Different enviornment configurations `['dev', 'qa', 'prod']` should be kept inside `/environments` directory in their respective files and env should be loaded from `.env` file. See the example in the boilerplate.
- `/hoc` directory is for keeping application level layouts
- `/app` directory is where your entire application logic will be written. All the containers,components,routes will be added inside this directory. See the example in the boilerplate.
- All the API calls in your app should be added `/services` directory. ***Component should never directly make an API call instead it should load the respective service and handle HTTP requests***. 
- Redux reducers import and store configurations should be added in `/store` directory.


## Webpack Configurations Overwrite

- One can overwrite webpack configurations in `webpack.config.js` file located at project root. **Use it at your own risk**

