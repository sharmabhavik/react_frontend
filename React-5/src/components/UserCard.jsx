// To send all the data coming in props and this is called as Forwarding Props with Spread Operator.
/* import { UserInfo } from "./UserInfo"
export const UserCard = (props) => {
    return (
        <div>
            <h2>User Details</h2>
            <UserInfo {...props}/>
        </div>
    )
} */

// To print id here we have extracted it from props and rest (consist all other) sent to UserInfo and this is rest operator

import { UserInfo } from "./UserInfo"
export const UserCard = ({id="A123", ...rest}) => {
    return (
        <div>
            <h2>UserId: {id}</h2>
            <UserInfo {...rest}/>
        </div>
    )
}