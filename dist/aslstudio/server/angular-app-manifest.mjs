
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
  },
  {
    "renderMode": 2,
    "route": "/aslstudio/ProjectDetails"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 40293, hash: '5b099ba2d0c056cebfe56b399458059cc05105c1dce91b302343468861d33c80', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 13217, hash: 'd2f372fa6f1a2ca5b0db329c72d49cd465f9f70482a144c4129ab8a7dcce2f42', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Home/index.html': {size: 90242, hash: 'd46c0079b9fbe9d319739c4ff8126c23f473211a15d16dbf020c81c9db094928', text: () => import('./assets-chunks/Home_index_html.mjs').then(m => m.default)},
    'About/index.html': {size: 86709, hash: '5bc0bdd47ef676d1945145f11b57f6a10a3f078bb43186fbf299642466204149', text: () => import('./assets-chunks/About_index_html.mjs').then(m => m.default)},
    'Services/index.html': {size: 73482, hash: '94b769b69b6df6e4286fd4d56ce57b49c3d2bff0aab343fc30392336f634472a', text: () => import('./assets-chunks/Services_index_html.mjs').then(m => m.default)},
    'Projects/index.html': {size: 72746, hash: '8a0600a5c0567850114ba04e08f0dba6f61ef9bd35b69baa8447eacacb703a35', text: () => import('./assets-chunks/Projects_index_html.mjs').then(m => m.default)},
    'Contact/index.html': {size: 70901, hash: '6a5e1b25d80a1320c6d3e4d64c44c486b3e8ae204424755b97706debaecdb459', text: () => import('./assets-chunks/Contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 90242, hash: 'd46c0079b9fbe9d319739c4ff8126c23f473211a15d16dbf020c81c9db094928', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'ProjectDetails/index.html': {size: 72157, hash: '0584376b8ffdb5f219b6f0fd013c2697dc78adf5f10bcf60dfe04b658f730454', text: () => import('./assets-chunks/ProjectDetails_index_html.mjs').then(m => m.default)},
    'styles-HQVH4B3H.css': {size: 362354, hash: 'MrE8o3vpf7g', text: () => import('./assets-chunks/styles-HQVH4B3H_css.mjs').then(m => m.default)}
  },
};
