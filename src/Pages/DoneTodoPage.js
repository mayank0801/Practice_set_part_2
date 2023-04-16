import { useContext } from "react";
import TodoCard from "../Component/TodoCard";
import { DataContext } from "../context/dataContext";

export default function DoneTodoPage() {
  const { todoData } = useContext(DataContext);
  const closeTodo = todoData.filter((item) => item.isCompleted);
  console.log(closeTodo);
  return (
    <div>
      {closeTodo.map((item) => (
        <TodoCard {...item} isExpand={true} />
      ))}
    </div>
  );
}
