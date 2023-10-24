import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";


function LoginUser() {

    const {loginInfo,UpdateLoginInfo,loginUser} = useContext(AuthContext)


    return(
        <>
            <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js" defer></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/zxcvbn/4.4.2/zxcvbn.js"></script>

        <style>@import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')</style>
      <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
      <div
        className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md"
      >
        <div className="p-4 py-6 text-white bg-cover bg-center bg-[url('https://s7d1.scene7.com/is/image/dmqualcommprod/workflow-optimization-with-personalized-on-device-generative-ai')] md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
            <img src=""></img>          
        </div>
        <div className="p-5 bg-white md:flex-1">
            <h3 className="my-4 text-2xl font-semibold text-gray-700">Login</h3>
            <form id="my_form" className="space-y-6"
            onSubmit={loginUser}          
            >               

            <div className="flex -mx-3">
                <div className="w-full px-3">
                    <label className="text-xs font-semibold px-1">Username</label>
                    <div className="flex">
                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                        <input type="text" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-300 outline-none focus:border-indigo-500" placeholder="johnsmith41"
                        onChange={(e)=>
                            UpdateLoginInfo({...loginInfo, UserName: e.target.value})}></input>
                    </div>
                </div>
            </div>
            
                    <div className="flex -mx-3">
                        <div className="w-full px-3 mb-12">
                            <label className="text-xs font-semibold px-1">Password</label>
                            <div className="flex">
                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input type="password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-300 outline-none focus:border-indigo-500" placeholder="************"
                                onChange={(e)=>
                                    UpdateLoginInfo({...loginInfo, Password: e.target.value})}></input>
                            </div>
                        </div>
                    </div>    

            

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Login 
              </button>                   
            </div>
          </form>
        </div>
      </div>
    </div>
        </>
    )
}

export default LoginUser