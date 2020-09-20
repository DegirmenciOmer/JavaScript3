function fetchData(url) {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 400) {
        resolve(xhr.response);
      } else {
        reject(new Error(`HTTP error status code: ${xhr.status}`));
      }
    };
    xhr.onerror = () => {
      reject(new Error("Network error"));
    };

    xhr.open("GET", url);
    xhr.send();
  });
  return promise;
}
