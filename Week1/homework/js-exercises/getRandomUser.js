//>>>>>>>>>>>>>>>>>>>>>>>> Function using XHR <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function fetchFriendDataUsingXhr(url) {
  const xhr = new XMLHttpRequest();

  xhr.responseType = 'json';

  xhr.onload = function () {
    if (xhr.status < 400) {
      const friendData = xhr.response;
      console.log(friendData.results[0].name.first, friendData.results[0].name.last);

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

const buttonforXHR = document.createElement('button');
// document.body.append(buttonsContainer);
const axiosButton = document.createElement('button');

buttonsContainer.appendChild(buttonforXHR);
buttonsContainer.appendChild(axiosButton);
buttonforXHR.textContent = 'Click me for random users via XHR!'
buttonforXHR.onclick = () => {
  fetchFriendDataUsingXhr('https://www.randomuser.me/api');
}

//>>>>>>>>>>>>>>>>>>>>>>>> Function using Axios <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

function fetchFriendDataUsingAxios(url) {
  axios.get(url)
    .then(function (response) {
      // handle success
      console.log(response.data.results[0].name.first, response.data.results[0].name.last);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}


axiosButton.textContent = 'Click me for random users via Axios!'
axiosButton.onclick = () => {
  fetchFriendDataUsingAxios('https://www.randomuser.me/api');
}

