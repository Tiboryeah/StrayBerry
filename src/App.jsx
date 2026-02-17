import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [scrollOffset, setScrollOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            setScrollOffset(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
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
            <div className="bg-sprinkles">
                <div className="strawberry-float" style={{ top: '5%', left: '8%', fontSize: '80px', transform: `translateY(${scrollOffset * 0.05}px)`, opacity: 0.6 }}>🍓</div>
                <div className="strawberry-float" style={{ top: '15%', left: '85%', fontSize: '70px', transform: `translateY(${scrollOffset * -0.08}px)`, opacity: 0.5 }}>🍓</div>
                <div className="strawberry-float" style={{ top: '40%', left: '92%', fontSize: '90px', transform: `translateY(${scrollOffset * 0.12}px)`, opacity: 0.7 }}>🍓</div>
                <div className="strawberry-float" style={{ top: '65%', left: '2%', fontSize: '75px', transform: `translateY(${scrollOffset * -0.15}px)`, opacity: 0.4 }}>🍓</div>
                <div className="strawberry-float" style={{ top: '80%', left: '88%', fontSize: '85px', transform: `translateY(${scrollOffset * 0.07}px)`, opacity: 0.6 }}>🍓</div>
                <div className="strawberry-float" style={{ top: '92%', left: '12%', fontSize: '65px', transform: `translateY(${scrollOffset * -0.05}px)`, opacity: 0.3 }}>🍓</div>
                <div className="strawberry-float" style={{ top: '25%', left: '48%', fontSize: '40px', transform: `translateY(${scrollOffset * 0.03}px)`, opacity: 0.2 }}>🍓</div>
                <div className="strawberry-float" style={{ top: '55%', left: '42%', fontSize: '55px', transform: `translateY(${scrollOffset * -0.06}px)`, opacity: 0.3 }}>🍓</div>
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
                        <li><button className="btn btn-primary">Pedir Ahora</button></li>
                    </ul>
                </div>
            </nav>

            {/* Hero Section */}
            <header id="hero" className="hero">
                <div className="hero-content animate-fade-in" style={{ transform: `translateY(${scrollOffset * -0.1}px)` }}>
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
                <div className="hero-image-container animate-fade-in" style={{ animationDelay: '0.2s', transform: `translateY(${scrollOffset * 0.15}px)` }}>
                    <img src="/images/fresas.jpeg" alt="Fresas con Crema" className="hero-image" />
                    <div className="floating-badge" style={{ transform: `rotate(10deg) scale(${1 + Math.min(scrollOffset * 0.001, 0.2)})` }}>100% Fresco</div>
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
