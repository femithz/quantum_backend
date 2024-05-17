# Marketplace Web Application

## Table of Contents

1. [Overview](#overview)
2. [Backend](#backend)
    - [Setup Instructions](#backend-setup-instructions)
    - [Running the Server](#running-the-server)
    - [API Endpoints](#api-endpoints)

## Backend

The backend is built with Node.js and Express.js.

### Backend Setup Instructions

1. **Clone the repository**:
    ```sh
    git clone <repository-url>
    cd repository/quantum_backend
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

### Running the Server

1. **Start the server**:
    ```sh
    npm start
    ```

    The server will run on `http://localhost:3000`.

### API Endpoints

- **GET /api/v1/items**
    - Description: Returns a list of items.
    - Response:
        ```json
        [
            { "itemId": 1234, "name": "Item 1", "price": "$100.00" },
            { "itemId": 5678, "name": "Item 2", "price": "$150.00" }
        ]
        ```

- **POST /api/v1/items**
    - Description: Accepts a new item (name and price) and adds it to the list.
    - Request Body:
        ```json
        {
            "name": "NewItem",
            "price": "$200.00"
        }
        ```
    - Response:
        ```json
        {
            "success": true,
            "data": {
                "itemId": 9101,
                "name": "NewItem",
                "price": "$200.00"
            },
            "msg": "Item created successfully"
        }
        ```