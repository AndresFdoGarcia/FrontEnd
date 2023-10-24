import { useEffect,useState,useContext } from "react";
import { baseUrl, getRequest } from "../utils/services";


export const useFetchRecipientUser = (chat,user)=>{
    const [recipientUser,setRecipientUser]= useState(null);
    
    const media = JSON.parse(localStorage.getItem("User"))
    
    const recipientId = chat.chat?.members?.find(id => id != (media.id).toString())    

    useEffect(()=>{
        const getUser = async () => {
            if(!recipientId) return null

            const response = await getRequest(`${baseUrl}/OnlyUser?id=${recipientId}`)

            setRecipientUser(response);
            console.log(response);
        };

        getUser();
        
    },[user]);

    return {recipientUser}
}