// scripts/generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

// Define your base URL and paths
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/AccountingAdvisory', changefreq: 'monthly', priority: 0.7 },
  { url: '/contactMe', changefreq: 'monthly', priority: 0.7 },
  // Add more routes here
];

const sitemapStream = new SitemapStream({ hostname: 'https://www.onlinetaxrefundtoday.com.au' });

streamToPromise(sitemapStream)
  .then(data => {
    createWriteStream('public/sitemap.xml').write(data.toString());
    console.log('✅ Sitemap generated at public/sitemap.xml');
  })
  .catch(err => {
    console.error('❌ Error generating sitemap:', err);
  });

// Write links to stream
links.forEach(link => sitemapStream.write(link));
sitemapStream.end();
