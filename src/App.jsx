import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  
  const [name, setName] = useState('') 
  const [grade, setGrade] = useState('') 

  const [snuss, setSnuss] = useState([
    {name:"Kapten", grade:5},
    {name:"Klaven", grade:4}
  ])

  const handleAddName = event => {
    setName(event.target.value)
    console.log(name) // name is uppdated properly
  }
  const handleAddGrade = event => {
    setGrade(event.target.value)
  }
  const handleClick = event => {
    //setSnuss([... snuss, {snuss: name, grade: grade}])
    setSnuss((snuss) => [...snuss, {name, grade},])
    return [snuss, setSnuss]
  }

  

  return (
    <>
      <h1>Snus graded</h1>
      <br />
      <ul className="list-group">
        {snuss.map((snuss) => {
          return (
            <li key={snuss.name} className="list-group-item">
              <span>
                Snus: {snuss.name} Grade: {snuss.grade}
              </span>
            </li>
          );
        })}
      </ul>
      <br />
      <br />
      <form>
        <h2>Add Snus to the list</h2>
        <div className="form-group">
          <label>Enter Snus sort</label>
          <input
            type="text"
            className="form-control"
            id="snusInput"
            placeholder="Enter new snus"
            //value={snuss.name}
            onChange={handleAddName}
          />
        </div>
        <div className="form-group">
          <label>Enter Snus grade</label>
          <input
            type="number"
            className="form-control"
            id="snusGrade"
            placeholder="Enter Snus grade 1-5"
            //value={snuss.grade}
            onChange={handleAddGrade}
          />
        </div>
        <button className="btn btn-primary" onClick={handleClick}
        
        /*onClick={() => {
          setSnuss([
            ...snuss,
            {name: snuss.name, grade: snuss.grade},
            //console.log("clicked added " + name + " " + grade)
          ])
        }}*/
          >
          Submit
        </button>
      </form>
    </>
  );
  
}
