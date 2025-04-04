"use client";

import { useEffect, useState, useCallback } from "react";
import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";

interface Obstacle {
    x: number;
    y: number;
    radius: number;
}

export const CoverParticles = ({ collisionEnabled = false, obstacles = [] }: { collisionEnabled: boolean; obstacles: Obstacle[] }) => {
    const [init, setInit] = useState(false);

    const initEngine = useCallback(async () => {
        await initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        });
        setInit(true);
    }, []);

    useEffect(() => {
        initEngine();
    }, [initEngine]);

    return (
        init && (
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
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
                                repulse: { distance: 150, duration: 0.4 },
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
                                outModes: { default: collisionEnabled ? "bounce" : "out" },
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
                                enable: true,
                                distance: 200,
                                color: "#ffffff",
                                opacity: 0.9,
                                width: 3,
                            },
                            collisions: {
                                enable: collisionEnabled,
                            },
                        },
                        absorbers: collisionEnabled && obstacles.length > 0
                            ? obstacles.map((obs) => ({
                                  position: { x: obs.x, y: obs.y },
                                  size: obs.radius,
                                  opacity: 1, // Visible para pruebas, puedes poner 0
                              }))
                            : [],
                        detectRetina: true,
                    }}
                />
            </div>
        )
    );
};
