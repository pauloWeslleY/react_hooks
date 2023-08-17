import React from 'react'

export const UserCard = props => {
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">Alex Tancredi</div>
        <div className="description">{props.children}</div>
        <div className="ui bottom button">
          <i className="add icon"></i>
          Add Friend
        </div>
      </div>
    </div>
  )
}
