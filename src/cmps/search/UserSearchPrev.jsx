import {Avatar} from '../Avatar'
export const UserSearchPrev = ({user}) => {
    return (
        <div className="userSearchPrev">
            <Avatar user = {user} chat={false}/>
        </div>
    )
}
