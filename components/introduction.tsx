import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center justify-center h-full p-6 py-20 md:py-0 md:grid-cols-2 text-center md:text-left">
                <Image 
                    src="/icons/avatarFinal.png" 
                    priority 
                    width="800" 
                    height="800" 
                    alt="Avatar" 
                    className="mx-auto max-w-full h-auto"
                />
                <div className="flex flex-col justify-center max-w-md mx-auto">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
                        Si puedes imaginarlo, puedes programarlo<br />
                        <TypeAnimation
                            sequence={[
                                'Alan Kay',
                                1000,
                                'Alejandro Taboada',
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                        Desarrollador full-stack, pensando en lo mejor para mi futuro.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a href="/portfolio" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Ver proyectos
                        </a>
                        <a href="/contact"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary" >
                            Contacta conmigo
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
