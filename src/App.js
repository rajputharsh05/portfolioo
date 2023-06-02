import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Experience from "./components/experiences/Experience";
import Works from "./components/works/Works";
import { Contacts } from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import { themeContext } from "./context";
import { useContext } from "react";
function App() {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="App"
    style={{
      background:darkMode?'black':'',
      color:darkMode?'white':''
    }}
    
    >
     <Navbar></Navbar>
     <Intro></Intro>
     <About></About>
     <Experience></Experience>
     <Works></Works>
     <Contacts></Contacts>
     <Footer></Footer>
    </div>
  );
}

export default App;
