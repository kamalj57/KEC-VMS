# KEC VEHICLE MANAGEMENT SYSTEM

This application utilizes Vite + React for the frontend, MERN stack (MongoDB, Express, Node.js) for the server,twilio for sending messages.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following prerequisites:

- Node.js and npm installed.
- MongoDB Atlas account for database storage.
- Twilio account for sending messages.

## Installation

1. Clone the repository:
   
* git clone https://github.com/kamalj57/KEC-VMS.git
* cd client

## Configuration
1.Frontend Configuration :

- Create a .env file in the client directory
- VITE_REACT_APP_API=Deployed WebserviceURL  # Update with your server

2.Server Configuration :

- Create a .env file in the server directory.
- PORT=8080
- MONGODB_URI=your_mongodb_uri    # Update with your MongoDB Atlas connection URI
- ACCOUNT_ID=your_twilio_account_id  # Update with your twilio account id
- AUTH_TOKEN=your_twilio_auth_token  # Update with your twilio auth token
- TWILIO_NUMBER=your_twilio_number  # Update with your my twilio phone number



## Usage
1.Start the server:

- Copy code
- cd server
- node server.js

2.Start the frontend:

- cd client
- npm run dev
- Visit http://localhost:5173 in your browser to access the application.

## Deployment
Follow your preferred deployment method to deploy the application. Ensure to set the environment variables for production in your deployment environment.

## Contributing
Contributions are welcome! Feel free to open issues and pull requests.

## License
This project is licensed under the MIT License.
Make sure to replace placeholder values (like `your_mongodb_uri`, `your_twilio_account_id`, `your_twilio_auth_token`, `your_twilio_number`) with your actual credentials.
