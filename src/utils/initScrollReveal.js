import ScrollReveal from 'scrollreveal';

export const initScrollReveal = () => {
    // Initial settings
    const scrollReveal = ScrollReveal({
        origin: 'top',
        distance: '40px',
        duration: 1500,
    });

    // Global
    scrollReveal.reveal('.title_reveal', { delay: 200 });
    scrollReveal.reveal('.button_reveal', { origin: 'bottom', distance: '40px', delay: 200 });

    return scrollReveal;
};

// Custom settings
export const revealComponentElements = (scrollReveal, customConfig = []) => {
    customConfig.forEach(({ selector, config }) => {
        scrollReveal.reveal(selector, config);
    });
};
