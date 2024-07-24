import { useState } from "react";
import { Task } from "./Task.jsx";

export const App = () =>{
    const [version, setVersion] = useState(0)
    return <>
        <Task key={version}/>
        <button onClick={()=>setVersion(version + 1)}>Reset</button>
    </>
    
}