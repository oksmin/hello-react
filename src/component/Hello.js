//import './Hello.css';
import { useState } from 'react';
import styles from './Hello.module.css';

let Hello=()=>{
    const [name, setName] = useState('Tom');
    
    /* 
    let name = "Tom";
    function showName (){
        name = name === "Tom" ? "Jerry":"Tom";
        document.getElementById("show_name").textContent=name;

    }*/
    function showName(){
        setName(name === "Tom" ? "Jerry":"Tom");
    }

    return (
        <>
            <div>
                <div>{name}</div>
               <button onClick={showName}>showName</button>

            </div>
        </>
    );
    /*
     <button onClick={()=>{
                            //let newName = name === "Tom" ? "Jerry":"Tom";
                            //setName(newName);
                            setName(name === "Tom" ? "Jerry":"Tom");

                        }}
                        >showName</button>
    
    */
    //<button onClick={showName}>showName</button>
    //<div className={styles.box}>Hello</div>
};

export default Hello;