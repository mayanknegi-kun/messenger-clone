import React, { useState,useEffect } from 'react';
import './App.css';
import { Button,FormControl,Input,InputLabel } from '@material-ui/core';
import Message from "./Message"

function App() {

  const [input,setInput] = useState("");
  const [messages,setMessages] = useState([]);
  const [username,setUsername] = useState("");

  useEffect(() => {
    setUsername(prompt("Enter Your Name"))
  }, [])

  const sendMessage = (event) =>{
    //all logic to send message here
    event.preventDefault()
    setMessages([...messages,{username:username,text:input}])
    setInput("");
  }

  //for testing purposes
  console.log(input)
  console.log(messages)
  return (
    <div className="App">
        <h1>Hello {username}</h1>      
        {/* what we want to add?? */}
        <form>
              <FormControl>
              <InputLabel>Enter Message...</InputLabel>
              <Input value={input} onChange={event =>setInput(event.target.value)} />
              <Button variant="contained" color="primary" type="submit" disabled={!input} onClick={sendMessage}>Send Messages</Button>
              </FormControl>            
        </form>
      
        {
          messages.map(message =>(
            <Message username={message.username} text={message.text}/>
          ))
        }
    </div>
  );
}

export default App;
