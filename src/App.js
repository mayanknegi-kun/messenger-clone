import React, { useState,useEffect } from 'react';
import './App.css';
import {FormControl,Input,InputLabel } from '@material-ui/core';
import Message from "./Message"
import db from './firebase';
import firebase from "firebase";
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {

  const [input,setInput] = useState("");
  const [messages,setMessages] = useState([]);
  const [username,setUsername] = useState("");

  useEffect(()=>{
    db.collection("messages").orderBy('timestamp','asc').onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc => ({id:doc.id,message:doc.data()})))
    })
  },[])

  useEffect(() => {
    setUsername(prompt("Enter Your Name"))
  }, [])

  const sendMessage = (event) =>{
    //all logic to send message here
    event.preventDefault()

    db.collection('messages').add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput("");
  }

  //for testing purposes
  console.log(input)
  console.log(messages)
  return (
    <div className="App">
        <h1>Hello {username}</h1>      
        {/* what we want to add?? */}
        <form className="app__form">
              <FormControl className="app__formcontrol">
              <InputLabel>Enter Message...</InputLabel>
              <Input className="app__input" value={input} onChange={event =>setInput(event.target.value)} />
              <IconButton className="icon__button" variant="contained" color="primary" type="submit" disabled={!input} onClick={sendMessage}>
                <SendIcon/>
              </IconButton>
              </FormControl>            
        </form>

        <FlipMove>
        {
          messages.map(({id,message}) =>(
            <Message key={id} username={username} message={message}/>
          ))
        }
        </FlipMove>
        
    </div>
  );
}

export default App;
