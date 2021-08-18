import React from 'react'

const ControlForm = (props) => {
  const { inputValue, handleChange, isAscSort, setIsAscSort, handleSubmit, handleClear } = props

  return (
    <form className='control-form' onSubmit={handleSubmit}>
      <input value={inputValue} onChange={handleChange} />
      {isAscSort
        ? <button type='button' onClick={() => setIsAscSort(false)}>⬇️</button>
        : <button type='button' onClick={() => setIsAscSort(true)}>⬆️</button>}
      <button type='button' onClick={() => handleClear()}>🆑</button>
    </form>
  )
}

export default ControlForm
