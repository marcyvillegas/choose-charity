import { useState } from 'react' 
import MainContainer from './components/MainContainer'
import List from './components/List'

function App() {

  // to-do list state
  const [toDoList, setToDoList] = useState([])
  
  // function that adds todoInfo to toDoList
  function addToDoList(newTodoInfo) {
    setToDoList([...toDoList, newTodoInfo])
  }

  return (
    <div className="App">
      <MainContainer addToDoList={addToDoList} />
      <List toDoList={toDoList} setToDoList={setToDoList} />
    </div>
  );
}

export default App;
