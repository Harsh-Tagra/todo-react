import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import("./card.scss");
function Todolist(props) {
  return (
    <>
      <li>
        {props.val}
        <IconButton
          aria-label="delete"
          className="j"
          onClick={() => {
            props.del(props.id);
          }}
        >
          <DeleteIcon className="y" />
        </IconButton>
      </li>
    </>
  );
}

export default Todolist;
