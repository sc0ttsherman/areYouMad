import { useState } from 'react'
import JSConfetti from 'js-confetti'
import userFace from '/face.jpg'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'





function App() {
  const [count, setCount] = useState(0)
  const jsConfetti = new JSConfetti()
  confetti(jsConfetti)

  return (
    <>
      <div> 
        <a href="#">
          <img src={userFace} className="logo " alt="React logo" />
        </a>
      </div>
      <h1>Are You <i><span id="fire" style={{color:"red"}}>Mad</span></i>  at Me?</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {count} people have said NO!
        </button>
        <table cellPadding={"5"} style={{width:"100%", textAlign:"center"}}>
          <tr style={{fontWeight:"bold"}}>
            <td>Name</td><td>Today's Response</td>
          </tr>
          <tr>
            <td>Scott S.</td>
            <td>No ✨</td>
          </tr>
          <tr>
            <td>Emma F.</td>
            <td>Must Be Dead.</td>
          </tr>
          <tr>
            <td>Andrew C.</td>
            <td>Must Be Dead.</td>
          </tr>
        </table>
        
      </div>
    </> 
  )
}

function confetti(jsConfetti){
  jsConfetti.addConfetti({
    emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
 })
}

export default App