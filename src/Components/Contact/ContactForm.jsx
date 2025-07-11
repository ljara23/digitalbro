import { useState } from 'react';


const ContactForm = ({ logodark }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        option: '',
        description:'',
        website: '', //honeypot
    });

    const [statusMessage, setStatusMessage] = useState('');

    const options = [
        { id: 1, label: 'Diseño y Desarrollo web' },
        { id: 2, label: 'Landing Page' },
        { id: 3, label: 'Posicionamiento web' },
        { id: 4, label: 'Branding de marca' },
        { id: 5, label: 'Consultoría' },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Mostrar un mensaje de espera
        setStatusMessage('Enviando...');

        if (formData.website.trim() !== '') {
            setStatusMessage('Detección de spam.');
            return;
        }

        const response = await fetch('https://digitalbroperu.com/mailer/contact.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (result.success) {
            setStatusMessage('Correo enviado');
            setFormData({
                name: '',
                email: '',
                phone: '',
                option: '',
                description: '',
            });
        } else {
            setStatusMessage('Error en envío');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-darknight p-[2rem] rounded-[25px] border-2 border-beige">
            <h2 className="text-center xl:text-4xl text-2xl text-beige font-bold">Contáctanos</h2>
            <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            style={{ display: 'none' }}
            tabIndex="-1"
            />
            <div className="flex flex-col">
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="px-2 xl:text-2xl py-1 rounded-full text-xs text-beige text-center bg-darknight border-2 border-beige placeholder:text-beige"
                    placeholder="Mi nombre o empresa"
                    required
                />
            </div>
            <div className="flex flex-col">
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="px-2 xl:text-2xl py-1 rounded-full text-xs text-beige text-center bg-darknight border-2 border-beige placeholder:text-beige"
                    placeholder="Mi correo"
                    required
                />
            </div>
            <div className="flex flex-col">
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="px-2 xl:text-2xl py-1 rounded-full text-xs text-beige text-center bg-darknight border-2 border-beige placeholder:text-beige"
                    placeholder="Mi número celular"
                    required
                />
            </div>
            <div className="flex flex-col">
                <select
                    id="option"
                    name="option"
                    value={formData.option}
                    onChange={handleChange}
                    className="px-2 xl:text-2xl py-1 rounded-full text-xs text-beige text-center bg-darknight border-2 border-beige placeholder:text-beige appearance-none"
                    required
                >
                    <option value="" className="appearance-none text-center">--Seleccionar--</option>
                    {options.map((option) => (
                        <option key={option.id} value={option.label} className="appearance-none text-center">
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex flex-col">
                <textarea
                    id="description"
                    name="description"
                    rows="4"
                    value={formData.description}
                    onChange={handleChange}
                    className="px-2 xl:text-2xl py-1 rounded-[15px] text-xs text-beige text-center bg-darknight border-2 border-beige placeholder:text-beige"
                    placeholder="Coméntanos un poco"
                    required
                />
            </div>
            <div className="flex justify-center">
                <button className="transition ease-in-out p-1 delay-150 bg-gradient-to-r from-jade to-duck text-darknight rounded-[20px] mt-3 px-5 hover:-translate-y-1 hover:scale-105 duration-300">
                    <span className="flex item-center items-center font-extraBold xl:text-2xl text-xs">Enviar<img alt="Logo" src={logodark} className="h-6 w-auto"/></span>
                </button>
            </div>
            {statusMessage && <p className="text-center text-beige mt-4">{statusMessage}</p>}
        </form>
    );
};

export default ContactForm;
