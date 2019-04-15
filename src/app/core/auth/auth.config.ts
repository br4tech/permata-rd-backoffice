import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '../../../environments/environment';

export const authConfig: AuthConfig = {

    issuer: environment.base_url_login,
    clientId: environment.cliente_id,
    postLogoutRedirectUri: environment.base_url_postback,
    redirectUri: window.location.origin + "/login-callback",
    scope:"openid profile email",
    oidc: true,
    skipIssuerCheck: true,
}