
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/login",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/new"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JPMXC65V.js"
    ],
    "route": "/home"
  },
  {
    "renderMode": 2,
    "route": "/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/about"
  },
  {
    "renderMode": 2,
    "route": "/edit"
  },
  {
    "renderMode": 2,
    "route": "/feature"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 611, hash: 'd0322022af015c281412eba62215f211d3d92e9e67909a211a5f54b19389a5ac', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1124, hash: '754f07af7e3a7245a2e29687d121ee65fda8e6b36119d500997fb637bd14a15a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'edit/index.html': {size: 5233, hash: '5ee7af0017a1f131a61794e0787df041282a696a3730a46863b1220b9b9d1897', text: () => import('./assets-chunks/edit_index_html.mjs').then(m => m.default)},
    'new/index.html': {size: 3569, hash: 'ec722f208b04390d06c244583747aba4c2f0cb9b3fdc8399ddeb591e6937501b', text: () => import('./assets-chunks/new_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 5304, hash: '4817ac473e7d561720e444ba513704f26097fdc86ff961ade5b5032c3158d85f', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'feature/index.html': {size: 3569, hash: 'ec722f208b04390d06c244583747aba4c2f0cb9b3fdc8399ddeb591e6937501b', text: () => import('./assets-chunks/feature_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 5212, hash: '06f12026886e523fb3d840b916a0aa9834efb93e39e6e306ed99ece0954c1dc4', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 8885, hash: '613b4fb12eb869c25e1b7f747732b74759430b2fb87015f31ff8f2cfa0a7fde3', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
