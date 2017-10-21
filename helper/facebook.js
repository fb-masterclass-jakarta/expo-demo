import { Facebook } from 'expo';
import config from '../config/facebook.json';
import qs from 'qs';

let currentToken = '';

export default async function login() {
  const facebookResponse = await Facebook.logInWithReadPermissionsAsync(
    config.appId,
    { permissions: config.loginPermission }
  );
  const { type, token } = facebookResponse;
  currentToken = token;

  if (type === 'success') {
    let param = {
      access_token: token,
      fields: 'id,name,email'
    };
    let url = 'https://graph.facebook.com/me?' + qs.stringify(param);

    const response = await fetch(url);

    return response.json();
  } else {
    throw new Error({
      facebookResponse,
      message: 'Facebook Error'
    });
  }
}

export function getPictureUrl() {
  let param = {
    access_token: currentToken,
  };
  let url = 'https://graph.facebook.com/me/picture?' + qs.stringify(param);

  return url;
}
