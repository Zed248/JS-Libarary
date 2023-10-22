// swiper.js
class Swiper {
    constructor(containerSelector, options = {}) {
        this.container = document.querySelector(containerSelector);
        this.wrapper = this.container.querySelector('.swiper-wrapper');
        this.slides = this.container.querySelectorAll('.swiper-slide');
        this.prevButton = this.container.querySelector('.prev-button');
        this.nextButton = this.container.querySelector('.next-button');
        this.currentIndex = 0;

        // Merge user-provided options with default options
        this.options = Object.assign(
            {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                pagination: {
                    el: null, // Default to null if not provided
                },
                navigation: {
                    nextEl: null, // Default to null if not provided
                    prevEl: null, // Default to null if not provided
                },
            },
            options
        );

        this.prevButton.addEventListener('click', () => {
            this.currentIndex--;
            this.goToSlide(this.currentIndex);
        });

        this.nextButton.addEventListener('click', () => {
            this.currentIndex++;
            this.goToSlide(this.currentIndex);
        });

        this.goToSlide(this.currentIndex);

        // Initialize pagination and navigation if provided in options
        if (this.options.pagination.el) {
            this.pagination = this.container.querySelector(this.options.pagination.el);
            // Implement pagination logic here
        }

        if (this.options.navigation.nextEl && this.options.navigation.prevEl) {
            this.nextButton = this.container.querySelector(this.options.navigation.nextEl);
            this.prevButton = this.container.querySelector(this.options.navigation.prevEl);
            // Implement navigation logic here
        }
    }

    goToSlide(index) {
        if (index < 0) {
            this.currentIndex = this.slides.length - 1;
        } else if (index >= this.slides.length) {
            this.currentIndex = 0;
        }

        const translateX = -this.currentIndex * 100;
        this.wrapper.style.transform = `translateX(${translateX}%)`;
    }
}

// Usage example:
document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
