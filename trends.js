// News data
        const trendingNews = [
            {
                id: 1,
                title: "BREAKING: Passenger Plane Crashes in Indian Ocean",
                summary: "A commercial airliner with 189 passengers onboard has crashed into the Indian Ocean shortly after takeoff. Rescue operations are underway.",
                date: "Jul 18, 2025",
                views: "4.2k",
                image: "pexels-kseniachernaya-8535633.jpg",
                mediaType: "video",
                mediaContent: "st anns.mp4",
                secondaryMedia: "pictures/pexels-nguy-n-ti-n-th-nh-2150376175-32376792.jpg",
                content: `
                    <p>A passenger plane carrying 189 people crashed into the Indian Ocean shortly after takeoff from Mombasa's Moi International Airport earlier today. 
                    The aircraft, operated by Coastal Airways, was en route to Zanzibar when it disappeared from radar approximately 15 minutes after departure.</p>
                    
                    <p>Eyewitnesses reported seeing the plane descending rapidly before hitting the water. "We heard a loud noise and saw smoke coming from the ocean,
                    " said fisherman Ali Mwinyi, who was about 3 kilometers from the crash site.</p>
                    
                    <p>The Kenyan Navy and Coast Guard have launched a massive search and rescue operation. So far, 12 survivors have been pulled from the water, 
                    but officials fear the death toll may rise significantly.</p>
                    
                    <p>President William Ruto has expressed his condolences to the families of the victims and promised a full investigation into the cause of the crash. 
                    "This is a tragic day for our nation and for all those affected by this disaster," he said in a televised address.</p>
                    
                    <p>The flight data recorder and cockpit voice recorder have not yet been recovered. Aviation experts suggest that mechanical failure or severe weather 
                    may have contributed to the accident, though no official cause has been confirmed.</p>
                `,
                author: {
                    name: "Kelvin Masika",
                    avatar: "user-1.jpg",
                    role: "Senior Aviation Correspondent"
                },
                likes: 4287,
                dislikes: 0
            },
            {
                id: 2,
                title: "Massive Earthquake Hits Nairobi",
                summary: "A 6.3 magnitude earthquake struck Nairobi this morning, causing significant damage to buildings and infrastructure across the city.",
                date: "Jul 17, 2025",
                views: "5.7k",
                image: "pexels-cottonbro-3662630.jpg",
                mediaType: "video",
                mediaContent: "st anns.mp4", // Placeholder video
                secondaryMedia: "pictures/pexels-kseniachernaya-8535633.jpg",
                content: `
                    <p>A powerful 6.3 magnitude earthquake struck Nairobi at approximately 8:15 AM local time today, sending panicked residents rushing into the streets. The quake, which lasted about 45 seconds, was felt across much of central Kenya.</p>
                    
                    <p>Initial reports indicate significant damage to buildings in the central business district, with several high-rise structures showing visible cracks. The iconic Kenyatta International Convention Centre sustained damage to its upper floors, and parts of the Thika Superhighway have been closed due to fissures in the road surface.</p>
                    
                    <p>"It was terrifying," said Wanjiru Mwangi, a secretary in Upper Hill. "The building started swaying, and we all just ran for the stairs. Some people were screaming and crying."</p>
                    
                    <p>The Red Cross has reported at least 12 fatalities and over 200 injuries, though these numbers are expected to rise as rescue teams reach more affected areas. Hospitals across the city are on high alert, with emergency services stretched to capacity.</p>
                    
                    <p>Geologists from the University of Nairobi say this is the strongest earthquake to hit the city in over 50 years. Aftershocks continue to rattle the region, keeping residents on edge. The government has urged people to stay out of damaged buildings and to be prepared for further tremors.</p>
                `,
                author: {
                    name: "Sarah Omondi",
                    avatar: "user-2.jpg",
                    role: "Chief Disaster Reporter"
                },
                likes: 3921,
                dislikes: 0
            },
            {
                id: 3,
                title: "Inspirational: Teen Builds School for Orphans",
                summary: "18-year-old James Mwangi has single-handedly built a school for orphans in his rural village, changing lives with his determination.",
                date: "Jul 16, 2025",
                views: "3.8k",
                image: "pexels-kseniachernaya-8535633.jpg",
                mediaType: "image",
                mediaContent: "st anns.mp4",
                secondaryMedia: "pexels-nguy-n-ti-n-th-nh-2150376175-32376792.jpg",
                content: `
                    <p>In the remote village of Kiamugumo, 18-year-old James Mwangi has accomplished what many said was impossible - building a school for orphans using nothing but recycled materials and sheer determination.</p>
                    
                    <p>"I was orphaned at 10 years old," James explains. "I know how hard it is to get an education when you have no one to support you. I wanted to change that for others like me."</p>
                    
                    <p>Over three years, James collected discarded metal sheets, wood, and other materials from construction sites and dumpsters. He taught himself basic construction skills by watching YouTube videos on a shared smartphone. The result is a modest but functional three-classroom school that now educates 47 orphaned children.</p>
                    
                    <p>"James is a miracle," says village elder Mzee Kamau. "We had given up hope that our orphans would ever go to school. Now they have a chance at a better life."</p>
                    
                    <p>The story has attracted attention across Kenya, with offers of support pouring in. The Ministry of Education has pledged to send trained teachers, and a crowdfunding campaign has raised over KSh 2 million to expand the school.</p>
                    
                    <p>Despite the sudden fame, James remains focused on his students. "This is just the beginning," he says. "I want to build a high school next, then maybe a technical college. Every child deserves an education, no matter their circumstances."</p>
                `,
                author: {
                    name: "Grace Wambui",
                    avatar: "user-1.jpg",
                    role: "Education Correspondent"
                },
                likes: 5123,
                dislikes: 0
            },
            {
                id: 4,
                title: "New Tech Hub Launches in Vihiga County",
                summary: "Vihiga County opens its first major tech hub, aiming to train 10,000 youth in digital skills over the next three years.",
                date: "Jul 15, 2025",
                views: "10.9k",
                image: "pexels-didsss-2675061.jpg",
                mediaType: "video",
                mediaContent: "st anns.mp4", // Placeholder video
                secondaryMedia: "vigiz.jpeg",
                content: `
                    <p>Vihiga County has taken a major step toward becoming a regional technology leader with the launch of the Vihiga Digital Innovation Hub. The state-of-the-art facility, officially opened yesterday by Governor Wilber Ottichilo, aims to train 10,000 young people in digital skills over the next three years.</p>
                    
                    <p>The hub, funded through a partnership between the county government and several tech companies, features modern computer labs, co-working spaces, and incubation facilities for tech startups. "This is about creating opportunities for our youth right here at home," said Governor Ottichilo during the opening ceremony.</p>
                    
                    <p>Initial courses will focus on web development, digital marketing, and data science, with plans to expand into artificial intelligence and blockchain technologies next year. The hub has already attracted interest from major tech firms looking to recruit skilled workers.</p>
                    
                    <p>"I've been waiting for something like this," said 22-year-old Mercy Achieng, one of the first students to enroll. "Now I can learn high-demand skills without having to move to Nairobi or Mombasa."</p>
                    
                    <p>The launch comes as part of a broader push to develop Kenya's Western region as a tech destination. Similar hubs are planned for Kakamega and Kisumu counties in the coming months, creating what officials are calling "Silicon Savannah West."</p>
                `,
                author: {
                    name: "David Ochieng",
                    avatar: "user-1.jpg",
                    role: "Technology Editor"
                },
                likes: 2876,
                dislikes: 0
            },
            {
                id: 5,
                title: "Rare White Giraffe Spotted in Tsavo",
                summary: "Wildlife photographers have captured images of an extremely rare white giraffe in Tsavo East National Park.",
                date: "Jul 14, 2025",
                views: "14.5k",
                image: "vigiz.jpeg",
                mediaType: "video",
                mediaContent: "st anns.mp4",
                secondaryMedia: "vigiz.jpeg",
                content: `
                    <p>In an extraordinary wildlife encounter, conservationists have documented a rare white giraffe in Tsavo East National Park. The male calf, estimated to be about 15 months old, has a condition called leucism that results in partial loss of pigmentation.</p>
                    
                    <p>"This is only the third recorded sighting of a white giraffe in Kenya," said Dr. Paula Kahumbu, CEO of WildlifeDirect. "The last known individual was killed by poachers in 2020, making this discovery particularly significant."</p>
                    
                    <p>The giraffe was spotted by a team from the Tsavo Trust during routine patrols. Photographs show the young animal with its normally brown patches appearing cream-colored, standing out strikingly against the green acacia trees.</p>
                    
                    <p>While visually stunning, the unusual coloring puts the giraffe at greater risk from predators and poachers. The Kenya Wildlife Service has increased patrols in the area and is monitoring the animal's movements.</p>
                    
                    <p>"We're taking every precaution to protect this special giraffe," said Tsavo Trust director Richard Moller. "He represents the incredible biodiversity of our parks and reminds us why conservation is so important."</p>
                    
                    <p>The discovery has excited scientists and wildlife enthusiasts worldwide. Researchers hope to study the giraffe to learn more about leucism in large mammals and its potential effects on social behavior and survival.</p>
                `,
                author: {
                    name: "Michael Ndung'u",
                    avatar: "user-2.jpg",
                    role: "Wildlife Correspondent"
                },
                likes: 5987,
                dislikes: 0
            }
        ];

        // Initialize the slider
        document.addEventListener('DOMContentLoaded', function () {
            const slider = document.querySelector('.news-trending-slider');
            const dotsContainer = document.querySelector('.news-slider-dots');

            // Create cards and dots
            trendingNews.forEach((news, index) => {
                // Create card
                const card = document.createElement('div');
                card.className = 'news-trending-card';
                card.dataset.id = news.id;

                card.innerHTML = `
                    <img src="${news.image}" alt="${news.title}" class="news-card-image">
                    <div class="news-card-content">
                        <h3 class="news-card-title">${news.title}</h3>
                        <p class="news-card-summary">${news.summary}</p>
                        <div class="news-card-footer">
                            <span>${news.date}</span>
                            <span class="news-card-views"><i class="fas fa-eye"></i> ${news.views} views</span>
                        </div>
                    </div>
                `;

                slider.appendChild(card);

                // Create dot
                const dot = document.createElement('div');
                dot.className = 'news-slider-dot';
                dot.dataset.index = index;
                dotsContainer.appendChild(dot);
            });

            // Set first dot as active
            document.querySelector('.news-slider-dot')?.classList.add('active');

            // Initialize slider functionality
            initSlider();

            // Create modals
            createModals();

            // Set up card click events
            setupCardClicks();
        });

        // Slider functionality
        function initSlider() {
            const slider = document.querySelector('.news-trending-slider');
            const cards = document.querySelectorAll('.news-trending-card');
            const dots = document.querySelectorAll('.news-slider-dot');

            if (!cards.length) return;

            let currentIndex = 0;
            const cardWidth = cards[0].offsetWidth;
            const gap = 20; // Gap between cards in pixels
            let autoSlideInterval;

            // Function to move slider to specific index
            function goToSlide(index) {
                currentIndex = index;
                const offset = -((cardWidth + gap) * index);
                slider.style.transform = `translateX(${offset}px)`;

                // Update dots
                dots.forEach(dot => dot.classList.remove('active'));
                dots[index]?.classList.add('active');
            }

            // Auto slide every 5 seconds
            function startAutoSlide() {
                autoSlideInterval = setInterval(() => {
                    currentIndex = (currentIndex + 1) % cards.length;
                    goToSlide(currentIndex);
                }, 5000);
            }

            // Start auto slide
            startAutoSlide();

            // Pause auto slide on hover
            slider.parentElement.addEventListener('mouseenter', () => {
                clearInterval(autoSlideInterval);
            });

            // Resume auto slide when mouse leaves
            slider.parentElement.addEventListener('mouseleave', startAutoSlide);

            // Dot click events
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    clearInterval(autoSlideInterval);
                    goToSlide(index);
                    startAutoSlide();
                });
            });

            // Touch events for mobile swipe
            let touchStartX = 0;
            let touchEndX = 0;

            slider.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
                clearInterval(autoSlideInterval);
            }, { passive: true });

            slider.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
                startAutoSlide();
            }, { passive: true });

            function handleSwipe() {
                const difference = touchStartX - touchEndX;
                if (difference > 50) {
                    // Swipe left - next slide
                    currentIndex = (currentIndex + 1) % cards.length;
                } else if (difference < -50) {
                    // Swipe right - previous slide
                    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
                }
                goToSlide(currentIndex);
            }

            // Responsive adjustments
            function handleResize() {
                const firstCard = document.querySelector('.news-trending-card');
                if (!firstCard) return;
                
                const newCardWidth = firstCard.offsetWidth;
                const offset = -((newCardWidth + gap) * currentIndex);
                slider.style.transform = `translateX(${offset}px)`;
            }

            window.addEventListener('resize', handleResize);
        }

        // Create modals for each news item
        function createModals() {
            const body = document.querySelector('body');

            trendingNews.forEach(news => {
                const modal = document.createElement('div');
                modal.className = 'news-modal-overlay';
                modal.id = `news-modal-${news.id}`;

                let mediaContent;
                if (news.mediaType === 'video') {
                    mediaContent = `
                        <iframe class="news-modal-video" src="${news.mediaContent}" 
                                frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
                                encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                        </iframe>
                    `;
                } else {
                    mediaContent = `<img src="${news.mediaContent}" class="news-modal-media" alt="${news.title}">`;
                }

                modal.innerHTML = `
                    <div class="news-modal-container">
                        <button class="news-modal-close"><i class="fas fa-times"></i></button>
                        ${mediaContent}
                        <div class="news-modal-content">
                            <h1 class="news-modal-title">${news.title}</h1>
                            <div class="news-modal-text">
                                ${news.content}
                                ${news.secondaryMedia ? `<img src="${news.secondaryMedia}" class="news-modal-secondary-media" alt="Additional media">` : ''}
                            </div>
                            
                            <div class="news-modal-reactions">
                                <button class="news-reaction-btn like" data-id="${news.id}">
                                    <i class="fas fa-heart"></i>
                                    <span class="like-count">${formatNumber(news.likes)}</span>
                                </button>
                                <button class="news-reaction-btn dislike" data-id="${news.id}">
                                    <i class="fas fa-thumbs-down"></i>
                                    <span class="dislike-count">${formatNumber(news.dislikes)}</span>
                                </button>
                            </div>
                            
                            <div class="news-modal-share">
                                <button class="news-share-btn" data-id="${news.id}">
                                    <i class="fas fa-share"></i> Share
                                </button>
                            </div>
                            
                            <div class="news-modal-author">
                                <img src="${news.author.avatar}" class="news-author-avatar" alt="${news.author.name}">
                                <div class="news-author-info">
                                    <div class="news-author-name">Reported by ${news.author.name}</div>
                                    <div class="news-author-role">${news.author.role}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;

                body.appendChild(modal);

                // Add close event
                const closeBtn = modal.querySelector('.news-modal-close');
                if (closeBtn) {
                    closeBtn.addEventListener('click', () => {
                        modal.classList.remove('active');
                        document.body.style.overflow = 'auto';
                    });
                }
            });

            // Close modal when clicking outside content
            document.querySelectorAll('.news-modal-overlay').forEach(modal => {
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        modal.classList.remove('active');
                        document.body.style.overflow = 'auto';
                    }
                });
            });
        }

        // Set up card click events to open modals
        function setupCardClicks() {
            document.querySelectorAll('.news-trending-card').forEach(card => {
                card.addEventListener('click', () => {
                    const newsId = card.dataset.id;
                    const modal = document.getElementById(`news-modal-${newsId}`);

                    if (modal) {
                        modal.classList.add('active');
                        document.body.style.overflow = 'hidden';

                        // Initialize reactions for this modal
                        initReactions(newsId);
                    }
                });
            });
        }

        // Initialize reaction buttons for a news item
        function initReactions(newsId) {
            // First check IndexedDB for existing reactions
            checkExistingReactions(newsId).then(() => {
                // Then set up click handlers if user hasn't reacted in this session
                if (!sessionStorage.getItem(`reacted-${newsId}`)) {
                    const likeBtn = document.querySelector(`#news-modal-${newsId} .like`);
                    const dislikeBtn = document.querySelector(`#news-modal-${newsId} .dislike`);

                    likeBtn?.addEventListener('click', () => handleReaction(newsId, 'like'));
                    dislikeBtn?.addEventListener('click', () => handleReaction(newsId, 'dislike'));
                }
            }).catch(() => {
                // Handle any errors in the promise chain
                const likeBtn = document.querySelector(`#news-modal-${newsId} .like`);
                const dislikeBtn = document.querySelector(`#news-modal-${newsId} .dislike`);

                likeBtn?.addEventListener('click', () => handleReaction(newsId, 'like'));
                dislikeBtn?.addEventListener('click', () => handleReaction(newsId, 'dislike'));
            });
        }

        // Check for existing reactions in IndexedDB
        function checkExistingReactions(newsId) {
            return new Promise((resolve, reject) => {
                if (!window.indexedDB) {
                    resolve();
                    return;
                }

                const request = indexedDB.open('VihigaTimesDB', 1);

                request.onupgradeneeded = (event) => {
                    const db = event.target.result;
                    if (!db.objectStoreNames.contains('reactions')) {
                        db.createObjectStore('reactions', { keyPath: 'newsId' });
                    }
                };

                request.onsuccess = (event) => {
                    const db = event.target.result;
                    const transaction = db.transaction('reactions', 'readonly');
                    const store = transaction.objectStore('reactions');
                    const getRequest = store.get(Number(newsId));

                    getRequest.onsuccess = () => {
                        const data = getRequest.result;
                        if (data) {
                            updateReactionUI(newsId, data.likes, data.dislikes);
                        }
                        resolve();
                    };

                    getRequest.onerror = () => resolve();
                };

                request.onerror = () => resolve();
            });
        }

        // Update reaction UI with counts
        function updateReactionUI(newsId, likes, dislikes) {
            const newsItem = trendingNews.find(item => item.id == newsId);
            if (!newsItem) return;

            newsItem.likes = likes;
            newsItem.dislikes = dislikes;

            const modal = document.getElementById(`news-modal-${newsId}`);
            if (modal) {
                const likeCount = modal.querySelector('.like-count');
                const dislikeCount = modal.querySelector('.dislike-count');
                if (likeCount) likeCount.textContent = formatNumber(likes);
                if (dislikeCount) dislikeCount.textContent = formatNumber(dislikes);
            }
        }

        // Handle reaction clicks
        function handleReaction(newsId, type) {
            const newsItem = trendingNews.find(item => item.id == newsId);
            const modal = document.getElementById(`news-modal-${newsId}`);

            if (!newsItem || !modal || sessionStorage.getItem(`reacted-${newsId}`)) return;

            // Update counts
            if (type === 'like') {
                newsItem.likes++;
                const likeCount = modal.querySelector('.like-count');
                if (likeCount) likeCount.textContent = formatNumber(newsItem.likes);
                modal.querySelector('.like')?.classList.add('active');
            } else {
                newsItem.dislikes++;
                const dislikeCount = modal.querySelector('.dislike-count');
                if (dislikeCount) dislikeCount.textContent = formatNumber(newsItem.dislikes);
                modal.querySelector('.dislike')?.classList.add('active');
            }

            // Mark as reacted for this session
            try {
                sessionStorage.setItem(`reacted-${newsId}`, 'true');
            } catch (e) {
                console.error('Failed to use sessionStorage:', e);
            }

            // Store in IndexedDB for persistence across sessions
            updateReactionInDB(newsId, type);
        }

        // Update reaction in IndexedDB
        function updateReactionInDB(newsId, type) {
            if (!window.indexedDB) return;

            const request = indexedDB.open('VihigaTimesDB', 1);

            request.onupgradeneeded = (event) => {
                const db = event.target.result;
                if (!db.objectStoreNames.contains('reactions')) {
                    db.createObjectStore('reactions', { keyPath: 'newsId' });
                }
            };

            request.onsuccess = (event) => {
                const db = event.target.result;
                const transaction = db.transaction('reactions', 'readwrite');
                const store = transaction.objectStore('reactions');

                const getRequest = store.get(Number(newsId));

                getRequest.onsuccess = () => {
                    const data = getRequest.result || { newsId: Number(newsId), likes: 0, dislikes: 0 };
                    const newsItem = trendingNews.find(item => item.id == newsId);

                    if (!newsItem) return;

                    // Update with current values from the news item
                    data.likes = newsItem.likes;
                    data.dislikes = newsItem.dislikes;

                    store.put(data);
                };

                getRequest.onerror = (event) => {
                    console.error('Error getting reaction data:', event.target.error);
                };
            };

            request.onerror = (event) => {
                console.error('Error opening database:', event.target.error);
            };
        }

        // Share button functionality
        document.addEventListener('click', function (e) {
            if (e.target.closest('.news-share-btn')) {
                const newsId = e.target.closest('.news-share-btn').dataset.id;
                const newsItem = trendingNews.find(item => item.id == newsId);

                if (!newsItem) return;

                const shareData = {
                    title: newsItem.title,
                    text: newsItem.summary,
                    url: window.location.href
                };

                if (navigator.share) {
                    navigator.share(shareData).catch(err => {
                        console.log('Error sharing:', err);
                        fallbackShare(newsItem);
                    });
                } else {
                    fallbackShare(newsItem);
                }
            }
        });

        // Fallback for browsers that don't support Web Share API
        function fallbackShare(newsItem) {
            const shareUrl = window.location.href;
            const shareText = `${newsItem.title}: ${newsItem.summary}`;

            // Try to copy to clipboard
            navigator.clipboard.writeText(`${shareText}\n\nRead more: ${shareUrl}`).then(() => {
                alert('Link copied to clipboard!');
            }).catch(() => {
                // Final fallback
                prompt('Copy this link to share:', shareUrl);
            });
        }

        // Helper function to format large numbers
        function formatNumber(num) {
            if (!num) return "0";
            if (num >= 1000000) {
                return (num / 1000000).toFixed(1) + 'M';
            } else if (num >= 1000) {
                return (num / 1000).toFixed(1) + 'k';
            }
            return num.toString();
        }