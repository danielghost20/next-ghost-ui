import {AiOutlineCheck} from 'react-icons/ai'

export default function CardPayment () {
    return (
        <div className="max-w-sm mt-2 w-full break-inside-avoid p-4 rounded-md border-2 border-gray-900">
            <h2 className='text-2xl mb-3 font-semibold'>Plan intermedio</h2>
            <div className='flex gap-2'>
            <span className='text-5xl font-bold'>$20</span>
            <span className='text-gray-400'>Por mes</span>
            </div>
            <p className='text-gray-500 my-4'>paquete relacionado con ventas de todo el año</p>
            <h3 className='my-3 text-xl font-semibold'>Beneficios</h3>
            <div className='flex flex-col gap-6 my-7'>
                <div className="flex gap-2 items-start">
                    <span className='rounded-full bg-phosphorescent-green p-[2px]'><AiOutlineCheck className="text-black"/></span>
                    <p className='text-gray-400'>Contiene juegos diferentes</p>
                </div>
                <div className="flex gap-2 items-start">
                    <span className='rounded-full bg-phosphorescent-green p-[2px]'><AiOutlineCheck className="text-black"/></span>
                    <p className='text-gray-400'>Personalizacion depersonajes y armas</p>
                </div>
                <div className="flex gap-2 items-start">
                    <span className='rounded-full bg-phosphorescent-green p-[2px]'><AiOutlineCheck className="text-black"/></span>
                    <p className='text-gray-400'>Pass royale durante una temporada</p>
                </div>
                <div className="flex gap-2 items-start">
                    <span className='rounded-full bg-phosphorescent-green p-[2px]'><AiOutlineCheck className="text-black"/></span>
                    <p className='text-gray-400'>Membresia mantenible</p>
                </div>
            </div>
            <button className='w-full rounded-md py-3 bg-phosphorescent-green text-black font-semibold'>Continuar</button>
        </div>
    )
}