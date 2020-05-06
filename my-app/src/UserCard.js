import React from 'react';


function UserCard(props) {
  return (
    <div className='wrap'>
      <div className='card'>
        <img className='img' src={props.avatar} alt='user avatar' />
        <h4>{props.name}</h4>
        <p>location: {props.location}</p>
          <p>public repos:{props.public_repos}</p>
      </div>
    </div>
  );
}

export default UserCard;