import { Link } from "react-router-dom"

export const Main = () => {
    return (
        <div className="flex-1 p-10 bg-linear-to-b from-cyan-200 to-blue-500 dark:from-slate-800 dark:to-slate-900 h-11/12 m-6 mr-14 rounded-lg shadow-sm overflow-y-auto transition-all duration-300">
            <div className="max-w-5xl mx-auto space-y-16">
                {/* Welcome Hero */}
                <section className="space-y-6 animate-fade-in text-center py-10">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight transition-colors duration-300">
                        Bienvenido a mi <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500 dark:from-white dark:to-blue-200 transition-all duration-300">Portafolio</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-700 dark:text-blue-50 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
                        Aquí encontrarás una muestra de mi pasión por el desarrollo web, mis proyectos más recientes y un poco más sobre quién soy. ¡Espero que disfrutes la visita!
                    </p>
                </section>

                {/* Navigation Preview Cards */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Card */}
                    <Link to="/about" className="group relative bg-white/30 dark:bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/20 hover:bg-white/50 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl">
                        <div className="absolute top-0 right-0 p-6 opacity-50 group-hover:opacity-100 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <div className="mt-4 space-y-2">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">Sobre Mí</h3>
                            <p className="text-slate-700 dark:text-blue-100/80">
                                Conoce mi trayectoria, mis habilidades técnicas y lo que me motiva como desarrollador.
                            </p>
                            <div className="flex items-center text-blue-600 dark:text-blue-300 font-medium mt-4">
                                <span>Leer más</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </Link>

                    {/* Projects Card */}
                    <Link to="/projects" className="group relative bg-white/30 dark:bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/20 hover:bg-white/50 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl">
                        <div className="absolute top-0 right-0 p-6 opacity-50 group-hover:opacity-100 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-600 dark:text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                            </svg>
                        </div>
                        <div className="mt-4 space-y-2">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">Proyectos</h3>
                            <p className="text-slate-700 dark:text-blue-100/80">
                                Explora una galería de mis trabajos, desde aplicaciones web hasta experimentos creativos.
                            </p>
                            <div className="flex items-center text-cyan-600 dark:text-cyan-300 font-medium mt-4">
                                <span>Ver galería</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </Link>

                    {/* Contact Card */}
                    <Link to="/contact" className="group relative bg-white/30 dark:bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/20 hover:bg-white/50 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-xl">
                        <div className="absolute top-0 right-0 p-6 opacity-50 group-hover:opacity-100 transition-opacity">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div className="mt-4 space-y-2">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">Contacto</h3>
                            <p className="text-slate-700 dark:text-blue-100/80">
                                ¿Tienes una idea o propuesta? No dudes en escribirme. ¡Conectemos!
                            </p>
                            <div className="flex items-center text-purple-600 dark:text-purple-300 font-medium mt-4">
                                <span>Escribir mensaje</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    </Link>
                </section>
            </div>
        </div>
    )
}