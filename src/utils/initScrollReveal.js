import ScrollReveal from 'scrollreveal';

export function initScrollReveal() {
    // default settings
    const scrollReveal = ScrollReveal({
        origin: 'top',
        distance: '40px',
        duration: 2000,
    });

    scrollReveal.reveal('.titleReveal', { delay: 200 });

    scrollReveal.reveal('.buttonReveal', {
        origin: 'bottom',
        distance: '40px',
        delay: 200,
    });

    scrollReveal.reveal('.presentationReveal', {
        origin: 'left',
        distance: '60px',
        delay: 250,
    });

    scrollReveal.reveal('.summaryCoverReveal', {
        delay: 300,
    });
    scrollReveal.reveal('.summaryTitleReveal', {
        delay: 200,
    });
    scrollReveal.reveal('.summarySubtitleReveal', {
        delay: 300,
    });
    scrollReveal.reveal('.summaryDescriptionReveal', {
        origin: 'left',
        distance: '60px',
        delay: 250,
    });
    scrollReveal.reveal('.summaryTextAndSocialsReveal', {
        delay: 400,
    });

    scrollReveal.reveal('.serviceReveal', {
        interval: 400,
    });

    scrollReveal.reveal('.projectReveal', {
        delay: 200,
    });
    scrollReveal.reveal('.projectCoverReveal', {
        origin: 'center',
        distance: '0px',
        opacity: 0,
        easing: 'ease-in-out',
        delay: 300,
    });
    scrollReveal.reveal('.projectTitleReveal', {
        delay: 350,
        distance: '20px',
    });
    scrollReveal.reveal('.projectTextAndSocialsReveal', {
        delay: 400,
        distance: '20px',
    });
    scrollReveal.reveal('.projectShowMoreReveal', {
        origin: 'left',
        distance: '40px',
        delay: 400,
    });

    scrollReveal.reveal('.technologyReveal', {
        interval: 400,
    });
    scrollReveal.reveal('.technologyTitle', {
        origin: 'left',
        distance: '60px',
        delay: 400,
    });
    scrollReveal.reveal('.technologyLanguages', {
        delay: 400,
    });

    scrollReveal.reveal('.formReveal', {
        delay: 400,
    });

    scrollReveal.reveal('.informationReveal', {
        interval: 400,
    });

    scrollReveal.reveal('.socialsReveal', {
        interval: 200,
        distance: '40px',
    });
}
