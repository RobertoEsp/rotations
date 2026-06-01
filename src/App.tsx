import { useState } from 'react'
import './App.css'
import Court from './components/Court'
import { Roles } from './types'

function App() {
  const [setterName, setSetterName] = useState("Chris");
  const [oppositeName, setOppositeName] = useState("Ventura");
  const [mb1Name, setMb1Name] = useState("Roberto");
  const [mb2Name, setMb2Name] = useState("Ulises");
  const [oh4Name, setOh4Name] = useState("Mafer");
  const [oh2Name, setOh2Name] = useState("Montse");
  return (
    <>
      <h1>Rotations</h1>
      <div className="card">
        <Court size={600} color="#4e739eff" players={[
          { name: setterName, role: Roles.SET },
          { name: oh2Name, role: Roles.OH2 },
          { name: mb1Name, role: Roles.MB1 },
          { name: oppositeName, role: Roles.OP },
          { name: oh4Name, role: Roles.OH4 },
          { name: mb2Name, role: Roles.MB2 },
        ]} />
      </div>
      <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
        <div style={{ marginBottom: "10px", display: "flex", justifyContent: "space-between", gap: "10px" }}>
          <span>Setter:</span>
          <input type="text" placeholder="Setter Name" value={setterName} onChange={(e) => setSetterName(e.target.value)} />
        </div>
        <div style={{ marginBottom: "10px", display: "flex", justifyContent: "space-between", gap: "10px" }}>
          <span>Opposite:</span> 
          <input type="text" placeholder="Opposite Name" value={oppositeName} onChange={(e) => setOppositeName(e.target.value)} />
        </div>
        <div style={{ marginBottom: "10px", display: "flex", justifyContent: "space-between", gap: "10px" }}>
          <span>MB1:</span>
          <input type="text" placeholder="MB1 Name" value={mb1Name} onChange={(e) => setMb1Name(e.target.value)} />
        </div>
        <div style={{ marginBottom: "10px", display: "flex", justifyContent: "space-between", gap: "10px" }}> 
          <span>MB2:</span>
          <input type="text" placeholder="MB2 Name" value={mb2Name} onChange={(e) => setMb2Name(e.target.value)} />
        </div>
        <div style={{ marginBottom: "10px", display: "flex", justifyContent: "space-between", gap: "10px" }}>
          <span>OH4:</span>
          <input type="text" placeholder="OH4 Name" value={oh4Name} onChange={(e) => setOh4Name(e.target.value)} />
        </div>
        <div style={{ marginBottom: "10px", display: "flex", justifyContent: "space-between", gap: "10px" }}>
          <span>OH2:</span>
          <input type="text" placeholder="OH2 Name" value={oh2Name} onChange={(e) => setOh2Name(e.target.value)} />
        </div>
      </div>
    </>
  )
}

export default App
