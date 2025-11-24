"use client";

import { useState } from "react";

import { dataPortfolio } from "@/data";
import CircleImage from "@/components/circle-image";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import PortfolioBox from "@/components/portfolio-box";
import ProjectModal from "@/components/project-modal";

interface ProjectData {
    id: number;
    title: string;
    subtitle?: string;
    image: string;
    urlGithub: string;
    urlDemo: string;
    context?: string;
    problem?: string;
    solution?: string;
    features?: string[];
    results?: string[];
    challenges?: string[];
    description?: string;
    images?: string[];
    technologies?: string[];
}

const PortfolioPage = () => {
    const [activeImage, setActiveImage] = useState("/icons/PruebaPortfolio-Remaster.png");
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleViewDescription = (project: ProjectData) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedProject(null), 300);
    };

    return (
        <ContainerPage>
            <TransitionPage />
            <CircleImage activeImage={activeImage} />
            <div className="flex flex-col justify-center h-full">
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
                    Mis últimos <span className="font-bold text-secondary">trabajos realizados</span>
                </h1>

                <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-4">
                    {dataPortfolio.map((data) => (
                        <PortfolioBox
                            key={data.id}
                            data={data}
                            setActiveImage={setActiveImage}
                            onViewDescription={handleViewDescription}
                        />
                    ))}
                </div>
            </div>

            <ProjectModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                project={selectedProject}
            />
        </ContainerPage>
    );
};

export default PortfolioPage;
