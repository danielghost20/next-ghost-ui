import Link from 'next/link';
import {BiUser} from 'react-icons/bi'
import {GiPadlock} from 'react-icons/gi'



export default function CardLogin() {
  return (
    <div className="max-w-md rounded-md border-2 break-inside-avoid border-gray-900 w-full">
      <form className='p-3 flex flex-col items-center gap-3'>
        <h2 className="text-2xl text-center mt-2 text-white">Iniciar Sesión</h2>
        <div className='flex border-2 p-2 rounded-md  border-gray-900 mt-3 items-center gap-2 max-w-xs w-full'>
        <BiUser className="text-lg" />
          <input
          className=" outline-none p-2 bg-transparent"
            type="email"
            id="email"
            name="email"
            placeholder="example32@gmail.com"
          />
        </div>
        <div className='flex border-2 p-2 rounded-md  border-gray-900 mt-3 items-center gap-2 max-w-xs w-full'>
        <GiPadlock className="text-lg" />
          <input
          className=" outline-none p-2 bg-transparent"
            type="password"
            id="password"
            name="password"
            placeholder="contraseña"
          />
        </div>
        <button className='bg-phosphorescent-green py-3 m-auto mt-3 text-black font-semibold rounded-md max-w-xs w-full' type="submit">Enviar</button>
      </form>
      <div className='flex justify-around py-2 items-center m-auto max-w-xs w-full'>
        <span className='text-lg'>¿No tienes cuenta?</span>
        <Link href='/' className='text-lg text-cyan-500'>Crear aqui</Link>
      </div>
    </div>
  );
}
