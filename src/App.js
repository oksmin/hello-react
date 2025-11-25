//import './App.css';
import Hello from './component/Hello';
import styles from './App.module.css';
import Name_hook from './component/Name_hook';

export default function App() {
  return (
    <div className={styles.App}>

      <p>Name Hook</p>
      <Name_hook age={10}/>
      <Name_hook age={20}/>
      <Name_hook age={30}/>
      <p>Hello</p>
      <Hello />
      <Hello />
      <Hello />
      <Hello />
        
    </div>
  );
  // <div className={styles.box}>App</div>
}
/* 
let App = () => {
  return (
    <div className="App">
        <p>Hello</p>
    </div>
  );

}
export default App;
*/
/* 
function App () {
  return (
    <div className="App">
        <p>Hello</p>
    </div>
  );

}
export default App;
*/





