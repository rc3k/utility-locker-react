# Utility Locker Products React 
A frontend application for retrieving products from an API, built with React and Redux.

## Github Workflows
Workflows are in place for linting and running tests each time the master branch is pushed to.  

## Deployment
Continuous Deployment to AWS Amplify is in place for this repository. Each time a push is made to the master branch, the above workflows are executed and, if successful, a deployment is made. 

## Handling state
This application makes use of the utility functions provided by [Redux Toolkit](https://redux-toolkit.js.org/introduction/quick-start) to reduce boilerplate code and to handle state updates without making mutations. 

## Local installation
Grab a copy of the project:
```
git clone https://github.com/rc3k/utility-locker-react.git
```

Install packages:
```
npm install
```

Run server and tests:
```
npm start
npm test
```

See [React Create App](https://create-react-app.dev/docs/available-scripts) for more details on the available scripts.
