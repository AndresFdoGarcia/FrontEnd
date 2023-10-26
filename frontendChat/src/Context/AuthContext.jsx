import { createContext,useContext,useEffect,useState } from "react";
import { baseUrl, getRequest, postRequest } from "../utils/services";
import {ChatContext} from "../Context/ChatContext";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {

    const {ActualizaLocalS} = useContext(ChatContext);

    const [user,setUser]= useState(null)
    const [registerInfo, setRegisterInfo] = useState({
        FirstName: "",
        LastName: "",
        UserName: "",
        Email: "",
        Password:"",
        Rol:""
    });
    const [loginInfo,setLoginInfo]= useState({        
        UserName: "",        
        Password:""        
    })

    useEffect(()=>{
        const user = localStorage.getItem("User");
        setUser(JSON.parse(user));        
    },[loginInfo]);

    const[isRegisterLoading, setIsRegisterLogin] = useState(false);
    const [RegisterError,setRegisterError] = useState(null);

    const [LoginError,setLoginError] = useState(null);
    

    const UpdateInfo = (info)=>{        
        setRegisterInfo(info);
        console.log("registerInfo",registerInfo);
    }

    const UpdateLoginInfo = (data)=>{
        setLoginInfo(data);        
    }

    const recarga = (data)=>{
        setUser(data)
    }

    const registerUser = async(e)=>{
        e.preventDefault()        
        
        setIsRegisterLogin(true);
        setRegisterError(null);

        const response = await postRequest(`${baseUrl}/Create`,JSON.stringify(registerInfo))

        setIsRegisterLogin(false)

        if(response.error){
            return setRegisterError(response);
        }        

        localStorage.setItem("User",JSON.stringify(response.UserName))        
    }

    const loginUser = async(e)=>{
        e.preventDefault();
        
        setLoginError(null);

        const response = await postRequest(`${baseUrl}/Login`,JSON.stringify(loginInfo));
        console.log(response);

        document.cookie = `token=${response.message}; max-age=${2592000};`        
        
        if(response.error){
            return setLoginError(response);
        }
        
        const result = await getRequest(`https://localhost:7260/api/Users/OneUser?username=${loginInfo.UserName}`)
        localStorage.setItem("User",JSON.stringify(result))        
        const todosFromStorage = localStorage.getItem('User');        
        ActualizaLocalS(todosFromStorage)
        setRegisterInfo(todosFromStorage)
        recarga(JSON.parse(todosFromStorage))
        console.log("Solo quiero saberlo",todosFromStorage)
    }

    const logOut = () => {
        localStorage.removeItem("User");
        setUser(null);
    }

    return(
        <AuthContext.Provider value={{
            user,
            setUser,
            registerInfo,
            setRegisterInfo,
            UpdateInfo,
            registerUser,
            RegisterError,
            isRegisterLoading,
            loginInfo,
            UpdateLoginInfo,
            loginUser,
            logOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}