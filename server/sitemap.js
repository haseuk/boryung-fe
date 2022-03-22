const sitemap = require('fs').readFileSync('./server/sitemap.xml', 'utf-8');

module.exports = (req, res) => {
  const urlsEx = /<urlset[^>]*>([\s\S]*)<\/urlset>/gi;
  let nodes = urlsEx.exec(sitemap)[1];
  const shell = sitemap.replace(nodes, '{{nodes}}');
  if (~nodes.indexOf('{lang}')) nodes = ['en','ko','zh','ja'].map(lang => nodes.replace(/{lang}/g, lang )).join('');
  res.end(shell.replace('{{nodes}}', nodes));
}
