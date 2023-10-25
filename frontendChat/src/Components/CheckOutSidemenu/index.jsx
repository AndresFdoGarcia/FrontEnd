import { useContext } from 'react';
import './style.css';
import {ChatContext} from '../../Context/ChatContext'
import { XMarkIcon } from '@heroicons/react/24/solid'


const CheckOutSideMenu = () =>{

    const context = useContext(ChatContext);    

    return (
        <aside 
        className={`${context.isOpenProductDetail ? 'flex': 'hidden'} checkout-side flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>CURRENCY BOT</h2>
                <XMarkIcon 
                className='h-5 w-5 text-black cursor-pointer'
                onClick={()=>context.closeProductDetail()}></XMarkIcon>          
            </div>

    <form
        id="latest_rates_form"
        class="mx-auto w-full max-w-sm bg-white shadow rounded-md p-5 space-y-3 text-sm"
    >
        <div class="flex items-center justify-between space-x-5">
            <label for="base_currency_input">Base currency:</label>
            <select type="text" id="base_currency_input" name="base_currency" className="w-full border-slate-300 border rounded-md py-2 px-4 text-sm">
                <option value="COP">Colombian Pesos</option>
                <option value="USD">US Dollar</option>
                <option value="EUR">Euro</option>
            </select>
        </div>
        <div class="flex items-center justify-between space-x-5">
            <label for="currencies">Target currencies:</label>
            <select type="text" id="currencies" name="currencies" class="border-slate-300 border rounded-md py-2 px-4 text-sm">
                <option value="USD" selected="selected">US Dollar</option>
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
            class="bg-slate-800 text-white rounded-md py-2 px-4 mx-auto relative block"
        >Get Latest Rates</button>
    </form>
    <div
        id="latest_rates_display"
        class="mx-auto my-5 w-full max-w-sm bg-white shadow rounded-md px-5 py-3 text-sm empty:hidden divide-y divide-dotted divide-slate-300"
    ></div>
        </aside>
    )
}

export default CheckOutSideMenu