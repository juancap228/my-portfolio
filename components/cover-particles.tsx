"use client";

import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";

export const CoverParticles = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        init && (
            <div className="w-[0px]">
                <Particles
                    id="tsparticles"
                    options={{
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: { enable: true, mode: "push" },
                                onHover: { enable: true, mode: "repulse" },
                            },
                            modes: {
                                push: { quantity: 4 },
                                repulse: { distance: 200, duration: 0.4 },
                            },
                        },
                        particles: {
                            number: {
                                value: 50,
                                density: { enable: true },
                            },
                            move: {
                                enable: true,
                                speed: 1,
                                direction: "none",
                                random: false,
                                straight: false,
                                outModes: { default: "out" },
                            },
                            shape: {
                                type: "image",
                                options: {
                                    image: [
                                        { src: "/icons/csharp.png", width: 32, height: 32 },
                                        { src: "/icons/mysql.png", width: 32, height: 32 },
                                        { src: "/icons/react.png", width: 32, height: 32 },
                                        { src: "/icons/nextJs.png", width: 32, height: 32 },
                                        { src: "/icons/java.png", width: 32, height: 32 },
                                        { src: "/icons/css.png", width: 32, height: 32 },
                                        { src: "/icons/html.png", width: 32, height: 32 },
                                        { src: "/icons/py.png", width: 32, height: 32 },
                                    ],
                                },
                            },
                            size: {
                                value: { min: 16, max: 32 },
                            },
                            opacity: {
                                value: 1,
                            },
                            links: {
                                enable: true, // Habilitar las conexiones entre partículas
                                distance: 200, // Distancia máxima para conectar partículas
                                color: "#ffffff", // Color de las líneas
                                opacity: 0.9, // Opacidad de las líneas
                                width: 3, // Grosor de las líneas
                            },
                        },
                        detectRetina: true,
                    }}
                />
            </div>
        )
    );
};
