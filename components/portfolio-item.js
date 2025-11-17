class PortfolioItem extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title');
        const image = this.getAttribute('image');
        const role = this.getAttribute('role');
        const tools = this.getAttribute('tools');
        const outcome = this.getAttribute('outcome');
        
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    cursor: pointer;
                }
                .portfolio-item {
                    border-radius: 0.75rem;
                    overflow: hidden;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                    background-color: white;
                }
                .portfolio-image {
                    height: 200px;
                    overflow: hidden;
                }
                .portfolio-image img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.3s ease;
                }
                :host(:hover) .portfolio-image img {
                    transform: scale(1.1);
                }
                .portfolio-content {
                    padding: 1.5rem;
                }
                .portfolio-title {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: 0.5rem;
                    color: #1f2937;
                }
                .portfolio-role {
                    font-size: 0.875rem;
                    color: #3b82f6;
                    margin-bottom: 0.5rem;
                }
                .portfolio-tools {
                    font-size: 0.875rem;
                    color: #6b7280;
                    margin-bottom: 0.5rem;
                }
                .portfolio-outcome {
                    font-size: 0.875rem;
                    color: #4b5563;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            </style>
            <div class="portfolio-item">
                <div class="portfolio-image">
                    <img src="${image}" alt="${title}">
                </div>
                <div class="portfolio-content">
                    <h3 class="portfolio-title">${title}</h3>
                    <p class="portfolio-role">${role}</p>
                    <p class="portfolio-tools">${tools}</p>
                    <p class="portfolio-outcome">${outcome}</p>
                    <div class="mt-4">
                        <a href="#" class="download-btn inline-flex items-center px-3 py-1.5 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            <i data-feather="download" class="mr-2"></i> Download Case Study
                        </a>
                    </div>
                </div>
            </div>
`;
    }
}

customElements.define('portfolio-item', PortfolioItem);