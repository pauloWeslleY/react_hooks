import { useEffect, useState } from 'react'

export const HeroList = ({ getItems }) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    getItems().then(result => setItems(result))
  }, [getItems])

  return (
    <>
      {items &&
        items.map(item => (
          <p key={item.id} style={{ color: 'var(--indigo-200)', fontSize: '1.15rem' }}>
            {item?.title || item?.name}
          </p>
        ))}
    </>
  )
}
