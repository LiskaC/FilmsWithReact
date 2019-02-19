import React from 'react';
const improvedCard = (props) => {
  return (
    <div className="movies-list-item">
      <h2>{props.title}</h2>
      <p>Director: {props.director}</p>
      {
        props.hasOscars ?
          <p>Got the Oscar Award! </p>
          :
          <p>Great movie but no Oscars! </p>

        // { props.hasOscars && <p>Got the Oscar Award! <span>😉</span></p> }
        // { !props.hasOscars && <p>Great movie but no Oscars! <span>😔 </span></p> }
      }
      <button onClick={props.clickToDelete}>Delete</button>
    </div>
  )
};

export default improvedCard;