import { useContext } from "react"
import { ChatContext} from "../../Context/ChatContext";
import UserChat from "../../Components/chat";
import Boxmsg from "../../Components/boxmsg";
import './style.css';
import { AuthContext} from '../../Context/AuthContext';


function ChatIntcomex() {
    
    const {userChats,updateCurrentChat,user} = useContext(ChatContext);
    const {registerInfo} = useContext(AuthContext);    
    
    return(
        <>
        <div className="flex flex-row items-center tamano py-4 px-2 bg-black rounded-lg lg:justify-center mt-20 mx-10">
            {userChats?.length < 1 ? null: (
                <div className="flex flex-col align-items-start min-w-[250px] w-1/4 px-3">
                    <ul>
                        {
                            userChats?.map((chat,index)=>{
                                return(
                                    <li className="cursor-pointer flex-grow-0 pe-3 gap-2 w-full h-20 border  bg-white/60 rounded-lg text-black text-xs m-2 px-2 py-0.4" key={index} onClick={()=> updateCurrentChat(chat)}>
                                        <UserChat chat={chat} user={user} />                                        
                                    </li>
                                )
                            })
                        }
                    </ul>
                    
                </div>
            )
            }
        <Boxmsg />
        </div>
        </>
    )
}

export default ChatIntcomex