# Gift Search Bar
The project consists of creating a web application using the Feathers.js framework to create an interface for creating and managing products. It will use the features of Socket.io to allow for real-time updating of the product list without page reloading. The structure of the application will include a product creation form on the left of the screen, allowing users to input product details and submit to create a new product. On the right of the screen, there will be a list of existing products, which will be updated in real-time when products are created or modified. The application will also use a database to store information about the products. 💻🛍️📊📝🔄
note: This project is a work in progress and is not yet complete.


context : IO sockets allow real-time two-way communication between a server and a client, unlike a standard server response which typically only allows one-way communication. IO sockets use a persistent connection to allow real-time data transmission, while a standard server response typically requires a new request for each response. This means that IO sockets enable more dynamic and responsive interactions between users and applications.

![create product socket io](https://imgur.com/x7yqVPJ.png)

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites
Node.js and npm (or yarn)
A package manager like npm or yarn

## Installing
1. Clone the repository and cd into the back project directory 

```javascript
git clone https://github.com/letotor/capte-search-bar.git
cd back
```

2. Install dependencies
```javascript
npm install
or
yarn 
```


3. Run the project
```js
npm run dev
or
yarn dev
```


## API Endpoints
The project has the following endpoints for managing products:

- GET /products: Retrieve a list of all products
- ~~GET /products/:id: Retrieve a single product by id~~
- ~~POST /products: Create a new product~~
- ~~PATCH /products/:id: Update a product by id~~
- ~~DELETE /products/:id: Delete a product by id~~

## Built With
- [Feathers.js documentation](https://feathersjs.com/)- A framework for building real-time applications and RESTful APIs
- [TypeScript documentation](https://www.typescriptlang.org/)  - A typed superset of JavaScript that compiles to plain JavaScript

## Authors
VictorDG - *** Initial work with support from feathers.js ***

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
- [Feathers.js documentation](https://feathersjs.com/)
- [TypeScript documentation](https://www.typescriptlang.org/)  
Please note that this is just a template and you should tailor it to your specific project, also it is important to mention that some features or dependencies might not be compatible with your project, so you should consult the official documentation before using any of them.