import { Users } from "../../data/dummyData";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Blog } from "../Blog";
import { userService } from "../../services/userService";

export const ProfileArticle = () => {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  useEffect( () => {
    async function fetchData(){
      setUser(await userService.getById(id));
    }
    fetchData()

  }, []);
  
  return <div>{user && <Blog userId={user._id} />}</div>;
};
