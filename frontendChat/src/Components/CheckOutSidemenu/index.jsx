import { useContext, useState } from 'react';
import './style.css';
import {ChatContext} from '../../Context/ChatContext'
import { XMarkIcon } from '@heroicons/react/24/solid'
import {getRequest} from '../../utils/services'


const CheckOutSideMenu = () =>{

    const reqUrl = 'https://api.currencyapi.com/v3/latest?apikey=cur_live_BKcT9FAuhd5bRUvMfKSZVpgjM44LkLhDLNFUPqv7&currencies=';

    const context = useContext(ChatContext);
    const [formDataC, setFormDataC] =useState({
        base_currency: "",
        target_currency: "",
        qtty :0,
    })    
    
    const SendRequest = async (e) => {
        e.preventDefault();
        console.log(e);
        console.log(e.target.base_currency.value);
        console.log(e.target.currencies.value);
        
        const response = await getRequest(`${reqUrl}${e.target.currencies.value}&base_currency=${e.target.base_currency.value}`)
        console.log(response);
    }    

    return (
        <aside 
        className={`${context.isOpenProductDetail ? 'flex': 'hidden'} checkout-side flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>CURRENCY BOT</h2>
                <XMarkIcon 
                className='h-5 w-5 text-black cursor-pointer'
                onClick={()=>context.closeProductDetail()}></XMarkIcon>          
            </div>

    <form onSubmit={(e => SendRequest(e))}
        id="latest_rates_form"
        className="mx-auto w-full max-w-sm bg-white shadow rounded-md p-5 space-y-3 text-sm"
    >
        <div className="flex items-center justify-between space-x-5">
            <label htmlFor="base_currency_input">Base currency:</label>
            <select type="text" id="base_currency_input" name="base_currency" className="border-slate-300 border rounded-md py-2 px-4 text-sm"
            onChange={(e)=>setFormDataC(formDataC.base_currency)}
            >
                <option value="COP">Colombian Pesos</option>
                <option value="USD">US Dollar</option>
                <option value="EUR">Euro</option>
            </select>
        </div>
        <div className="flex items-center justify-between space-x-5">
            <label htmlFor="currencies">Target currencies:</label>
            <select type="text" id="currency" name="currencies" className="border-slate-300 border rounded-md py-2 px-4 text-sm" defaultValue="USD"
            onChange={(e)=>setFormDataC(e)}
            >
                <option value="USD" >US Dollar</option>
                <option value="EUR">Euro</option>
                <option value="BOB">Bolivian Boliviano</option>
                <option value="BRL">Brazilian Real</option>
                <option value="CLP">Chilean Peso</option>
                <option value="CRC">Costa Rican Colón</option>
                <option value="DOP">Dominican Peso</option>
                <option value="JMD">Jamaican Dollar</option>
            </select>
        </div>
        <button
            type="submit"
            className="bg-purple-600 text-white rounded-md py-2 px-4 mx-auto relative block"
        >Get Latest Rates</button>
    </form>
    <div
        id="latest_rates_display"
        className="mx-auto my-5 w-full max-w-sm bg-white shadow rounded-md px-5 py-3 text-sm empty:hidden divide-y divide-dotted divide-slate-300"
    ></div>
        </aside>
    )
}

export default CheckOutSideMenu