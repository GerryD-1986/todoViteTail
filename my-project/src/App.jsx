import { useState } from "react"

export default function App(){
  //lsta de todos
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  function addTodo(){
   // todos.push(text);
   setTodos([...todos, text]);

  }

  function onSubmit(event){
    event.preventDefault();
    addTodo();
    setText("");
  }

  function removeTodo(indexToRemove){
    todos.splice(indexToRemove, 1);
    setTodos([...todos]);
  }




  return (
    <main className="w-full min-h-screen">
      <form className="flex flex-row gap-2 justify-center p-5" onSubmit={onSubmit}>
    <input type="text" className="p-2 rounded-md text-black w-full max-w-screen-sm" placeholder="Ingresa una tarea" value={text} onChange={(event)=> setText(event.target.value)}
    required></input>
    <button className="bg-white text-black px-3 rounded">+ Agregar </button>
    </form>
    <div className="max-w-screen-sm w-full mx-auto px-4 flex flex-col gap-1">
      {todos.length == 0 && <p className="text-withe/50">No tienes tareas pendientes</p>}
      {todos.length > 0 &&
        todos.map((todo, idx)=>{
          return (
          <div key={`todo-${idx}`}
          className="bg-white/10 rounded p-4 flex flex-row justify-between">
            <span className="select-none">{todo}</span>
            <span className="text-red-500 cursor-pointer hover:bg-red-500 hover:text-white rounded-full p-1 size-5 text-center items-center flex"
            onClick={()=>removeTodo(idx)}>X</span></div>
            );
          })
      }
    </div>
    </main>
  );
}
