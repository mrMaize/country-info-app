import { requestTypes } from "./config";

function get(type, req) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open(type, req, true);
    request.onload = () => {
      if (request.status >= 200 && request.status < 300) {
        if (request.response) {
          resolve(JSON.parse(request.response));
        } else {
          resolve();
        }
      } else {
        let response = request.response;

        try {
          response = JSON.parse(request.response);
        } catch (e) {}

        reject(response);
      }
    };

    request.onerror = error => {
      reject(error);
    };

    request.send();
  });
}

export function sendRequest(type, params) {
  switch (type) {
    case requestTypes.DELETE:
    case requestTypes.GET:
      return get(type, params.url);
    case requestTypes.PUT:
    case requestTypes.POST:
    default:
      return new Error();
  }
}
