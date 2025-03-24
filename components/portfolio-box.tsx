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
    const { id, title, image, urlDemo, urlGithub } = data;

    return (
        <div
            key={id}
            className="p-4 border border-teal-50 rounded-xl flex flex-col items-center text-center"
            onMouseEnter={() => setActiveImage(image)} // Cambia la imagen en hover
            onMouseLeave={() => setActiveImage("/icons/PruebaPortfolio-Remaster.png")} // Vuelve a la imagen original
        >
            <h3 className="mb-4 text-xl">{title}</h3>

            <div className="relative w-[97px] h-[97px]">
                <div
                    className="absolute inset-0 rounded-2xl bg-contain bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${image})` }}
                ></div>
            </div>

            <div className="flex gap-5 mt-5">
                <Link
                    href={urlGithub}
                    target="_blank"
                    className="p-2 transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80"
                >
                    Github
                </Link>

                <Link
                    href={urlDemo}
                    target="_blank"
                    className="p-2 transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80"
                >
                    Live demoo
                </Link>
            </div>
        </div>
    );
};

export default PortfolioBox;