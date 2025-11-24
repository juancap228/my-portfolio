"use client";

import ContainerPage from "@/components/container-page";
import TransitionPage from "@/components/transition-page";
import { dataSkills } from "@/data";
import { Check } from "lucide-react";

const SkillsPage = () => {
    return (
        <>
            <TransitionPage />
            <ContainerPage>
                <div className="flex flex-col justify-center min-h-full py-8 pb-32">
                    <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-12">
                        Mis <span className="font-bold text-secondary">habilidades técnicas</span>
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto w-full">
                        {dataSkills.map((category) => (
                            <div
                                key={category.id}
                                className="group bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-teal-500/30 rounded-xl p-6 hover:border-teal-400/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/20"
                            >
                                {/* Header de la categoría con icono animado */}
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="text-4xl transform transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                                        {category.icon}
                                    </span>
                                    <h2 className="text-xl font-bold text-white">{category.category}</h2>
                                </div>

                                {/* Lista de skills con checkmarks animados */}
                                <div className="space-y-3">
                                    {category.skills.map((skill, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3 group/item hover:translate-x-2 transition-transform duration-200"
                                        >
                                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-teal-500/20 border border-teal-500/50 flex items-center justify-center group-hover/item:bg-teal-500 group-hover/item:border-teal-400 transition-all duration-300">
                                                <Check size={14} className="text-teal-400 group-hover/item:text-white transition-colors duration-300" />
                                            </div>
                                            <span className="text-gray-300 font-medium group-hover/item:text-white transition-colors duration-200">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Badge con número de skills */}
                                <div className="mt-6 pt-4 border-t border-gray-700/50">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                                            {category.skills.length} {category.skills.length === 1 ? 'tecnología' : 'tecnologías'}
                                        </span>
                                        <div className="flex gap-1">
                                            {[...Array(3)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className="w-1.5 h-1.5 rounded-full bg-teal-500/30 group-hover:bg-teal-400 transition-all duration-300"
                                                    style={{ transitionDelay: `${i * 50}ms` }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Resumen total */}
                    <div className="mt-12 max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/30 rounded-full">
                            <span className="text-teal-400 font-semibold">
                                Total: {dataSkills.reduce((acc, cat) => acc + cat.skills.length, 0)} tecnologías
                            </span>
                            <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                        </div>
                    </div>
                </div>
            </ContainerPage>
        </>
    );
};

export default SkillsPage;
