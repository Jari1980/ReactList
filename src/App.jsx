import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  
  const [name, setName] = useState('') 
  const [grade, setGrade] = useState('') 

  const [snuss, setSnuss] = useState([  ])

  useEffect(()=> {
    // call api and set its result into the array
  }, [])

  const handleClick = event => {     
    setSnuss([...snuss, {name: name, grade: grade}]) 
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
            value = {name}
            onChange={()=> setName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Enter Snus grade</label>
          <input
            type="number"
            className="form-control"
            id="snusGrade"
            placeholder="Enter Snus grade 1-5"
            value={grade}
            onChange={()=> setGrade(event.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
      </form>
    </>
  );
  
}
