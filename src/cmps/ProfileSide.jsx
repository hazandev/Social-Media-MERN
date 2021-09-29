import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { AvatarFriend } from "./AvatarFriend";
import { userService } from "../services/userService";

export const ProfileSide = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [friendsPicture, setFriendsPicture] = useState(null);
  //api get user post
  useEffect(async () => {
    setUser(await userService.getById(id));
  }, []);

  useEffect(async () => {
    const friendsUser = [];
    if (user) {
      user.friendsID.forEach( async (id) => {
        const friend = await userService.getById(id);
        friendsUser.push(friend.profilePicture);
      });
      setFriendsPicture(friendsUser);
      console.log(friendsPicture);
    }
  }, [user]);

  return (
    <div className="rightbar profileSide">
      {(user && friendsPicture) && (
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
          {friendsPicture && (
            <div className="infoSideFriends">
              <h4>Friends</h4>
              <ul className="friendsList">
                {friendsPicture.map((pictureUrl, index) => (
                  <AvatarFriend key={index} profilePicture={pictureUrl} />
                ))}
              </ul>
            </div>
          )}
          {user && (
            <Link
              className="listArticleProfile"
              to={`/home/${user._id}/article`}
            >
              <h4>Click To Articles</h4>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};
