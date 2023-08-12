import "./App.css";
import { useState } from "react";

let App = () => {
  let [data, setData] = useState("");
  let [todo, setTodo] = useState([]);
  let [f, setF] = useState(true);
  let [t, setT] = useState([]);
  let fun = (e) => {
    setData(e.target.value);
    console.log(data);
  };

  let add = () => {
    setTodo([...todo, data]);
    setT([...t, true]);
    setData("");
  };

  let mark = (index) => {
    if (t[index]) {
      t[index] = false;
      setT([...t]);
    } else {
      t[index] = true;
      setT([...t]);
    }
  };
  let del = (index) => {
    todo.splice(index, 1);
    setTodo([...todo]);
  };

  return (
    <div className="screen">
      <div className="todo">
        <div className="title">
          <i className="fa-solid fa-bars"></i>
          <div>Todo Website</div>
        </div>
        <input type="text" id="i1" value={data} onChange={fun} />
        <div className="list">
          {todo.map((item, index) => {
            return (
              <div className="litems">
                {t[index] && (
                  <i
                    className="fa-regular fa-circle"
                    onClick={() => mark(index)}
                  ></i>
                )}
                {!t[index] && (
                  <i
                    className="fa-regular fa-circle"
                    id="cir1"
                    onClick={() => mark(index)}
                  ></i>
                )}
                {t[index] && <div className="item1">{item}</div>}
                {!t[index] && <div className="item2">{item}</div>}
                <i
                  className="fa-solid fa-trash-can"
                  onClick={() => del(index)}
                ></i>
              </div>
            );
          })}
          {f && (
            <button className="b1" onClick={add}>
              Add New
            </button>
          )}
          {!f && <button className="b1">Update</button>}
        </div>
      </div>
    </div>
  );
};

export default App;
