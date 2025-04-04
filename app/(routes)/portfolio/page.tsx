"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { CoverParticles } from "@/components/cover-particles";
import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import PortfolioBox from "@/components/portfolio-box";
import { dataPortfolio } from "@/data";

interface Obstacle {
    x: number;
    y: number;
    radius: number;
}

const PortfolioPage = () => {
    const [activeImage, setActiveImage] = useState("/icons/PruebaPortfolio-Remaster.png");

    // Refs para obtener posiciones de los elementos
    const circleRef = useRef<HTMLDivElement>(null);
    const portfolioRef = useRef<HTMLDivElement>(null);
    const boxRefs = useRef<(HTMLDivElement | null)[]>([]); // Referencias para cada PortfolioBox

    const [obstacles, setObstacles] = useState<Obstacle[]>([]);

    useEffect(() => {
        const updateObstacles = () => {
            const newObstacles: Obstacle[] = [];

            if (circleRef.current) {
                const rect = circleRef.current.getBoundingClientRect();
                newObstacles.push({
                    x: rect.left + rect.width / 2,
                    y: rect.top + rect.height / 2,
                    radius: rect.width / 2,
                });
            }

            if (portfolioRef.current) {
                const rect = portfolioRef.current.getBoundingClientRect();
                newObstacles.push({
                    x: rect.left + rect.width / 2,
                    y: rect.top + rect.height / 2,
                    radius: Math.max(rect.width, rect.height) / 2,
                });
            }

            // Agregar obstáculos de cada PortfolioBox
            boxRefs.current.forEach((box) => {
                if (box) {
                    const rect = box.getBoundingClientRect();
                    newObstacles.push({
                        x: rect.left + rect.width / 2,
                        y: rect.top + rect.height / 2,
                        radius: Math.max(rect.width, rect.height) / 2,
                    });
                }
            });

            setObstacles(newObstacles);
        };

        updateObstacles();
        window.addEventListener("resize", updateObstacles);
        return () => window.removeEventListener("resize", updateObstacles);
    }, []);

  

    return (
        <ContainerPage>
            {memoizedParticles}
            <TransitionPage />
            <div ref={circleRef}>
                <CircleImage activeImage={activeImage} />
            </div>
            <div className="flex flex-col justify-center h-full">
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
                    Mis últimos <span className="font-bold text-secondary">trabajos realizados</span>
                </h1>

                <div ref={portfolioRef} className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-4">
                    {dataPortfolio.map((data, index) => (
                        <div ref={(el) => (boxRefs.current[index] = el)} key={data.id}>
                            <PortfolioBox data={data} setActiveImage={setActiveImage} />
                        </div>
                    ))}
                </div>
            </div>
        </ContainerPage>
    );
};

export default PortfolioPage;
