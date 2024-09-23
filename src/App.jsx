import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  const [name, setName] = useState('')
  const [grade, setGrade] = useState('')
  const [snuss, setSnuss] = useState('')
  const snus = [
    {
      name: "Kapten",
      grade: 5,
    },
    {
      name: "Klaven",
      grade: 4,
    },
  ];

  return (
    <>
      <h1>Snus graded</h1>
      <br />
      <ul className="list-group">
        {snus.map((snus) => {
          return (
            <li key={snus.name} className="list-group-item">
              <span>
                Snus: {snus.name} Grade: {snus.grade}
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
            value={name}
            onChange={e => setName(e.target.value)}
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
            onChange={e => setGrade(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={() => {
          setSnuss([
            ...snuss,
            {name: name, grade: grade},
            console.log("clicked added " + name + " " + grade)
          ])
        }}>
          Submit
        </button>
      </form>
    </>
  );
}
