// import React, { useState } from "react";

// import SideBar from "./components/SideBar";
// import MainContent from "./components/MainContent";
// import "./App.css";

// function App() {
//   const [item, setItem] = useState("");
//   const [toDos, setToDos] = useState([]);

//   function handleSubmit(e) {
//     e.preventDefault();

//     setToDos((toDos) => {
//       return [
//         ...toDos,
//         {
//           id: crypto.randomUUID(),
//           title: item,
//           completed: false,
//         },
//       ];
//     });

//     setItem("");
//   }

//   function toggleToDo(id, completed) {
//     setToDos((currentToDos) => {
//       return currentToDos.map((toDo) => {
//         if (toDo.id == id) {
//           return { ...toDo, completed };
//         }
//         return toDo;
//       });
//     });
//   }

//   function deleteToDo(id) {
//     setToDos((currentToDos) => {
//       return currentToDos.filter((toDo) => toDo.id !== id);
//     });
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={item}
//         onChange={(e) => setItem(e.target.value)}
//       />
//       <button>add</button>
//       {toDos.length === 0 && "No To Dos"}
//       {toDos.map((toDo) => {
//         return (
//           <li key={toDo.id}>
//             <input
//               type="checkbox"
//               checked={toDo.completed}
//               onChange={(e) => toggleToDo(toDo.id, e.target.checked)}
//             />
//             {toDo.title}
//             <button onClick={() => deleteToDo(toDo.id)}>Delete</button>
//           </li>
//         );
//       })}
//     </form>
//   );
// }

// export default App;
