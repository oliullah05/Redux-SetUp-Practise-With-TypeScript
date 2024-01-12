import { useSelector } from "react-redux"


function App() {

const count = useSelector((state)=>state.counter.value)
  return (
    <>
        <div className="flex justify-center items-center h-screen ">
      <button  className="px-4 py-4 bg-green-500 rounded-lg mx-5">increment By 5</button>
      <button  className="px-4 py-4 bg-green-500 rounded-lg mx-5">increment</button>
      <h1 className="text-3xl ">{count}</h1>
      <button  className="px-4 py-4 bg-green-500 rounded-lg mx-5">decrement</button>
    </div>
    </>
  )
}

export default App
