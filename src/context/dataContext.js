import { createContext, useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch";
export const DataContext = createContext();

export default function DataProvider({ children }) {
  const [todoData, setTodoData] = useState([]);
  const getTodoData = async () => {
    try {
      const {
        data: { todos }
      } = await fakeFetch("https://example.com/api/todos");
      // console.log(todos);
      setTodoData(todos);
      // console.log(todoData);
    } catch (E) {
      console.log(E);
    }
  };
  useEffect(() => {
    getTodoData();
  }, []);

  function DoneHandler(idtooperate) {
    setTodoData(
      todoData.map((item) =>
        item.id === idtooperate
          ? { ...item, isCompleted: !item.isCompleted }
          : { ...item }
      )
    );
  }
  function PendingHnadler(idtooperate) {
    setTodoData(
      todoData.map((item) =>
        item.id === idtooperate
          ? { ...item, isCompleted: !item.isCompleted }
          : { ...item }
      )
    );
  }
  return (
    <>
      <DataContext.Provider value={{ todoData, DoneHandler, PendingHnadler }}>
        {children}
      </DataContext.Provider>
    </>
  );
}
