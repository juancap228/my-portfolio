import Link from "next/link";

interface ProjectData {
    id: number;
    title: string;
    image: string;
    urlGithub: string;
    urlDemo: string;
    description?: string;
    images?: string[];
    technologies?: string[];
}

interface PortfolioBoxProps {
    data: ProjectData;
    setActiveImage: (image: string) => void;
    onViewDescription: (data: ProjectData) => void;
}



const PortfolioBox = ({ data, setActiveImage, onViewDescription }: PortfolioBoxProps) => {
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
            <h3 className="mb-4 text-xl min-h-[60px] flex items-center justify-center select-none">
                {title}
            </h3>

            {/* Imagen */}
            <div className="relative w-[97px] h-[97px]">
                <div
                    className="absolute inset-0 rounded-2xl bg-contain bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${image})` }}
                ></div>
            </div>

            {/* Botones alineados uniformemente */}
            <div className="mt-auto pt-4 flex flex-col gap-2 w-full">
                <button
                    onClick={() => onViewDescription(data)}
                    className="p-3 transition duration-150 rounded-lg bg-teal-500 hover:bg-teal-600 text-white font-semibold w-full"
                >
                    Ver Descripción
                </button>
                <Link
                    href={whatsappUrl}
                    target="_blank"
                    className="p-3 transition duration-150 rounded-lg bg-green-500 hover:bg-orange-600 text-white font-semibold block"
                >
                    Solicitar Demo
                </Link>
            </div>
        </div>
    );
};



export default PortfolioBox;