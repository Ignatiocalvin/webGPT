// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

// Express' app.get() function lets you define a route handler for GET requests to a given URL. 
// For example, the below co de registers a route handler that Express will call when it receives an HTTP GET request to /.
// If you receive a GET request with `url = '/'`, always
// send back an HTTP response with body 'Hello World'.

// Simple GET API to accept GET request in "/" path 
// app.get("/", (req, res) => {
//       res.status(200).send("Hello");
//     });

app.post('/', async (req,res) => {
      res.json({
            message: 'Hello World'
      });
});

app.listen(port, () => {
      console.log("Example app listening http://localhost:3000/");
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
