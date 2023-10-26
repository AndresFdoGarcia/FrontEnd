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
            <div className="flex flex-col h-full w-full  bg-white rounded-lg text-black text-xs mr-2">
                <header className="flex align-center justify-center rounded-lg p-3.5 text-white text-lg text-bold bg-black"> Chats
                </header>
                <ul className="space-y-4 mx-3 mt-3">
                    {
                        messages && messages.map((msg,index)=>(
                            <li className={`${(msg?.senderId && user?.id && msg.senderId=== user.id.toString()) ? "flex items-start mr-2 py-2 px-4 max-w-fit bg-blue-500 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white" : "ml-auto justify-end py-2 px-4 max-w-fit bg-[#68737f] rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white"}`} key={index}>
                                <div className="flex flex-col">
                                    <span className="text-base">{msg.text}</span>
                                    <span className="text-[10px] ml-auto justify-end">{moment(msg.createdAt).calendar()}</span>
                                </div>
                                                                
                            </li>
                        ))
                    }
                </ul>
            </div>
            
        </>
    )
}

export default Boxmsg