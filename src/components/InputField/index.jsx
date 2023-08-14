import './input.css'

export const InputField = ({ value, onChange, label }) => {
  return (
    <>
      {label && (
        <label htmlFor="name" className="inputLabel">
          Hello! My name is {label}
        </label>
      )}

      <input type="text" className="inputField" value={value} onChange={onChange} />
    </>
  )
}
