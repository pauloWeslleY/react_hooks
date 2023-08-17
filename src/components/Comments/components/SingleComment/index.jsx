/* eslint-disable jsx-a11y/img-redundant-alt */

export const SingleComment = ({ author, picture, date, text }) => (
  <div className="comment">
    <a href="/" className="avatar">
      <img src={picture} alt="Profile" />
    </a>
    <div className="content">
      <a href="/" className="author">
        {author}
      </a>
      <div className="metadata">
        <span className="date">{date}</span>
      </div>
      <div className="text">{text}</div>
    </div>
  </div>
)
