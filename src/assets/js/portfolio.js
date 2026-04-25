// Portfolio Loading and Filtering

export default (() => {
    const portfolioGrid = document.getElementById('portfolio-grid');
    const portfolioFullGrid = document.getElementById('portfolio-full-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    if (!portfolioGrid && !portfolioFullGrid) return;

    // Load portfolio data from JSON
    async function loadPortfolioData() {
        try {
            const response = await fetch('/assets/data/portfolio.json');
            const projects = await response.json();
            
            if (portfolioGrid) {
                displayProjects(projects, portfolioGrid, 3); // Show 3 projects on homepage
            }
            if (portfolioFullGrid) {
                displayProjects(projects, portfolioFullGrid); // Show all projects on portfolio page
            }
        } catch (error) {
            console.error('Error loading portfolio data:', error);
        }
    }

    // Display projects in the grid
    function displayProjects(projects, gridElement, limit = null) {
        const projectsToShow = limit ? projects.slice(0, limit) : projects;
        
        gridElement.innerHTML = projectsToShow.map(project => `
            <div class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group" data-category="${project.category}">
                <div class="relative overflow-hidden">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300">
                </div>
                <div class="p-5">
                    <span class="inline-block py-1 px-3 text-xs font-semibold rounded-full border border-blue-200 bg-blue-50 text-primary mb-3">${project.category}</span>
                    <h3 class="text-lg font-semibold mb-2">${project.title}</h3>
                    <p class="text-default-600 text-sm mb-4">${project.description}</p>
                    <div class="space-y-2.5 mb-4">
                        <div class="text-sm">Industry: <span class="text-default-950">${project.industry}</span></div>
                        <div class="text-sm">Scope: <span class="text-default-950">${project.scope}</span></div>
                    </div>
                    <a href="case-study.html?slug=${project.slug}" class="inline-flex items-center py-2 px-4 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-hover transition-colors">
                        View Project
                        <i class="iconify tabler--arrow-right ml-2"></i>
                    </a>
                </div>
            </div>
        `).join('');
    }

    // Filter projects by category
    function filterProjects(category) {
        const grids = [portfolioGrid, portfolioFullGrid].filter(Boolean);
        
        grids.forEach(grid => {
            const projectCards = grid.querySelectorAll('[data-category]');
            
            projectCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // Add event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('active', 'bg-primary', 'text-white', 'border-primary');
                btn.classList.add('bg-white', 'text-default-900', 'border-default-300');
            });
            
            // Add active class to clicked button
            button.classList.add('active', 'bg-primary', 'text-white', 'border-primary');
            button.classList.remove('bg-white', 'text-default-900', 'border-default-300');
            
            // Filter projects
            const category = button.dataset.filter;
            filterProjects(category);
        });
    });

    // Initialize
    loadPortfolioData();
})();
