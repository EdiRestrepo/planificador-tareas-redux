import AddTask from "./components/AddTask";
import StatusFilter from "./components/StatusFilter";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexDirection: 'column'

    }}>

      <StatusFilter/>
      <AddTask/>
      <TaskList/>
    </div>
  );
}

export default App;
