# Paradise Nursery Shopping Cart

A React-based shopping cart application for Paradise Nursery, an online plant shop that offers a variety of house plants.

## Features

- Landing page with company information and a Get Started button
- Product listing page with plants grouped by categories
- Shopping cart functionality with add, remove, and quantity update features
- Responsive design for various screen sizes

## Project Structure

- `src/components`: Reusable UI components
- `src/pages`: Main page components
- `src/redux`: Redux store and slice files
- `src/data`: Data files for the application
- `src/assets`: Static assets like images

## Redux Implementation

This project uses Redux Toolkit for state management with the following features:

- `CartSlice.jsx`: Defines reducer functions for cart operations
  - `addItem()`: Adds a plant to the cart
  - `removeItem()`: Removes a plant from the cart
  - `updateQuantity()`: Updates the quantity of a plant in the cart

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
