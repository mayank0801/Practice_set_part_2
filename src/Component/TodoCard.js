import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/dataContext";
export default function TodoCard({
  id,
  title,
  description,
  isCompleted,
  isExpand
}) {
  // console.log(title);
  // console.log(isExpand);
  const { PendingHnadler, DoneHandler } = useContext(DataContext);
  function handleChange(idTooperate) {
    if (isCompleted) {
      PendingHnadler(idTooperate);
    } else {
      DoneHandler(idTooperate);
    }
  }
  return (
    <div style={{ border: "1px solid black" }}>
      <div
        style={{
          textDecoration: !isExpand && isCompleted ? "line-through" : ""
        }}
      >
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Status:{isCompleted ? "Done" : "Not Done"}</p>
      </div>
      {!isExpand && (
        <button onClick={() => handleChange(id)}>
          {isCompleted ? "Mark as Pending" : "Mark As Done"}
        </button>
      )}
      {isExpand && <Link to={`/todo/${id}`}>Exapand Todo</Link>}
    </div>
  );
}
