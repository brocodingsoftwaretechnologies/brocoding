import React, { useState, useEffect } from 'react';
import { 
  Code2, Smartphone, Monitor, HeadphonesIcon, Rocket, 
  Terminal, Database, Cloud, ChevronRight, Shield, Zap, Clock, 
  Target, Users, MapPin, Mail, Phone, Send, Menu, X 
} from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { icon: <Code2 size={32} />, title: "Software Development", description: "Bespoke software ecosystems architected to perfectly align with your unique enterprise requirements and complex business workflows." },
    { icon: <Monitor size={32} />, title: "Website Development", description: "High-performance, responsive web platforms engineered to deliver exceptional user experiences and drive digital engagement." },
    { icon: <Smartphone size={32} />, title: "Mobile App Development", description: "Sophisticated native and cross-platform mobile applications designed to maximize reach and optimize mobile interactions." },
    { icon: <HeadphonesIcon size={32} />, title: "Technical Support", description: "Dedicated, round-the-clock IT infrastructure support and rapid-response troubleshooting to ensure uninterrupted business continuity." },
    { icon: <Target size={32} />, title: "System Maintenance", description: "Proactive, continuous system monitoring and rigorous maintenance protocols to guarantee optimal operational stability." },
    { icon: <Cloud size={32} />, title: "Cloud Solutions", description: "Resilient cloud infrastructure deployments and strategic migrations designed to enhance operational agility and data security." },
    { icon: <Database size={32} />, title: "Database Management", description: "Secure, highly optimized database architectures engineered for rapid data retrieval, scalability, and robust administration." },
    { icon: <Zap size={32} />, title: "Business Automation", description: "Intelligent process automation solutions designed to eliminate redundancies, reduce overhead, and exponentially boost productivity." }
  ];


  const projects = [
    { title: "Vehicle Accident System", desc: "An advanced, AI-driven real-time system engineered for precise accident detection and immediate emergency response.", img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80" },
    { title: "Smart Helmet System", desc: "An IoT-enabled safety helmet featuring real-time monitoring, impact detection, and automated emergency alerts.", img: "https://images.unsplash.com/photo-1558222218-b7b54eede3f3?auto=format&fit=crop&q=80" },
    { title: "Dental Clinic Website", desc: "A modern, responsive healthcare website featuring secure patient portals and automated appointment scheduling.", img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80" },
    { title: "Smart Billing System", desc: "A sophisticated POS and billing solution architected to streamline retail transactions and inventory management.", img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80" },
    { title: "E-Commerce Platform", desc: "A highly scalable digital storefront equipped with secure payment gateways and personalized shopping experiences.", img: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80" },
    { title: "Smart Menu for Hotels", desc: "An interactive, contactless dining application for the hospitality sector featuring real-time order processing.", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80" }
  ];

  const features = [
    { icon: <Rocket />, title: "Pioneering Innovation" },
    { icon: <Code2 />, title: "Next-Generation Technology" },
    { icon: <HeadphonesIcon />, title: "Uncompromising Reliability" },
    { icon: <Target />, title: "Infinitely Scalable Architecture" },
    { icon: <Shield />, title: "Enterprise-Grade Security" },
    { icon: <Clock />, title: "Accelerated Deployment" },
    { icon: <Users />, title: "Client-Centric Approach" }
  ];

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo-container">
          <Terminal size={28} className="text-blue-600" color="#2563eb" />
          <span className="gradient-text">Brocoding</span>
        </div>
        
        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </div>

        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        
        <div className="hero-content glass-card animate-fade-up">
          <h1 className="hero-title">
            Engineering Smart <br />
            <span className="gradient-text">Software Solutions</span> <br />
            for Modern Businesses
          </h1>
          <p className="hero-subtitle">
            Brocoding Software Technologies engineers enterprise-grade software solutions and orchestrates seamless digital transformations. We empower modern businesses with scalable architectures, intelligent automation, and unwavering technical support.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Get Started <ChevronRight size={20} />
            </a>
            <a href="#about" className="btn btn-outline">
              Discover More
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding container">
        <div className="about-grid">
          <div className="about-text animate-fade-up">
            <h2 className="section-title" style={{textAlign: 'left', marginBottom: '1.5rem'}}>
              About <span className="gradient-text">Brocoding</span>
            </h2>
            <p>
              Brocoding Software Technologies is a premier software engineering firm committed to catalyzing digital transformation. Our core mandate is to equip forward-looking enterprises with state-of-the-art technological infrastructures, robust architectures, and sophisticated automation.
            </p>
            <p>
              Guided by a relentless pursuit of engineering excellence, we seamlessly translate complex operational challenges into streamlined, high-performance, user-centric digital ecosystems.
            </p>
            <div className="about-expertise">
              <span className="expertise-tag">Software Development</span>
              <span className="expertise-tag">Technical Support</span>
              <span className="expertise-tag">Business Automation</span>
              <span className="expertise-tag">Web Development</span>
              <span className="expertise-tag">System Maintenance</span>
            </div>
          </div>
          <div className="about-stats glass animate-fade-up" style={{animationDelay: '0.2s'}}>
            <div className="stat-card">
              <span className="stat-number">100+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">50+</span>
              <span className="stat-label">Enterprise Clients</span>
            </div>
            <div className="stat-card" style={{gridColumn: '1 / -1'}}>
              <span className="stat-number">99%</span>
              <span className="stat-label">Operational Reliability</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding container" style={{background: 'rgba(255,255,255,0.3)'}}>
        <div className="section-title animate-fade-up">
          <h2>Our <span className="gradient-text">Services</span></h2>
          <p>Delivering comprehensive, enterprise-class technical solutions architected for unparalleled scale, security, and operational performance.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card glass-card animate-fade-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className="section-padding container" style={{background: 'rgba(255,255,255,0.3)'}}>
        <div className="section-title animate-fade-up">
          <h2>Featured <span className="gradient-text">Projects</span></h2>
          <p>A curated showcase of our sophisticated, high-impact technological solutions engineered for industry leaders.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card animate-fade-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="project-bg" style={{backgroundImage: `url(${project.img})`}}></div>
              <div className="project-content glass">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding container">
        <div className="section-title animate-fade-up">
          <h2>The Brocoding <span className="gradient-text">Advantage</span></h2>
          <p>We synergize profound technical expertise with an acute understanding of enterprise logic to deliver transformative results.</p>
        </div>
        <div className="features-grid" style={{marginBottom: '2rem'}}>
          {features.map((feature, index) => (
            <div key={index} className="feature-card glass-card animate-fade-up" style={{animationDelay: `${index * 0.05}s`}}>
              {feature.icon}
              <span style={{fontWeight: '600'}}>{feature.title}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding container" style={{background: 'rgba(255,255,255,0.3)'}}>
        <div className="contact-container">
          <div className="contact-info animate-fade-up">
            <h2>Let's Engineer <span className="gradient-text">Success</span></h2>
            <p>Ready to architect your next digital initiative or require robust technical support? Initiate a conversation with our technical team today.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon"><Mail size={24} /></div>
                <a href="mailto:brocodingsoftwaretechnologies@gmail.com">brocodingsoftwaretechnologies@gmail.com</a>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><Phone size={24} /></div>
                <a href="https://wa.me/917395961328" target="_blank" rel="noreferrer">+91 7395961328</a>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><MapPin size={24} /></div>
                <span>Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper glass animate-fade-up" style={{animationDelay: '0.2s'}}>
            <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">
              <input type="hidden" name="access_key" value="f74144d5-ccda-417f-8206-c73108f69cff" />
              <div className="form-group">
                <input type="text" name="name" placeholder="Corporate Name / Individual Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Business Email Address" required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Detail your project requirements or technical inquiry..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{width: '100%'}}>
                Submit Inquiry <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Widget */}
      <a 
        href="https://wa.me/917395961328?text=Hello%20Brocoding%20Software%20Technologies%20I%20would%20like%20to%20know%20more%20about%20your%20services." 
        target="_blank" 
        rel="noreferrer" 
        className="whatsapp-widget"
        title="Chat with us on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
        </svg>
      </a>

      {/* Footer */}
      <footer className="footer glass">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo-container">
                <Terminal size={24} color="#2563eb" />
                <span className="gradient-text">Brocoding</span>
              </div>
              <p>Engineering Smart Software Solutions for Modern Businesses.</p>
              <div className="social-links">
                <a href="#" className="social-icon">IN</a>
                <a href="#" className="social-icon">TW</a>
                <a href="#" className="social-icon">FB</a>
              </div>
            </div>
            
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Web Development</a></li>
                <li><a href="#services">Software Dev</a></li>
                <li><a href="#services">App Development</a></li>
                <li><a href="#services">Tech Support</a></li>
              </ul>
            </div>
            
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2026 Brocoding Software Technologies. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
