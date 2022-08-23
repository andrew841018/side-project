import { TIMEOUT_SEC } from './config.js';
const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};
export const getJSON = async function (url) {
  try {
    //(1)loading recipe
    const fetchUrl = fetch(url);
    const res = await Promise.race([fetchUrl, timeout(TIMEOUT_SEC)]);
    const data = res.json();
    if (!res.ok) {
      //data.message->error message
      //res.status->error code number
      throw new Error(`${data.message}  ${res.status}`);
    }
    return data;
  } catch (err) {
    //so we can catch this error in model.js=>we will know where the bug is.
    console.log(`(helper.js)${err}`);
    throw err;
  }
};
