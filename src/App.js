import './App.css';
import {useEffect, useState} from "react";
import {filmService} from "./services/filmService";

function App() {
    const [data,setData] = useState(null);

    useEffect(()=>{
        filmService.discoverMovie(1).then(({data})=>setData(data))
        console.log(data);
    },[])
  return (
    <div className="App">
      App
    </div>
  );
}

export default App;
