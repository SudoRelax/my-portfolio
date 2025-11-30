import { ContactForm } from "../../components/contact/ContactForm"

export const Contact = () => {
    return (
        <div className="flex-1 p-10 bg-linear-to-b from-cyan-200 to-blue-500 dark:from-slate-800 dark:to-slate-900 h-11/12 m-6 mr-14 rounded-lg shadow-sm overflow-y-auto transition-all duration-300">
            <div className="max-w-4xl mx-auto space-y-12">
                <section className="space-y-6 animate-fade-in text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight transition-colors duration-300">
                        Contáctame
                    </h1>
                    <p className="text-xl text-slate-700 dark:text-blue-50 max-w-2xl mx-auto transition-colors duration-300">
                        ¿Tienes una idea en mente o quieres colaborar? ¡Me encantaría escucharte!
                    </p>
                </section>

                <ContactForm />
            </div>
        </div>
    )
}
