"use client";

import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Target, Lightbulb, Zap, TrendingUp, Award } from "lucide-react";

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: {
        id: number;
        title: string;
        subtitle?: string;
        context?: string;
        problem?: string;
        solution?: string;
        features?: string[];
        results?: string[];
        challenges?: string[];
        description?: string;
        images?: string[];
        technologies?: string[];
    } | null;
}

const ProjectModal = ({ isOpen, onClose, project }: ProjectModalProps) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!isOpen || !project) return null;

    const images = project.images || [];
    const hasMultipleImages = images.length > 1;

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={onClose}
        >
            <div
                className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-teal-500/30 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Botón cerrar */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-red-500/80 hover:bg-red-600 transition-colors"
                    aria-label="Cerrar modal"
                >
                    <X size={24} color="white" />
                </button>

                {/* Contenido del modal */}
                <div className="p-8">
                    {/* Título */}
                    <h2 className="text-3xl font-bold text-white mb-2 pr-12">
                        {project.title}
                    </h2>
                    {project.subtitle && (
                        <p className="text-teal-400 text-lg mb-6">{project.subtitle}</p>
                    )}

                    {/* Carrusel de imágenes */}
                    {images.length > 0 && (
                        <div className="relative mb-6 rounded-xl overflow-hidden bg-gray-950/50">
                            <div className="relative aspect-video w-full">
                                <img
                                    src={images[currentImageIndex]}
                                    alt={`${project.title} - imagen ${currentImageIndex + 1}`}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Controles del carrusel */}
                            {hasMultipleImages && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                                        aria-label="Imagen anterior"
                                    >
                                        <ChevronLeft size={24} color="white" />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                                        aria-label="Siguiente imagen"
                                    >
                                        <ChevronRight size={24} color="white" />
                                    </button>

                                    {/* Indicadores */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                        {images.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentImageIndex(index)}
                                                className={`w-2 h-2 rounded-full transition-all ${
                                                    index === currentImageIndex
                                                        ? "bg-teal-500 w-8"
                                                        : "bg-white/50 hover:bg-white/80"
                                                }`}
                                                aria-label={`Ir a imagen ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>
                    )}

                    {/* Contexto */}
                    {project.context && (
                        <div className="mb-6">
                            <div className="flex items-center gap-2 mb-3">
                                <Target size={20} className="text-teal-400" />
                                <h3 className="text-xl font-semibold text-teal-400">
                                    Contexto
                                </h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                {project.context}
                            </p>
                        </div>
                    )}

                    {/* Problema */}
                    {project.problem && (
                        <div className="mb-6">
                            <div className="flex items-center gap-2 mb-3">
                                <Target size={20} className="text-orange-400" />
                                <h3 className="text-xl font-semibold text-orange-400">
                                    Problema
                                </h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                {project.problem}
                            </p>
                        </div>
                    )}

                    {/* Solución */}
                    {project.solution && (
                        <div className="mb-6">
                            <div className="flex items-center gap-2 mb-3">
                                <Lightbulb size={20} className="text-yellow-400" />
                                <h3 className="text-xl font-semibold text-yellow-400">
                                    Solución
                                </h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                {project.solution}
                            </p>
                        </div>
                    )}

                    {/* Funcionalidades */}
                    {project.features && project.features.length > 0 && (
                        <div className="mb-6">
                            <div className="flex items-center gap-2 mb-3">
                                <Zap size={20} className="text-blue-400" />
                                <h3 className="text-xl font-semibold text-blue-400">
                                    Funcionalidades Principales
                                </h3>
                            </div>
                            <ul className="space-y-2">
                                {project.features.map((feature, index) => (
                                    <li key={index} className="text-gray-300 leading-relaxed flex items-start">
                                        <span className="text-teal-400 mr-2">•</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Resultados */}
                    {project.results && project.results.length > 0 && (
                        <div className="mb-6">
                            <div className="flex items-center gap-2 mb-3">
                                <TrendingUp size={20} className="text-green-400" />
                                <h3 className="text-xl font-semibold text-green-400">
                                    Resultados e Impacto
                                </h3>
                            </div>
                            <ul className="space-y-2">
                                {project.results.map((result, index) => (
                                    <li key={index} className="text-gray-300 leading-relaxed flex items-start">
                                        <span className="text-green-400 mr-2">✓</span>
                                        <span>{result}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Desafíos Resueltos */}
                    {project.challenges && project.challenges.length > 0 && (
                        <div className="mb-6">
                            <div className="flex items-center gap-2 mb-3">
                                <Award size={20} className="text-purple-400" />
                                <h3 className="text-xl font-semibold text-purple-400">
                                    Desafíos Técnicos Resueltos
                                </h3>
                            </div>
                            <ul className="space-y-2">
                                {project.challenges.map((challenge, index) => (
                                    <li key={index} className="text-gray-300 leading-relaxed flex items-start">
                                        <span className="text-purple-400 mr-2">⚡</span>
                                        <span>{challenge}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Descripción (fallback si no hay estructura) */}
                    {project.description && !project.context && !project.problem && (
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold text-teal-400 mb-3">
                                Descripción
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                {project.description}
                            </p>
                        </div>
                    )}

                    {/* Tecnologías */}
                    {project.technologies && project.technologies.length > 0 && (
                        <div>
                            <h3 className="text-xl font-semibold text-teal-400 mb-3">
                                Stack Tecnológico
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-teal-500/20 border border-teal-500/50 rounded-full text-teal-300 text-sm font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
