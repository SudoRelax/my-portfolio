import { useState } from 'react';
import { ProjectCard } from "../../components/projects/ProjectCard"
import type { Project } from "../../components/projects/ProjectCard"
import { ProjectModal } from "../../components/projects/ProjectModal"
import viewsEventsImg from "../../assets/imgs/view_event.png"

import mercodexVid from "../../assets/vid/mercodex.mp4"

export const Projects = () => {
    const projects: Project[] = [
        {
            title: "Mercodex",
            description: "Chatbot experto en el mercado con capacidades de web scraping para generar reportes precisos y detallados.",
            tags: ["FastAPI", "LangChain", "MCP", "Gemini"],
            role: "Backend Developer",
            roleDescription: "Me encargué del área backend, desarrollado con FastAPI. Utilizamos LangChain para la orquestación, un servidor MCP de terceros para las herramientas y la API de Gemini como modelo de inteligencia artificial.",
            link: "#",
            mediaType: "video",
            mediaUrl: mercodexVid
        },
        {
            title: "ViewsEvents",
            description: "Plataforma para descubrir eventos locales en tu provincia. Desarrollada con arquitectura modular y mapas interactivos.",
            tags: ["React", "Node.js", "Express", "Tailwind", "Mapas"],
            role: "Backend Developer & Server Architect",
            roleDescription: "Me encargué del área backend con Express. Preparé todo el servidor solo, donde hay lógica de publicación de eventos para organizadores de eventos y que permite realizar los métodos de eliminación, actualización y gestión completa.",
            link: "#",
            mediaType: "image",
            mediaUrl: viewsEventsImg
        },
    ];

    const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = (index: number) => {
        setSelectedProjectIndex(index);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProjectIndex(null);
    };

    const handleNext = () => {
        if (selectedProjectIndex !== null && selectedProjectIndex < projects.length - 1) {
            setSelectedProjectIndex(selectedProjectIndex + 1);
        }
    };

    const handlePrev = () => {
        if (selectedProjectIndex !== null && selectedProjectIndex > 0) {
            setSelectedProjectIndex(selectedProjectIndex - 1);
        }
    };

    return (
        <div className="flex-1 p-6 md:p-10 bg-linear-to-b from-cyan-200 to-blue-500 dark:from-slate-800 dark:to-slate-900 h-full md:h-[95vh] m-0 md:m-6 md:mr-14 rounded-none md:rounded-3xl shadow-sm overflow-y-auto transition-all duration-300">
            <div className="max-w-6xl mx-auto space-y-12">
                <section className="space-y-6 animate-fade-in">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight transition-colors duration-300">
                        Mis <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500 dark:from-white dark:to-blue-200 transition-all duration-300">Proyectos</span>
                    </h1>
                    <p className="text-xl text-slate-700 dark:text-blue-50 max-w-2xl transition-colors duration-300">
                        Una selección de los trabajos que he realizado. Cada uno representa un desafío único y una oportunidad de aprendizaje.
                    </p>
                </section>

                <div className="flex flex-col gap-8 max-w-4xl mx-auto">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            project={project}
                            onImageClick={() => handleOpenModal(index)}
                        />
                    ))}
                </div>
            </div>

            {selectedProjectIndex !== null && (
                <ProjectModal
                    project={projects[selectedProjectIndex]}
                    isOpen={isModalOpen}
                    onClose={handleCloseModal}
                    onNext={handleNext}
                    onPrev={handlePrev}
                    hasNext={selectedProjectIndex < projects.length - 1}
                    hasPrev={selectedProjectIndex > 0}
                />
            )}
        </div>
    )
}
