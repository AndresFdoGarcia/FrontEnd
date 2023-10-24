import { useContext } from "react";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipient";

const UserChat = (chat,user) => {
    const {recipientUser} = useFetchRecipientUser(chat,user)    
    
    return(
        <>
            <div className="flex flex-col gap-3 align-items-center p-2 justify-between">
                <div className="flex flex-row">
                    <div className="me-2">A</div>
                    <div className="name">{recipientUser?.firstname}</div>                    
                </div>
                <div className="text">Text message</div>                
            </div>
        </>
    )
}

export default UserChat