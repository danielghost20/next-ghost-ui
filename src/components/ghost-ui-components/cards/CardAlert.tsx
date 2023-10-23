import {BsFillCreditCard2FrontFill} from 'react-icons/bs'


export default function CardAlert () {
    return (
        <div className="max-w-md border-2 mt-3 w-full break-inside-avoid rounded-md border-gray-900 p-2">
            <h2 className='font-semibold text-lg mb-2'>Metodo de pago</h2>
            <div className='flex justify-between  items-center'>
            <BsFillCreditCard2FrontFill />
            <div className='flex flex-col'>
                <h3>Numero de tarjeta</h3>
                <p className='text-gray-400'>1243 **** **** 1234</p>
            </div>
            <button className='max-w-max px-3 py-2 border-2 border-gray-900 text-black bg-phosphorescent-green font-semibold rounded-md'>Continuar</button>
            </div>
        </div>
    )
}