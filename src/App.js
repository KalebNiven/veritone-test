import React, { useState, useMemo } from 'react'
import ControlForm from './components/ControlForm'
import TodoList from './components/TodoList'

const App = () => {
  const [items, setItems] = useState([])
  const [newInput, setNewInput] = useState('')
  const [isAscSort, setIsAscSort] = useState(true)

  const handleChange = (e) => {
    setNewInput(e.target.value)
  }

  //This function adds a new item to the list and clears the input
  const handleSubmit = (e) => {
    e.preventDefault()
    setItems(prev => [...prev, newInput.trim()])
    setNewInput('')
  }

  //This function clears the items, input, and sort
  const handleClear = () => {
    setNewInput('')
    setItems([])
    setIsAscSort(true)
  }

  //This function will sort the items when 'items' and 'isAscSort' change
  //useMemo is to prevent unnecessary rerun of this function (i.e. changing the input)
  const sortedItems = useMemo(() => {
    if (isAscSort) {
      items.sort()
    } else {
      items.sort().reverse()
    }
    return items
  }, [items, isAscSort])

  return (
    <div className='container'>
      <ControlForm
        inputValue={newInput}
        handleChange={handleChange}
        isAscSort={isAscSort}
        setIsAscSort={setIsAscSort}
        handleSubmit={handleSubmit}
        handleClear={handleClear} />
      <TodoList items={sortedItems} />
    </div>
  )
}

export default App
