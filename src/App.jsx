import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  const [name, setName] = useState("");
  const [grade, setGrade] = useState("");
  const [id, setId] = useState("");

  const [snuss, setSnuss] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch("http://localhost:8080/snus")
      const body = await result.json()
      setSnuss(body)
    }
    fetchData()
  }, []);

  const handleClick = (event) => {
    const newId = Math.max(...snuss.map(o => o.id)) + 1;

    fetch('http://localhost:8080/snus/add', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: newId,
        name: name,
        grade: grade,
      })
    })

    async function fetchData() {
      const result = await fetch("http://localhost:8080/snus")
      const body = await result.json()
      setSnuss(body)
    }
    fetchData()

    //setSnuss([...snuss, { name: name, grade: grade }])  //This works on local but reading data from API instead
    
  };

  function handleRemove(id){
    fetch('http://localhost:8080/snus/delete', {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id,
      })
    })

    async function fetchData() {
      const result = await fetch("http://localhost:8080/snus")
      const body = await result.json()
      setSnuss(body)
    }
    fetchData()

    //const newList = snuss.filter((snuss) => snuss.name !== name)
    //setSnuss(newList)
  }

  return (
    <>
      <h1>Snus graded</h1>
      <br />
      <ul className="list-group">
        {snuss.map((snuss) => {
          return (
            <li key={snuss.id} className="list-group-item">
              <div style={{textAlign:"center"}}>
                <span style={{ float: "left", width:20 }}><b>{snuss.name}</b></span>
                <span style={{ display:"inline-flex", textAlign: "center" }}>{snuss.grade}</span>
                <span>
                  <button
                    type="button"
                    className="btn btn-danger"
                    style={{ float: "right" }}
                    onClick={() => handleRemove(snuss.id)}
                  >
                    Remove
                  </button>
                </span>
              </div>
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
            onChange={() => setName(event.target.value)}
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
            onChange={() => setGrade(event.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
      </form>
    </>
  );
}
