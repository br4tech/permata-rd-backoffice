import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {

    issuer: 'https://permataidentity.azurewebsites.net/',
    clientId: 'angularoidc',
    postLogoutRedirectUri: 'http://permata.com.br/login-callback',
    redirectUri: window.location.origin + "/login-callback",
    scope:"openid profile email",
    oidc: true,
    skipIssuerCheck: true,
}