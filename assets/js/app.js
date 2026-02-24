console.log("Portfolio loaded.");

/* -------------------------------------------------------------------------- */
/*                             SCROLL INTERACTION                             */
/* -------------------------------------------------------------------------- */
// Enhanced Scroll Animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // optional: observer.unobserve(entry.target); 
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.tall-title, .skill-item, .expertise-intro, .expertise-item, .education-item, .timeline').forEach(el => {
    observer.observe(el);
});

/* -------------------------------------------------------------------------- */
/*                            PROJECT MODAL                                    */
/* -------------------------------------------------------------------------- */

// Project data with full details (7 projects)
const projectData = {
    "water-shortage": {
        title: "Agricultural Water Shortage Prediction",
        description: "A machine-learning system that predicts agricultural water shortage severity across districts by combining meteorological data, crop statistics, and soil characteristics. This data-driven approach helps farmers and policymakers make informed decisions about water management and irrigation planning.",
        images: [
            "assets/images/projects/water-shortage/Picture1.png",
            "assets/images/projects/water-shortage/Picture2.png",
            "assets/images/projects/water-shortage/Picture3.png",
            "assets/images/projects/water-shortage/Picture4.png",
            "assets/images/projects/water-shortage/Picture5.png",
            "assets/images/projects/water-shortage/Picture6.png"
        ],
        technologies: ["Python", "Pandas", "Scikit-Learn", "Gradient Boosting", "Data Analysis", "Machine Learning"],
        features: [
            "Multi-source dataset integration (meteorological, crop, and soil data)",
            "Feature engineering using climate indicators and historical patterns",
            "Gradient Boosting-based prediction model achieving 93% accuracy",
            "Water shortage severity classification system",
            "District-level forecasting for targeted intervention",
            "Model performance comparison with baseline algorithms"
        ],
        challenges: "The main challenge was integrating disparate data sources with different formats and time scales while handling missing data. Implemented robust data cleaning pipelines and feature engineering techniques to extract meaningful climate indicators. Achieved significant improvement over baseline models through hyperparameter tuning.",
        demoUrl: "#",
        codeUrl: "#"
    },
    "healthcare-ui": {
        title: "Smart Healthcare Appointment Interface",
        description: "An accessibility-first healthcare appointment booking system designed to support diverse user groups, including elderly users, low-literacy users, and people with disabilities. The project rethinks healthcare interfaces by offering multiple interaction modes instead of a one-size-fits-all UI.",
        images: [
            "assets/images/projects/smart-health-care/Screenshot 2026-02-24 230639.png",
            "assets/images/projects/smart-health-care/Screenshot 2026-02-24 230652.png",
            "assets/images/projects/smart-health-care/Screenshot 2026-02-24 230708.png",
            "assets/images/projects/smart-health-care/Screenshot 2026-02-24 230746.png",
            "assets/images/projects/smart-health-care/Screenshot 2026-02-24 230805.png",
            "assets/images/projects/smart-health-care/Screenshot 2026-02-24 231858.png",
            "assets/images/projects/smart-health-care/Screenshot 2026-02-24 231942.png",
            "assets/images/projects/smart-health-care/Screenshot 2026-02-24 231951.png",
            "assets/images/projects/smart-health-care/Screenshot 2026-02-24 232138.png",
            "assets/images/projects/smart-health-care/Screenshot 2026-02-24 232203.png",
            "assets/images/projects/smart-health-care/Screenshot 2026-02-24 232217.png",
            "assets/images/projects/smart-health-care/Screenshot 2026-02-24 232359.png"
        ],
        technologies: ["Figma", "UI/UX Design", "Accessibility (WCAG)", "User Flows", "Prototyping", "Mobile-First Design"],
        features: [
            "Multiple interaction modes (Standard, Elderly-Friendly, Voice, Icon-Based, Sign Language)",
            "Simplified navigation flows for reduced cognitive load",
            "High-contrast and large-text layouts for visual accessibility",
            "AI-assisted doctor recommendations based on symptoms",
            "Mobile-first responsive design with touch-friendly controls",
            "WCAG 2.1 AA compliant for web accessibility standards"
        ],
        challenges: "The primary challenge was balancing feature richness with simplicity across multiple user personas. Conducted extensive user research with elderly participants and accessibility advocates to validate design decisions. Implemented mode-switching without overwhelming users while maintaining consistency across interaction paradigms.",
        demoUrl: "#",
        codeUrl: "#"
    },
    "web-scraping": {
        title: "Web Scraping & NLP Analytics Platform",
        description: "A modular analytics platform that scrapes data from Medium and Stack Overflow, performs sentiment analysis, and visualizes engagement metrics. Built with microservices architecture for scalability and maintainability.",
        technologies: ["Python", "Flask", "BeautifulSoup", "Pandas", "NLP (TextBlob)", "Microservices"],
        features: [
            "Multi-platform scraping with adaptive rate limiting",
            "Sentiment analysis using NLP techniques (TextBlob)",
            "Engagement and influence scoring algorithms",
            "CSV export with structured data models",
            "Data visualization dashboards for trend analysis",
            "Automated scheduling for periodic data collection"
        ],
        challenges: "Handling anti-scraping measures and varying HTML structures across platforms required robust error handling and adaptive parsing strategies. Implemented exponential backoff, user-agent rotation, and HTML structure detection to ensure reliable data collection. Optimized scraping performance while respecting platform rate limits.",
        demoUrl: "#",
        codeUrl: "#"
    },
    "rentwise": {
        title: "RentWise Islamabad – Property Management Platform",
        description: "A full-stack property management system designed for administrators and end-users, enabling property listing management and rental search in Islamabad. Features dual interfaces optimized for different user roles.",
        technologies: ["React", "Node.js", "Express", "MySQL", "REST APIs", "JWT Authentication"],
        features: [
            "Admin CRUD dashboard for property management",
            "Advanced property search with multiple filters (location, price, amenities)",
            "RESTful API backend with secure authentication",
            "Responsive frontend design optimized for mobile and desktop",
            "Image upload and gallery management",
            "Comparison tool for side-by-side property evaluation"
        ],
        challenges: "Designing an intuitive admin interface while maintaining powerful filtering capabilities for end users. Implemented efficient database indexing for fast search queries across large property datasets. Balanced security requirements with user experience, using JWT tokens and role-based access control.",
        demoUrl: "#",
        codeUrl: "#"
    },
    "social-media": {
        title: "Social Media Analytics Dashboard",
        description: "An interactive analytics dashboard analyzing social media engagement patterns across multiple platforms to support content strategy decisions. Converts raw engagement data into actionable insights using interactive visualizations.",
        images: [
            "assets/images/projects/Social-media-analytics/Picture7.png",
            "assets/images/projects/Social-media-analytics/Picture9.png",
            "assets/images/projects/Social-media-analytics/Picture10.png",
            "assets/images/projects/Social-media-analytics/Picture11.png",
            "assets/images/projects/Social-media-analytics/Picture13.png",
            "assets/images/projects/Social-media-analytics/Picture14.png"
        ],
        technologies: ["Python", "Pandas", "Plotly", "Data Visualization", "Dash", "Statistical Analysis"],
        features: [
            "Engagement metrics analysis (likes, shares, comments, reach)",
            "Time-based posting insights with optimal posting time recommendations",
            "Platform comparison to identify best-performing channels",
            "Interactive filters and drill-down capabilities",
            "Trend detection and anomaly highlighting",
            "Exportable reports with key performance indicators"
        ],
        challenges: "Aggregating data from multiple social media APIs with different formats and rate limits. Designed meaningful visualizations that reveal patterns without overwhelming users with data. Implemented efficient caching strategies to handle large datasets while maintaining dashboard responsiveness.",
        demoUrl: "#",
        codeUrl: "#"
    },
    "superstore-bi": {
        title: "Superstore Business Intelligence Dashboard",
        description: "A comprehensive business intelligence dashboard analyzing sales, profit, and customer behavior in a retail superstore dataset. Built with Tableau to provide interactive insights for stakeholders across the organization.",
        images: [
            "assets/images/projects/superstore bi/Picture15.png",
            "assets/images/projects/superstore bi/Picture16.png",
            "assets/images/projects/superstore bi/Picture17.png",
            "assets/images/projects/superstore bi/Picture18.png",
            "assets/images/projects/superstore bi/Picture19.png"
        ],
        technologies: ["Tableau", "Business Intelligence", "Data Analysis", "SQL", "Dashboard Design"],
        features: [
            "Sales and profit trend analysis with year-over-year comparisons",
            "Category and sub-category performance breakdown",
            "Regional performance mapping with geographical insights",
            "Discount vs profitability correlation analysis",
            "Interactive filters for dynamic data exploration",
            "KPI scorecards with real-time metric tracking"
        ],
        challenges: "Transforming complex transactional data into meaningful business insights without oversimplifying. Created calculated fields to reveal discount impact on profitability, identifying optimal discount strategies. Designed dashboard layout for executive-level overview while enabling detailed drill-down analysis.",
        demoUrl: "#",
        codeUrl: "#"
    },
    "study-buddy": {
        title: "Study Buddy – UI/UX Mobile App",
        description: "A mobile app UI/UX project focused on helping students connect with study partners, manage sessions, and communicate efficiently. Designed with a clean, minimal interface emphasizing ease of use and quick interactions.",
        images: [
            "assets/images/projects/study-buddy/Screenshot 2026-02-24 192543.png",
            "assets/images/projects/study-buddy/Screenshot 2026-02-24 192603.png",
            "assets/images/projects/study-buddy/Screenshot 2026-02-24 192612.png",
            "assets/images/projects/study-buddy/Screenshot 2026-02-24 192620.png",
            "assets/images/projects/study-buddy/Screenshot 2026-02-24 192630.png",
            "assets/images/projects/study-buddy/Screenshot 2026-02-24 192637.png",
            "assets/images/projects/study-buddy/Screenshot 2026-02-24 192647.png",
            "assets/images/projects/study-buddy/Screenshot 2026-02-24 192655.png",
            "assets/images/projects/study-buddy/Screenshot 2026-02-24 192703.png"
        ],
        technologies: ["Figma", "UI Design", "UX Research", "Wireframing", "Prototyping", "User Testing"],
        features: [
            "Study session scheduling with calendar integration",
            "Friend and study group management",
            "In-app messaging interface for quick communication",
            "Simple onboarding flow with personalized setup",
            "Subject and course matching algorithms",
            "Session reminders and notification system"
        ],
        challenges: "Designing an interface that appeals to students across different age groups and study preferences. Conducted user interviews and usability testing with 20+ students to validate design decisions. Simplified complex features like group coordination into intuitive, tap-friendly mobile interactions.",
        demoUrl: "#",
        codeUrl: "#"
    },
    "cpu-scheduler": {
        title: "Hybrid Lock-Aware CPU Scheduler",
        description: "A novel CPU scheduling algorithm that extends traditional Round Robin with lock-dependency awareness. By intelligently managing process queues based on synchronization primitive availability, it significantly reduces wasted quanta and context switch overhead in multi-process environments.",
        images: [
            "assets/images/projects/Cpu scheduler/Screenshot 2026-02-24 224446.png",
            "assets/images/projects/Cpu scheduler/Screenshot 2026-02-24 224603.png",
            "assets/images/projects/Cpu scheduler/Screenshot 2026-02-24 224612.png"
        ],
        technologies: ["C++", "Operating Systems", "Algorithm Design", "Process Management", "Concurrency", "Theoretical Analysis"],
        features: [
            "Novel scheduling logic extending Round Robin with lock awareness",
            "Dual-queue architecture for maintaining fairness and priority",
            "Wasted quanta reduction by checking lock availability pre-dispatch",
            "Shortened critical section durations through reduced preemption",
            "Prevention of process blocking on already-held synchronization primitives",
            "Theoretical performance analysis and comparison with baseline RR"
        ],
        challenges: "The primary challenge was maintaining strict scheduling fairness while introducing dependency-aware logic. Implemented a dual-queue system to ensure that while waiting for locks, processes didn't suffer from long-term starvation. Balanced the trade-off between scheduling complexity and performance gains.",
        demoUrl: "#",
        codeUrl: "#"
    }
};

// Modal elements
const modal = document.getElementById('projectModal');
const modalBackdrop = modal.querySelector('.modal__backdrop');
const modalClose = modal.querySelector('.modal__close');
const modalTitle = modal.querySelector('.modal__title');
const modalDescription = modal.querySelector('.modal__description');
const modalTechList = modal.querySelector('.modal__tech-list');
const modalFeaturesList = modal.querySelector('.modal__features-list');
const modalChallenges = modal.querySelector('.modal__challenges');
const modalLinks = modal.querySelectorAll('.modal__link');

// Get all project cards
const projectCards = document.querySelectorAll('.project-card');

// Function to open modal
function openModal(projectId) {
    const project = projectData[projectId];
    if (!project) return;

    // Populate modal content
    modalTitle.textContent = project.title;
    modalDescription.textContent = project.description;

    // Image Slider logic
    const modalBody = modal.querySelector('.modal__body');
    // Remove existing slider if any
    const existingSlider = modal.querySelector('.modal__image-slider');
    if (existingSlider) existingSlider.remove();

    if (project.images && project.images.length > 0) {
        const sliderHTML = `
            <div class="modal__image-slider">
                <button class="slider-nav slider-nav--prev" aria-label="Previous image">&larr;</button>
                <div class="slider-image-container">
                    <img src="${project.images[0]}" alt="${project.title}" class="modal__image">
                </div>
                <button class="slider-nav slider-nav--next" aria-label="Next image">&rarr;</button>
            </div>
        `;
        // Insert before technologies section
        const techSection = modal.querySelector('.modal__section');
        techSection.insertAdjacentHTML('beforebegin', sliderHTML);

        let currentImgIndex = 0;
        const sliderImg = modal.querySelector('.modal__image');
        const prevImgBtn = modal.querySelector('.slider-nav--prev');
        const nextImgBtn = modal.querySelector('.slider-nav--next');

        const updateImage = (index) => {
            sliderImg.style.opacity = '0';
            setTimeout(() => {
                sliderImg.src = project.images[index];
                sliderImg.style.opacity = '1';
            }, 200);
        };

        prevImgBtn.addEventListener('click', () => {
            currentImgIndex = (currentImgIndex - 1 + project.images.length) % project.images.length;
            updateImage(currentImgIndex);
        });

        nextImgBtn.addEventListener('click', () => {
            currentImgIndex = (currentImgIndex + 1) % project.images.length;
            updateImage(currentImgIndex);
        });
    }

    // Populate technologies
    modalTechList.innerHTML = project.technologies
        .map(tech => `<span class="modal__tech-tag">${tech}</span>`)
        .join('');

    // Populate features
    modalFeaturesList.innerHTML = project.features
        .map(feature => `<li>${feature}</li>`)
        .join('');

    // Populate challenges
    modalChallenges.textContent = project.challenges;

    // Update links
    modalLinks[0].href = project.demoUrl;
    modalLinks[1].href = project.codeUrl;

    // Show modal
    modal.classList.add('active');
    document.body.classList.add('modal-open');
}

// Function to close modal
function closeModal() {
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
}

// Add click event to all project cards
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.getAttribute('data-project-id');
        openModal(projectId);
    });
});

// Close modal on close button click
modalClose.addEventListener('click', closeModal);

// Close modal on backdrop click
modalBackdrop.addEventListener('click', closeModal);

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});


// Prevent modal content clicks from closing modal
modal.querySelector('.modal__content').addEventListener('click', (e) => {
    e.stopPropagation();
});

/* -------------------------------------------------------------------------- */
/*                               SLIDER LOGIC                                 */
/* -------------------------------------------------------------------------- */
const sliderContainer = document.querySelector('.slider-container');
const prevBtn = document.querySelector('.slider-arrow--prev');
const nextBtn = document.querySelector('.slider-arrow--next');

if (sliderContainer && prevBtn && nextBtn) {
    // Scroll amount = card width + gap
    const getScrollAmount = () => {
        const card = sliderContainer.querySelector('.project-card');
        const gap = 32;
        return card ? card.offsetWidth + gap : 400;
    };

    // Manual Navigation
    nextBtn.addEventListener('click', () => {
        const scrollAmount = getScrollAmount();
        sliderContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        resetAutoScroll();
    });

    prevBtn.addEventListener('click', () => {
        const scrollAmount = getScrollAmount();
        sliderContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        resetAutoScroll();
    });

    // Auto Scroll Logic
    let autoScrollSpeed = 1; // px per frame
    let isHovering = false;
    let autoScrollId;

    const startAutoScroll = () => {
        const scrollLoop = () => {
            if (!isHovering) {
                sliderContainer.scrollLeft += autoScrollSpeed;

                // Reset when we've reached the end
                // Added a small buffer (1px) to avoid premature reset due to rounding
                if (sliderContainer.scrollLeft >= (sliderContainer.scrollWidth - sliderContainer.clientWidth - 1)) {
                    // Small delay or just reset
                    sliderContainer.scrollLeft = 0;
                }
            }
            autoScrollId = requestAnimationFrame(scrollLoop);
        };
        cancelAnimationFrame(autoScrollId);
        autoScrollId = requestAnimationFrame(scrollLoop);
    };

    // Pause on hover
    sliderContainer.addEventListener('mouseenter', () => isHovering = true);
    sliderContainer.addEventListener('mouseleave', () => {
        isHovering = false;
        // Ensure we resume
    });

    // Restart auto-scroll after manual interaction
    let timeoutId;
    const resetAutoScroll = () => {
        // Only pause if not hovering (i.e. if triggered by manual button click)
        if (!isHovering) {
            isHovering = true;
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                isHovering = false;
            }, 2000);
        }
    };

    // Initialize
    startAutoScroll();

}

/* -------------------------------------------------------------------------- */
/*                               CONTACT FORM                                 */
/* -------------------------------------------------------------------------- */
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const formSubmitBtn = document.getElementById('form-submit-btn');

if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const originalBtnText = formSubmitBtn.innerHTML;

        // Show loading state
        formSubmitBtn.disabled = true;
        formSubmitBtn.innerHTML = 'Sending...';
        formStatus.style.display = 'none';
        formStatus.className = '';

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                // Success
                formStatus.textContent = "Thanks for your message! I'll get back to you soon.";
                formStatus.style.color = "#10b981"; // success green
                formStatus.style.display = 'block';
                contactForm.reset();
            } else {
                // Error from server
                const data = await response.json();
                if (Object.hasOwnProperty.call(data, 'errors')) {
                    formStatus.textContent = data.errors.map(error => error.message).join(", ");
                } else {
                    formStatus.textContent = "Oops! There was a problem submitting your form.";
                }
                formStatus.style.color = "#ef4444"; // error red
                formStatus.style.display = 'block';
            }
        } catch (error) {
            // Network error
            formStatus.textContent = "Oops! There was a problem submitting your form.";
            formStatus.style.color = "#ef4444";
            formStatus.style.display = 'block';
        } finally {
            // Reset button
            formSubmitBtn.disabled = false;
            formSubmitBtn.innerHTML = originalBtnText;

            // Clear status after 5 seconds
            setTimeout(() => {
                formStatus.style.display = 'none';
            }, 5000);
        }
    });
}
/* -------------------------------------------------------------------------- */
/*                               MOBILE NAV                                   */
/* -------------------------------------------------------------------------- */
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('no-scroll');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
        });
    });
}
