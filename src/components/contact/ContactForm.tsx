import { useState, type FormEvent } from 'react';

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const { name, email, message } = formData;

        if (!name || !email || !message) {
            // The 'required' attribute on inputs will handle basic validation visually.
            // This check is a fallback for programmatic submission or if 'required' is bypassed.
            setSubmitStatus('error'); // Indicate validation failure
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle'); // Reset status on new submission attempt

        try {
            const response = await fetch("https://formsubmit.co/ajax/dasilvafelix126@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                    _subject: `Nuevo mensaje de ${name} desde Portafolio`
                })
            });

            if (response.ok) {
                setFormData({ name: '', email: '', message: '' }); // Clear form on success
                setSubmitStatus('success');
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error(error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
        // Reset status if user starts typing again after an error/success
        if (submitStatus !== 'idle') {
            setSubmitStatus('idle');
        }
    };

    return (
        <div className="max-w-xl mx-auto bg-white/30 dark:bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-xl transition-colors duration-300">
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-800 dark:text-white ml-1 transition-colors duration-300">Nombre</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-white/10 border border-white/20 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-white/50 focus:bg-white/60 dark:focus:bg-white/20 transition-all"
                        placeholder="Tu nombre"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-800 dark:text-white ml-1 transition-colors duration-300">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-white/10 border border-white/20 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-white/50 focus:bg-white/60 dark:focus:bg-white/20 transition-all"
                        placeholder="tu@email.com"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-800 dark:text-white ml-1 transition-colors duration-300">Mensaje</label>
                    <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-white/10 border border-white/20 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 dark:focus:ring-white/50 focus:bg-white/60 dark:focus:bg-white/20 transition-all resize-none"
                        placeholder="¿En qué puedo ayudarte?"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 font-bold rounded-xl transform transition-all duration-300 shadow-lg flex items-center justify-center gap-2
                        ${isSubmitting
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-white text-blue-600 hover:bg-blue-50 hover:scale-[1.02] cursor-pointer'
                        }`}
                >
                    {isSubmitting ? (
                        <>
                            <svg className="animate-spin h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Enviando...
                        </>
                    ) : 'Enviar Mensaje'}
                </button>

                {submitStatus === 'success' && (
                    <div className="p-4 bg-green-100/80 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-xl text-center text-sm font-medium animate-fade-in">
                        ¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.
                    </div>
                )}

                {submitStatus === 'error' && (
                    <div className="p-4 bg-red-100/80 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-xl text-center text-sm font-medium animate-fade-in">
                        Hubo un error al enviar el mensaje. Por favor intenta nuevamente.
                    </div>
                )}
            </form>
        </div>
    )
}
