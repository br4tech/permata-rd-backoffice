import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '../../../environments/environment';

export const authConfig: AuthConfig = {

    issuer: environment.base_url_login,
    clientId: environment.cliente_id,
    postLogoutRedirectUri: environment.base_url_postback,
    redirectUri: window.location.origin + "/login-callback",
    scope:"openid profile email",
<<<<<<< HEAD
    oidc: true   ,
=======
    oidc: true,
>>>>>>> c9091f1a20701af36d82573d9697c4cb1b198e3b
    skipIssuerCheck: true,
}