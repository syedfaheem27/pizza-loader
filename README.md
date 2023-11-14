# The Pizza Loader App 🍕

## Description

React Pizza App is a web application developed with React and bundled using Vite. The app integrates with React Redux and React Router DOM for state management and routing. It utilizes a reverse geocoding API for location-based services and interacts with a third-party API to load menus, create orders, retrieve orders, and update orders. Additionally, it leverages the navigator Web API for fetching current user coordinates.

## Technologies Used

- React: JavaScript library for building the user interface.
- Vite: Frontend build tool for faster development.
- React Redux: State management library for React applications.
- React Router DOM: Provides routing capabilities for React apps.
- Reverse Geocoding API: Offers location-based services for retrieving user addresses.
- Third-Party API: Manages menu loading, order creation, retrieval, and updates.
- Navigator Web API: Used for obtaining current user coordinates.

## Third-Part API used

The third party API end point used is [API](https://react-fast-pizza-api.onrender.com/api)

- To load menus, append **/menu** to the end point
- For creating orders, append **/order** to the end point
- for getting an order with order id **\_id**, append **/order/\_id**
- for updating an order with order id **\_id**, append **/order/\_id**

### Live-Link

[pizza-loader](https://pizza-loader.vercel.app/)
