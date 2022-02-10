import React, { useState } from "react";
import "./card.scss";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Todolist from "./Todolist";

import { Card } from "@material-ui/core";
function Cardd() {
  const [inputData, setInputData] = useState("");
  const [s, sets] = useState([]);
  const h = (e) => {
    const a = e.target.value;
    setInputData(a);
  };
  const save = () => {
    if (inputData !== "") {
      sets((inputDat) => {
        return [...inputDat, inputData];
      });
      setInputData("");
    }
  };
  const del = (id) => {
    sets((inputDat) => {
      return inputDat.filter((el, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <Card className="card">
        {" "}
        <h1> todo</h1>
        <TextField
          id="standard-basic"
          label="type text here"
          onChange={h}
          value={inputData}
        />
        <Fab onClick={save} className="f">
          <AddIcon />
        </Fab>
        <ul>
          {" "}
          {s.map((val, index) => {
            return (
              <Todolist s={s} key={index} id={index} del={del} val={val} />
            );
          })}
        </ul>
      </Card>
    </>
  );
}
export default Cardd;
