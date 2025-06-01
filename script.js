console.log('Script is loaded!');

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.querySelector('.header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class
    if (window.scrollY >= 50) {
        header.classList.add('scroll-header')
    } else {
        header.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        modal(i)
    })
})

modalClose.forEach((mc) => {
    mc.addEventListener('click', () => {
        modalViews.forEach((mv) => {
            mv.classList.remove('active-modal')
        })
    })
})

/*=============== THEME TOGGLE ===============*/
const themeButton = document.getElementById('theme-button');
const icon = themeButton.querySelector('i');

function toggleTheme() {
    document.body.classList.toggle('light-theme');
    
    if (document.body.classList.contains('light-theme')) {
        icon.classList.replace('bx-moon', 'bx-sun');
    } else {
        icon.classList.replace('bx-sun', 'bx-moon');
    }

    // Save theme preference
    localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
}

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    toggleTheme();
}

themeButton.addEventListener('click', toggleTheme);

/*=============== MIXITUP FILTER ===============*/
try {
    const workContainer = document.querySelector('.work__container');
    if (workContainer) {
        let mixer = mixitup('.work__container', {
            selectors: {
                target: '.work__card'
            },
            animation: {
                duration: 400
            }
        });
    }
} catch (error) {
    console.log('MixItUp initialization skipped - container not found');
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 300,
    reset: false,
    mobile: true,
    useDelay: 'always',
    viewFactor: 0.2,
    viewOffset: { top: 50, right: 0, bottom: 50, left: 0 }
});

// Home section animations
sr.reveal('.home__data', {
    origin: 'top',
    distance: '40px',
    duration: 2000,
    delay: 300
});

sr.reveal('.home__handle', {
    origin: 'right',
    distance: '80px',
    duration: 2000,
    delay: 600
});

sr.reveal('.home__social', {
    origin: 'left',
    distance: '80px',
    duration: 2000,
    delay: 900
});

sr.reveal('.home__scroll', {
    origin: 'bottom',
    distance: '40px',
    duration: 2000,
    delay: 1000
});

// Section headers animation
sr.reveal('.section__subtitle', {
    origin: 'left',
    distance: '40px',
    duration: 1500,
    delay: 200
});

sr.reveal('.section__title', {
    origin: 'right',
    distance: '40px',
    duration: 1500,
    delay: 400
});

// About section animations
sr.reveal('.about__description', {
    origin: 'bottom',
    distance: '40px',
    duration: 1500,
    delay: 500
});

sr.reveal('.about__info', {
    origin: 'bottom',
    distance: '40px',
    duration: 1500,
    delay: 700
});

sr.reveal('.about__box', {
    origin: 'bottom',
    distance: '40px',
    duration: 1500,
    interval: 200
});

// Skills section animations
sr.reveal('.skills__content', {
    origin: 'left',
    distance: '40px',
    duration: 1500,
    interval: 200
});

sr.reveal('.skills__box', {
    origin: 'bottom',
    distance: '40px',
    duration: 1500,
    interval: 100
});

// Projects section animations
sr.reveal('.projects__header', {
    origin: 'top',
    distance: '40px',
    duration: 1500
});

sr.reveal('.project__item.right', {
    origin: 'right',
    distance: '60px',
    duration: 1500,
    interval: 200
});

sr.reveal('.project__item.left', {
    origin: 'left',
    distance: '60px',
    duration: 1500,
    interval: 200
});

// Contact section animations
sr.reveal('.contact__title', {
    origin: 'top',
    distance: '40px',
    duration: 1500,
    delay: 200
});

sr.reveal('.contact__card', {
    origin: 'bottom',
    distance: '40px',
    duration: 1500,
    interval: 200
});

sr.reveal('.contact__form', {
    origin: 'bottom',
    distance: '40px',
    duration: 1500,
    delay: 400
});

// Footer animations
sr.reveal('.footer__title', {
    origin: 'top',
    distance: '40px',
    duration: 1500
});

sr.reveal('.footer__list', {
    origin: 'bottom',
    distance: '40px',
    duration: 1500,
    delay: 200
});

sr.reveal('.footer__social', {
    origin: 'bottom',
    distance: '40px',
    duration: 1500,
    delay: 400
});

sr.reveal('.footer__copy', {
    origin: 'bottom',
    distance: '40px',
    duration: 1500,
    delay: 600
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */ 
const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener('click', activeWork))

/*=============== NAVIGATION ACTIVE STATE ===============*/
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('[data-nav-link]');

    // Set first link as active by default
    navLinks[0].classList.add('active-link');

    function handleNavClick(e) {
        e.preventDefault();
        
        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove('active-link'));
        
        // Add active class to clicked link
        e.currentTarget.classList.add('active-link');
        
        // Get the target section
        const targetId = e.currentTarget.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            // Calculate scroll position
            const headerOffset = 58;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            // Smooth scroll to section
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    // Add click event listeners
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });

    // Handle scroll
    function handleScroll() {
        const currentScroll = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 58;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active-link');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active-link');
                    }
                });
            }
        });
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check for active section
    handleScroll();
});

// Work Filters
const filterButtons = document.querySelectorAll('.work__filter-btn');
const workCards = document.querySelectorAll('.work__card');

// Active filter button
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(button => button.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
    });
});

/*=============== SCROLL HANDLERS ===============*/
let lastScrollTop = 0;
const header = document.querySelector('.header');
const SCROLL_THRESHOLD = 50;

function handleScroll() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Handle navbar background
    if (currentScroll >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }

    // Handle navbar hide/show based on scroll direction
    if (currentScroll > SCROLL_THRESHOLD) {
        // Don't do anything for small scroll amounts
        if (Math.abs(lastScrollTop - currentScroll) <= 5) {
            return;
        }

        if (currentScroll > lastScrollTop) {
            // Scrolling DOWN - hide navbar
            header.classList.add('hide-header');
        } else {
            // Scrolling UP - show navbar
            header.classList.remove('hide-header');
        }
    } else {
        // At the top - always show navbar
        header.classList.remove('hide-header');
    }
    
    // Update active section in navigation
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 58;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
            document.querySelectorAll('[data-nav-link]').forEach(link => {
                link.classList.remove('active-link');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active-link');
                }
            });
        }
    });
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}

// Debounce scroll event for better performance
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
    }
    
    scrollTimeout = window.requestAnimationFrame(handleScroll);
});

// Initial check for active section
handleScroll();

// Remove old scroll handlers
window.removeEventListener('scroll', scrollHeader);

// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    
    // Get DOM elements
    const previewButton = document.getElementById('previewButton');
    const previewModal = document.getElementById('previewModal');
    const modalImage = document.getElementById('modalImage');
    const closeButton = document.querySelector('.modal__close');
    const dotsContainer = document.querySelector('.gallery__dots');
    const prevButton = document.querySelector('.gallery__prev');
    const nextButton = document.querySelector('.gallery__next');

    console.log('Preview Button:', previewButton);
    console.log('Preview Modal:', previewModal);
    console.log('Modal Image:', modalImage);

    // Project images array
    const projectImages = ['image/p1/1.png', 'image/p1/2.png', 'image/p1/3.png','image/p1/4.png','image/p1/5.png','image/p1/6.png','image/p1/7.png','image/p1/8.png','image/p1/9.png','image/p1/10.png','image/p1/11.png','image/p1/12.png','image/p1/13.png','image/p1/14.png',];
    let currentSlide = 0;

    // Add click event to preview button
    if (previewButton) {
        previewButton.addEventListener('click', function(e) {
            console.log('Preview button clicked');
            e.preventDefault();
            openPreviewModal(this);
        });
    } else {
        console.error('Preview button not found');
    }

    // Project Preview Modal
    function openPreviewModal(button) {
        const modal = document.getElementById('previewModal');
        const modalImage = document.getElementById('modalImage');
        const images = JSON.parse(button.getAttribute('data-images'));
        let currentImageIndex = 0;

        // Show loading state
        modalImage.style.opacity = '0';
        document.querySelector('.gallery__loading').style.display = 'block';

        // Load first image
        const img = new Image();
        img.src = images[currentImageIndex];
        img.onload = () => {
            modalImage.src = img.src;
            modalImage.style.opacity = '1';
            document.querySelector('.gallery__loading').style.display = 'none';
            updateDots();
            updateCounter();
        };
        img.onerror = () => {
            console.error('Error loading image:', img.src);
            document.querySelector('.gallery__loading').style.display = 'none';
            modalImage.src = 'image/error.png'; // Fallback image
            modalImage.style.opacity = '1';
        };

        // Show modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        setTimeout(() => modal.classList.add('show'), 10);

        // Update dots
        function updateDots() {
            const dotsContainer = document.querySelector('.gallery__dots');
            dotsContainer.innerHTML = '';
            images.forEach((_, index) => {
                const dot = document.createElement('button');
                dot.className = `gallery__dot ${index === currentImageIndex ? 'active' : ''}`;
                dot.onclick = () => showImage(index);
                dotsContainer.appendChild(dot);
            });
        }

        // Update counter
        function updateCounter() {
            const counter = document.querySelector('.gallery__counter');
            counter.textContent = `${currentImageIndex + 1} / ${images.length}`;
        }

        // Show specific image
        function showImage(index) {
            currentImageIndex = index;
            modalImage.style.opacity = '0';
            document.querySelector('.gallery__loading').style.display = 'block';

            const img = new Image();
            img.src = images[index];
            img.onload = () => {
                modalImage.src = img.src;
                modalImage.style.opacity = '1';
                document.querySelector('.gallery__loading').style.display = 'none';
                updateDots();
                updateCounter();
            };
            img.onerror = () => {
                console.error('Error loading image:', img.src);
                document.querySelector('.gallery__loading').style.display = 'none';
                modalImage.src = 'image/error.png'; // Fallback image
                modalImage.style.opacity = '1';
            };
        }

        // Navigation functions
        window.nextImage = () => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            showImage(currentImageIndex);
        };

        window.prevImage = () => {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            showImage(currentImageIndex);
        };

        // Close modal
        window.closeModal = () => {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }, 300);
        };

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (modal.style.display === 'block') {
                if (e.key === 'Escape') closeModal();
                if (e.key === 'ArrowLeft') prevImage();
                if (e.key === 'ArrowRight') nextImage();
            }
        });

        // Add touch swipe support
        let touchStartX = 0;
        let touchEndX = 0;

        const galleryContainer = document.querySelector('.gallery__container');
        
        galleryContainer.addEventListener('touchstart', e => {
            touchStartX = e.changedTouches[0].screenX;
        }, false);

        galleryContainer.addEventListener('touchend', e => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, false);

        function handleSwipe() {
            const swipeThreshold = 50;
            if (touchEndX < touchStartX - swipeThreshold) {
                nextImage(); // Swipe left
            }
            if (touchEndX > touchStartX + swipeThreshold) {
                prevImage(); // Swipe right
            }
        }
    }

    // Handle image loading errors
    modalImage.addEventListener('error', function(e) {
        console.error('Error loading image in modal:', e);
    });
}); 


        (function() {
            // Initialize EmailJS with your public key
            emailjs.init("XOuVWmj46K5xlALA8");
        })();

        // Project Preview Modal
        function openPreviewModal(button) {
            console.log('Opening preview modal');
            const modal = document.getElementById('previewModal');
            const modalImage = document.getElementById('modalImage');
            const galleryContainer = document.querySelector('.gallery__container');
            const images = JSON.parse(button.getAttribute('data-images'));
            let currentImageIndex = 0;
            let scale = 1;
            let isDragging = false;
            let startX, startY, translateX = 0, translateY = 0;
            let lastTranslateX = 0;
            let lastTranslateY = 0;
            let imageWidth = 0;
            let imageHeight = 0;

            // Show modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            setTimeout(() => modal.classList.add('show'), 10);

            // Add loading indicator
            const loadingIndicator = document.createElement('div');
            loadingIndicator.className = 'gallery__loading';
            galleryContainer.appendChild(loadingIndicator);

            // Add counter
            const counter = document.createElement('div');
            counter.className = 'gallery__counter';
            galleryContainer.appendChild(counter);

            // Add zoom controls
            const zoomControls = document.createElement('div');
            zoomControls.className = 'zoom-controls';
            zoomControls.innerHTML = `
                <button class="zoom-btn" onclick="zoomOut()">-</button>
                <button class="zoom-btn" onclick="zoomIn()">+</button>
            `;
            galleryContainer.appendChild(zoomControls);

            // Calculate boundaries based on image and container size
            function calculateBoundaries() {
                const containerRect = galleryContainer.getBoundingClientRect();
                const imageRect = modalImage.getBoundingClientRect();
                
                imageWidth = imageRect.width;
                imageHeight = imageRect.height;
                
                const maxTranslateX = Math.max(0, (imageWidth * scale - containerRect.width) / 2);
                const maxTranslateY = Math.max(0, (imageHeight * scale - containerRect.height) / 2);
                
                return { maxTranslateX, maxTranslateY };
            }

            // Update dots
            function updateDots() {
                const dotsContainer = document.querySelector('.gallery__dots');
                dotsContainer.innerHTML = '';
                images.forEach((_, index) => {
                    const dot = document.createElement('button');
                    dot.className = `gallery__dot ${index === currentImageIndex ? 'active' : ''}`;
                    dot.onclick = () => showImage(index);
                    dotsContainer.appendChild(dot);
                });
            }

            // Update counter
            function updateCounter() {
                const counter = document.querySelector('.gallery__counter');
                counter.textContent = `${currentImageIndex + 1} / ${images.length}`;
            }

            // Zoom functions
            window.zoomIn = () => {
                const oldScale = scale;
                scale = Math.min(scale + 0.5, 3);
                
                if (scale > 1) {
                    const { maxTranslateX, maxTranslateY } = calculateBoundaries();
                    translateX = Math.max(-maxTranslateX, Math.min(maxTranslateX, translateX));
                    translateY = Math.max(-maxTranslateY, Math.min(maxTranslateY, translateY));
                }
                
                updateImageTransform();
            };

            window.zoomOut = () => {
                const oldScale = scale;
                scale = Math.max(scale - 0.5, 1);
                
                if (scale === 1) {
                    translateX = 0;
                    translateY = 0;
                } else {
                    const { maxTranslateX, maxTranslateY } = calculateBoundaries();
                    translateX = Math.max(-maxTranslateX, Math.min(maxTranslateX, translateX));
                    translateY = Math.max(-maxTranslateY, Math.min(maxTranslateY, translateY));
                }
                
                updateImageTransform();
            };

            function updateImageTransform() {
                const { maxTranslateX, maxTranslateY } = calculateBoundaries();
                
                // Clamp translations to boundaries
                translateX = Math.max(-maxTranslateX, Math.min(maxTranslateX, translateX));
                translateY = Math.max(-maxTranslateY, Math.min(maxTranslateY, translateY));
                
                modalImage.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
                modalImage.classList.toggle('zoomed', scale > 1);
            }

            // Mouse events for panning
            modalImage.addEventListener('mousedown', (e) => {
                if (scale > 1) {
                    e.preventDefault();
                    isDragging = true;
                    startX = e.clientX - translateX;
                    startY = e.clientY - translateY;
                    modalImage.style.cursor = 'grabbing';
                }
            });

            document.addEventListener('mousemove', (e) => {
                if (isDragging && scale > 1) {
                    e.preventDefault();
                    const newTranslateX = e.clientX - startX;
                    const newTranslateY = e.clientY - startY;
                    
                    const { maxTranslateX, maxTranslateY } = calculateBoundaries();
                    
                    // Apply smooth boundaries
                    translateX = Math.max(-maxTranslateX, Math.min(maxTranslateX, newTranslateX));
                    translateY = Math.max(-maxTranslateY, Math.min(maxTranslateY, newTranslateY));
                    
                    updateImageTransform();
                }
            });

            document.addEventListener('mouseup', () => {
                if (isDragging) {
                    isDragging = false;
                    modalImage.style.cursor = 'grab';
                    lastTranslateX = translateX;
                    lastTranslateY = translateY;
                }
            });

            // Mouse wheel zoom
            modalImage.addEventListener('wheel', (e) => {
                if (e.ctrlKey) {
                    e.preventDefault();
                    const delta = e.deltaY > 0 ? -0.1 : 0.1;
                    const oldScale = scale;
                    
                    // Calculate zoom center
                    const rect = modalImage.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    // Update scale
                    scale = Math.max(1, Math.min(3, scale + delta));
                    
                    if (scale > 1) {
                        // Adjust translation to zoom towards mouse position
                        const scaleChange = scale / oldScale;
                        translateX = (translateX * scaleChange) + (x - x * scaleChange);
                        translateY = (translateY * scaleChange) + (y - y * scaleChange);
                    } else {
                        translateX = 0;
                        translateY = 0;
                    }
                    
                    updateImageTransform();
                }
            });

            // Touch events for pinch zoom and pan
            let initialDistance = 0;
            let initialScale = 1;
            let initialTranslateX = 0;
            let initialTranslateY = 0;

            modalImage.addEventListener('touchstart', (e) => {
                if (e.touches.length === 2) {
                    e.preventDefault();
                    initialDistance = getDistance(e.touches[0], e.touches[1]);
                    initialScale = scale;
                    initialTranslateX = translateX;
                    initialTranslateY = translateY;
                } else if (e.touches.length === 1 && scale > 1) {
                    isDragging = true;
                    startX = e.touches[0].clientX - translateX;
                    startY = e.touches[0].clientY - translateY;
                }
            });

            modalImage.addEventListener('touchmove', (e) => {
                if (e.touches.length === 2) {
                    e.preventDefault();
                    const currentDistance = getDistance(e.touches[0], e.touches[1]);
                    const newScale = Math.max(1, Math.min(3, initialScale * (currentDistance / initialDistance)));
                    
                    if (newScale > 1) {
                        // Calculate zoom center
                        const rect = modalImage.getBoundingClientRect();
                        const centerX = (e.touches[0].clientX + e.touches[1].clientX) / 2 - rect.left;
                        const centerY = (e.touches[0].clientY + e.touches[1].clientY) / 2 - rect.top;
                        
                        // Adjust translation for pinch zoom
                        const scaleChange = newScale / scale;
                        translateX = (translateX * scaleChange) + (centerX - centerX * scaleChange);
                        translateY = (translateY * scaleChange) + (centerY - centerY * scaleChange);
                    }
                    
                    scale = newScale;
                    updateImageTransform();
                } else if (e.touches.length === 1 && isDragging) {
                    e.preventDefault();
                    const newTranslateX = e.touches[0].clientX - startX;
                    const newTranslateY = e.touches[0].clientY - startY;
                    
                    const { maxTranslateX, maxTranslateY } = calculateBoundaries();
                    
                    // Apply smooth boundaries
                    translateX = Math.max(-maxTranslateX, Math.min(maxTranslateX, newTranslateX));
                    translateY = Math.max(-maxTranslateY, Math.min(maxTranslateY, newTranslateY));
                    
                    updateImageTransform();
                }
            });

            modalImage.addEventListener('touchend', () => {
                isDragging = false;
                if (scale > 1) {
                    lastTranslateX = translateX;
                    lastTranslateY = translateY;
                }
            });

            function getDistance(touch1, touch2) {
                const dx = touch1.clientX - touch2.clientX;
                const dy = touch1.clientY - touch2.clientY;
                return Math.sqrt(dx * dx + dy * dy);
            }

            // Show specific image
            function showImage(index) {
                currentImageIndex = index;
                scale = 1;
                translateX = 0;
                translateY = 0;
                lastTranslateX = 0;
                lastTranslateY = 0;
                modalImage.style.opacity = '0';
                document.querySelector('.gallery__loading').style.display = 'block';

                const img = new Image();
                img.src = images[index];
                img.onload = () => {
                    modalImage.src = img.src;
                    modalImage.style.opacity = '1';
                    modalImage.style.transform = 'scale(1) translate(0, 0)';
                    modalImage.classList.remove('zoomed');
                    document.querySelector('.gallery__loading').style.display = 'none';
                    updateDots();
                    updateCounter();
                    
                    // Recalculate boundaries after image loads
                    setTimeout(calculateBoundaries, 100);
                };
                img.onerror = () => {
                    console.error('Error loading image:', img.src);
                    document.querySelector('.gallery__loading').style.display = 'none';
                    modalImage.src = 'image/error.png';
                    modalImage.style.opacity = '1';
                };
            }

            // Navigation functions
            window.nextImage = () => {
                currentImageIndex = (currentImageIndex + 1) % images.length;
                showImage(currentImageIndex);
            };

            window.prevImage = () => {
                currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
                showImage(currentImageIndex);
            };

            // Close modal
            window.closeModal = () => {
                modal.classList.remove('show');
                setTimeout(() => {
                    modal.style.display = 'none';
                    document.body.style.overflow = '';
                }, 300);
            };

            // Add event listeners for navigation
            document.querySelector('.gallery__prev').onclick = prevImage;
            document.querySelector('.gallery__next').onclick = nextImage;
            document.querySelector('.modal__close').onclick = closeModal;

            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (modal.style.display === 'block') {
                    if (e.key === 'Escape') closeModal();
                    if (e.key === 'ArrowLeft') prevImage();
                    if (e.key === 'ArrowRight') nextImage();
                }
            });

            // Show first image
            showImage(0);
        }

        // Initialize event listeners when DOM is loaded
        document.addEventListener('DOMContentLoaded', function() {
            console.log('DOM Content Loaded');
            
            // Add click event listeners to all preview buttons
            const previewButtons = document.querySelectorAll('.preview-btn');
            console.log('Found preview buttons:', previewButtons.length);
            
            previewButtons.forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    console.log('Preview button clicked');
                    openPreviewModal(this);
                });
            });
        });

        // Contact Form Submission
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.innerHTML;
            submitButton.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i> Sending...';
            submitButton.disabled = true;

            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const project = document.getElementById('project').value;

            // Validate form data
            if (!name || !email || !project) {
                showErrorMessage('Please fill in all fields');
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
                return;
            }

            // Send email to admin
            emailjs.send("service_e5g6or3", "template_tl48adj", {
                name: name,
                email: email,
                message: project,
                to_email: "devanshpatel12022005@gmail.com"
            })
            .then(function(response) {
                console.log('Admin email sent:', response);
                // Send confirmation email to user
                return emailjs.send("service_e5g6or3", "template_4n8lxun", {
                    name: name,
                    email: email,
                    message: project,
                    to_email: email
                });
            })
            .then(function(response) {
                console.log('User email sent:', response);
                showSuccessMessage('Message sent successfully! I\'ll get back to you soon.');
                document.getElementById('contact-form').reset();
            })
            .catch(function(error) {
                console.error('EmailJS Error Details:', {
                    error: error,
                    text: error.text,
                    status: error.status,
                    message: error.message,
                    stack: error.stack
                });
                
                // More specific error message
                let errorMessage = 'Sorry, there was an error sending your message. ';
                if (error.text) {
                    errorMessage += 'Error: ' + error.text;
                }
                showErrorMessage(errorMessage);
            })
            .finally(function() {
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
            });
        });

        // Helper functions for showing messages
        function showSuccessMessage(message) {
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.innerHTML = `
                <i class='bx bx-check-circle'></i>
                <p>${message}</p>
            `;
            document.getElementById('contact-form').appendChild(successMessage);
            setTimeout(() => successMessage.remove(), 5000);
        }

        function showErrorMessage(message) {
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            errorMessage.innerHTML = `
                <i class='bx bx-error-circle'></i>
                <p>${message}</p>
            `;
            document.getElementById('contact-form').appendChild(errorMessage);
            setTimeout(() => errorMessage.remove(), 5000);
        }
    