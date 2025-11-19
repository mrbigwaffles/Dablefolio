
document.addEventListener('DOMContentLoaded', function() {
    // Form submission handling
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // You can add form validation here if needed
            // e.preventDefault(); // Uncomment if using AJAX submission
        });
    }

// Initialize all tooltips
    const tooltipTriggers = document.querySelectorAll('[data-tooltip]');
    tooltipTriggers.forEach(trigger => {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip hidden absolute z-50 bg-gray-900 text-white text-xs rounded px-2 py-1 whitespace-nowrap';
        tooltip.textContent = trigger.getAttribute('data-tooltip');
        trigger.appendChild(tooltip);
        
        trigger.addEventListener('mouseenter', () => {
            tooltip.classList.remove('hidden');
        });
        
        trigger.addEventListener('mouseleave', () => {
            tooltip.classList.add('hidden');
        });
    });
    // Portfolio modal and download functionality
    const portfolioItems = document.querySelectorAll('portfolio-item');
    portfolioItems.forEach(item => {
        const downloadBtn = item.shadowRoot.querySelector('.download-btn');
        if (downloadBtn) {
           downloadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    const title = item.getAttribute('title');
    const pdf = item.getAttribute('pdf');

    if (pdf) {
        const link = document.createElement('a');
        link.href = pdf;
        link.download = `${title}.pdf`;
        document.body.appendChild(link);
        link.click();
        link.remove();
    } else {
        alert("PDF not found.");
    }
});

        }
    });
portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            const title = item.getAttribute('title');
            const image = item.getAttribute('image');
            const role = item.getAttribute('role');
            const tools = item.getAttribute('tools');
            const outcome = item.getAttribute('outcome');
            const modalHTML = `
                <div class="modal fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div class="modal-overlay absolute inset-0"></div>
                    <div class="modal-content relative bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                        <button class="modal-close absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                            <i data-feather="x"></i>
                        </button>
                        <div class="p-6">
                            <img src="${image}" alt="${title}" class="w-full h-64 object-cover rounded-lg mb-6">
                            <h3 class="text-2xl font-bold mb-4">${title}</h3>
                            <div class="space-y-4">
                                <div>
                                    <h4 class="font-semibold">My Role</h4>
                                    <p>${role}</p>
                                </div>
                                <div>
                                    <h4 class="font-semibold">Tools Used</h4>
                                    <p>${tools}</p>
                                </div>
                                <div>
                                    <h4 class="font-semibold">Outcome</h4>
                                    <p>${outcome}</p>
                                </div>
                                <div class="pt-4">
                                    <a href="#" class="download-btn inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                        <i data-feather="download" class="mr-2"></i> Download Full Case Study (PDF)
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
`;
            
            document.body.insertAdjacentHTML('beforeend', modalHTML);
            feather.replace();
            const modal = document.querySelector('.modal');
            const closeBtn = document.querySelector('.modal-close');
            
            // Set up download button click handler
            const downloadBtn = modal.querySelector('.download-btn');
          const pdf = item.getAttribute('pdf');

downloadBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (pdf) {
        const link = document.createElement('a');
        link.href = pdf;
        link.download = `${title}.pdf`;
        document.body.appendChild(link);
        link.click();
        link.remove();
    } else {
        alert("PDF not found.");
    }
});

closeBtn.addEventListener('click', () => {
                modal.remove();
            });
            
            modal.addEventListener('click', (e) => {
                if (e.target === modal || e.target.classList.contains('modal-overlay')) {
                    modal.remove();
                }
            });
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('custom-navbar');
        if (window.scrollY > 50) {
            navbar.setAttribute('scrolled', 'true');
        } else {
            navbar.setAttribute('scrolled', 'false');
        }
    });
});
