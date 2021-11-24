import './App.css';
import TextField from '@material-ui/core/TextField';
import { useState } from "react";
import { Button } from '@material-ui/core';
import { initializeApp } from 'firebase/app';
import { collection, addDoc, getFirestore } from "firebase/firestore"
import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: "AIzaSyCKHNm7t0jsXmumbsMTFDrFubv_m0h_4c8",
  authDomain: "todoapp-cac0c.firebaseapp.com",
  projectId: "todoapp-cac0c",
  storageBucket: "todoapp-cac0c.appspot.com",
  messagingSenderId: "749023332458",
  appId: "1:749023332458:web:3a97eafc6d6443b3806213"
};

initializeApp(firebaseConfig);

const db = getFirestore();



function App() {

const  [todoInput, setTodoInput] = useState("");

function addTodo (e) {
  e.preventDefault();


   addDoc(collection(db, "users"), {
    inprogress: true,
    timestamp: db.FieldValue.serverTimestamp(),
    todo: todoInput,
  })
}
  return (
    <div 
      className="App"
      style={{
        display: "flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
      }}
      >
      <div>
        <h1>Esad Todos App </h1>
        <form>
          <TextField 
            id="standard-basic" 
            label="Write a Todo" 
            value={todoInput}
            onChange={(e) => setTodoInput(e.target.value)}
            variant="standard" 
            style={{maxWidth:"300px", width:"90vw"}}
          />
          <Button type="sumbit" variant="text" onClick={addTodo}>
            Text
            </Button>
        </form>
      </div>
    </div>
  );
}

export default App;
