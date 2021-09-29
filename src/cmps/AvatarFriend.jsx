import {Link} from 'react-router-dom'
export const AvatarFriend = ({profilePicture}) => {
    return (
        <div className="avatarFriend">
            <img src={profilePicture} alt="" />
        </div>
    )
}
