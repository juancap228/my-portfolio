"use client";

import { useState, useEffect } from "react";

interface CircleImageProps {
    activeImage: string;
}

const CircleImage = ({ activeImage }: CircleImageProps) => {
    const [scale, setScale] = useState(1);
    const [loaded, setLoaded] = useState(true);

    useEffect(() => {
        setLoaded(false);
        const img = new window.Image();
        img.src = activeImage;

        img.onload = () => {
            setLoaded(true);
            const isDefault = activeImage === "/icons/PruebaPortfolio-Remaster.png";
            setScale(isDefault ? 1 : 1.5);
        };

        img.onerror = () => {
            console.error(`Error cargando la imagen: ${activeImage}`);
            setLoaded(true);
        };
    }, [activeImage]);

    return (
        <div
            className={`bottom-0 right-0 hidden md:inline-block md:absolute 
                rounded-2xl border-8 shadow-lg transition-all duration-500 ease-in-out
                ${loaded ? "border-orange-500" : "border-gray-500"}
            `}
            style={{
                backgroundImage: `url(${activeImage})`,
                backgroundSize: "contain", // 👈 para que no se recorte
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "280px",
                height: "350px",
                maxWidth: "120vw",
                maxHeight: "120vh",
                opacity: loaded ? 1 : 1.5,
                transform: `scale(${scale})`,
                transformOrigin: "bottom right", // o "center" si preferís
                transition: "transform 0.5s ease-in-out, opacity 0.3s ease-in-out",
            }}
        ></div>
    );
};

export default CircleImage;
