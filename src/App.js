import { TodoImput } from "./componenst/TodoImput";
import { TodoList } from "./componenst/TodoList";
import { Title} from "./componenst/title/title";




function App() {
  return (
    <div className="bg-gray-900 min-h-screen h-full text-gray-100 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <Title />
        <TodoImput />
        <TodoList>
          <h2>
            Todo List
          </h2>
        </TodoList>
      </div>
    </div>
  );
}

export default App;
