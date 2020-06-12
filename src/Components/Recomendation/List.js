import React from "react";
function List(props, { titles }) {
  return (
    <div className="List mt-2">
      <div className="title">{titles}</div>
      {props.children}
    </div>
  );
}
export default List;
