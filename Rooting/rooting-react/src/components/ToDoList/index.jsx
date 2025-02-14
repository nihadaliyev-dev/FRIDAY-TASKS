import { useState } from "react";

const ToDoList = () => {
  const handleForm = (e) => {
    e.preventDefault();

    if (newTitle.length > 0) {
      const newToDo = {
        id: Date.now(),
        title: newTitle,
        isCompleted: false,
      };

      setNewTitle("");
      setToDos([...toDos, newToDo]);
      console.log(toDos);
    } else {
      alert("Cannot add empty task!");
    }
  };

  const handleDelete = (id) => {
    const filteredProducts = toDos.filter((todo) => todo.id !== id);
    setToDos(filteredProducts);
  };
  const handleIsComplete = (id) => {
    const todo = toDos.find((q) => q.id === id);
    todo.isCompleted = !todo.isCompleted;
    console.log(todo);
    setToDos([...toDos]);
  };

  const [toDos, setToDos] = useState([]);
  const [newTitle, setNewTitle] = useState("");

  return (
    <div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4"
      style={{
        padding: "16px",
        boxShadow: "0px 0px 20px #fbfbfb50",
        borderRadius: "12px",
      }}
    >
      <div>
        <form
          style={{ display: "flex", alignItems: "flex-end", gap: "12px" }}
          action=""
          onSubmit={(e) => handleForm(e)}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "4px",
              flexDirection: "column",
            }}
          >
            <label htmlFor="">To Do Title</label>
            <input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              style={{
                border: "2px solid white",
                borderRadius: "8px",
                padding: "8px",
              }}
              type="text"
            />
          </div>
          <div>
            <button>Add ToDo</button>
          </div>
        </form>
      </div>
      <div>
        <ul className="grid gap-2">
          {toDos.map((toDo) => (
            <li
              key={toDo.id}
              style={{ display: "flex", alignItems: "center", gap: "8px" }}
            >
              <input
                className="w-6 h-6"
                type="checkbox"
                onClick={() => handleIsComplete(toDo.id)}
              />
              <p className={toDo.isCompleted ? "line-through" : "decoration-0"}>
                {toDo.title}
              </p>
              <button onClick={() => handleDelete(toDo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
