// "use client"
// import { useState } from "react";

// export default function Home() {
//   const [num1, setNum1] = useState<string>("");
//   const [num2, setNum2] = useState<string>("");
//   const [operation, setOperation] = useState("+");
//   const [result, setResult] = useState<number | string>(0);

//   const calculateResult = () => {
//     const value1 = num1 === "" ? 0 : parseFloat(num1);
//     const value2 = num2 === "" ? 0 : parseFloat(num2);

//     switch (operation) {
//       case "+":
//         setResult(value1 + value2);
//         break;
//       case "-":
//         setResult(value1 - value2);
//         break;
//       case "*":
//         setResult(value1 * value2);
//         break;
//       case "/":
//         setResult(value2 !== 0 ? value1 / value2 : "can divide by 0");
//         break;
//       default:
//         setResult(0)
//     }
//   }

//   return (
//     <div className="flex flex-col justify-center items-center min-h-screen bg-gray-200 p-4">
//       <div className="bg-white shadow-md p-6 rounded-lg w-full max-w-md">
//         <h1 className="font-bold text-center mb-6 text-2xl">Calculator</h1>
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Number 1:</label>
//           <input 
//             type="number"
//             value={num1}
//             onChange={(e) => setNum1(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Operation:</label>
//           <select
//             value={operation}
//             onChange={(e) => setOperation(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded"
//           >
//             <option value="+">+</option>
//             <option value="-">-</option>
//             <option value="*">*</option>
//             <option value="/">/</option>
//           </select>
//         </div>  
        
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Number 2:</label>
//           <input 
//             type="number"
//             value={num2}
//             onChange={(e) => setNum2(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>

//         <button
//           onClick={calculateResult}
//           className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mb-4"
//         >Calculate
//         </button>

//         <div className="mt-6 p-4 bg-gray-100 rounded-lg">
//           <div className="text-lg font-medium">Result:</div>
//           <div className="text-2xl font-bold mt-2">{result}</div>
//         </div>
//       </div>  
//     </div>
//   )
// }

"use client"
import { useState } from "react"
import { serialize } from "v8";

export default function Home() {
  const [num1, setNum1] = useState<string>("");
  const [num2, setNum2] = useState<string>("");
  const [operation, setOperation] = useState("+");
  const [result, setResult] = useState<number | string>("");
  
  const calculateResult = () => {
    const v1 = num1 === "" ? 0 : parseFloat(num1);
    const v2 = num2 === "" ? 0 : parseFloat(num2);
    switch(operation) {
      case "+":
        setResult(v1 + v2);
        break;
      case "-":
        setResult(v1 - v2);
        break;
      case "*":
        setResult(v1 * v2);
        break;
      case "/":
        setResult(v1 / v2);
        break;
      default:
        setResult(0);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center bg-pink-200 min-h-screen p-2">
      <div className="w-full bg-white max-w-md p-3">
        <h1 className="text-center font-bold text-2xl">Calculator</h1>
        <div className="mb-4">
        <label className="block p-2 font-bold text-xl">Number 1:</label>
        <input 
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          className="w-full border border-pink-200 p-2"    
        />
        </div>

        <div className="mb-4">
          <select className="w-full border border-pink-200 p-2">
            <option value="+">plus(+)</option>
            <option value="-">minus(-)</option>
            <option value="*">multiply(*)</option>
            <option value="/">divide(/)</option>
          </select>
        </div>

        <div className="mb-4">
        <label className="block p-2 font-bold text-xl">Number 2:</label>
        <input 
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          className="w-full border border-pink-200 p-2"    
        />
        </div>

        <button 
        onClick={calculateResult}
        className="bg-blue-400 w-full hover:bg-blue-500 p-2 text-white text-xl font-bold">
          Calculate
        </button>

        <div className="font-bold p-3 text-xl">Result:</div>
        <div className="font-bold p-3 text-2xl">{result}</div>
      </div>
    </div>
  )
}