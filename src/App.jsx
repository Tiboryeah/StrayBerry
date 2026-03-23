import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setIsScrolled(window.scrollY > 50);
                    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const products = [
        {
            id: 1,
            name: 'Clásicas con Crema',
            price: '$50.00',
            image: '/images/productos/fresas.jpeg',
            description: 'Nuestras fresas seleccionadas a mano con crema batida artesanal.'
        },
        {
            id: 2,
            name: 'Delicia de Mango',
            price: '$55.00',
            image: '/images/productos/mango.jpeg',
            description: 'Fresas frescas acompañadas de trozos de mango dulce y crema.'
        },
        {
            id: 3,
            name: 'Combinación Plátano',
            price: '$40.00',
            image: '/images/productos/platanos.jpeg',
            description: 'La mezcla perfecta de fresas, plátano y nuestra crema secreta.'
        }
    ];

    return (
        <div className="app">
            <div className="bg-ornaments">
                <div className="ornament-circle" style={{ top: '5%', left: '8%', width: '150px', height: '150px', opacity: 0.1 }}></div>
                <div className="ornament-circle" style={{ top: '15%', left: '85%', width: '120px', height: '120px', opacity: 0.08 }}></div>
                <div className="ornament-circle" style={{ top: '40%', left: '92%', width: '180px', height: '180px', opacity: 0.12 }}></div>
                <div className="ornament-circle" style={{ top: '65%', left: '2%', width: '140px', height: '140px', opacity: 0.06 }}></div>
                
                {/* Floating Real Strawberries - Larger sizes for better background presence */}
                <img src="/images/fresa.png" className="strawberry-float" style={{ top: '10%', left: '15%', width: '150px', opacity: 0.25 }} alt="Fresa Flotante" />
                <img src="/images/fresa.png" className="strawberry-float" style={{ top: '30%', left: '80%', width: '120px', opacity: 0.2, animationDelay: '-2s' }} alt="Fresa Flotante" />
                <img src="/images/fresa.png" className="strawberry-float" style={{ top: '50%', left: '5%', width: '180px', opacity: 0.3, animationDelay: '-5s' }} alt="Fresa Flotante" />
                <img src="/images/fresa.png" className="strawberry-float" style={{ top: '80%', left: '85%', width: '130px', opacity: 0.18, animationDelay: '-8s' }} alt="Fresa Flotante" />
                <img src="/images/fresa.png" className="strawberry-float" style={{ top: '90%', left: '40%', width: '160px', opacity: 0.25, animationDelay: '-12s' }} alt="Fresa Flotante" />
            </div>
            {/* Navigation */}
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                <div className="nav-container">
                    <div className="logo-container">
                        <img src="/images/logo.png" alt="StrayBerry Logo" className="logo" />
                        <span className="brand-name">StrayBerry</span>
                    </div>
                    <ul className="nav-links">
                        <li><a href="#hero">Inicio</a></li>
                        <li><a href="#productos">Productos</a></li>
                        <li><a href="#nosotros">Nosotros</a></li>
                        <li><a href="#proposito">Misión y Visión</a></li>
                        <li><a href="#organizacion">Organización</a></li>
                        <li><a href="#objetivos">Objetivos</a></li>
                        <li><button className="btn btn-primary">Pedir Ahora</button></li>
                    </ul>
                </div>
            </nav>

            {/* Hero Section */}
            <header id="hero" className="hero">
                <div className="hero-content animate-fade-in parallax-hero-content">
                    <h1 className="hero-title">El lado más <span className="text-gradient">dulce</span> de la fresa</h1>
                    <p className="hero-subtitle">
                        Disfruta de la experiencia única de nuestras fresas con crema artesanal,
                        hechas con los ingredientes más frescos para deleitar tu paladar.
                    </p>
                    <div className="hero-btns">
                        <a href="#productos" className="btn btn-primary">Ver Menú</a>
                        <a href="#nosotros" className="btn btn-outline">Nuestra Historia</a>
                    </div>
                </div>
                <div className="hero-image-container animate-fade-in parallax-hero-image">
                    <img src="/images/fresas.jpeg" alt="Fresas con Crema" className="hero-image" />
                    <div className="floating-badge">100% Fresco</div>
                </div>
            </header>

            {/* Products Section */}
            <section id="productos" className="products-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Nuestros <span className="text-gradient">Productos</span></h2>
                        <p className="section-subtitle">Seleccionamos lo mejor de la cosecha para ti</p>
                    </div>
                    <div className="products-grid">
                        {products.map((product) => (
                            <div key={product.id} className="product-card">
                                <div className="product-image-wrapper">
                                    <img src={product.image} alt={product.name} className="product-image" />
                                </div>
                                <div className="product-info">
                                    <h3 className="product-name">{product.name}</h3>
                                    <p className="product-description">{product.description}</p>
                                    <div className="product-footer">
                                        <span className="product-price">{product.price}</span>
                                        <button className="btn btn-primary btn-sm">Agregar</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Video Section */}
            <section id="video" className="video-section">
                <div className="container">
                    <div className="video-wrapper animate-fade-in">
                        <div className="video-info">
                            <h2 className="section-title">Nuestra <span className="text-gradient">Preparación</span></h2>
                            <p className="section-subtitle">Mira cómo creamos la magia en cada plato</p>
                        </div>
                        <div className="video-container shadow-premium">
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="product-video"
                            >
                                <source src="/videos/fresas-con-crema.mp4" type="video/mp4" />
                                Tu navegador no soporta el tag de video.
                            </video>
                            <div className="video-badge-top-left">
                                <span className="premium-label">Calidad Premium</span>
                            </div>
                            <div className="video-badge-corner">
                                <img src="/images/logo.png" alt="StrayBerry" className="video-badge-logo" />
                                <div className="video-badge-text">
                                    <span className="badge-tag">Original</span>
                                    <span className="badge-brand">StrayBerry</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Parallax Banner */}
            <div className="parallax-banner" style={{ backgroundImage: 'url("/images/fresas_mantel.jpeg")' }}>
                <div className="parallax-overlay">
                    <h2 className="banner-text">Frescura que se siente en cada bocado</h2>
                </div>
            </div>

            {/* About Section */}
            <section id="nosotros" className="about-section">
                <div className="container about-container">
                    <div className="about-image-side">
                        <img src="/images/fresas_mantel.jpeg" alt="Preparación" className="about-image" />
                    </div>
                    <div className="about-content">
                        <h2 className="section-title">¿Por qué <span className="text-gradient">StrayBerry</span>?</h2>
                        <p>
                            En StrayBerry no solo vendemos fresas, creamos momentos de felicidad.
                            Nuestra receta de crema batida ha sido perfeccionada durante años para
                            lograr la consistencia y el sabor ideales que realzan la dulzura natural de la fresa.
                        </p>
                        <div className="features">
                            <div className="feature">
                                <div className="feature-icon" style={{ backgroundColor: 'var(--spark-yellow)' }}></div>
                                <span>Fruta Seleccionada</span>
                            </div>
                            <div className="feature">
                                <div className="feature-icon" style={{ backgroundColor: 'var(--spark-pink)' }}></div>
                                <span>Crema Artesanal</span>
                            </div>
                            <div className="feature">
                                <div className="feature-icon" style={{ backgroundColor: 'var(--spark-blue)' }}></div>
                                <span>Sabor Incomparable</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section id="proposito" className="proposito-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Nuestro <span className="text-gradient">Propósito</span></h2>
                        <p className="section-subtitle">Lo que nos impulsa día a día</p>
                    </div>
                    <div className="proposito-grid">
                        <div className="proposito-card animate-fade-in shadow-premium">
                            <div className="proposito-header">
                                <span className="proposito-tag">Misión</span>
                                <h3 className="proposito-card-title">Transformar la Experiencia</h3>
                            </div>
                            <div className="proposito-body">
                                <p className="proposito-text">
                                    Transformar el consumo tradicional de postres en una experiencia <strong>dinámica y audaz</strong>, 
                                    produciendo y distribuyendo fresas con crema de la más alta calidad.
                                </p>
                                <p className="proposito-text">
                                    Nos enfocamos en satisfacer el antojo de nuestros clientes y socios comerciales mediante 
                                    procesos de producción eficientes y una logística ágil, llevando la frescura de 
                                    <strong> StrayBerry</strong> a cada destino con estilo y rapidez.
                                </p>
                            </div>
                        </div>
                        <div className="proposito-card animate-fade-in shadow-premium" style={{ animationDelay: '0.2s' }}>
                            <div className="proposito-header">
                                <span className="proposito-tag">Visión</span>
                                <h3 className="proposito-card-title">Referente para el 2030</h3>
                            </div>
                            <div className="proposito-body">
                                <p className="proposito-text">
                                    Convertirnos para el <strong>2030</strong> en la marca referente de fresas con crema en la región.
                                </p>
                                <p className="proposito-text">
                                    Aspiramos a ser reconocidos no solo por nuestro sabor, sino por una <strong>identidad visual icónica</strong> 
                                    que inspire libertad y movimiento, expandiendo nuestra presencia tanto en el sector estudiantil 
                                    como en las mejores cafeterías y negocios del país.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Organization Section */}
            <section id="organizacion" className="org-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Nuestra <span className="text-gradient">Organización</span></h2>
                        <p className="section-subtitle">Conoce los pilares que nos definen</p>
                    </div>
                    <div className="org-grid">
                        <div className="org-card animate-fade-in shadow-premium">
                            <div className="org-card-category">Nuestra Esencia</div>
                            <h3 className="org-card-title">¿De qué trata StrayBerry?</h3>
                            <p className="org-card-text">
                                Somos una organización dedicada a la <strong>repostería gourmet artesanal</strong>, 
                                especializada en la elevación del postre tradicional de fresas con crema. 
                                Nos enfocamos en la creación de experiencias sensoriales dulces, utilizando 
                                materia prima de la más alta calidad y una receta secreta de crema artesanal.
                            </p>
                        </div>
                        <div className="org-card animate-fade-in shadow-premium" style={{ animationDelay: '0.2s' }}>
                            <div className="org-card-category">Actividades Principales</div>
                            <h3 className="org-card-title">¿Qué haremos como empresa?</h3>
                            <ul className="org-list">
                                <li>
                                    <div className="list-content">
                                        <h4>Abastecimiento Estratégico</h4>
                                        <p>Seleccionamos personalmente las fresas más frescas directamente de agricultores locales.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="list-content">
                                        <h4>Producción Artesanal</h4>
                                        <p>Elaboramos nuestra crema diariamente bajo los más estrictos estándares de calidad.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="list-content">
                                        <h4>Experiencia Omnicanal</h4>
                                        <p>Brindamos un servicio excepcional tanto en nuestra plataforma digital como en puntos físicos.</p>
                                    </div>
                                </li>
                                <li>
                                    <div className="list-content">
                                        <h4>Compromiso Sostenible</h4>
                                        <p>Trabajamos en el uso de empaques biodegradables y procesos zero-waste.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Long-term Objectives Section */}
            <section id="objetivos" className="objetivos-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Plan a <span className="text-gradient">Largo Plazo</span></h2>
                        <p className="section-subtitle">Nuestra hoja de ruta hacia el éxito</p>
                    </div>
                    <div className="objetivos-grid">
                        <div className="objetivo-card animate-fade-in shadow-premium">
                            <div className="objetivo-num">01</div>
                            <h3 className="objetivo-title">Posicionamiento de marca</h3>
                            <p className="objetivo-desc">Consolidar a STRAYBERRY como la marca líder de fresas con crema en la región antes del 2030, destacando por su calidad, sabor y una identidad visual innovadora.</p>
                        </div>
                        <div className="objetivo-card animate-fade-in shadow-premium" style={{ animationDelay: '0.1s' }}>
                            <div className="objetivo-num">02</div>
                            <h3 className="objetivo-title">Expansión de puntos de venta</h3>
                            <p className="objetivo-desc">Establecer presencia en universidades, cafeterías y negocios estratégicos en diferentes ciudades del país, creando una red sólida de distribución.</p>
                        </div>
                        <div className="objetivo-card animate-fade-in shadow-premium" style={{ animationDelay: '0.2s' }}>
                            <div className="objetivo-num">03</div>
                            <h3 className="objetivo-title">Eficiencia en producción y logística</h3>
                            <p className="objetivo-desc">Optimizar continuamente los procesos de producción y distribución para garantizar frescura, rapidez y consistencia en cada producto entregado.</p>
                        </div>
                        <div className="objetivo-card animate-fade-in shadow-premium" style={{ animationDelay: '0.3s' }}>
                            <div className="objetivo-num">04</div>
                            <h3 className="objetivo-title">Innovación en productos</h3>
                            <p className="objetivo-desc">Desarrollar nuevas presentaciones y combinaciones de fresas con crema que mantengan la esencia de la marca y respondan a las tendencias del mercado.</p>
                        </div>
                        <div className="objetivo-card animate-fade-in shadow-premium" style={{ animationDelay: '0.4s' }}>
                            <div className="objetivo-num">05</div>
                            <h3 className="objetivo-title">Reconocimiento de marca</h3>
                            <p className="objetivo-desc">Construir una identidad visual icónica y memorable que conecte con el público joven y refuerce el concepto dinámico y audaz de STRAYBERRY.</p>
                        </div>
                        <div className="objetivo-card animate-fade-in shadow-premium" style={{ animationDelay: '0.5s' }}>
                            <div className="objetivo-num">06</div>
                            <h3 className="objetivo-title">Alianzas estratégicas</h3>
                            <p className="objetivo-desc">Crear colaboraciones con cafeterías, eventos estudiantiles y negocios gastronómicos para ampliar el alcance y posicionamiento de la marca.</p>
                        </div>
                        <div className="objetivo-card animate-fade-in shadow-premium" style={{ animationDelay: '0.6s' }}>
                            <div className="objetivo-num">07</div>
                            <h3 className="objetivo-title">Sostenibilidad y responsabilidad</h3>
                            <p className="objetivo-desc">Implementar prácticas responsables en el manejo de ingredientes, empaques y procesos, contribuyendo al cuidado del medio ambiente.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container footer-grid">
                    <div className="footer-info">
                        <div className="logo-container">
                            <img src="/images/logo.png" alt="StrayBerry Logo" className="logo" />
                            <span className="brand-name">StrayBerry</span>
                        </div>
                        <p>Endulzando tus días con la mejor calidad.</p>
                    </div>
                    <div className="footer-links">
                        <h4>Enlaces</h4>
                        <ul>
                            <li><a href="#hero">Inicio</a></li>
                            <li><a href="#productos">Productos</a></li>
                            <li><a href="#nosotros">Nosotros</a></li>
                            <li><a href="#proposito">Misión y Visión</a></li>
                            <li><a href="#organizacion">Organización</a></li>
                            <li><a href="#objetivos">Objetivos</a></li>
                        </ul>
                    </div>
                    <div className="footer-social">
                        <h4>Síguenos</h4>
                        <div className="social-icons">
                            <span className="social-icon">IG</span>
                            <span className="social-icon">FB</span>
                            <span className="social-icon">TK</span>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 StrayBerry. Todos los derechos reservados.</p>
                </div>
            </footer>

        </div>
    );
}

export default App;
