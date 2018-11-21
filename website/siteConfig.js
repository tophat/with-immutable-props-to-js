const siteConfig = {
    title: 'with-immutable-props-to-js',
    //tagline: 'Yarn Version Manager',
    // For deploy
    //cname: 'yvm.js.org',
    url: 'https://tophat.github.io',
    baseUrl: '/immutable-props/',
    projectName: 'with-immputable-props-to-js',
    organizationName: 'tophat',
    // End deploy options
    headerLinks: [
        { doc: 'overview', label: 'Docs' },
        { href: "https://github.com/tophat/with-immutable-props-to-js", label: "GitHub" },
    ],
    headerIcon: 'img/ml.png',
    footerIcon: 'img/ml.png',
    favicon: 'img/favicon.png',
    colors: {
        primaryColor: '#3471c5',
        secondaryColor: '#f9316d',
    },
    customDocsPath: 'docs',
    gaTrackingId: '',

    copyright: `Tophat Open Source`,

    highlight: {
        // Highlight.js theme to use for syntax highlighting in code blocks.
        theme: 'default',
    },

    // Add custom scripts here that would be placed in <script> tags.
    scripts: ['https://buttons.github.io/buttons.js'],
    onPageNav: 'separate', // On page navigation for the current documentation page.
    cleanUrl: true, // No .html extensions for paths.

    // Open Graph and Twitter card images.
    ogImage: 'img/ml.png',
    twitterImage: 'img/ml.png',

    // Show documentation's last contributor's name.
    enableUpdateBy: true,
}

module.exports = siteConfig
