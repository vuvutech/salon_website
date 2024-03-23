/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.elsiehairsalon.co.za",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  priority: 0.7,
  changefreq: "weekly",
  exclude: ['/gallery', '/career', '/booking', '/api'],
  generateIndexSitemap: false
};

