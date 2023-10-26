import { useContext } from "react"
import { ChatContext} from "../../Context/ChatContext";
import UserChat from "../../Components/chat";
import Boxmsg from "../../Components/boxmsg";
import './style.css';
import { AuthContext} from '../../Context/AuthContext';
import CheckOutSideMenu from "../../Components/CheckOutSidemenu"



function ChatIntcomex() {
    
    const {userChats,updateCurrentChat,user,openProductDetail} = useContext(ChatContext);
    const {registerInfo} = useContext(AuthContext);    
    
    return(
        <>
        <div className="flex flex-row max-w-full tamano py-4 px-2 bg-zinc-200 rounded-lg lg:justify-center mt-20 mx-10">
            <div className="flex-col mt-2 container1 justify-center relative w-1/4">
                <button className="absolute top-0 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
                onClick={()=> openProductDetail()}>
                    Currency Bot</button>
                <div>
                    {userChats?.length < 1 ? null: (
                    <div className="self-center min-w-[100px] mr-2">                    
                        <ul>
                        {
                            userChats?.map((chat,index)=>{
                                return(
                                    <li className="cursor-pointer w-full h-16 border  bg-white/80 rounded-lg text-black text-xs mb-4 py-0.4 self-center" key={index} onClick={()=> updateCurrentChat(chat)}>
                                        <UserChat chat={chat} user={user} />                                        
                                    </li>
                                )
                            })
                        }
                        </ul>                    
                    </div>
                    )}
                </div>
                
            </div>
            <Boxmsg />
            <CheckOutSideMenu />
        </div>
        </>
    )
}

export default ChatIntcomex