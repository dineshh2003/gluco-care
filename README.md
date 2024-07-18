# Gluco-Care

Welcome to **GLUCO-CARE** – the personal health-care assistant application for patients. 

## About the Project
GlucoCare not only predicts your chances of diabetes but also helps diagnose it with the help of the fine-tuned GEMINI Model. Additionally, it features a map-based search functionality to find medicines and blood groups across India, with the functionality to order the medicine and get the contact information, making it invaluable in emergencies.

With an intuitive user interface and robust backend, GLUCO-CARE facilitates smooth and hassle-free transactions for users. From predicting diabetes to finding medicines in emergencies, GLUCO-CARE is your go-to health-care assistant.


## Features and Tech-Stack
* **Diabetes Prediction and Diagnosis** : Predicts the likelihood of diabetes using the GEMINI Model and aids in the diagnosis process with detailed analysis and insights.
  
![Live Heartbeat monitoring](https://i.postimg.cc/rFX08GqW/chat-bot.png)

* **Map-Based Search Functionality**: Find medicines and blood groups across India with contact information in real-time. you may click on this link for Better Video Explanation for this functionality  [here](https://youtu.be/CJfnW_TlI2g).

![Live Heartbeat monitoring](https://i.postimg.cc/NFCw0qnb/map.png)

* **Real-Time Information**: Fully MERN stack implementation ensures that all information is provided in real-time.

![Live Heartbeat monitoring](https://i.postimg.cc/bNDT593t/exercise-new.png)


![Live Heartbeat monitoring](https://i.postimg.cc/3NggKn6S/predictiton-model.png)


## Tech Stack

### Frontend

- **Next.js**: For Frontend and a seamless user experience.
- **Vercel**: Deployment platform for the frontend, ensuring high performance and reliability.

### Backend

- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **MongoDB**: A powerful, flexible, and scalable NoSQL database.
- **Railway**: Deployment platform for the backend, providing seamless integration and scalability.


## Installation

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js
- npm
- MongoDB

### Installation Steps

1. Clone the repository
   ```sh
   git clone https://github.com/dineshh2003/gluco-care
   ```
2. Navigate to the project directory
3. Install frontend dependencies
   ```sh
   npm install
   ```
4. Install backend dependencies
   ```sh
   cd backend
   npm install
   ```
5. Set up environment variables by creating a `.env` file in the root of the backend directory
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT = 5000
   ```
6. Set up environment variables by creating a `.env` file in the root of the Chatbot_backend directory for the proper working of the Gemini-Api
   ```env
   API_KEY : YOUR_GEMINI_API_KEY
   ```


## Usage

To run the application locally:

### Frontend

1. Navigate to the frontend directory
2. Start the development server
   ```sh
   npm run dev
   ```
   The frontend will be available at [http://localhost:3000](http://localhost:3000).

### Backend

1. Navigate to the backend directory
   ```sh
   cd backend
   '''
2. Start the backend server
   ```sh
   npm start
   ```
   The backend will be running on [http://localhost:5000](http://localhost:5000).
   
3. Start the backend server for Gemini
   ```sh
   cd ChatBot_backend
   nodemon server.js
   ```
   The backend will be running on [http://localhost:4000](http://localhost:5000).


   
## License

Distributed under the MIT License. 

## Contact

Dinesh Jangid - [dinujangid89@gmail.com](mailto:dinujangid89@gmail.com)

Thank-you for visitig Gluco-core.

