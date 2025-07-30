 document.addEventListener('DOMContentLoaded', function () {
            // Header shrink on scroll
            const header = document.getElementById('mainHeader');
            window.addEventListener('scroll', function () {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            // Mobile menu toggle
            const hamburger = document.querySelector('.hamburger');
            const mobileMenu = document.querySelector('.mobile-menu');
            const overlay = document.querySelector('.overlay');
            const closeBtn = document.querySelector('.close-btn');

            hamburger.addEventListener('click', function () {
                mobileMenu.classList.add('active');
                overlay.classList.add('active');
                hamburger.setAttribute('aria-expanded', 'true');
                document.body.style.overflow = 'hidden';
            });

            closeBtn.addEventListener('click', function () {
                mobileMenu.classList.remove('active');
                overlay.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });

            overlay.addEventListener('click', function () {
                mobileMenu.classList.remove('active');
                overlay.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            });

            // Live viewer counter simulation
            

            // Slider functionality
            const slides = document.querySelectorAll('.slide');
            const progressBars = document.querySelectorAll('.progress-bar');
            const prevBtns = document.querySelectorAll('.prev-btn');
            const nextBtns = document.querySelectorAll('.next-btn');
            const readMoreBtns = document.querySelectorAll('.read-more-btn');
            const modal = document.querySelector('.modal');
            const closeModalBtn = document.querySelector('.close-modal');
            const modalHeader = document.querySelector('.modal-header');
            const modalTitle = document.querySelector('.modal-title');
            const modalCategory = document.querySelector('.modal .category-badge');
            const modalDate = document.querySelector('.modal-meta time');
            const modalViews = document.querySelector('.modal-meta span:nth-child(2)');
            const modalDescription = document.querySelector('.modal-description');
            const modalReporterImg = document.querySelector('.reporter-img');
            const modalReporterName = document.querySelector('.reporter-name');

            let currentSlide = 0;
            let interval;
            const slideDuration = 3000; // 3 seconds

            // Modal content for each slide
            const modalContents = [
                {
                    title: "Global Summit Addresses Climate Change Crisis",
                    category: "breaking",
                    categoryText: "🔴 Breaking",
                    date: "2023-06-15",
                    views: "24,521",
                    description: "World leaders from over 190 countries gathered today at the annual Global Climate Summit to address the escalating climate crisis. The summit, held in Geneva, Switzerland, comes amid record-breaking temperatures and extreme weather events across the globe.\n\nKey discussions focused on implementing stricter emissions targets, with several nations pledging to achieve net-zero carbon emissions by 2040 - a full decade earlier than previously agreed. The proposed policies include substantial investments in renewable energy infrastructure and stricter regulations on industrial pollution.\n\n\"We are at a critical juncture in human history,\" stated UN Secretary-General during the opening ceremony. \"The decisions we make in these coming days will determine the livability of our planet for generations to come.\"\n\nEnvironmental activists gathered outside the summit venue, urging faster action. Meanwhile, business leaders expressed concerns about the economic impact of rapid transition, calling for more gradual implementation timelines.\n\nThe summit is expected to conclude Friday with a joint declaration and action plan. Early drafts suggest the creation of an international climate monitoring body with enforcement powers, though details remain contentious among participating nations.",
                    reporterImg: "slides/user1.webp",
                    reporterName: "Sarah Johnson",
                    reporterTitle: "Senior Correspondent",
                    bgImage: "slides/ns4.webp"
                },
                {
                    title: "National Team Advances to Finals After Dramatic Win",
                    category: "sports",
                    categoryText: "🔵 Sports",
                    date: "2023-06-14",
                    views: "18,743",
                    description: "In a heart-stopping match that went into double overtime, the national soccer team secured their place in the championship finals with a 3-2 victory against their long-time rivals. The winning goal came in the 118th minute from team captain Mark Williams, sending the sold-out stadium into a frenzy.\n\nThis marks the first time in 12 years that the team has reached the finals, reviving hopes for a championship title last won in 2001. Coach Martinez praised his team's resilience: \"These players showed the heart of champions tonight. We were down twice but never out.\"\n\nThe match wasn't without controversy, as two penalty decisions were hotly debated by analysts. The team will now face defending champions in the finals next Sunday, with millions expected to tune in worldwide.\n\nTicket demand for the finals has already crashed several vendor websites, with prices on secondary markets reaching record levels. City officials announced plans for public viewing areas in major parks to accommodate fans unable to secure tickets.",
                    reporterImg: "slides/user2.webp",
                    reporterName: "James Wilson",
                    reporterTitle: "Sports Editor",
                    bgImage: "slides/ns2.webp"
                },
                {
                    title: "Young Innovators Develop App to Combat Food Waste",
                    category: "youth",
                    categoryText: "🟡 Youth",
                    date: "2023-06-13",
                    views: "12,896",
                    description: "A group of teenage programmers from local high schools has developed a groundbreaking app called \"FoodSave\" that connects restaurants, grocery stores, and bakeries with shelters and food banks to redistribute excess food that would otherwise go to waste.\n\nIn just three months since launch, the platform has facilitated the donation of over 10,000 meals across the city. The team of five students, all aged between 16-18, developed the app as part of a school coding competition before realizing its potential for real-world impact.\n\n\"We noticed how much perfectly good food gets thrown out while people go hungry just blocks away,\" explained lead developer Priya Gupta. \"Our app makes redistribution effortless with real-time notifications and route optimization for volunteers.\"\n\nThe app has already attracted attention from major tech companies and nonprofit organizations. The students plan to expand to neighboring cities and are currently working on a version for home users to share excess home-cooked meals with their communities.\n\nLocal officials have praised the initiative, with the mayor declaring next week as \"Youth Innovation Week\" in honor of the team's achievements.",
                    reporterImg: "slides/user1.webp",
                    reporterName: "Emily Chen",
                    reporterTitle: "Technology Reporter",
                    bgImage: "slides/ns3.webp"
                },
                {
                    title: "New Study Reveals Benefits of Remote Work Productivity",
                    category: "trending",
                    categoryText: "🟢 Trending",
                    date: "2023-06-12",
                    views: "32,154",
                    description: "A comprehensive two-year study conducted by the Global Workplace Institute has found that remote workers are on average 22% more productive than their office-based counterparts, challenging traditional notions about workplace efficiency.\n\nThe research tracked over 5,000 knowledge workers across multiple industries, measuring output quality, quantity, and timeliness. Surprisingly, the productivity gains were most pronounced in creative fields (up 28%) and software development (up 31%).\n\n\"The data clearly shows that when given proper tools and autonomy, employees not only maintain productivity but significantly exceed office benchmarks,\" said lead researcher Dr. Amanda Zhou. \"The key factors are reduced commute stress, fewer distractions, and the ability to work during personal peak hours.\"\n\nThe study did note some challenges, particularly for junior employees who benefited from in-person mentorship. Researchers recommend hybrid models for onboarding while allowing experienced workers full flexibility.\n\nThese findings come as many companies consider post-pandemic work policies, with several major corporations already announcing permanent remote options based on preliminary results from this ongoing study.",
                    reporterImg: "slides/user1.webp",
                    reporterName: "Michael Rodriguez",
                    reporterTitle: "Business Correspondent",
                    bgImage: "slides/ns7.webp"
                }
            ];

            function showSlide(index) {
                // Reset all slides
                slides.forEach(slide => {
                    slide.classList.remove('active');
                });
                progressBars.forEach(bar => {
                    bar.style.width = '0%';
                });

                // Show new slide
                slides[index].classList.add('active');
                currentSlide = index;

                // Reset timer
                clearInterval(interval);
                startProgressBar();
            }

            function startProgressBar() {
                let width = 0;
                const progressBar = progressBars[currentSlide];
                progressBar.style.width = '0%';

                interval = setInterval(() => {
                    if (width >= 100) {
                        nextSlide();
                    } else {
                        width += 0.5;
                        progressBar.style.width = width + '%';
                        progressBar.setAttribute('aria-valuenow', width);
                    }
                }, slideDuration / 200);
            }

            function nextSlide() {
                const nextIndex = (currentSlide + 1) % slides.length;
                showSlide(nextIndex);
            }

            function prevSlide() {
                const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
                showSlide(prevIndex);
            }

            // Initialize slider
            showSlide(0);

            // Event listeners for navigation buttons
            prevBtns.forEach(btn => {
                btn.addEventListener('click', prevSlide);
            });

            nextBtns.forEach(btn => {
                btn.addEventListener('click', nextSlide);
            });

            // Keyboard navigation
            document.addEventListener('keydown', function (e) {
                if (e.key === 'ArrowRight') {
                    nextSlide();
                } else if (e.key === 'ArrowLeft') {
                    prevSlide();
                } else if (e.key === 'Escape' && modal.classList.contains('active')) {
                    closeModal();
                }
            });

            // Read more buttons - open modal with slide content
            readMoreBtns.forEach((btn, index) => {
                btn.addEventListener('click', function () {
                    openModal(index);
                });
            });

            function openModal(slideIndex) {
                const content = modalContents[slideIndex];

                // Update modal content
                modalHeader.style.backgroundImage = `url(${content.bgImage})`;
                modalTitle.textContent = content.title;
                modalCategory.className = `category-badge ${content.category}`;
                modalCategory.textContent = content.categoryText;
                modalDate.textContent = formatDate(content.date);
                modalDate.setAttribute('datetime', content.date);
                modalViews.textContent = `Views: ${content.views}`;
                modalDescription.textContent = content.description;
                modalReporterImg.src = content.reporterImg;
                modalReporterImg.alt = `${content.reporterName} portrait`;
                modalReporterName.textContent = content.reporterName;
                modalReporterName.nextElementSibling.textContent = content.reporterTitle;

                // Show modal
                modal.classList.add('active');
                overlay.classList.add('active');
                document.body.style.overflow = 'hidden';

                // Pause slider while modal is open
                clearInterval(interval);
            }

            function closeModal() {
                modal.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';

                // Resume slider
                startProgressBar();
            }

            closeModalBtn.addEventListener('click', closeModal);
            overlay.addEventListener('click', closeModal);

            // Helper function to format date
            function formatDate(dateString) {
                const options = { year: 'numeric', month: 'long', day: 'numeric' };
                return new Date(dateString).toLocaleDateString('en-US', options);
            }

            // Preload first slide image for better user experience
            const firstSlideImg = new Image();
            firstSlideImg.src = "slides/bg-1.webp";
        });