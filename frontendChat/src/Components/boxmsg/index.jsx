import { useContext, useEffect } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { useFetchRecipientUser } from "../../hooks/useFetchRecipient";
import { ChatContext } from "../../Context/ChatContext";
import moment from "moment";

const Boxmsg = () => {

    const {registerInfo,user} = useContext(AuthContext);
    const {currentChat,messages} = useContext(ChatContext);
    

    return(
        <>
            <div className="flex flex-col h-full w-full  bg-white/60 rounded-lg text-black text-xs m-2">
                <header className="flex align-center justify-center p-3.5 text-white text-lg text-bold bg-[#1e1e1e]">                    
                </header>
                <ul className="space-y-4">
                    {
                        messages && messages.map((msg,index)=>(
                            <li className={`flex flex-col ${(msg?.senderId && user?.id && msg.senderId=== user.id.toString()) ? "flex items-start" : "flex items-end"}`} key={index}>
                                <span>{msg.text}</span>
                                <span>{moment(msg.createdAt).calendar()}</span>                                
                            </li>
                        ))
                    }
                </ul>
            </div>
            
        </>
    )
}

export default Boxmsg