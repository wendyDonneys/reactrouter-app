import react from "react";
import {useState} from "react";
import styles from "./counter.module.css"

function Counter (){
    const [count,setCount] -useState (0);

    return (
        <div className ={styles.Counter}>
            <h1>Counter:{count}</h1>
            <button className = {styles.button}onclick ={()=>setCount(count + 1)}>Incrementar</button>
        </div>
    );
}

export default Counter; 