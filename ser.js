var cachename= "pwa";
var filescache=[
  '/',
  '/index.html'
]
self.addEventListener('install',function(e){
  console.log("installed succesfully..!");
  e.waitUntil(
    caches.open(acchename).then(function(ca){
      console.log("catching files from cache");
      return ca.addAll(filescache);
    })
  )
})
self.addEventListener('activite',function(e){
  console.log("activated succesfully..!");
})
self.addEventListener('fetch',function(e){
  console.log("fetched succesfully..!");
})
