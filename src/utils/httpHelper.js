import $ from 'jquery';
class HttpHelper {
    static async httpRequest(methodType, url, headers, body) {
        let object = {
            method: methodType,
            headers: headers
        };

        if (body !== undefined) {
            object = {
                method: methodType,
                headers: headers,
                body: body
            };
        }
        const response = await fetch(url, object);
        if (response.status === 200 || response.status === 201) {
            return response.json();
        }
        else {
            $("#loader").hide();
            if (response.status === 500) {
                console.log(response.status + " : " + response.statusText);
            }
            else {
                console.log(response.Code + " : " + response.Message);
            }
        }
    }
}

export default HttpHelper;
