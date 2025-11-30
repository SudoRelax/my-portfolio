export interface Project {
    title: string;
    description: string;
    tags: string[];
    role: string;
    roleDescription?: string;
    link: string;
    mediaType: 'image' | 'video';
    mediaUrl: string;
}

interface ProjectCardProps {
    project: Project;
    onImageClick: () => void;
}

export const ProjectCard = ({ project, onImageClick }: ProjectCardProps) => {
    return (
        <div className="group bg-white/30 dark:bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden hover:bg-white/40 dark:hover:bg-white/20 transition-all duration-300 flex flex-col md:flex-row h-full shadow-lg hover:shadow-xl">
            <div className="h-48 md:h-auto md:w-2/5 bg-black/10 dark:bg-black/20 relative overflow-hidden cursor-pointer" onClick={onImageClick}>
                {project.mediaType === 'video' ? (
                    <video
                        src={project.mediaUrl}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                ) : (
                    <img
                        src={project.mediaUrl}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                )}
                {/* Overlay for actions */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
                    <button
                        onClick={(e) => { e.stopPropagation(); onImageClick(); }}
                        className="p-3 bg-white/20 hover:bg-white/40 rounded-full backdrop-blur-sm text-white transition-all transform hover:scale-110"
                        title="Ver detalles"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="p-6 md:p-8 space-y-4 flex-1 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-200 transition-colors">{project.title}</h3>
                <p className="text-slate-700 dark:text-blue-50 flex-1 text-base md:text-lg leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-white/40 dark:bg-white/10 text-slate-800 dark:text-white/90 text-sm rounded-md border border-white/10">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    )
}
