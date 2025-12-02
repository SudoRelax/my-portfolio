import cvFile from '../../assets/docs/curriculum_felix.pdf';

export const AboutHero = () => {
    return (
        <section className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight transition-colors duration-300">
                Sobre <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500 dark:from-white dark:to-blue-200 transition-all duration-300">Mí</span>
            </h1>
            <div className="prose prose-lg text-slate-700 dark:text-blue-50 transition-colors duration-300">
                <p className="text-xl leading-relaxed font-medium">
                    Soy Bruno Da Silva, arquitecto de software y desarrollador web.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                    Mi trayectoria combina experiencia en backend, frontend y agentes de inteligencia artificial reproducibles. Me especializo en el desarrollo web modular y "audit-friendly", con una sólida base adquirida en el Polo Científico de Formosa y un aprendizaje continuo en tecnologías modernas.
                </p>

                <div className="mt-8">
                    <a
                        href={cvFile}
                        download="Curriculum_Bruno_Felix.pdf"
                        className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-linear-to-r from-blue-600 to-cyan-600 rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/40 transform hover:-translate-y-0.5"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-5 h-5 group-hover:animate-bounce"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M7.5 10.5l4.5 4.5m0 0l4.5-4.5m-4.5 4.5V3" />
                        </svg>
                        Descargar CV
                    </a>
                </div>
            </div>
        </section>
    )
}
