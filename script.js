// Movie Data
const trendingMovies = [
    { id: 1, title: "Stranger Things", img: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg" },
    { id: 2, title: "Wednesday", img: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg" },
    { id: 3, title: "The Witcher", img: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyWDTVrC6fi5AA.jpg" },
    { id: 4, title: "Squid Game", img: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg" },
    { id: 5, title: "Money Heist", img: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg" },
    { id: 6, title: "Dark", img: "https://image.tmdb.org/t/p/w500/apbrbWs8M9lyOpJAY5Z5BWKb8Nz.jpg" },
    { id: 7, title: "Breaking Bad", img: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg" },
    { id: 8, title: "Black Mirror", img: "https://image.tmdb.org/t/p/w500/7RumIdU9dtB0WdE11N7xL6jDmvW.jpg" },
    { id: 9, title: "The Crown", img: "https://image.tmdb.org/t/p/w500/103aY7i41NfK6Y6QzD4fE6qJ9.jpg" },
];

const popularMovies = [
    { id: 10, title: "Inception", img: "https://image.tmdb.org/t/p/w500/9gk7admal4zlE0lkH1a6U2JjjN8.jpg" },
    { id: 11, title: "Interstellar", img: "https://image.tmdb.org/t/p/w500/gEU2QniL6E8ahEoXf9DIsQs56Yk.jpg" },
    { id: 12, title: "The Dark Knight", img: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
    { id: 13, title: "Avatar", img: "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg" },
    { id: 14, title: "Titanic", img: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg" },
    { id: 15, title: "Avengers: Endgame", img: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg" },
    { id: 16, title: "Spider-Man: No Way Home", img: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4GY0d.jpg" },
    { id: 17, title: "Joker", img: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" },
];

const watchAgain = [
    { id: 18, title: "Friends", img: "https://image.tmdb.org/t/p/w500/f496cm9enuEsZkSPzCwnTESEK5s.jpg" },
    { id: 19, title: "The Office", img: "https://image.tmdb.org/t/p/w500/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg" },
    { id: 20, title: "Brooklyn Nine-Nine", img: "https://image.tmdb.org/t/p/w500/30erzlzIOtV3izSNtKySXX9Bhwc.jpg" },
    { id: 21, title: "Sherlock", img: "https://image.tmdb.org/t/p/w500/7WRnzgycVNpZkllE5fJeX5k8iG2.jpg" },
    { id: 22, title: "Peaky Blinders", img: "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkWc7Wx.jpg" },
];

const continueWatching = [
    { id: 23, title: "Narcos", img: "https://image.tmdb.org/t/p/w500/rTjDoLo275kprl14px28uU9QA.jpg" },
    { id: 24, title: "Mindhunter", img: "https://image.tmdb.org/t/p/w500/fbKE87QCmTGt1XmFq8wIL5cz7q.jpg" },
    { id: 25, title: "Severance", img: "https://image.tmdb.org/t/p/w500/l4C63E325wR9eJ50b4x8y9eE3.jpg" },
];

const actionMovies = [
    { id: 26, title: "Gladiator", img: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg" },
    { id: 27, title: "Mad Max: Fury Road", img: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg" },
    { id: 28, title: "John Wick", img: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg" },
    { id: 29, title: "Top Gun: Maverick", img: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg" },
    { id: 30, title: "The Batman", img: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50x9TfdlnvD.jpg" },
];

const dramaSeries = [
    { id: 31, title: "Succession", img: "https://image.tmdb.org/t/p/w500/7tLSf3tG8kyXPpD7629eEZqU9l.jpg" },
    { id: 32, title: "Better Call Saul", img: "https://image.tmdb.org/t/p/w500/fC2HDm5t0kHl7mTm7jxMR31b7by.jpg" },
    { id: 33, title: "Chernobyl", img: "https://image.tmdb.org/t/p/w500/hlLXt2tOPT66CXkEQxnIEl3wwdL.jpg" },
    { id: 34, title: "The Last of Us", img: "https://image.tmdb.org/t/p/w500/uKVV4D2nFnyHgZmnDpj9ZguEpQ3.jpg" },
];


function renderRow(elementId, data) {
    const container = document.getElementById(elementId);
    if (!container) return;

    container.innerHTML = data.map(movie => {
        const safeTitle = movie.title.replace(/'/g, "&apos;").replace(/"/g, "&quot;");
        return `
            <div class="movie-card" onclick="openModal('${safeTitle}')">
                <img src="${movie.img}" alt="${safeTitle}" loading="lazy" 
                     onerror="this.src='https://placehold.co/200x300/222/FFF?text=${encodeURIComponent(movie.title)}'">
                <div class="card-overlay">
                    <button class="card-action-btn" title="Play">
                        <ion-icon name="play"></ion-icon>
                    </button>
                    <button class="card-action-btn" title="Add to My List">
                        <ion-icon name="add"></ion-icon>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Populate Rows
    renderRow('trending-row', trendingMovies);
    renderRow('popular-row', popularMovies);
    renderRow('watch-again-row', watchAgain);
    renderRow('continue-watching-row', continueWatching);
    renderRow('action-row', actionMovies);
    renderRow('drama-row', dramaSeries);

    // Setup basic functionality
    setupSliders();
    setupNavbar();
    setupModal();
    setupIntersectionObserver();
});

function setupSliders() {
    const sliders = document.querySelectorAll('.row-slider-container');

    sliders.forEach(slider => {
        const leftBtn = slider.querySelector('.slider-arrow.left');
        const rightBtn = slider.querySelector('.slider-arrow.right');
        const rowPosters = slider.querySelector('.row-posters');

        if (!rowPosters || !leftBtn || !rightBtn) return;

        leftBtn.addEventListener('click', () => {
            rowPosters.scrollBy({ left: -window.innerWidth / 1.5, behavior: 'smooth' });
        });

        rightBtn.addEventListener('click', () => {
            rowPosters.scrollBy({ left: window.innerWidth / 1.5, behavior: 'smooth' });
        });
    });
}

function setupNavbar() {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isVisible = navLinks.style.display === 'flex';
            if (isVisible) {
                navLinks.style.display = '';
                navLinks.classList.remove('mobile-active');
            } else {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '68px';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = '#141414';
                navLinks.style.padding = '20px';
                navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.9)';
                navLinks.style.zIndex = '99';
            }
        });
    }
}

// Intersection Observer for Fade-In Animation
function setupIntersectionObserver() {
    const sections = document.querySelectorAll('.fade-in-section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
}

// Modal Logic
const modal = document.getElementById('video-modal');
const closeBtn = document.querySelector('.close-modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');

function openModal(title) {
    if (modal && modalTitle) {
        modalTitle.innerText = title;
        modalDesc.innerText = `Watch ${title} now on StreamFlix. Experience the drama, action, and suspense in 4K HDR.`;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function setupModal() {
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

window.openModal = openModal;
