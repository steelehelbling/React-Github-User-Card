import React, { useState, useEffect } from "react";
import axios from "axios";

function FollowerCard() {
  const [follower, setFollower] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/steelehelbling/followers`)
      .then((res) => {
        setFollower(res.data);
      })

      .catch((error) => {
        console.error(error);
      });
  }, [FollowerCard]);

  return (
    <div>
      {follower.map((item) => (
        <div className="wrap">
          <div className="card">
            <img className="img" src={item.avatar_url} />
            <h4>{item.login}</h4>
            <p>{item.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FollowerCard;
