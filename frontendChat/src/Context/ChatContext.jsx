import { createContext, useEffect, useState } from "react";
import { baseUrl,getRequest } from "../utils/services";
import { json } from "react-router-dom";


export const ChatContext = createContext()

export const ChatContextProvider = ({children}) =>{

    const [user,setUser]=useState(null);

    const [userLogged,setUserLogged] = useState(()=>{
        const userf = localStorage.getItem('User');
        if(userf) return JSON.parse(userf)
        return "null";
    })

    const ActualizaLocalS = (data) =>{
        console.log("punto I",JSON.parse(data));
        setUserLogged(data);        
    }

    const [userChats,setUserChats]= useState(null)
    const [isUserChatsLoading,setIsUserChatsLoading] = useState(false);
    const [userChatsError,setisUserChatsError] = useState(null);
    const [messages,setMessages] = useState(null);
    const [currentChat,setCurrentChat] = useState(null);    
    
    useEffect(()=>{
        const ruta = JSON.parse(localStorage.getItem('User'));
        setUser(ruta);
        console.log(ruta);
        if(ruta!== null){
            fetch(`http://localhost:3000/api/chats/${ruta.id.toString()}`)
            .then(response=> response.json())
            .then(data => setUserChats(data))
        }                    
    },[userLogged]);

    const updateCurrentChat = (chat)=>{
        console.log("Desde base", chat)
        setCurrentChat(chat)        
    }
    
    useEffect(()=>{
        const getMessages = async () => {
            if(!currentChat) return null
            
            console.log(currentChat);

            const response = await getRequest(`http://localhost:3000/api/messages/${currentChat._id}`)

            setMessages(response);
            console.log(response);
        };

        getMessages();
        
    },[currentChat]);
    

    return(
        <ChatContext.Provider value={{
            userChats,
            isUserChatsLoading,
            userChatsError,
            ActualizaLocalS,
            isUserChatsLoading,
            setIsUserChatsLoading,
            user,
            messages,
            updateCurrentChat,
            currentChat
        }}>
            {children}
        </ChatContext.Provider>
    )
}