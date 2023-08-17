import { useMemo } from 'react'
import { SingleComment } from './components/SingleComment'
import { UserCard } from './components/UserCard'
import { COMMENTS } from './data'

export const Comments = () => {
  const data = useMemo(() => {
    const comment = COMMENTS.map(props => {
      return {
        author: props.author,
        profile: props.profile,
        date: props.date,
        text: props.text,
      }
    })

    return comment
  }, [])

  return (
    <div className="ui comments">
      <UserCard>
        <div>Hello my name is Sarah, and I am live in Istambul</div>
      </UserCard>
      {data.map((props, index) => (
        <UserCard key={index}>
          <SingleComment
            author={props.author}
            picture={props.profile}
            date={props.date}
            text={props.text}
          />
        </UserCard>
      ))}

      {/* <SingleComment author="Alex" picture={profile1} date="Today at 5:00PM" text="it's amazing" />
      <SingleComment author="Jack" picture={profile1} date="Today at 5:00PM" text="it's amazing" />
      <SingleComment author="Sarah" picture={profile1} date="Today at 5:00PM" text="it's amazing" /> */}
    </div>
  )
}
