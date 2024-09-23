import 'bootstrap/dist/css/bootstrap.css';

export default function App(){
  const snus = [
    {
      name: 'Kapten',
      grade: 5,
    }, 
    {
      name: 'Klaven',
      grade: 4,
    },
  ]
  
  
  return (
    <>
    <h1>Snus graded</h1>
    <br/>
    <ul className="list-group">
      {snus.map(snus => {
        return (
          <li key={snus.name} className="list-group-item">
              <span>Snus: {snus.name}   Grade: {snus.grade}</span>
          </li>
        )
      })}
    </ul>
    <br/>
    <br/>
    <form>
      <h2>Add Snus to the list</h2>
  <div className="form-group">
    <label for="snusInput">Enter Snus sort</label>
    <input type="text" class="form-control" id="snusInput" placeholder="Enter new snus"/>
  </div>
  <div class="form-group">
  <label for="snusGrade">Enter Snus grade</label>
  <input type="number" class="form-control" id="snusGrade" placeholder="Enter Snus grade 1-5"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </>
  )
}
