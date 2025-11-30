import { Link, useLocation } from "react-router-dom"
import { useTheme } from "../../providers/theme-provider"
import profileImage from "../../assets/imgs/AES_0088_1x1.png"

export const Aside = () => {
    const { theme, setTheme } = useTheme()
    const location = useLocation();
    const currentPath = location.pathname;

    const isActive = (path: string) => {
        if (path === '/home' && (currentPath === '/' || currentPath === '/home')) return true;
        return currentPath.startsWith(path);
    };

    const menuItems = [
        {
            path: "/home",
            label: "Inicio",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            )
        },
        {
            path: "/about",
            label: "Sobre Mí",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            )
        },
        {
            path: "/projects",
            label: "Proyectos",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            )
        },
        {
            path: "/contact",
            label: "Contacto",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        }
    ];

    return (
        <aside className="flex flex-col w-80 h-[95vh] m-6 ml-14 bg-linear-to-b from-cyan-200 to-blue-500 dark:from-slate-800 dark:to-slate-900 rounded-3xl shadow-2xl overflow-hidden relative transition-all duration-300">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-white/5 pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl" />

            {/* Profile Section */}
            <div className="flex flex-col items-center pt-8 pb-4 px-6 relative z-10 text-center">
                <div className="relative group mb-4">
                    <div className="absolute -inset-1 bg-linear-to-r from-white/50 to-blue-300/50 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                    <img
                        className="relative w-28 h-28 rounded-full object-cover border-4 border-white/40 shadow-xl transform group-hover:scale-105 transition-transform duration-500"
                        src={profileImage}
                        alt="Felix Da Silva Felix"
                    />
                </div>
                <h1 className="text-xl font-bold text-white tracking-tight drop-shadow-sm">Felix Da Silva</h1>
                <p className="text-blue-50 text-xs font-medium uppercase tracking-wider mt-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                    Full Stack Developer
                </p>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-2 relative z-10">
                <ul className="space-y-1">
                    {menuItems.map((item) => {
                        const active = isActive(item.path);
                        return (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden ${active
                                        ? 'bg-white text-blue-600 shadow-lg'
                                        : 'text-white hover:bg-white/10'
                                        }`}
                                >
                                    <span className={`p-1.5 rounded-lg transition-colors duration-300 ${active ? 'bg-blue-50 text-blue-600' : 'bg-white/10 text-white group-hover:bg-white/20'}`}>
                                        {item.icon}
                                    </span>
                                    <span className="font-medium text-base">{item.label}</span>
                                    {active && (
                                        <div className="absolute right-4 w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                                    )}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>

            {/* Footer */}
            <div className="p-4 relative z-10 mt-auto">
                <button
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    className="w-full flex items-center justify-center space-x-2 bg-black/20 hover:bg-black/30 text-white py-3 rounded-xl transition-all duration-300 backdrop-blur-md border border-white/10 group cursor-pointer"
                >
                    {theme === "light" ? (
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                            <span className="font-medium text-sm">Modo Oscuro</span>
                        </>
                    ) : (
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            <span className="font-medium text-sm">Modo Claro</span>
                        </>
                    )}
                </button>
            </div>
        </aside>
    )
}

