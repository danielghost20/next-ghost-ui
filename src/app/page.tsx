import { BiGhost } from "react-icons/bi";
import Link from "next/link";
import { BsDiscord } from "react-icons/bs";
import Icon from "@/components/chadcn/Icon";
import { FaLinkedinIn } from "react-icons/fa";
import { buttonVariants } from "@/components/ui/button";
import { TbBrandNextjs, TbBrandNuxt, TbBrandGatsby } from "react-icons/tb";
import { LiaAngular } from "react-icons/lia";
import { FaLaravel } from "react-icons/fa";
import { SiAstro, SiSvelte } from "react-icons/si";
import {CardLogin, CardAlert, CardSelect, CardTask, CardPayment, CardReview} from '../components/ghost-ui-components/cards/index'
import Image from "next/image";
import {LiaDonateSolid} from 'react-icons/lia'

export default function Home(): JSX.Element {
  return (
    <>
      <header className="w-full  relative  min-h-screen">
        <Icon
          className="p-2 opacity-20 hover:opacity-100 animate-float  absolute flex items-center justify-center top-1/3"
          icon={<TbBrandNextjs className="text-5xl" />}
        />
        <Icon
          className="p-2 opacity-20 hover:opacity-100 animate-float-reverse  absolute flex items-center justify-center right-1/4 bottom-3/4"
          icon={<LiaAngular className="text-5xl" />}
        />
        <Icon
          className="p-2 opacity-20 hover:opacity-100 animate-float  absolute flex items-center justify-center right-10 top-1/3"
          icon={<FaLaravel className="text-5xl" />}
        />
        <Icon
          className="p-2 opacity-20 hover:opacity-100 animate-float  absolute flex items-center justify-center right-1/4 bottom-1/4"
          icon={<TbBrandNuxt className="text-5xl" />}
        />
        <Icon
          className="p-2 opacity-20 hover:opacity-100 animate-float-reverse  absolute flex items-center justify-center left-1/4 top-3/4"
          icon={<TbBrandGatsby className="text-5xl" />}
        />
        <Icon
          className="p-2 opacity-20 hover:opacity-100 animate-float  absolute flex items-center justify-center left-1/2 top-3/4"
          icon={<SiAstro className="text-5xl" />}
        />
        <Icon
          className="p-2 opacity-20 hover:opacity-100 animate-float-reverse  absolute flex items-center justify-center left-1/3 top-20"
          icon={<SiSvelte className="text-5xl" />}
        />
        <nav className="flex w-full h-14 justify-between border-b-2 px-4 items-center">
            
            <Link href='/' className="text-lg font-semibold">Ghost UI</Link>

          <ul className="flex gap-3">
            <li>
              <Link href="">Inicio</Link>
            </li>
            <li>
              <Link href="">Documentacion</Link>
            </li>
            <li>
              <Link href="">Ejemplos</Link>
            </li>
          </ul>
          <div className="flex gap-3 h-full items-center">
            <Icon icon={<BsDiscord className="text-xl" />} url="" />
            <Icon icon={<FaLinkedinIn className="text-xl" />} url="" />
            <Icon icon={<BiGhost/>} className="text-xl text-black bg-phosphorescent-green" url="https://next-portfolio-gray-two.vercel.app/" />
            <Icon icon={<LiaDonateSolid/>} className="text-xl" url="" />
          </div>
        </nav>
        <div className="w-full max-w-screen-xl mt-20 m-auto flex flex-col p-4 gap-10">
          <span className="rounded-xl border-2 bg-muted p-2 m-auto">
            Sigueme en linkedin
          </span>
          <h1 className="text-7xl font-semibold text-center ">
            La libreria de componentes web creados con{" "}
            <span className="dark:text-phosphorescent-green">
              tailwindcss
            </span>{" "}
          </h1>
          <p className="my-4 text-lg text-gray-600 text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            natus aspernatur culpa ipsam vel molestias laborum corrupti.
            Obcaecati maxime suscipit possimus, quaerat eos aspernatur
            voluptatibus voluptatem, ab sapiente molestias praesentium!
          </p>
          <div className="w-full flex gap-6 justify-center">
            <Link
              className={`${buttonVariants()} bg-foreground text-background`}
              href=""
            >
              Documentacion
            </Link>
            <Link
              className={`${buttonVariants()} bg-foreground text-background`}
              href=""
            >
              GitHub
            </Link>
          </div>
        </div>
      </header>
      <main className="w-full mt-20 px-5 min-h-screen z-20 ">
        <div className="flex max-w-screen-xl m-auto gap-8">
          <div className="flex flex-col m-auto text-center gap-6 max-w-6xl">
            <h2 className="text-xl font-semibold text-phosphorescent-green">COMPONENTES REUTILIZABLES</h2>
            <h3 className="text-6xl font-bold mt-4 mb-10">
              Usa componentes ya creados y modificalos segun tus{" "}
              <span className="dark:text-phosphorescent-green">
                necesidades
              </span>{" "}
            </h3>
          </div>
        </div>
        <section className="w-full max-w-screen-xl m-auto mt-20 columns-4">
          <CardLogin />
          <CardSelect />
          <CardTask />
          <CardAlert />
          <CardPayment/>
        </section>
        <section className="w-full mt-20">
          <span className="m-auto block text-center text-phosphorescent-green text-xl font-bold my-4">COMPONENTES INDEPENDIENTES</span>
          <h2 className="text-5xl max-w-5xl m-auto font-extrabold  text-center mt-3 mb-6">Agrega logica segun tus necesidades a tus componentes</h2>
          <p className="max-w-3xl m-auto mt-4 text-center text-gray-400 font-semibold text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium perspiciatis esse recusandae quae aperiam </p>
          <div className="flex w-full justify-center mt-36">
            <div className="max-w-lg w-full">
              <span className="text-phosphorescent-green font-medium text-lg">Olvidate del css</span>
              <h2 className="text-4xl font-bold my-4">Enfocate solo en tu logica </h2>
              <p className="my-2 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos numquam inventore, dolor porro pariatur sunt! Laudantium ullam voluptas quidem! Placeat, autem fugiat voluptatem laudantium veniam magni maiores voluptatibus dolor incidunt!</p>
            </div>
            <Image className="max-w-3xl object-cover" src='/chat-web.webp' width={1200} height={700} alt="chat_web" />
          </div>
        </section>
        <section className="w-full mt-20">
          <span className="block text-center text-xl mt-10 font-semibold text-phosphorescent-green">OPINIONES</span>
          <h2 className="text-center text-5xl font-bold">Reseñas de algunos usuarios</h2>
          <div className="w-full mt-20 columns-4">
            <CardReview />
            <CardReview />
            <CardReview />
            <CardReview />
            <CardReview />
            <CardReview />
            <CardReview />

          </div>
        </section>
      </main>
      <footer>
        dasdas
      </footer>
    </>
  );
}
