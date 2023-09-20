import logo from './logo.svg';
import './App.css';
import './App.css';
import { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState('')
  const [list, setList] = useState([])
  const [showButton, setshowButton] = useState(false)
  const [currentIndex, setCureentIndex] = useState('')

  function addItem() {
    const tempList = [...list]
    tempList.push(userInput)
    setList(tempList)
    setUserInput('')
  }

  function deleteItem(index) {
    const tempList = [...list]
    tempList.splice(index, 1)
    setList(tempList)
  }

  function editItem(index) {
    setUserInput(list[index])
    setshowButton(true)
    setCureentIndex(index)
  }

  function updateItem() {
    const userIndex = currentIndex
    const tempList = [...list]
    tempList[userIndex] = userInput
    setList(tempList)
    setUserInput('')
    setCureentIndex('')
    setshowButton(false)

  }

  function clearAll(){
    setList([])
  }
  return (
    <div className="App">
      <h1>Todo List</h1>
      <input type='text' onChange={(e) => { setUserInput(e.target.value) }} placeholder='Enter item' value={userInput} />
      {!showButton ?
        <button onClick={addItem}>Add item</button>
        :
        <button onClick={updateItem}>Update</button>}
      <button onClick={clearAll}>Clear All</button>
      <ul>
        {list.map(function (item, index) {
          return (<li style={currentIndex === index ? { backgroundColor: 'gray' } : {}} key={index}>{item}
            <button onClick={() => { deleteItem(index) }}>Delet</button>
            <button onClick={() => { editItem(index) }}>Edit</button>
          </li>)
        })}
      </ul>
    </div>
  );
}

export default App;