"use client"

import Image from 'next/image';

import { MotionTransition } from './transition-component';

const AvatarPortfolio = () => {
    return (
        <MotionTransition position='bottom' className="bottom-0 left-0 hidden md:inline-block md:absolute ">
            <Image src="/icons/PruebaPortfolio-Photoroom.png" width="350" height="350" className="w-full h-full " alt="Particles " />
        </MotionTransition>

    );
}

export default AvatarPortfolio;