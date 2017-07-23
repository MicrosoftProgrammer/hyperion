import HttpHelper from '../utils/httpHelper'

class ProjectAPI {
    static async fetchProjects(token) {
        let url = 'http://localhost:8080/api/projects/';

        let headers = {
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        }
        return await HttpHelper.httpRequest('GET', url, headers);
    }

    static async updateProject(token, project) {
        let url = 'http://localhost:8080/api/projects/update';

        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        }

        return await HttpHelper.httpRequest('POST', url, headers, JSON.stringify(project));
    }

    static async addProject(token, project) {
        let url = 'http://localhost:8080/api/projects/add';

        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        }

        return await HttpHelper.httpRequest('POST', url, headers, project);
    }
}

export default ProjectAPI;  