import React from 'react'

const TodoList = (props) => {
  const { items } = props
  return (
    <ul className='todo-list'>
      {items.map((item, index) => (
        <li key={index}>
          {item}
        </li>
      ))}
    </ul>
  )
}

export default TodoList
