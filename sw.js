if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").then(
      (registration) => {
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      (err) => {
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}

const CACHE_NAME = "my-wev-v0";
const urlsToCache = [
  "./",
  "./images/icon-16.png",
  "./images/icon-32.png",
  "./images/icon-48.png",
  "./images/icon-128.png",
  "./images/icon-144.png",
  "./manifest.json",
  "./index.html",
  "./sw.js",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});
