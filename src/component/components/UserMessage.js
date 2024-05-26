import React from "react";

export default function UserMessage({ text }) {
  return (
    <div className="message-container">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG1MWoKNfCnibOaJ0sFzAlImPtsW8Kvphx0ZxuJfqbFvxYEk2Ulo_dfw1TWCnf0H65Hg0&usqp=CAU" className="usermsg"></img>
      <div className="user-message">{text}</div>
    </div>
  );
}
