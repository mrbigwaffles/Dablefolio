class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    transition: all 0.3s ease;
                }
                :host([scrolled="true"]) {
                    background-color: rgba(255, 255, 255, 0.95);
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }
                :host([scrolled="true"]) nav a {
                    color: #1f2937;
                }
                :host([scrolled="true"]) .logo {
                    color: #1f2937;
                }
                nav {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 1.5rem 2rem;
                    max-width: 1200px;
                    margin: 0 auto;
                    width: 100%;
                }
                .logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: white;
                    text-decoration: none;
                }
                .nav-links {
                    display: flex;
                    gap: 2rem;
                }
                .nav-links a {
                    color: white;
                    text-decoration: none;
                    font-weight: 500;
                    transition: color 0.3s ease;
                    position: relative;
                }
                .nav-links a:hover {
                    color: #93c5fd;
                }
                .nav-links a::after {
                    content: '';
                    position: absolute;
                    width: 0;
                    height: 2px;
                    background-color: #93c5fd;
                    bottom: -4px;
                    left: 0;
                    transition: width 0.3s ease;
                }
                .nav-links a:hover::after {
                    width: 100%;
                }
                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    color: white;
                    cursor: pointer;
                }
                @media (max-width: 768px) {
                    .mobile-menu-btn {
                        display: block;
                    }
                    .nav-links {
                        position: fixed;
                        top: 80px;
                        left: 0;
                        right: 0;
                        background-color: rgba(255, 255, 255, 0.95);
                        flex-direction: column;
                        align-items: center;
                        padding: 2rem 0;
                        gap: 1.5rem;
                        clip-path: circle(0px at 90% -10%);
                        transition: clip-path 0.5s ease-in-out;
                        pointer-events: none;
                    }
                    .nav-links.open {
                        clip-path: circle(1000px at 90% -10%);
                        pointer-events: all;
                    }
                    .nav-links a {
                        color: #1f2937;
                    }
                    :host([scrolled="true"]) .mobile-menu-btn {
                        color: #1f2937;
                    }
                }
            </style>
            <nav>
                <a href="#hero" class="logo">Daniel Dable</a>
                <div class="nav-links">
                    <a href="#about">About</a>
                    <a href="#experience">Experience</a>
                    <a href="#skills">Skills</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#life">Life</a>
                    <a href="#contact">Contact</a>
                </div>
                <button class="mobile-menu-btn">
                    <i data-feather="menu"></i>
                </button>
            </nav>
        `;
        
        // Mobile menu toggle
        const mobileMenuBtn = this.shadowRoot.querySelector('.mobile-menu-btn');
        const navLinks = this.shadowRoot.querySelector('.nav-links');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('open');
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('open')) {
                icon.setAttribute('data-feather', 'x');
            } else {
                icon.setAttribute('data-feather', 'menu');
            }
            feather.replace();
        });
    }
}

customElements.define('custom-navbar', CustomNavbar);