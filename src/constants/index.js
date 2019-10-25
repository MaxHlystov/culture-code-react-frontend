
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://culture-code-backend.herokuapp.com'; //'http://localhost:8080'
export const OAUTH2_REDIRECT_URI = process.env.REACT_APP_OAUTH2_REDIRECT_URI || 'http://localhost:3000/oauth2/redirect'; //'https://culture-code-frontend.herokuapp.com/'


console.log("API_BASE_URL " + API_BASE_URL);
console.log("API_BASE_URL " + OAUTH2_REDIRECT_URI);


export const GOOGLE_AUTH_URL = API_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const GITHUB_AUTH_URL = API_BASE_URL + '/oauth2/authorize/github?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const ACCESS_TOKEN = 'accessToken';