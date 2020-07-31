/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["LICENSE.md","21ad58e54206254c94c4130f367b17f2"],["README.md","83509db9efb6991a7305fb6ff8561c26"],["css/bootstrap.min.css","78e7f91c0c4cca415e0683626aa23925"],["css/styles.css","51850489831296b3252d1f04e129ba28"],["favicons/android-chrome-192x192.png","b96cdd22fe7e32664f616376dd191d0c"],["favicons/android-chrome-384x384.png","a88f65fb0190912201d174a0bdd654e6"],["favicons/android-icon-144x144.png","cef2ae65482cce591afeb2afd6fb33bc"],["favicons/android-icon-192x192.png","6ed478695d06b2ea43c986160136faab"],["favicons/android-icon-36x36.png","904117e09e5466c2dc729bebb22425cb"],["favicons/android-icon-48x48.png","959e4ed6b4bae5108b5cd89c63711c96"],["favicons/android-icon-72x72.png","9fbc99fb9938541fe9f3694c00b84bfb"],["favicons/android-icon-96x96.png","a3c35b25abb069b3da2c1414842943f6"],["favicons/apple-icon-114x114.png","43a8bdc078a5017ee32f7e5538b79c28"],["favicons/apple-icon-120x120.png","6a7572de3846a6f8c14a8e7706e6c798"],["favicons/apple-icon-144x144.png","cef2ae65482cce591afeb2afd6fb33bc"],["favicons/apple-icon-152x152.png","4eaab4486dd64a3bf38e7b8e399d1a1d"],["favicons/apple-icon-180x180.png","a66addcbdec2f25f83a9fe6a6895666c"],["favicons/apple-icon-57x57.png","6bb237b1528e1e5b8c6c489642a3e668"],["favicons/apple-icon-60x60.png","6ee5660642527dd1cd2db704928c5273"],["favicons/apple-icon-72x72.png","9fbc99fb9938541fe9f3694c00b84bfb"],["favicons/apple-icon-76x76.png","722f328e96a78fa1e3b93b070cd8baaa"],["favicons/apple-icon-precomposed.png","b44eab1c65119e23c386a59158de3f3d"],["favicons/apple-icon.png","b44eab1c65119e23c386a59158de3f3d"],["favicons/apple-touch-icon.png","d096f030e203db7740a57b94fd36175e"],["favicons/browserconfig.xml","1a5245beba2a795f88ef5c3088438b88"],["favicons/favicon-16x16.png","cefc2343210179819f5a050411e0f29e"],["favicons/favicon-32x32.png","637ffcac467f138ba53e864c29e1773f"],["favicons/favicon-96x96.png","a3c35b25abb069b3da2c1414842943f6"],["favicons/favicon.ico","02531a5dc97768a7f6c321757c14054d"],["favicons/manifest.json","b58fcfa7628c9205cb11a1b2c3e8f99a"],["favicons/ms-icon-144x144.png","cef2ae65482cce591afeb2afd6fb33bc"],["favicons/ms-icon-150x150.png","28fb1633d613f6fe0853f7ea3f908a7a"],["favicons/ms-icon-310x310.png","d5d2fe751a8fb2bff6585464f1720e83"],["favicons/ms-icon-70x70.png","284fcff335d2d385f258389e852fe175"],["favicons/mstile-150x150.png","bf4eed1864e5a7d4fac575bec19a9668"],["favicons/safari-pinned-tab.svg","8de8c38301a8b7112266cc89d83368ec"],["favicons/site.webmanifest","d896f3bfdeb099dbe0af98b2c2ecb5ac"],["images/background.png","8997d75c0f308c05f7f2910110973395"],["images/bitcoin.png","ed27a72c3023fd63d92895afb238fc32"],["images/dogecoin.png","275f07ef637fbd914af409155b85caa7"],["images/favicon.png","66d8db1becf9df749e1257ba30fead4f"],["images/litecoin.png","b086f5ee73169f0fbe2284852a77d243"],["images/loading.gif","af728ab084273573bb5e9d6282e72ce5"],["images/logo.png","a4bbd80a1958103c926a69df52b18732"],["images/qrloader.gif","f6e28ff66ff443599e43dcc8e86c9da1"],["images/swiftcash.png","937f432ffd09e837e8a36a21c040f4be"],["index.html","40bd9ea845cf4945dd2980db0d4bb1ae"],["js/bootstrap.min.js","281cd50dd9f58c5550620fc148a7bc39"],["js/cc.js","77d6d042de9d1251c8ed57328eba87b8"],["js/clipboard.min.js","f06c52bfddb458ad87349acf9fac06c5"],["js/cookie.js","78695e0755da857435baae96799861f1"],["js/instascan.min.js","16e3388ac1f1340311c23727c1342b46"],["js/jquery-3.5.0.min.js","12108007906290015100837a6a61e9f4"],["js/script.js","8605693e11fbc2d242b7b65a6e43d89d"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







