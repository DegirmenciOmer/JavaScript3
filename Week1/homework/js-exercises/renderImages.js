/**
 * Write a function that makes a HTTP Request to https://xkcd.now.sh/?comic=latest

Inside the same file write two programs: one with XMLHttpRequest, 
and the other with axios
Each function should make a HTTP Request to the given 
endpoint: https://xkcd.now.sh/?comic=latest
Log the received data to the console
Render the img property into an <img> tag in the DOM
Incorporate error handling: log to the console the error message
 */
function renderImg(source) {
  const image = document.createElement('img');
  image.src = `${source} `;
  document.body.append(image);
  return image;
}
function getPhotos(url) {
  const xhr = new XMLHttpRequest();

  xhr.responseType = 'json';

  xhr.onload = function () {
    if (xhr.status < 400) {
      const data = xhr.response;
      renderImg(data.img);
    } else {
      console.log("HTTP Error ", xhr.status);
    }
  }
  xhr.onerror = function () {
    console.log('Something went wrong.');
  }

  xhr.open('GET', url, true);
  xhr.send();
}

getPhotos('https://xkcd.now.sh/?comic=latest');

//////////////////////// AXIOSS \\\\\\\\\\\\\\\\\\\\\\\\\\

function getPhotosUsingAxios(url) {
  axios.get(url)
    .then(function (response) {
      // handle success
      renderImg(response.data.img);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}

getPhotosUsingAxios('https://xkcd.now.sh/?comic=latest')