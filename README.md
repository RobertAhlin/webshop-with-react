# Webshop project
This is a webshop project to be used for learning to handle React during educaion in Full stack development at Företagsuniversitet.

# Github
The project can be found at this repo: https://github.com/RobertAhlin/webshop-with-react.

### Clone repo.
1. Use ```https://github.com/RobertAhlin/webshop-with-react.git``` to clone it with for example VS Code.
2. Whe cloned, run ```npm install``` to get all dependencies.
3. Start application with ```npm run dev```

# Development
## Installation
1. The app was first create with the command ```npm create-react-app``` but I canged my mind and started with ```npm create Vite@latest```
2. First I installed React router with ```npm install react-router-dom```
3. Ran ```npm install```
4. Started the application with ```npm run dev```
5. Used the Google Chrome browser at http://localhost:5173/ to view the running app.

## API
DummyJSON Products API  
The DummyJSON Products API is a simple API that provides access to a collection of dummy products. It is designed for testing and development purposes, providing a variety of mock product data that can be used in applications.

### Base URL
The base URL for accessing the API is: ```https://dummyjson.com/products/```

### Endpoints

### Fetch All Products
- **Description:** Retrieves all products available in the database.
- **HTTP Method:** GET
- **URL:** `/products/`
- **Response:** A JSON object containing an array of products.

### Fetch Product by ID
- **Description:** Retrieves a specific product by its unique identifier.
- **HTTP Method:** GET
- **URL:** `/products/{id}`
- **Parameters:**
  - `{id}`: The unique identifier of the product.
- **Response:** A JSON object representing the product with the specified ID.


## Layout
Started to build a simple layout. using a header, footer, sidebar and a home area.
- **Header**  
The header should include a navbar
- **Footer**  
No plan yet, but perhaps some social media links?
- **Home**  
Just the main area where to navigate products. Aiming to use pagination.
- **Sidebar**  
This is where I plan to display the shopping cart where it should be easy to overview what's been added. Also easy to edit amount and remove products.


# Credits
- https://reactrouter.com/en/main
- https://chat.openai.com
- https://vitejs.dev/