'use strict'

const URLroot = "https://api.track.toggl.com/api/v8"
const workspaceID = 4996675
const api_token = "16563ec028a7c4bd1a851f2b0f1f911b";
const credentials = "Basic " + Data.fromString(api_token + ":" + "api_token").toBase64()

function getClientID(withtName) {
    'use strict'
    a = 1;
    const getClientsRequest = URL.FetchRequest.fromString(URLroot + "/clients");
    getClientsRequest.headers = {"Authorization": credentials}
    getClientsRequest.method = 'GET'
    return getClientsRequest.fetch().then(response => {
        const clients = JSON.parse(response.bodyString);
        const client = clients.filter(client => client.name == withtName)[0];
        if (client)
            return client.id;
        throw new Error("no such client");
    });
}

function createClient(withName) {
    'use strict'
    const createClientRequest = URL.FetchRequest.fromString(URLroot + "/clients");
    createClientRequest.headers = {
        "Authorization": credentials,
        "Content-Type": "application/json"
    }
    var client = {
        "client": {
            "name": withName,
            "wid": workspaceID
        }
    }
    createClientRequest.bodyString = JSON.stringify(client)
    createClientRequest.method = 'POST'
    console.log(createClientRequest.url);
    console.log(createClientRequest.bodyString);

    return createClientRequest.fetch().then(response => {
        const responseCode = response.statusCode;
        if (responseCode == 200) {
            const client = JSON.parse(response.bodyString);
            return client.id;        
        }
        console.log(responseCode);
        console.log(response.bodyString);
        console.log("Client already exists");
        throw new Error("Client already exists");
    });
}

async function createProject(withClientID, projectName) {
    'use strict'
    const createProjectRequest = URL.FetchRequest.fromString(URLroot + "/projects")
    createProjectRequest.method = 'POST'
    createProjectRequest.headers = {
        "Authorization": credentials,
        "Content-Type": "application/json"
    }
    const project = {
        "project": {
            "name": projectName,
            "wid": workspaceID,
            "cid": withClientID
        }
    }
    createProjectRequest.bodyString = JSON.stringify(project)
    return createProjectRequest.fetch().then(response => {
        console.log(response.bodyString)
    });
}

function createToggl(customer, project) {
    getClientID(customer).then(id => createProject(id, project));
    createClient(customer).then(id => createProject(id, project));    
}
