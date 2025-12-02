import { AboutHero } from "../../components/about/AboutHero"
import { AboutDetails } from "../../components/about/AboutDetails"

export const About = () => {
    return (
        <div className="flex-1 p-6 md:p-10 bg-linear-to-b from-cyan-200 to-blue-500 dark:from-slate-800 dark:to-slate-900 h-full md:h-[95vh] m-0 md:m-6 md:mr-14 rounded-none md:rounded-3xl shadow-sm overflow-y-auto transition-all duration-300">
            <div className="max-w-4xl mx-auto space-y-12">
                <AboutHero />
                <AboutDetails />
            </div>
        </div>
    )
}
