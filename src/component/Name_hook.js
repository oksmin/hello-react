//import './Hello.css';
import { useState } from 'react';

// 1. useState 상태값 변할 때, 렌더링을 다시 되는 것을 확인할 수 있다.
// 2. props 는 상태값이 아니고, properties이기 때문에 값을 전달 받는 것 까지를 담당한다.
// 3. props ? state값으로 사용해보자
let Name_hook=(props)=>{
    const [name, setName] = useState('Tom');
    const [age, setAge] = useState(props.age);
    const [adult, setAdult] = useState(age > 19 ? "성인입니다." : "미성년자입니다.");
    console.log(props.age);
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
                <div>{name} ({ age }, {adult})</div>
               <button onClick={showName}>showName</button>
               <button 
                    onClick={()=>{
                        setAge(age+1);
                        let msg = "";     
                        if(age <= 19){
                            msg = '청소년입니다.';
                        }else if( 19 < age && age < 45  ){
                            msg = '청년입니다.';
                        }else {
                            msg = '꽃중년입니다.';
                        }
                        setAdult(msg);
                    }}
               >Age++</button>

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

export default Name_hook;