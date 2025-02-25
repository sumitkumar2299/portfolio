import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Projects from './Components/Projects'
import Navbar from './Components/Navbar'
import Experience from './Components/Experience'
import Contact from './Components/Contact'
import VisitorCounter from './Components/Visitor_counter'
import SkillsComponent from './Components/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar/>
        <Projects/>
        <Experience/>
        <Contact/>
        <VisitorCounter/>
        
        
    </div>

    
    

   

  

        
      
    </>
  )
}

export default App
