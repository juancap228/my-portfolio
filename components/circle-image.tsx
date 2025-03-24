"use client";

import { useState, useEffect } from "react";

interface CircleImageProps {
    activeImage: string;
}

const CircleImage = ({ activeImage }: CircleImageProps) => {
    const [imageSize, setImageSize] = useState({ width: 200, height: 200 });
    const [loaded, setLoaded] = useState(true); // Inicialmente en true para que no haya retraso en la imagen inicial

    useEffect(() => {
        setLoaded(false); // Resetear para nuevas imágenes
        const img = new window.Image();
        img.src = activeImage;

        img.onload = () => {
            setLoaded(true);
            const maxSize = activeImage === "/PruebaPortfolio-Remaster.png" ? 200 : 350;
            const scaleFactor = Math.min(maxSize / img.width, maxSize / img.height, 1);
            setImageSize({ width: img.width * scaleFactor, height: img.height * scaleFactor });
        };

        img.onerror = () => {
            console.error(`Error cargando la imagen: ${activeImage}`);
            setLoaded(true);
        };
    }, [activeImage]);

    return (
        <div
            className={`bottom-0 right-0 hidden md:inline-block md:absolute transition-all duration-500 ease-in-out transform 
                rounded-2xl border-8 ${loaded ? "border-orange-500 shadow-lg" : "border-gray-500"} 
                bg-cover bg-center`}
            style={{
                backgroundImage: `url(${activeImage})`,
                width: `${imageSize.width}px`,
                height: `${imageSize.height}px`,
                maxWidth: "90vw",
                maxHeight: "90vh",
                opacity: loaded ? 1 : 1, // No ocultamos la imagen inicial
                transition: "opacity 0.3s ease-in-out"
            }}
        ></div>
    );
};

export default CircleImage;
