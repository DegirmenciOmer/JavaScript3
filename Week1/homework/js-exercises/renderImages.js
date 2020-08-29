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

function getPhotos(url) { 
    const xhr = new XMLHttpRequest();
       
    xhr.responseType = 'json';
    
    xhr.onload = function () {
      if(xhr.status < 400){
        const data = xhr.response;
        const image = document.createElement('img');
        image.src = `${data.img} `;
        document.body.append(image);

      }else {
        console.log("HTTP Error ", xhr.status);
      }
    }
    xhr.onerror = function() {
      console.log('Something went wrong.');
    }

    xhr.open('GET', url, true);
    xhr.send();
}

getPhotos('https://xkcd.now.sh/?comic=latest');

//////////////////////// AXIOSS \\\\\\\\\\\\\\\\\\\\\\\\\\

function getPhotosUsingAxios(url) {axios.get(url)
    .then(function (response) {
      // handle success
      const image = document.createElement('img');
      image.src = `${response.data.img} `;
      document.body.append(image);
  })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
  }
  
  getPhotosUsingAxios('https://xkcd.now.sh/?comic=latest')