import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const Navbar = () => {

    const {user,logOut} = useContext(AuthContext)
    
    let menu1 = [
        {
            to: '/',
            text: 'ChatIntcomex',
            className: 'font-semibold text-3xl',
            visible: true
        }
    ];
    let menu2 =[        
        {
            to: '',
            text: `Login as ${user?.firstname ?? null}`,            
            className: '',
            visible: user ? true : false
        },     
        {
            to: '/chat',
            text: 'Chat',
            className: '',
            visible: user ? true : false
        },
        {
            to: '/login',
            text: 'Login',
            className: '',
            visible: user ? false : true
        },
        {
            to: '/register',
            text: 'Sign UP',
            className: '',
            visible: user ? false : true
        },
        {
            to: '/about',
            text: '💬',
            className: '',
            visible: true
        }
    ]

    const textDecoration = 'underline underline-offset-4'

    return(
        <nav className="flex items-center fixed justify-between z-10 top-0 w-full py-5 px-8 text-sm">
            <ul className="flex gap-3 items-center">
            {menu1.map(link => (
                link.visible === true ? (
                <li 
                    key={link.text}
                    className={link.className}
                >
                    <NavLink 
                        to={link.to}
                        className={({isActive})=> isActive && link.text !=="ChatIntcomex"
                        ? textDecoration : undefined }
                    >
                        {link.text}
                    </NavLink>
                </li>
                ) : null
            ))}
            </ul>
            <ul className='flex gap-3 items-center'>
            {menu2.map(link => (
                link.visible === true ? (
                    <li 
                    key={link.text}
                    className={link.className}
                >
                    <NavLink 
                        to={link.to}
                        className={({isActive})=> isActive ? textDecoration : undefined }
                    >
                        {link.text}
                    </NavLink>
                </li>
                ) : null                
            ))}
            {
                user &&(<li className="cursor-pointer" onClick={logOut}>LogOut</li>)
            }
        </ul>
        </nav>
    );
}

export default Navbar