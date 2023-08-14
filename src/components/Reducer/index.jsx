import { useReducer, useState } from 'react'
import { Button } from '../Button'
import { InputField } from '../InputField'
import './reducer.css'

const reducer = (state, action) => {
  switch (action.type) {
    case 'add-task':
      return {
        tasks: [...state.tasks, { name: action.payload, isCompleted: false }],
        tasksCount: state.tasksCount + 1,
      }

    case 'toggle-task':
      return {
        ...state,
        tasks: state.tasks.map((item, index) =>
          index === action.payload ? { ...item, isCompleted: !item.isCompleted } : item
        ),
      }
    default:
      return state
  }
}

export const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, { tasks: [], tasksCount: 0 })
  const [inputValue, setInputValue] = useState('')

  return (
    <div className="wrapper">
      <InputField value={inputValue} onChange={event => setInputValue(event.target.value)} />

      <Button
        onClick={() => {
          dispatch({ type: 'add-task', payload: inputValue })
          setInputValue('')
        }}
        name="Add"
      />

      <div className="tasks">
        {state.tasks.map((task, i) => (
          <div key={i} className="tasks-list">
            <span
              style={{
                textDecoration: task.isCompleted ? 'line-through' : 'none',
                color: task.isCompleted ? 'var(--violet-700)' : 'var(--zinc-200)',
              }}
            >
              {task.name}
            </span>
            <Button
              name="completed"
              onClick={() => dispatch({ type: 'toggle-task', payload: i })}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
