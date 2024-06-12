# Webshop project
This is a webshop project to be used for learning to handle React during educaion in Full stack development at Företagsuniversitet.
<img src="readmefiles/webshop-screenshot.jpg">

# Github
The project can be found at this repo: https://github.com/RobertAhlin/webshop-with-react.

### Clone repo.
1. Use ```https://github.com/RobertAhlin/webshop-with-react.git``` to clone it with for example VS Code.
2. When cloned, run ```npm install``` to get all dependencies.
3. Start application with ```npm run dev```
4. Open browser and got to url: http://localhost:5173/.

# Development
## Installation
1. The app was first create with the command ```npm create-react-app``` but I canged my mind and started with ```npm create Vite@latest```
2. First I installed React router with ```npm install react-router-dom```
3. Ran ```npm install```
4. Started the application with ```npm run dev```
5. Used the Google Chrome browser at http://localhost:5173/ to view the running app.

# User Experience
First page directly shows the available items that is collected from DummyJson. The page present the first eighteen items, if user what to show more items there is a button "Show more..." That will display eighteen more, and so on.
Clicking an item card will open a modal that will show more details about the item. And also it possible to add the item to the shopping cart. One item will be added. If add to cart is clicked again, the number of that item will increase in the the shopping cart. Closing the detail page of the item is done by clicking the "Close" button it top left corner.

**Shopping cart:** Is visible and awailable as a sidebar to the right. Added items will be shown in a list where it is possible to increase or decrease the amount of each item the user wants to buy by clicking the "+" and "-" buttons. And also the option to delete an item from the shopping cart by clicking the "trash can" button.  
At the top of the shopping cart above all items is the total sum of all the items added in the shopping cart.

**Checkout:** When the items has been added to the shopping cart and the user wish to but the items. The user have to click on either the link "Checkout" in the navigation bar or on the checkout button int the shopping cart. This will take the user to the checkout page. The user can confirm the items added. When confirmed, the user can click "Purchase" button. This will open forms for shipping address and payment details. When the fields has been filled in the "Order Now" button will become active and the user can proceed with payment and placing the order.


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
This is where to display the shopping cart where it should be easy to overview what's been added. Also easy to edit amount and remove products.

## Components
- **Address**  
Address.jsx provides a form component for collecting shipping address information, ensuring data integrity and validation before submission.  
- **AddToCartButton**  
The AddToCartButton component is a React component that renders a button. When clicked, it adds a given product to the cart. It takes two props: product (the item to add) and addToCart (the function to handle adding the item). The button's onClick event triggers the addToCart function with the product as an argument.
- **Confirmation**   
Gives a confirmation message when the purchase has been completed. 
- **ConfirmModal**  
ConfirmModal provides a simple modal component for confirming actions with customizable button labels and callbacks for handling user interactions.  
- **Footer**  
- **Header**  
- **OrderSummary**  
OrderSummary provides a component for displaying a summarized view of the items in the shopping cart, including their titles, quantities, individual prices, and the total price of all items combined.  
- **Payment**  
Payment is a reusable component that captures and validates credit card payment details, providing a user-friendly interface for users to input their card information.  
- **ProductDetailModal**  
The ProductDetailModal component is a React component that displays a modal dialog for a product. It accepts four props: isOpen, onClose, product, and addToCart.  
If isOpen is false, the component returns null and nothing is rendered.  
When open, it displays a modal overlay with the product's image, title, price, and description.  
There are two buttons: one to close the modal (triggers onClose) and one to add the product to the cart (triggers addToCart with the product as an argument).  
The component imports its styles from Modal.css.  
- **Products**  
The Products component is a React component that displays a list of products and includes a modal for viewing product details. Here's a summary of its functionality:  
**State Management:**  
products: Stores the list of fetched products.  
error: Stores any error that occurs during the fetching process.  
loading: Indicates whether the products are currently being fetched.  
isModalOpen: Controls the visibility of the modal.  
selectedProduct: Stores the product currently selected to view in the modal.  
displayedProducts: Controls how many products are initially displayed and loaded per page.  
**Effects:**  
useEffect: Fetches products from an API when the component mounts, setting products and handling loading and error states.  
openModal: Opens the modal and sets the selected product.  
closeModal: Closes the modal and clears the selected product.  
handleShowMore: Increases the number of displayed products by a predefined number (productsPerPage).  
**Rendering:**  
Displays a loading message if products are being fetched.  
Displays an error message if fetching fails.  
Renders a list of products, each product clickable to open the modal with its details.  
Includes a "Show more" button to load more products if there are more to display.  
Uses the Modal component to show product details and handle adding the product to the cart.  
The component also imports its styles from Products.css and Modal.css and the Modal component from Modal.jsx.  
- **RemoveFromCartButton**  
The RemoveFromCartButton component renders a button that, when clicked, removes an item from the cart by calling the removeFromCart function with the specified item index.
- **ShoppingCart**  
The ShoppingCart component renders a list of cart items with options to adjust their quantities or remove them entirely, and it shows the total price of the items in the cart.  
**Props:**  
cartItems: An array of items in the cart.  
removeFromCart: A function to remove an item from the cart.  
adjustQuantity: A function to adjust the quantity of an item in the cart.  
**Total Calculation:**  
Calculates the total sum of all item prices in the cart.  
**Rendering:**  
Displays the total price of items in the cart.  
Renders a list of cart items, each showing the item count, title, and total price.   
Includes buttons for adjusting the quantity of each item and a button to remove the item from the cart.  
- **Sidebar**  
The Sidebar component renders a sidebar that includes the ShoppingCart component, displaying the items in the cart along with options to adjust their quantities or remove them.

# Credits
- https://reactrouter.com/en/main - Documentation
- https://chat.openai.com - Troubleshooting and get code snippets.
- https://vitejs.dev/ - Vite documentaion
- https://github.com/orgs/community/discussions/36010 - For the help to get the Pages on Github working

# To do
(To do list items will be removed when done. New might be added from Future development section.)
* Contact page with forms.

# Future development

### Notification messages
* Item added to shopping cart.
* Item has been deleted from shopping cart.

### Warning questions
* Ask user to confirm deletion of item from shopping cart. (Both from trash can button and decreasing number of items from 1 to 0.)

### Pages
* Contact page with forms.
* Track order progress page.

### Searchbar
* To make it possible to search for items.

### Responsiveness
Even if some level of responsivness is available. The resoponsiveness can be tested and improved for smaller devices such as mobile phones.
* Make the siderbar with the shopping cart collapse and be expandable on smaller screens, like mobile phones.

### Currency Converter
* Get current convert rate for other currencys from an API and make the user select what currency the prices should be shown in.