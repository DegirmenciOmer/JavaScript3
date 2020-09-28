/* Dog photo gallery

Let's make a randomized dog photo gallery!
Write a function that makes an API call to https://dog.ceo/api/breeds/image/random. 
It should trigger after clicking a button in your webpage. Every time the button is 
clicked it should append a new dog image to the DOM.
Create an index.html file that will display your random image
Add 2 <button> and 1 <ul> element, either in the HTML or through JavaScript
Write two versions for the button functionality: one with XMLHttpRequest, 
and the other with axios
When any one of the 2 buttons is clicked it should make an API call to https://dog.ceo/api/breeds/image/random
After receiving the data, append to the <ul> a <li> that contains an <img> element with the dog image
Incorporate error handling */

//
const dogUrl = 'https://dog.ceo/api/breeds/image/random';
const dogsImgList = document.createElement('ul');
const buttonsContainer = document.createElement('div');
const dogImgFetchBtnXHR = document.createElement('button');
document.body.appendChild(buttonsContainer);
buttonsContainer.appendChild(dogImgFetchBtnXHR);
buttonsContainer.style.position = 'fixed';
document.body.appendChild(dogsImgList);
dogImgFetchBtnXHR.textContent = 'Dog Photos via XHR!';
dogImgFetchBtnXHR.onclick = () => {
  getRandomDogPhotosUsingXHR(dogUrl);
}



/////////////////// FETCH USING XHR \\\\\\\\\\\\\\\\\\\\\\\\

function getRandomDogPhotosUsingXHR(url) {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.onload = () => {
    if (xhr.status < 400) {
      const data = xhr.response;
      dogsImgList.innerHTML += `<li><img width="255px" src="${data.message}"> </li>
            `
    }
    else {
      console.log("HTTP Error ", xhr.status);
      dogsImgList.innerHTML += `<li>Error: Request failed with status code: ${xhr.status} </li>
            `;
      dogsImgList.style.color = 'red';

    }
  }
  xhr.onerror = () => {
    console.log('Something went wrong.');
    dogsImgList.innerHTML += `<li>'Something went wrong.' </li>
            `
  }
  xhr.open('GET', url, true);
  xhr.send();
}

dogImgFetchBtnXHR.onclick = () => {
  getRandomDogPhotosUsingXHR(dogUrl);
}

//////////// FETCH USING AXIOS \\\\\\\\\\\\\\\\\

function getRandomDogPhotosUsingAxios(url) {
  axios.get(url)
    .then(function (response) {
      // handle success
      const data = response.data.message;
      dogsImgList.innerHTML += `<li><img width="255px" src="${response.data.message}"> </li>
        `
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      dogsImgList.innerHTML += `<li>${error} </li>
        `
    });
}
const dogImgFetchBtnAxios = document.createElement('button');
dogImgFetchBtnAxios.textContent = 'Dog Photos via Axios!';
buttonsContainer.appendChild(dogImgFetchBtnAxios);
dogImgFetchBtnAxios.onclick = () => {
  getRandomDogPhotosUsingAxios(dogUrl);
}
