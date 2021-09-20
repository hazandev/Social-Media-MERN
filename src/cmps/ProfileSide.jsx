import { useParams, useHistory, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Users } from "../data/dummyData";
import { AvatarFriend } from "./AvatarFriend";
import { Articles } from "../data/dummyData";
export const ProfileSide = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    setUser(Users[id - 1]);
  }, []);

  return (
    <div className="rightbar profileSide">
      {user && (
        <div className="profileSideWrapper">
          <div className="profileLink">
            <a target="_blank" href={user.linkedin}>
              <LinkedInIcon className="linkUser" />
            </a>
            <a target="_blank" href={user.git}>
              <GitHubIcon className="linkUser" />
            </a>
          </div>
          <ul className="infoProfile">
            <li className="infoProfileItem">
              <label htmlFor="">Name: </label>
              <p>{user.username}</p>
            </li>
            <li className="infoProfileItem">
              <label htmlFor="">Bio: </label>
              <p>{user.bio}</p>
            </li>
            <li className="infoProfileItem">
              <label htmlFor="">Mail: </label>
              <p>{user.mail}</p>
            </li>
          </ul>
          {user && (
            <div className="infoSideFriends">
              <h4>Friends</h4>
              <ul className="friendsList">
                {user.friendsID.map((id) => {
                  return <AvatarFriend key={id} friend={Users[id - 1]} />;
                })}
              </ul>
            </div>
          )}
          {user && (
            <Link className="listArticleProfile" to={`/home/${user.id}/article`}>
              <h4>Click To Articles</h4>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};
