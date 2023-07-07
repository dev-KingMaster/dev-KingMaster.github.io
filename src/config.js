module.exports = {
  siteTitle: 'James Bai',
  siteDescription: 'James Bai is a senior full stack engineer, who thrive on challenges.',
  siteKeywords:
    'James Bai, James, Bai, jameslin, software engineer, web developer, javascript, python, java, svvv, typescript, react, angular, django, node.js, AWS, MongoDB, PostgreSQL',
  siteUrl: 'https://yashitanamdeo.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-45666519-2',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'James Bai',
  location: 'CA, US',
  email: 'jgreen813122@gmail.com',
  github: 'https://github.com/dev-KingMaster',
  twitterHandle: '@',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/dev-KingMaster',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/jamesgreen103/',
    },
    {
      name: 'Codepen',
      url: 'https://codepen.io/jamesgreen',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
