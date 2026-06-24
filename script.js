document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('bookmarks-grid');
    const searchInput = document.getElementById('search-input');
    const noResults = document.getElementById('no-results');
    const categoryFilters = document.getElementById('category-filters');
    
    let currentCategory = 'All';
    let currentSearch = '';

    // Make sure bookmarksData is available
    if (typeof bookmarksData === 'undefined') {
        grid.innerHTML = '<p style="text-align:center;width:100%">Error loading data.</p>';
        return;
    }

    // Parse URL helper to get domain name for better display or icon
    const getDomain = (url) => {
        try {
            return new URL(url).hostname.replace('www.', '');
        } catch (e) {
            return '';
        }
    };

    const getCategoryBackground = (category) => {
        // Simple light background for a clean, minimalist look
        return `#f3f4f6`;
    };

    const renderBookmarks = (bookmarks) => {
        grid.innerHTML = '';
        
        if (bookmarks.length === 0) {
            noResults.classList.remove('hidden');
        } else {
            noResults.classList.add('hidden');
            
            bookmarks.forEach((bookmark, index) => {
                const card = document.createElement('a');
                card.href = bookmark.url;
                card.target = "_blank";
                card.rel = "noopener noreferrer";
                card.className = 'bookmark-card';
                // Staggered animation delay
                card.style.animationDelay = `${(index % 20) * 0.05}s`;

                const domain = getDomain(bookmark.url);
                const bgGradient = getCategoryBackground(bookmark.category);
                const initial = bookmark.title.charAt(0).toUpperCase();
                
                // Construct card content
                card.innerHTML = `
                    <div class="liquid-blob"></div>
                    <div class="liquid-overlay"></div>
                    ${bookmark.category ? `<div class="bookmark-category">${bookmark.category}</div>` : ''}
                    <div class="preview-container" style="background: ${bgGradient}; display: flex; align-items: center; justify-content: center;">
                        <div class="preview-icon" style="width: 64px; height: 64px; border-radius: 16px; box-shadow: 0 10px 25px rgba(0,0,0,0.1); background: rgba(0,0,0,0.03); backdrop-filter: blur(10px); border: 1px solid rgba(0,0,0,0.1); display: flex; align-items: center; justify-content: center; font-size: 28px; font-weight: 600; color: #0f172a;">${initial}</div>
                    </div>
                    <div class="bookmark-content">
                        <div class="bookmark-title">${bookmark.title}</div>
                        <div class="bookmark-desc">${bookmark.description || ''}</div>
                        <div class="bookmark-url">${domain}</div>
                    </div>
                    <svg class="bookmark-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                `;
                
                // Add 3D Tilt and Spotlight Interactive Effect
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    // Spotlight
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                    
                    // 3D Tilt
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = ((y - centerY) / centerY) * -8;
                    const rotateY = ((x - centerX) / centerX) * 8;
                    
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                });
                
                card.addEventListener('mouseleave', () => {
                    card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
                });
                
                grid.appendChild(card);
            });
        }
    };

    const filterBookmarks = () => {
        const filtered = bookmarksData.filter(b => {
            const matchesSearch = b.title.toLowerCase().includes(currentSearch) || b.url.toLowerCase().includes(currentSearch);
            const matchesCategory = currentCategory === 'All' || b.category === currentCategory;
            return matchesSearch && matchesCategory;
        });
        renderBookmarks(filtered);
    };

    // Extract categories
    const categories = ['All', ...new Set(bookmarksData.map(b => b.category).filter(Boolean))].sort((a,b) => a==='All'?-1:b==='All'?1:a.localeCompare(b));
    
    // Render category buttons
    categoryFilters.innerHTML = categories.map(cat => 
        `<button class="category-btn ${cat === 'All' ? 'active' : ''}" data-category="${cat}">${cat}</button>`
    ).join('');

    // Category click handler
    categoryFilters.addEventListener('click', (e) => {
        if (e.target.classList.contains('category-btn')) {
            document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            currentCategory = e.target.dataset.category;
            filterBookmarks();
        }
    });

    // Filter logic
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.toLowerCase();
        filterBookmarks();
    });

    // Initial render
    renderBookmarks(bookmarksData);
});
