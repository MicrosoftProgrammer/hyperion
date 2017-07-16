import HttpHelper from '../utils/httpHelper'

class ProjectAPI {
    static async fetchProjects(token) {
        let url = 'http://localhost:8080/api/projects/';

        let headers = {
            'Accept': 'application/json',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        }
        return await HttpHelper.httpRequest('GET', url, headers);
    }
}

export default ProjectAPI;  