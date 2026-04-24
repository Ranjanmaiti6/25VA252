import './App.css'
import Demo from './component/demo'
import Exp7 from './component/Exp7';
import StudentRegistration from './component/Form/studentRegistration';
import UseState from './component/Hooks/UseState';
import Props from './component/Props'



function App() {
    const name = "ABES College"
    const students = [
      {name:"Ranjan", rolno: "25032", course:"BTech"},
      {name:"Ram", rolno: "250325", course:"BTech"},
      {name:"Rohim", rolno: "250326", course:"BTech"},
    ]; 
  return (
    <>
      <h1>Welcome to React</h1>
      <h2>Hello {name}</h2>
      <Demo/>
      <Props name = "Ranjan" rolno = "2503215400146" course = "BTech"/>
      <Exp7 students={students}/>
      <UseState/>
      <StudentRegistration/>
      
    </>
  )
}

export default App
