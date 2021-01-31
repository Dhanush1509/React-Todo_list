import react from "react";
import "../styles.css";

export default function Todo(props) {
  console.log(props.items);
  return (
    <div className="list__items">
      {/* {localStorage.set("todoItems", JSON.parse(props.items))} */}
      {props.items.map((todoItem, index) => (
        <li key={index}>{todoItem}</li>
      ))}
    </div>
  );
}
