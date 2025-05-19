
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
    "preload": [
      "chunk-ZPP6K7EN.js"
    ],
    "route": "/aslstudio/Home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-H76RCAM3.js"
    ],
    "route": "/aslstudio/About"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-O7FMVWCZ.js"
    ],
    "route": "/aslstudio/Services"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-22VMJHSH.js"
    ],
    "route": "/aslstudio/Projects"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-6NIBTLH3.js"
    ],
    "route": "/aslstudio/Contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EF4SF2VL.js"
    ],
    "route": "/aslstudio/ProjectDetails"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 44654, hash: 'f71e768f70df462c78e0f47a10aafb9c09f10f80702fd121ec0114bbfc1ff6c5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 13370, hash: 'aaada9235ab353970d4f17843cee503554f195631465db70a8383afc00b53236', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'Home/index.html': {size: 98964, hash: '0f9cfcf4c5f612cc69fcb029c88f5de76d1b5721dc41d78230c799303b4c0747', text: () => import('./assets-chunks/Home_index_html.mjs').then(m => m.default)},
    'index.html': {size: 98911, hash: '18419509b3648a07d44eda06ab14ce7c7c2aa7ce4cf7d870f85b62ffb62c9e48', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'Services/index.html': {size: 83302, hash: '8fdb3e461f147021ce000b4cb489388bf4808031740ad96ebdcca0d0a7253304', text: () => import('./assets-chunks/Services_index_html.mjs').then(m => m.default)},
    'About/index.html': {size: 96567, hash: 'a8b2a4d8be61e8f453ec17267d8a83a8b5f70e534a921ae239b925d6241ff069', text: () => import('./assets-chunks/About_index_html.mjs').then(m => m.default)},
    'Projects/index.html': {size: 82611, hash: '3f383054b866ae41ca3256af48e06cde2615cd4772460fa211d9c1513446a8a1', text: () => import('./assets-chunks/Projects_index_html.mjs').then(m => m.default)},
    'Contact/index.html': {size: 80140, hash: 'c844bf9d5d5fd1c7a1af82e6c4f4f06ae5aacc7abec231539564551d87d48b80', text: () => import('./assets-chunks/Contact_index_html.mjs').then(m => m.default)},
    'ProjectDetails/index.html': {size: 82013, hash: '63940ab716fa1b87359d27578426ca62855dde03433c8c462038303af103dac5', text: () => import('./assets-chunks/ProjectDetails_index_html.mjs').then(m => m.default)},
    'styles-SFTP7JRD.css': {size: 873843, hash: 'ngN+DZxA2Fw', text: () => import('./assets-chunks/styles-SFTP7JRD_css.mjs').then(m => m.default)}
  },
};
