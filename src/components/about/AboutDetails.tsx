export const AboutDetails = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Formación */}
            <div className="bg-white/30 dark:bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/20 transition-colors duration-300 hover:bg-white/40 dark:hover:bg-white/10">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                    Formación
                </h3>
                <ul className="space-y-3 text-slate-700 dark:text-blue-100/80">
                    <li>
                        <h4 className="font-semibold text-slate-800 dark:text-white">Polo Científico de Formosa</h4>
                        <p className="text-sm">Base técnica sólida e inicio de trayectoria.</p>
                    </li>
                    <li>
                        <h4 className="font-semibold text-slate-800 dark:text-white">Autodidacta</h4>
                        <p className="text-sm">Especialización continua en arquitecturas modernas y tecnologías de vanguardia.</p>
                    </li>
                </ul>
            </div>

            {/* Stack Tecnológico */}
            <div className="bg-white/30 dark:bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/20 transition-colors duration-300 hover:bg-white/40 dark:hover:bg-white/10">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-600 dark:text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Stack Tecnológico
                </h3>
                <div className="flex flex-wrap gap-2">
                    {['Node.js', 'TypeScript', 'Python', 'React', 'FastAPI', 'NestJS', 'Express', 'Docker', 'LangChain', 'Ollama'].map(skill => (
                        <span key={skill} className="px-3 py-1 bg-white/50 dark:bg-white/10 text-slate-800 dark:text-white rounded-full text-xs font-medium border border-white/20">
                            {skill}
                        </span>
                    ))}
                </div>
                <p className="mt-4 text-sm text-slate-700 dark:text-blue-100/80">
                    <strong>Arquitecturas:</strong> Hexagonal, SOA, Modular, REST.
                </p>
            </div>

            {/* Cualidades */}
            <div className="bg-white/30 dark:bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/20 transition-colors duration-300 hover:bg-white/40 dark:hover:bg-white/10">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Cualidades
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-blue-100/80 list-disc list-inside">
                    <li>Rigor técnico y honestidad profesional.</li>
                    <li>Código claro, mantenible y "audit-friendly".</li>
                    <li>Comunicación precisa y técnica.</li>
                    <li>Compromiso con la transparencia.</li>
                </ul>
            </div>

            {/* Experiencia */}
            <div className="bg-white/30 dark:bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/20 transition-colors duration-300 hover:bg-white/40 dark:hover:bg-white/10">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Experiencia
                </h3>
                <ul className="space-y-2 text-sm text-slate-700 dark:text-blue-100/80">
                    <li><strong className="text-slate-900 dark:text-white">Arquitectura:</strong> Diseño de sistemas backend/frontend escalables.</li>
                    <li><strong className="text-slate-900 dark:text-white">Web:</strong> Interfaces responsivas y APIs RESTful.</li>
                    <li><strong className="text-slate-900 dark:text-white">IA:</strong> Agentes reproducibles y Prompt Engineering.</li>
                    <li><strong className="text-slate-900 dark:text-white">DevOps:</strong> Docker, NGINX, Troubleshooting.</li>
                </ul>
            </div>
        </section>
    )
}
