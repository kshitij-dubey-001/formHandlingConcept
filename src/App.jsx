import { useState } from "react";


const App = () => {
 const [first, setfirst] = useState('')

const submitHandler=(e) =>{
  e.preventDefault();
  console.log(first)
setfirst('')
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form onSubmit={(e) =>{
      submitHandler(e); 
      }}
    
        className="bg-white p-6 rounded-2xl shadow-md w-80 flex flex-col gap-4"
      >
        <h2 className="text-xl font-semibold text-center">Enter Text</h2>

        <input 
          type="text"
             placeholder="Type something..."
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={first}
          onChange={(e)=>{
            setfirst(e.target.value);
          }}
        />

        <button 
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;