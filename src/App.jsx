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
    <ul>
      {snus.map(snus => {
        return (
          <li key={snus.name}>
            <span>{snus.name} {snus.grade}</span>
          </li>
        )
      })}
    </ul>
    </>
  )
}
