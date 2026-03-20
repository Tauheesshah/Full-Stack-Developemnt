import './App.css'

function App() {

  const data=[
    'Tauheed',
    'shah',
    'Parrru',
  ]
  return (
    //HOF [filter , map , reduce, foreach]
    <>
      {/* {HTML syntax} */}
      {/* <h1>{data[0]}</h1>
      <h1>{data[1]}</h1>
      <h1>{data[2]}</h1> */}

      {data.map((el)=>(
        <h1>{el}</h1>
      ))}
    </>
  )
}

export default App
