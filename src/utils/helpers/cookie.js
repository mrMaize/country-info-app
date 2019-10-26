export function setCookie(name, value, options) {
  options = options || {};

  let expires = options.expires;

  if (typeof expires === "number" && expires) {
    const date = new Date();
    date.setTime(date.getTime() + expires * 1000);
    expires = options.expires = date;
  }

  if (expires && expires.toUTCString) {
    options.expires = expires.toUTCString();
  }

  let updatedCookie = name + "=" + value;

  for (let propName in options) {
    updatedCookie += "; " + propName;
    let propValue = options[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }

  document.cookie = updatedCookie;
}

export function getCookie(login) {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        login.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? matches[1] : undefined;
}
