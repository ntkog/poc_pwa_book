importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js',
);

workbox.setConfig({
    debug: true,
});

workbox.loadModule('workbox-strategies');


  
const bgSyncPlugin = new workbox.backgroundSync.BackgroundSyncPlugin(
'myQueueName',
);

workbox.routing.registerRoute(
({url}) => url.pathname === '/example.txt',
new workbox.strategies.NetworkOnly({
    plugins: [bgSyncPlugin],
}),
);

self.skipWaiting();
workbox.core.clientsClaim();