# Security Codes - React State Management Demo

A React application demonstrating different state management patterns for a security code verification system. This project showcases modern React hooks and class-based component approaches.

## 📋 Project Description

Security Codes is an educational project that implements a secure deletion confirmation flow with different state management approaches. Users must enter a correct security code to proceed with a deletion operation. The application compares the input against a predefined security code and provides real-time feedback.

**Security Code:** `paradigma`

## 🎯 Project Purpose

This project serves as a learning resource to understand and compare:
- React `useState` Hook for functional component state management
- React `useReducer` Hook for complex state logic
- Class-based components with lifecycle methods
- State patterns for handling UI flows and validation

## ✨ Features

- **Multiple State Management Approaches**: Compare useState, useReducer, and class-based implementations
- **Security Code Validation**: Real-time input validation with 2-second processing delay
- **Loading State**: Loading indicator during code validation
- **Error Handling**: Clear error messages for invalid codes
- **Confirmation Flow**: Multi-step confirmation process before deletion
- **Reset Functionality**: Ability to reset and restart the verification process

## 📁 Project Structure

```
src/
├── App.js                          # Main application component
├── App.css                         # Application styles
├── components/
│   ├── UseState/
│   │   └── index.js               # State management with useState hook
│   ├── UseReducer/
│   │   └── index.js               # State management with useReducer hook
│   ├── ClassState/
│   │   └── index.js               # Class-based component implementation
│   └── Loading/
│       └── index.js               # Loading indicator component
└── index.js                        # React DOM rendering entry point
```

## 🧩 Components Overview

### UseState Component
Implements state management using the `React.useState` hook. Manages the security code verification flow with a flat state structure containing:
- `value`: Current input value
- `error`: Error flag for invalid codes
- `loading`: Loading state during validation
- `deleted`: Completion flag
- `confirmed`: Confirmation flag

### UseReducer Component
Implements state management using the `React.useReducer` hook. Uses a centralized reducer pattern with action types for better organization of complex state logic. Handles the same verification flow as UseState but with improved scalability.

**Action Types:**
- `WRITE`: Update input value
- `CHECK`: Initiate validation
- `CONFIRM`: Confirm valid code
- `ERROR`: Handle invalid code
- `DELETE`: Complete deletion
- `RESET`: Reset state

### ClassState Component
Implements state management using class-based React components with lifecycle methods. Demonstrates the traditional approach before React hooks and uses the `Loading` child component for async indication.

### Loading Component
A simple class-based component that displays a loading message. Demonstrates component lifecycle with `componentWillUnmount` hook for cleanup.

## 🚀 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.
See the [running tests documentation](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include hashes.
Your app is ready to be deployed!

See the [deployment documentation](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## 💡 Learning Outcomes

By exploring this project, you'll understand:
- How to manage component state with different React patterns
- The difference between `useState` and `useReducer`
- How to implement validation logic in React
- Working with async operations and loading states
- Component lifecycle in class-based components
- Input handling and event management

## 🔗 Resources

- [React Documentation](https://reactjs.org/)
- [React Hooks Guide](https://react.dev/reference/react)
- [useReducer Hook](https://react.dev/reference/react/useReducer)
- [useState Hook](https://react.dev/reference/react/useState)
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)

## 📝 License

This project is part of the Platzi React Security Codes learning path.

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
