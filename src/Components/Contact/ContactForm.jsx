import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        option: '',
    });

    // Datos para el combobox (puede ser cualquier tipo de datos que desees)
    const options = [
        { id: 1, label: 'Categoría 1' },
        { id: 2, label: 'Categoría 2' },
        { id: 3, label: 'Categoría 3' },
    ];

    // Función para manejar los cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Aquí puedes hacer algo con los datos, como enviarlos a un servidor.
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-darknight px-[4rem] py-4 mr-8 rounded-[25px] border-2 border-beige">
            <h2 className="text-center xl:text-4xl text-2xl text-beige font-bold">Contáctanos</h2>
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
                    className="px-2 xl:text-2xl py-1 rounded-full text-xs text-beige text-center bg-darknight border-2 border-beige placeholder:text-beige"
                    required
                >
                    <option value="">--Seleccionar--</option>
                    {options.map((option) => (
                        <option key={option.id} value={option.label}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex justify-center">
                <button className="transition ease-in-out p-1 delay-150 bg-gradient-to-r from-jade to-duck text-darknight rounded-[20px] mt-3 px-5 hover:-translate-y-1 hover:scale-105 duration-300">
                    <span className="flex item-center items-center font-extraBold xl:text-2xl text-xs">Enviar<img alt="Logo" src="/src/assets/logo-dark.svg" className="h-6 w-auto"/></span>
                </button>
            </div>

        </form>
    );
};

export default ContactForm;
