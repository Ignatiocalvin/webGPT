// Create a react component that inputs a text area message and then performs a fetch request to localhost:3001 and   s back a response as a data.message and displays that message in a box below
import React, {useState} from 'react';
import './App.css';

/* Here is the explanation for the code below:
1. We are creating a new function called App that will be the root component of our application.
2. We are using the useState hook to create two states: message and response.
2. We're creating a new function called handleSubmit which takes an event as a parameter. We're using async/await to handle the asynchronous nature of JavaScript.
3. We're preventing the default action of the event from happening. This is because we don't want our application to refresh when the form is submitted.
3. The message state will store the message that we will send to the server.
4. The response state will store the message that we will receive from the server.
5. We are creating a function called handleSubmit that will be called when the form is submitted.
6. We are preventing the default behavior of the form.
7. We are sending a POST request to the server using fetch.
8. We are storing the response in a variable called data.
9. We are setting the response state with the value of the message property in the data object.
10. We are creating a form and a textarea element. The textarea element is a self closing element which means that it does not need a closing tag. The textarea element has a value attribute which is set to the message state variable. The textarea element also has an onChange attribute which is called whenever the value of the textarea element changes. The onChange attribute takes a function as a parameter. The onChange attribute is called and the function is passed an event object which contains the value of the textarea element. We are using the setMessage function to set the message state variable to the value of the textarea element. This is how we are updating the state variable when the value of the textarea element changes.
11. We are creating a button element with a type attribute set to submit. When the button is clicked, the handleSubmit function is called.
12. We are displaying the response from the server in a div element. The response from the server is stored in the response state variable.
13. We are exporting the App component so that we can import it in the index.js file.
14. We are importing the App component from the App.js file. We are also importing the React library.
15. We are creating a div element with a className attribute of App. This is where the App component will be rendered.
16. We are rendering the App component in the div element.
17. We are importing the render function from the ReactDOM library.
18. We are rendering the App component in the root div element which has an id of root. This is where the React application will be rendered.
19. We are importing the React library. */


function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json())
      .then((data) => setResponse(data.message));
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)} 
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <div>{response}</div>
    </div>
  );
} 

export default App