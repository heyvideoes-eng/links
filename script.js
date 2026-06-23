document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('bookmarks-grid');
    const searchInput = document.getElementById('search-input');
    const noResults = document.getElementById('no-results');

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
                
                // Construct card content
                card.innerHTML = `
                    <div class="bookmark-content">
                        <div class="bookmark-title">${bookmark.title}</div>
                        <div class="bookmark-url">${domain}</div>
                    </div>
                    <svg class="bookmark-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                `;
                
                grid.appendChild(card);
            });
        }
    };

    // Initial render
    renderBookmarks(bookmarksData);

    // Filter logic
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        
        const filtered = bookmarksData.filter(b => 
            b.title.toLowerCase().includes(query) || 
            b.url.toLowerCase().includes(query)
        );
        
        renderBookmarks(filtered);
    });
});
