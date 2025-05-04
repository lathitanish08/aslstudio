
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://lathitanish08.github.io/aslstudio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/aslstudio"
  },
  {
    "renderMode": 2,
    "route": "/aslstudio/Home"
  },
  {
    "renderMode": 2,
    "route": "/aslstudio/About"
  },
  {
    "renderMode": 2,
    "route": "/aslstudio/Services"
  },
  {
    "renderMode": 2,
    "route": "/aslstudio/Projects"
  },
  {
    "renderMode": 2,
    "route": "/aslstudio/Contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 40293, hash: 'dfc89ed4af3d00fc0779c8e682acd0bb484aa266516efedb55b1ccdd896b452f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 13217, hash: 'e7d5f330afb741b982f2df56c3c72569c3f049abfa66c934ace0d2fd397caf42', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Home/index.html': {size: 90174, hash: '2a288464a52f3b075851a4c56de468402885a90dc67b2ff21b8ccd4bb91dbd1d', text: () => import('./assets-chunks/Home_index_html.mjs').then(m => m.default)},
    'index.html': {size: 90174, hash: '2a288464a52f3b075851a4c56de468402885a90dc67b2ff21b8ccd4bb91dbd1d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'About/index.html': {size: 86714, hash: '825fc5750a5ab0d87cb3ab5d10f12fb2aa9724052f442c888fb2335bd27fcec8', text: () => import('./assets-chunks/About_index_html.mjs').then(m => m.default)},
    'Services/index.html': {size: 73482, hash: '47802da18d9dc7b0d33f5602de0c13f92a59d66293b608145319825bc226c858', text: () => import('./assets-chunks/Services_index_html.mjs').then(m => m.default)},
    'Projects/index.html': {size: 72798, hash: 'cfd7b950fbcbed9b0596507e5d80c1ca853f5c93c320cb915b54485e090b0694', text: () => import('./assets-chunks/Projects_index_html.mjs').then(m => m.default)},
    'Contact/index.html': {size: 70901, hash: 'ba0230b5c6548c47e0da26153303201df850885b512076654b959d8454333416', text: () => import('./assets-chunks/Contact_index_html.mjs').then(m => m.default)},
    'styles-HQVH4B3H.css': {size: 362354, hash: 'MrE8o3vpf7g', text: () => import('./assets-chunks/styles-HQVH4B3H_css.mjs').then(m => m.default)}
  },
};
