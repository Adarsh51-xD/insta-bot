const fetch = require('node-fetch');

const clientId = 'YOUR_CLIENT_ID';
const clientSecret = 'YOUR_CLIENT_SECRET';
const redirectUri = 'YOUR_REDIRECT_URI';
const authorizationCode = 'AUTHORIZATION_CODE';

const tokenEndpoint = 'https://api.instagram.com/oauth/access_token';

const response = await fetch(tokenEndpoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: 'authorization_code',
    redirect_uri: redirectUri,
    code: authorizationCode,
  }),
});

const responseData = await response.json();
const accessToken = responseData.access_token;

console.log('Access Token:', accessToken);
