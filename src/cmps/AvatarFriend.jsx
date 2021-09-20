import React from 'react'
// import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
export const AvatarFriend = ({friend}) => {
    return (
        <div className="avatarFriend">
            <img src={friend.profilePicture} alt="" />
        </div>
    )
}
