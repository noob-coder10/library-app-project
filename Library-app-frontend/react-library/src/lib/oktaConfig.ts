export const oktaConfig = {
    clientId: '$$$$$$',
    issuer: 'https://$$$$$$/oauth2/default',
    redirectUri: window.location.origin + '/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpCheck: true,
}