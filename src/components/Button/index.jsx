import './button.css'

export const Button = ({ name, onClick }) => (
  <button type="button" className="buttonHero" onClick={onClick}>
    {name}
  </button>
)
