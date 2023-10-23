import {BiLogoGoogleCloud} from 'react-icons/bi' 
import {FcGoogle} from 'react-icons/fc'
import {AiTwotoneCalendar, AiOutlineSend} from 'react-icons/ai'

export default function CardTask () {
    return (
        <div className="w-80 break-inside-avoid flex flex-col gap-3 p-3 border-gray-900 border-2 rounded-md">
            <div className="flex gap-2 ">
                <a href='' className='rounded-md p-2 border-2 bg-white '>
                <FcGoogle className=" text-3xl" />
                </a>
                <a href='' className='rounded-md p-2 border-2 bg-blue-700'>
                <BiLogoGoogleCloud className=" text-3xl text-white" />
                </a>
            </div>
            <div className='w-full mt-4 flex flex-col items-center justify-center'>
            <p className='text-lg font-semibold text-white'>Actualizar las tareas y configurar la base de datos</p>
            </div>
            <progress className='rounded-md bg-transparent text-blue-50 border-2 h-2 border-gray-900' color='' value={50} max={100}></progress>
            <div className='w-full flex justify-between mt-5'>
                <div className='flex gap-1 items-center text-gray-500'>
                    <AiTwotoneCalendar />
                    Inicio:
                    Nov 12
                </div>
                <div className='flex gap-1 items-center text-gray-500'>
                    <AiOutlineSend/>
                    Fin:
                    Dec 23
                </div>
            </div>
            <span className='text-sm font-semibold opacity-50'>Ultima actualizacion: Dec 10</span>
        </div>
    )
}