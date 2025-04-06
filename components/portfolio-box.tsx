import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
    data: {
        id: number;
        title: string;
        image: string;
        urlGithub: string;
        urlDemo: string;
    };
    setActiveImage: (image: string) => void;
}



const PortfolioBox = ({ data, setActiveImage }: PortfolioBoxProps) => {
    const { id, title, image } = data;

    // Número de WhatsApp y mensaje prellenado
    const whatsappNumber = "598092557663"; // Sin "+"
    const whatsappMessage = encodeURIComponent(
        `Hola, me gustaría solicitar una demo del proyecto "${title}".`
    );
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <div
            key={id}
            className="p-4 border border-teal-50 rounded-xl flex flex-col justify-between items-center text-center h-full"
            onMouseEnter={() => setActiveImage(image)}
            onMouseLeave={() => setActiveImage("/icons/PruebaPortfolio-Remaster.png")}
        >
            {/* Título con altura fija para evitar desalineaciones */}
            <h3 className="mb-4 text-xl min-h-[60px] flex items-center justify-center">
                {title}
            </h3>

            {/* Imagen */}
            <div className="relative w-[97px] h-[97px]">
                <div
                    className="absolute inset-0 rounded-2xl bg-contain bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${image})` }}
                ></div>
            </div>

            {/* Botón alineado uniformemente */}
            <div className="mt-auto pt-4">
                <Link
                    href={whatsappUrl}
                    target="_blank"
                    className="p-3 transition duration-150 rounded-lg bg-green-500 hover:bg-orange-600 text-white font-semibold"
                >
                    Solicitar Demo
                </Link>
            </div>
        </div>
    );
};



export default PortfolioBox;