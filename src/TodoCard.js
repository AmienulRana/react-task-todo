function TodoCard({todo, onClick}) {
  // TODO: answer here
  return(
    <div className='todo-card' onClick={onClick}>
      <h2>{todo?.title}</h2>
      <p>{ !todo?.completed ? 'Not Completed' : 'Completed' }</p>
    </div>
  )
}

export default TodoCard