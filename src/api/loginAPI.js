import HttpHelper from '../utils/httpHelper'

class LoginAPI {
    static async loginUser(token) {
        let url = '/Users/GetUserDetails';

        let headers = {
            'Accept': 'application/json',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        }
        return await HttpHelper.httpRequest('GET', url, headers);
    }
}

export default LoginAPI;  