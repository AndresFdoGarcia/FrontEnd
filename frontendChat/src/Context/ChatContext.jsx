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
        setUserLogged(data);        
    }

    const [userChats,setUserChats]= useState(null)
    const [isUserChatsLoading,setIsUserChatsLoading] = useState(false);
    const [userChatsError,setisUserChatsError] = useState(null);
    const [messages,setMessages] = useState(null);
    const [currentChat,setCurrentChat] = useState(null);
    const [isOpenProductDetail, setIsOpen] = useState(false)


//Product Detail . Open/Close
    const openProductDetail = () => setIsOpen(true);
    const closeProductDetail = () => setIsOpen(false);

    
    useEffect(()=>{
        const ruta = JSON.parse(localStorage.getItem('User'));
        setUser(ruta);        
        if(ruta!== null){
            fetch(`http://localhost:3000/api/chats/${ruta.id.toString()}`)
            .then(response=> response.json())
            .then(data => setUserChats(data))
        }                    
    },[userLogged]);

    const updateCurrentChat = (chat)=>{        
        setCurrentChat(chat)        
    }
    
    useEffect(()=>{
        const getMessages = async () => {
            if(!currentChat) return null
            const response = await getRequest(`http://localhost:3000/api/messages/${currentChat._id}`)
            setMessages(response);            
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
            currentChat,
            openProductDetail,
            closeProductDetail,
            isOpenProductDetail
        }}>
            {children}
        </ChatContext.Provider>
    )
}