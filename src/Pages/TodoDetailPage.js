import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/dataContext";

export default function TodoDetailPage() {
  const { toDoId } = useParams();
  const { todoData } = useContext(DataContext);
  console.log(toDoId);
  const todoDetail = todoData.find(({ id }) => id === Number(toDoId));
  console.log(todoDetail);
  return (
    <>
      <h1>
        Open Todo:
        {todoData.reduce(
          (acc, { isCompleted }) => (isCompleted ? acc + 1 : acc),
          0
        )}
      </h1>
      <div style={{ marginTop: "4rem" }}>
        <h3>{todoDetail?.title}</h3>
        <p>{todoDetail?.description}</p>
        <p>Staus:{todoDetail?.isCompleted ? "Done" : "Not Done"}</p>
      </div>
    </>
  );
}
