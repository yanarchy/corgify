/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */


var images = document.querySelectorAll("img");
var arrayOfImages = [
    "corgi_lobster.jpg",
    "corgishake.gif",
    "corgi_1.jpg",
    "corgi_2.jpg",
    "corgi_3.jpg",
    "corgi_4.jpg",
    "corgi_butt.jpg",
    "corgi_butt2.jpg",
    "corgi_corn.jpg",
    "corgi_puppy.jpg"
];

var longImages = [
  "corgi_puppy2.jpg",
  "longcorgibutt.jpg",
  "long_corgis.jpg"
];

for(var i = 0; i < images.length - 1; i++) {
  var index;

  if (images[i].height / images[i].width < .3 ) {
    index = Math.floor(Math.random() * longImages.length);
    images[i].src = chrome.extension.getURL(longImages[index]);
    if (images[i].srcset) images[i].srcset = chrome.extension.getURL(longImages[index]);
  } else {
    index = Math.floor(Math.random() * arrayOfImages.length);
    images[i].src = chrome.extension.getURL(arrayOfImages[index]);
    if (images[i].srcset) images[i].srcset = chrome.extension.getURL(arrayOfImages[index]);
  }
}