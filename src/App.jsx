
// import {useContext} from "react";
import About from './components/About/About';
import Contact from './components/contact/Contact';
//  import logo from './logo.svg';
//import './App.css';
// eslint-disable-next-line
import Intro from "./components/intro/Intro";
import List from './components/lists/List';
import Toggle from './components/toggle/Toggle';
// import { ThemeContext } from "./context";
import { useState } from "react";
const App = () => {
    const[mode,setMode]=useState('true');
    const toggleMode=()=>{
       if(mode==='white')
       setMode('black');
       else{
         setMode('white'); 
       }
    }
   return (
   <div>
      <Toggle mode={mode} toggleMode={toggleMode}/>
      <Intro mode={mode}/>
      <About mode={mode}/>
      <List mode={mode}/>
      <Contact mode={mode}/>
      </div>
   );
};
export default App;

