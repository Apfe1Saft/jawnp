import Cookies from 'js-cookie';
import * as jwt_decode from 'jwt-decode';

export function getSessionData() {
    const token = Cookies.get('session');
    if (token) {
        try {
            const data = jwt_decode(token);
            return data;
        } catch (error) {
            console.error('Invalid token:', error);
            return null;
        }
    }
    return null;
}