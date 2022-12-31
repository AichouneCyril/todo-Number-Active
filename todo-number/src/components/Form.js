import React, { useState, useEffect } from "react";
import Item from "./Item";
import { v4 as uuidv4 } from "uuid";
import { getNumbers, postNumber, deleteNumber } from "../api";

export default function Form() {
  const [dataArr, setDataArr] = useState([
    { number: "1", id: uuidv4() },
    { number: "10", id: uuidv4() },
    { number: "11", id: uuidv4() },
    { number: "111", id: uuidv4() },
  ]);

  const [stateInput, setStateInput] = useState("");


  const linkedInput = (e) => {
    setStateInput(e);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getNumbers();
      
      setStateInput(response.data);
    };
    fetchData();
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    const newArr = [...dataArr];
    const newTodo = {};
    newTodo.number = stateInput;
    newTodo.id = uuidv4();
    newArr.push(newTodo);
    setDataArr(newArr);
    postNumber({ number: stateInput });
    setStateInput("");
  };
  
  const deleteElement = (id) => {
    const filteredState = dataArr.filter((item) => {
      return item.id !== id;
    });
    deleteNumber(id);
    setDataArr(filteredState);
  };

  return (
    <div className="m-auto px-4 col-12 col-sm10 col-lg-6">
      <form onSubmit={addTodo} className="mb-3">
        <label htmlFor="todo" className="form-label mt-3">
          Chose à faire
        </label>
        <input
          value={stateInput}
          onInput={(e) => linkedInput(e.target.value)}
          type="text"
          className="form-control"
          id="todo"
        />
        <button className="mt-2 btn btn-primary d-block">Envoyer</button>
      </form>
      <h2>Liste des choses à faire</h2>
      <ul className="list-group">
        {dataArr.map((item) => {
          return (
            <Item
              number={item.number}
              key={item.id}
              id={item.id}
              delFunc={deleteElement}
            />
          );
        })}
      </ul>
    </div>
  );
}
