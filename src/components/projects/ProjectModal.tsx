import { useEffect } from 'react';
import type { Project } from './ProjectCard';

interface ProjectModalProps {
    project: Project;
    isOpen: boolean;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
    hasNext: boolean;
    hasPrev: boolean;
}

export const ProjectModal = ({ project, isOpen, onClose, onNext, onPrev, hasNext, hasPrev }: ProjectModalProps) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isOpen) return;
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') onNext();
            if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') onPrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose, onNext, onPrev]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-sm animate-fade-in" onClick={onClose}>
            <div className="min-h-screen px-4 text-center flex items-center justify-center">
                {/* Close button */}
                <button onClick={onClose} className="fixed top-6 right-6 text-white/70 hover:text-white transition-colors z-[60] p-2 bg-black/20 rounded-full hover:bg-black/40 backdrop-blur-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Navigation Buttons */}
                {hasPrev && (
                    <button
                        onClick={(e) => { e.stopPropagation(); onPrev(); }}
                        className="fixed left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md z-[60] hidden md:block"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                )}

                {hasNext && (
                    <button
                        onClick={(e) => { e.stopPropagation(); onNext(); }}
                        className="fixed right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-3 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md z-[60] hidden md:block"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                )}

                {/* Content */}
                <div className="inline-block w-full max-w-5xl my-8 text-left align-middle transition-all transform bg-transparent shadow-xl rounded-2xl relative" onClick={(e) => e.stopPropagation()}>

                    {/* Media Section */}
                    <div className="relative w-full rounded-xl overflow-hidden shadow-2xl bg-black/50 mb-8 group">
                        {project.mediaType === 'video' ? (
                            <video
                                src={project.mediaUrl}
                                className="w-full max-h-[70vh] object-contain mx-auto"
                                controls
                                autoPlay
                            />
                        ) : (
                            <img
                                src={project.mediaUrl}
                                alt={project.title}
                                className="w-full max-h-[70vh] object-contain mx-auto"
                            />
                        )}
                    </div>

                    {/* Details Section */}
                    <div className="bg-slate-900/80 backdrop-blur-md rounded-xl p-8 md:p-10 border border-white/10 shadow-2xl">
                        <div className="flex flex-col md:flex-row gap-8 md:items-start justify-between mb-8 border-b border-white/10 pb-8">
                            <div className="space-y-2">
                                <h3 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-blue-500/20 text-blue-200 text-sm font-medium rounded-full border border-blue-500/30">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="md:text-right">
                                <p className="text-sm text-slate-400 uppercase tracking-wider font-semibold mb-1">Rol Principal</p>
                                <p className="text-blue-400 font-bold text-lg md:text-xl">{project.role}</p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <h4 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Sobre el proyecto
                                </h4>
                                <p className="text-slate-300 text-lg leading-relaxed">{project.description}</p>
                            </div>

                            {project.roleDescription && (
                                <div className="bg-blue-900/20 rounded-lg p-6 border border-blue-500/20">
                                    <h4 className="text-xl font-semibold text-blue-300 mb-3 flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                        Mi Contribución Técnica
                                    </h4>
                                    <p className="text-slate-200 text-lg leading-relaxed">
                                        {project.roleDescription}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
