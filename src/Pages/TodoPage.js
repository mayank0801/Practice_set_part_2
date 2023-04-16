import { useContext } from "react";
import TodoCard from "../Component/TodoCard";
import { DataContext } from "../context/dataContext";

export default function TodoPage() {
  const { todoData } = useContext(DataContext);
  // const [todoData, setTodoData] = useState([]);
  // const getTodoData = async () => {
  //   try {
  //     const {
  //       data: { todos }
  //     } = await fakeFetch("https://example.com/api/todos");
  //     // console.log(todos);
  //     setTodoData(todos);
  //     // console.log(todoData);
  //   } catch (E) {
  //     console.log(E);
  //   }
  // };
  // useEffect(() => {
  //   getTodoData();
  // }, []);
  return (
    <div>
      <h1>Work list</h1>
      {todoData.map((todoitem) => (
        <TodoCard {...todoitem} />
      ))}
    </div>
  );
}
