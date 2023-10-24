import { useRoutes,BrowserRouter } from 'react-router-dom'
import Home from '../Home';
import ChatIntcomex from '../Chat';
import RegisterU from '../Register';
import LoginUser from '../Login';
import Navbar from '../../Components/Navbar';
import { AuthContext, AuthContextProvider } from '../../Context/AuthContext';
import { ChatContextProvider } from '../../Context/ChatContext';
import { useContext } from 'react';

const AppRoutes = () =>{
  const { user } = useContext(AuthContext);
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/chat', element: (user ? <ChatIntcomex /> : <LoginUser />) },
    { path: '/register', element: (user ? <ChatIntcomex /> :<RegisterU />)  },
    { path: '/login', element: (user ? <ChatIntcomex /> : <LoginUser />)  }    
  ])
  return routes
}

const App = () => {    
  return(
    <ChatContextProvider>
    <AuthContextProvider>      
      <BrowserRouter>    
        <Navbar />
          <AppRoutes />    
      </BrowserRouter>          
    </AuthContextProvider>
    </ChatContextProvider>   
  )
}

export default App