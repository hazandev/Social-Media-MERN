import { Users } from "../data/dummyData";
import { AvatarFriend } from "./AvatarFriend";
import { Articles } from "../data/dummyData";
import { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { Blog } from "./Blog";
export const ProfileArticle = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    setUser(Users[id - 1]);
  }, []);
  return <div>{user && <Blog userId={user.id} />}</div>;
};
