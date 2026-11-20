self.addEventListener('install',function(e){self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim())});
self.addEventListener('fetch',function(e){
  if(e.request.mode==='navigate'){
    e.respondWith(fetch(e.request).catch(function(){
      return new Response('<meta name="viewport" content="width=device-width,initial-scale=1"><body style="font-family:sans-serif;padding:40px;text-align:center"><h3>No internet</h3><p>Connect to the internet and open the app again.</p>',{headers:{'Content-Type':'text/html'}});
    }));
  }
});
