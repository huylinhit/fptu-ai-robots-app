import './App.css';
import {ref, child, get } from "firebase/database";
import './firebase'
import { database  } from './firebase';
import { useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState();

  useEffect(()=>{
    const dbRef = ref(database);
    get(child(dbRef, `ScoreBoard`)).then((snapshot) => {
      if (snapshot.exists()) {
        setValue(snapshot.val())
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  },[])

  return (
    <div>
      {!!value && console.log(value)}
      <h2>Hello Wolrd !!</h2>
    </div>
  )
}

export default App;
