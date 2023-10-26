import { useContext } from "react";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipient";
import Avatar from 'react-avatar';

const UserChat = (chat,user) => {
    const {recipientUser} = useFetchRecipientUser(chat,user)
    const Letter = recipientUser?.firstname[0];
    const colores = ['red', 'green', 'blue', 'black', 'brown', 'purple'];
    const index = Math.floor(Math.random() * colores.length);
    
    return(
        <><div className="flex flex-row max-w-xs">
                <div className="flex w-auto mt-2 ml-1 p-1">
                    <Avatar value={Letter} size="40" round="20px" color={colores[index]}/> 
                </div>                                                          
                <div className="flex w-full justify-center items-center pt-2 font-sans font-semibold text-sm">{recipientUser?.firstname} {recipientUser?.lastname}</div>                          
            </div>        
        </>
    )
}

export default UserChat