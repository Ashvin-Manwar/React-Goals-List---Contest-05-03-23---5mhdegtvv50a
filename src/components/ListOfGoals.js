import React from "react";

const ListOfGoals = ({goal}) => {
    return (
      <ul>
        {goal.map(({goal,by},i)=>(
        <li key={i}>
            <p>My goal is to {goal}, by {by}.</p>
          </li>
))}
      </ul>
    );
}

export default ListOfGoals;
