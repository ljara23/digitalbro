import { useState,useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import ContactForm from '../Components/Contact/ContactForm'
import slider1 from '../assets/slider1.webp'
import slidercontact from '../assets/slider-contact1.webp'
import nav1 from '../assets/img-nav1.webp'
import nav2 from '../assets/img-nav2.webp'
import nav3 from '../assets/img-nav3.webp'
import nav4 from '../assets/img-nav4.webp'
import nav5 from '../assets/img-nav5.webp'
import nav6 from '../assets/img-nav6.webp'
import portafolio1 from '../assets/img-portafolio1.webp'
import portafolio2 from '../assets/img-portafolio2.webp'
import portafolio3 from '../assets/img-portafolio3.webp'
import portafolio4 from '../assets/img-portafolio4.webp'
import portafolio5 from '../assets/img-portafolio5.webp'
import instaicon from '../assets/insta-icon.svg'
import fbicon from '../assets/fb-icon.svg'
import logobeige from '../assets/logo-beige.svg'
import logodark from '../assets/logo-dark.svg'
import logopr from '../assets/logo-pr.svg'

const navigation = [
  { name: 'Inicio', href: '#' },
  { name: 'Servicios', href: '#services' },
  { name: 'Portafolio', href: '#portafolio' },
  { name: 'Contactanos', href: '#contact' },
]



export default function Inicio(){
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)   
    const [isDark, setIsDark] = useState(false);

    // Función para verificar la visibilidad de la sección
    const checkVisibility = () => {
        const section = document.getElementById('portafolio');
        const sectionRect = section.getBoundingClientRect();

        // Si la sección está dentro de la ventana de visualización
        if (sectionRect.top <= 0 && sectionRect.bottom > 0) {
            setIsDark(true);
        } else {
            setIsDark(false);
        }
    };
    // Hook para escuchar el evento de scroll
    useEffect(() => {
        window.addEventListener('scroll', checkVisibility);

        // Llamada inicial para verificar si ya está visible al cargar
        checkVisibility();

        // Limpiar el evento cuando el componente se desmonte
        return () => {
            window.removeEventListener('scroll', checkVisibility);
        };
    }, []);
    
    return(
        <>
            <nav aria-label="Global" className="fixed w-full flex items-center justify-center p-6 lg:px-8 z-50 backdrop-blur-sm">
                <div className={`flex items-center justify-between lg:w-full font-normal ${isDark ? 'text-darknigth' : 'text-beige'} transition-colors duration-200`}>
                    {/* Logo */}
                    <a href="#" className="flex -m-1.5 p-1.5 items-center transform transition-transform duration-200 hover:scale-110">                    
                        <img
                            alt="Logo"
                            src={`${isDark ? logodark : logobeige}`}
                            className="h-8 w-auto"
                        />
                        <span className="font-semiBold inline-block align-text-bottom tracking-tighter">DIGITAL BRO</span>
                    </a>

                    {/* Menú de navegación */}
                    <div className="hidden lg:flex lg:gap-x-12 ml-6">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className={`text-sm text-slate-600 transform transition-transform duration-200 hover:translate-y-1  ${isDark ? 'hover:text-darknight' : 'hover:text-jade'}`}>
                        {item.name}
                        </a>
                    ))}
                    </div>

                    {/* Menú móvil */}
                    <div className="flex lg:hidden ml-6">
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(true)}
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                </div>
            </nav>
            <header className="relative inset-x top-0 z-40 h-screen bg-zinc-950">
                <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-20" />
                    <DialogPanel className="fixed ease-linear inset-y-0 right-0 z-[60] bg-gradient-to-r from-jade to-duck w-full overflow-y-auto bg-white px-6 py-6">
                        <div className="flex justify-between items-center">                        
                        <a href="#" className="flex -m-1.5 p-1.5 items-center transform transition-transform duration-200 hover:scale-110">                    
                            <img
                                alt="Logo"
                                src={logodark}
                                className="h-8 w-auto"
                            />
                            <span className="font-semiBold inline-block align-text-bottom tracking-tighter">DIGITAL BRO</span>
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="size-6 z-50" />
                        </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6">
                                <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-mx-3 font-normal block rounded-lg px-3 py-2 text-base/7 text-gray-900 hover:bg-gray-50"
                                    >
                                    {item.name}
                                    </a>
                                ))}
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </Dialog>
                <div className="container m-auto">
                    <div className="flex justify-end items-center mx-auto font-sans min-h-screen relative">                        
                        <img
                            alt="Slider 1"
                            src={slider1}
                            className="h-[80vh] z-0 absolute left-0 right-0 top-1/2 transform -translate-y-1/2 opacity-50 rounded-[25px]"
                        />
                        <div className="rounded-[25px] text-jade z-10 lg:p-0 p-4">
                            <div className="lg:text-6xl xl:text-8xl text-4xl font-extraBold tracking-normal leading-2 tracking-tighter text-right">
                                <p>
                                    impulsamos<br></br>transformamos<br></br>tu marca
                                </p>                            
                            </div> 
                            <div className="flex justify-end">
                                <a href="#services" className="transition ease-in-out p-1 bg-gradient-to-r from-jade to-duck text-darknight rounded-[20px] mt-3 px-5 hover:-translate-y-1 hover:scale-105 duration-200">
                                    <span className="flex item-center items-center font-extraBold xl:text-2xl text-xs">Más info<img alt="Logo" src={logodark} className="h-6 w-auto"/></span>
                                </a>
                            </div>   
                        </div>  
                    </div>
                </div>
            </header>
            <section className="container m-auto min-h-screen flex flex-col justify-center items-center z-10" id="services">
                <div className="mb-8 xl:h-[10vh]">
                    <ul className="flex flex-wrap -mb-px text-sm justify-center items-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                        <li className="me-4 p-1" role="presentation">
                            <button className="inline-block px-4 py-2 bg-gradient-to-r from-jade to-duck rounded-[25px] text-darknight z-20 font-bold tracking-tighter hover:-translate-y-1 hover:scale-105 duration-200 xl:text-2xl text-md" id="web-a-medida-tab" data-tabs-target="#web-a-medida" type="button" role="tab" aria-controls="web-a-medida" aria-selected="false">Web a Medida</button>
                        </li>
                        <li className="me-4 p-1" role="presentation">
                            <button className="inline-block px-4 py-2 bg-gradient-to-r from-jade to-duck rounded-[25px] text-darknight z-20 font-bold tracking-tighter hover:-translate-y-1 hover:scale-105 duration-200 xl:text-2xl text-md" id="diseno-y-desarrollo-web-tab" data-tabs-target="#diseno-y-desarrollo-web" type="button" role="tab" aria-controls="diseno-y-desarrollo-web" aria-selected="false">Diseño y Desarrollo Web</button>
                        </li>
                        <li className="me-4 p-1" role="presentation">
                            <button className="inline-block px-4 py-2 bg-gradient-to-r from-jade to-duck rounded-[25px] text-darknight z-20 font-bold tracking-tighter hover:-translate-y-1 hover:scale-105 duration-200 xl:text-2xl text-md" id="marketing-digital-tab" data-tabs-target="#marketing-digital" type="button" role="tab" aria-controls="marketing-digital" aria-selected="false">Marketing Digital</button>
                        </li>
                        <li className="me-4 p-1" role="presentation">
                            <button className="inline-block px-4 py-2 bg-gradient-to-r from-jade to-duck rounded-[25px] text-darknight z-20 font-bold tracking-tighter hover:-translate-y-1 hover:scale-105 duration-200 xl:text-2xl text-md" id="chatbot-tab" data-tabs-target="#chatbot" type="button" role="tab" aria-controls="chatbot" aria-selected="false">Chatbot</button>
                        </li>
                        <li className="me-4 p-1" role="presentation">
                            <button className="inline-block px-4 py-2 bg-gradient-to-r from-jade to-duck rounded-[25px] text-darknight z-20 font-bold tracking-tighter hover:-translate-y-1 hover:scale-105 duration-200 xl:text-2xl text-md" id="ecommerce-tab" data-tabs-target="#ecommerce" type="button" role="tab" aria-controls="ecommerce" aria-selected="false">E-commerce</button>
                        </li>
                        <li className="me-4 p-1" role="presentation">
                            <button className="inline-block px-4 py-2 bg-gradient-to-r from-jade to-duck rounded-[25px] text-darknight z-20 font-bold tracking-tighter hover:-translate-y-1 hover:scale-105 duration-200 xl:text-2xl text-md" id="consultoria-tab" data-tabs-target="#consultoria" type="button" role="tab" aria-controls="consultoria" aria-selected="false">Consultoría</button>
                        </li>
                    </ul>
                </div>
                <div id="default-tab-content" className="flex flex-col justify-center items-center w-full lg:h-[60vh] xl:h-[50vh]">
                    <div className="hidden flex items-center justify-between p-4 rounded-lg" id="web-a-medida" role="tabpanel" aria-labelledby="web-a-medida-tab">
                        <div className="itemnav flex flex-1 p-2 lg:w-[40rem]">
                            <p className="xl:text-2xl text-md bg-beige text-darknight p-8 rounded-[25px] z-20">
                                Desarrollamos sitios web totalmente personalizados según las <strong>necesidades y objetivos específicos</strong> de tu empresa. 
                            </p>
                        </div>
                        <div className="flex-1 p-2 lg:flex justify-center">
                            <img
                                alt=""
                                src={nav1}
                                className="xl:h-[25rem] h-80 w-auto rounded-[25px]"
                            />
                        </div>
                    </div>
                    <div className="hidden flex flex-row-reverse  items-center justify-between p-4 rounded-lg" id="diseno-y-desarrollo-web" role="tabpanel" aria-labelledby="diseno-y-desarrollo-web-tab">
                        <div className="itemnav flex flex-1 p-2 w-[40rem]">
                            <p className="xl:text-2xl text-md bg-beige text-darknight p-8 rounded-[25px] z-20">
                                Creamos sitios web que no solo se ven increíbles, sino que también funcionan a la perfección. Desde <strong>la concepción</strong> de la idea hasta el <strong>desarrollo completo</strong>.
                            </p>
                        </div>
                        <div className="flex-1 p-2 flex justify-center">
                            <img
                                alt=""
                                src={nav2}
                                className="xl:h-[25rem] h-80 w-auto rounded-[25px]"
                            />
                        </div>
                    </div>
                    <div className="hidden flex items-center justify-between p-4 rounded-lg" id="marketing-digital" role="tabpanel" aria-labelledby="marketing-digital-tab">
                        <div className="itemnav flex flex-1 p-2 w-[40rem]">
                            <p className="xl:text-2xl text-md bg-beige text-darknight p-8 rounded-[25px] z-20">
                                Impulsamos tu presencia online con <strong>estrategias</strong> de marketing digital personalizadas, desde <strong>redes sociales</strong> hasta publicidad online, optimizando con <strong>análisis de datos</strong> para aumentar tu visibilidad y conectar con tu <strong>público objetivo.</strong>
                            </p>
                        </div>
                        <div className="flex-1 p-2 flex justify-center">
                            <img
                                alt=""
                                src={nav3}
                                className="xl:h-[25rem] h-80 w-auto rounded-[25px]"
                            />
                        </div>
                    </div>
                    <div className="hidden flex flex-row-reverse items-center justify-between p-4 rounded-lg" id="chatbot" role="tabpanel" aria-labelledby="chatbot-tab">
                        <div className="itemnav flex flex-1 p-2 w-[40rem]">
                            <p className="xl:text-2xl text-md bg-beige text-darknight p-8 rounded-[25px] z-20">
                                Implementamos chatbots y CRM para mejorar la <strong>atención al cliente</strong>, ofreciendo respuestas instantáneas y personalizadas, <strong>optimizando</strong> la eficiencia.
                            </p>
                        </div>
                        <div className="flex-1 p-2 flex justify-center">
                            <img
                                alt=""
                                src={nav4}
                                className="xl:h-[25rem] h-80 w-auto rounded-[25px]"
                            />
                        </div>
                    </div>
                    <div className="hidden flex items-center justify-between p-4 rounded-lg" id="ecommerce" role="tabpanel" aria-labelledby="ecommerce-tab">
                        <div className="itemnav flex flex-1 p-2 w-[40rem]">
                            <p className="xl:text-2xl text-md bg-beige text-darknight p-8 rounded-[25px] z-20">
                                Desarrollamos tiendas online completas y funcionales, con diseño atractivo, <strong>experiencia de compra</strong> fluida, <strong>pagos seguros</strong> y <strong>optimización</strong> para aumentar ventas.
                            </p>
                        </div>
                        <div className="flex-1 p-2 flex justify-center">
                            <img
                                alt=""
                                src={nav5}
                                className="xl:h-[25rem] h-80 w-auto rounded-[25px]"
                            />
                        </div>    
                    
                    </div>
                    <div className="hidden flex flex-row-reverse items-center justify-between p-4 rounded-lg" id="consultoria" role="tabpanel" aria-labelledby="consultoria-tab">
                        <div className="itemnav flex flex-1 p-2 w-[40rem]">
                            <p className="xl:text-2xl text-md bg-beige text-darknight p-8 rounded-[25px] z-20">
                                Ofrecemos consultoría especializada para <strong>optimizar operaciones digitales</strong>, implementar <strong>soluciones tecnológicas</strong> y estrategias que aumenten la <strong>eficiencia y competitividad</strong> de tu empresa.
                            </p>
                        </div>
                        <div className="flex-1 p-2 flex justify-center">
                            <img
                                alt=""
                                src={nav6}
                                className="xl:h-[25rem] h-80 w-auto rounded-[25px]"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-gradient-to-r from-jade to-duck z-10" id="portafolio">
                <div className="container m-auto min-h-screen flex flex-col justify-center items-center">
                    <div id="controls-carousel" className="relative w-full overflow-hidden" data-carousel="static">
                        <div className="relative h-screen overflow-hidden rounded-[25px] lg:h-96 md:h-96">
                            {/* Primer slide */}
                            <div className="carousel-item duration-700 ease-in-out transform transition-all bg-gradient-to-r from-jade to-duck" data-carousel-item="active">
                                <div className="absolute flex w-full justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <div className="flex flex-col md:flex-row items-center"> {/* Modificado aquí */}
                                        {/* Imagen del carrusel */}
                                        <img src={portafolio1} className="xl:w-[30rem] w-[25rem] rounded-lg" alt="..."/>
                                        {/* Texto al costado de la imagen */}
                                        <div className="ml-8 mt-4 md:mt-0 w-80 text-center md:text-right"> {/* Modificado aquí */}
                                            <h2 className="text-2xl font-bold text-darknight">Página web & E-commerce</h2>
                                            <p className="xl:text-xl text-darknight">Web que combina una sección informativa sobre arquitectura con una tienda para interiores</p>
                                            <div className="text-center md:text-right">
                                                <button className="transition ease-in-out p-1   bg-darknight text-duck rounded-[20px] mt-3 px-5 hover:-translate-y-1 hover:scale-105 duration-200">
                                                    <span className="flex item-center items-center">lo quiero<img alt="Logo" src={logopr} className="h-8 w-auto"/></span>
                                                </button>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Segundo slide */}
                            <div className="carousel-item duration-700 ease-in-out transform transition-all bg-gradient-to-r from-jade to-duck" data-carousel-item>
                                <div className="absolute flex w-full justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <div className="flex flex-col md:flex-row items-center"> {/* Modificado aquí */}
                                        {/* Imagen del carrusel */}
                                        <img src={portafolio2} className="xl:w-[30rem] w-[25rem] rounded-lg" alt="..."/>
                                        {/* Texto al costado de la imagen */}
                                        <div className="ml-8 mt-4 md:mt-0 w-80 text-center md:text-right"> {/* Modificado aquí */}
                                            <h2 className="text-2xl font-bold text-darknight">Diseño y desarrollo landing page</h2>
                                            <p className="xl:text-xl text-darknight">Se desarrolló una landing page para una Agencia de capacitación a emprendedores</p>
                                            <div className="text-center md:text-right">
                                                <button className="transition ease-in-out p-1  bg-darknight text-duck rounded-[20px] mt-3 px-5 hover:-translate-y-1 hover:scale-105 duration-200">
                                                    <span className="flex items-center">Lo quiero<img alt="Logo" src={logopr} className="h-8 w-auto"/></span>
                                                </button>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Terecer slide */}
                            <div className="carousel-item duration-700 ease-in-out transform transition-all bg-gradient-to-r from-jade to-duck" data-carousel-item>
                                <div className="absolute flex w-full justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <div className="flex flex-col md:flex-row items-center"> {/* Modificado aquí */}
                                        {/* Imagen del carrusel */}
                                        <img src={portafolio3} className="xl:w-[30rem] w-[25rem] rounded-lg" alt="..."/>
                                        {/* Texto al costado de la imagen */}
                                        <div className="ml-8 mt-4 md:mt-0 w-80 text-center md:text-right"> {/* Modificado aquí */}
                                            <h2 className="text-2xl font-bold text-darknight">Desarrollo web y mailing marketing</h2>
                                            <p className="xl:text-xl text-darknight">Se realizó creación de mailings a medida y gestión de contenido para empresa se seguros</p>
                                            <div className="text-center md:text-right">
                                                <button className="transition ease-in-out p-1  bg-darknight text-duck rounded-[20px] mt-3 px-5 hover:-translate-y-1 hover:scale-105 duration-200">
                                                    <span className="flex items-center">Lo quiero<img alt="Logo" src={logopr} className="h-8 w-auto"/></span>
                                                </button>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Cuarto slide */}
                            <div className="carousel-item duration-700 ease-in-out transform transition-all bg-gradient-to-r from-jade to-duck" data-carousel-item>
                                <div className="absolute flex w-full justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <div className="flex flex-col md:flex-row items-center"> {/* Modificado aquí */}
                                        {/* Imagen del carrusel */}
                                        <img src={portafolio4} className="xl:w-[30rem] w-[25rem] rounded-lg" alt="..."/>
                                        {/* Texto al costado de la imagen */}
                                        <div className="ml-8 mt-4 md:mt-0 w-80 text-center md:text-right"> {/* Modificado aquí */}
                                            <h2 className="text-2xl font-bold text-darknight">Diseño y desarrollo web</h2>
                                            <p className="xl:text-xl text-darknight">Se trabajó en el diseño y desarrollo web para empresa del rubro financiero automovilístico.</p>
                                            <div className="text-center md:text-right">
                                                <button className="transition ease-in-out p-1  bg-darknight text-duck rounded-[20px] mt-3 px-5 hover:-translate-y-1 hover:scale-105 duration-200">
                                                    <span className="flex items-center">Lo quiero<img alt="Logo" src={logopr} className="h-8 w-auto"/></span>
                                                </button>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Quinto slide */}
                            <div className="carousel-item duration-700 ease-in-out transform transition-all bg-gradient-to-r from-jade to-duck" data-carousel-item>
                                <div className="absolute flex w-full justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <div className="flex flex-col md:flex-row items-center"> {/* Modificado aquí */}
                                        {/* Imagen del carrusel */}
                                        <img src={portafolio5} className="xl:w-[30rem] w-[25rem] rounded-lg" alt="..."/>
                                        {/* Texto al costado de la imagen */}
                                        <div className="ml-8 mt-4 md:mt-0 w-80 text-center md:text-right"> {/* Modificado aquí */}
                                            <h2 className="text-2xl font-bold text-darknight">Diseño y desarrollo de multi web</h2>
                                            <p className="xl:text-xl text-darknight">Se realizó una multi web para empresa del rubro legal que ofece capacitaciones y servicios corporativos.</p>
                                            <div className="text-center md:text-right">
                                                <button className="transition ease-in-out p-1 bg-darknight text-duck rounded-[20px] mt-3 px-5 hover:-translate-y-1 hover:scale-105 duration-200">
                                                    <span className="flex items-center">Lo quiero<img alt="Logo" src={logopr} className="h-8 w-auto"/></span>
                                                </button>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Botones de navegación */}
                        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none text-darknight">
                                <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
                                    <path d="M8.766.566A2 2 0 0 0 6.586 1L1 6.586a2 2 0 0 0 0 2.828L6.586 15A2 2 0 0 0 10 13.586V2.414A2 2 0 0 0 8.766.566Z"/>
                                </svg>
                            </span>
                        </button>
                        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none text-darknight">
                                <svg className="w-10 h-10 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 10 16">
                                    <path d="M3.414 1A2 2 0 0 0 0 2.414v11.172A2 2 0 0 0 3.414 15L9 9.414a2 2 0 0 0 0-2.828L3.414 1Z"/>
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </section>
            <section className="bg-darknight z-10" id="contact">  
                <div className="container m-auto">
                    <div className="flex flex-col md:flex-row justify-center md:justify-around items-center mx-auto font-sans min-h-screen relative gap-8 px-4 py-8">
    
                        <img
                            alt="Slider contáctanos"
                            src={slidercontact}
                            className="h-[80vh] sm:h-[60vh] md:h-[50vh] lg:h-[80vh] z-0 absolute right-0 top-1/2 transform -translate-y-1/2 opacity-50 rounded-[25px]"

                        />                       
                        <div className="rounded-[25px] text-jade z-10">
                            <div className="lg:text-6xl xl:text-8xl text-4xl font-extraBold tracking-normal leading-2 tracking-tighter text-left">
                                <p>
                                    trabajamos<br></br>con la mejor<br></br>tecnología
                                </p>                            
                            </div>                      
                        </div>
                        <div className="flex z-30">
                            <ContactForm logodark={logodark}></ContactForm>
                        </div>                                                                           
                    </div>   
                    <div className="container m-auto flex justify-around items-center pb-4">
                        <h3 className="text-beige flex items-center">Copyright © 2025 Digital Bro</h3> 
                        <div className="flex items-center">
                            <a href="https://www.facebook.com/digitalbroperu" target="_blank"><img
                            alt=""
                            src={fbicon}
                            className="h-5 w-auto ml-2 transform transition-transform duration-200 hover:scale-110"
                            /></a>
                            <a href="https://www.instagram.com/digitalbroperu/" target="_blank"><img
                            alt=""
                            src={instaicon}
                            className="h-5 w-auto ml-2 transform transition-transform duration-200 hover:scale-110"
                            /></a>
                        </div>                        
                    </div>                 
                </div>                
            </section>
        </> 
        )
}
//3