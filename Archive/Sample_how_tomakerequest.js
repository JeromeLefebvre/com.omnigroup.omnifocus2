// ATTEMPT 4

const URLroot = "https://api.track.toggl.com/api/v8";
const workspaceID = "4996675";
const api_token = "16563ec028a7c4bd1a851f2b0f1f911b";
const credentials = "Basic " + Data.fromString(api_token + ":" + "api_token").toBase64();
const baseHeaders = { "Authorization": credentials }

async function getClientID(withName) {
    const getClientsRequest = URL.FetchRequest.fromString(URLroot + "/clients")
    getClientsRequest.headers = baseHeaders
    getClientsRequest.method = 'GET'
    const response = await getClientsRequest.fetch()
    const clients = JSON.parse(response.bodyString)
    const client = clients.filter(client => client.name == withClientName)[0]
    if (client)
        return client.id
    throw new Error("no such client");
}


async function createProject(withClientID, projectName) {
    const createProjectRequest = URL.FetchRequest.fromString(URLroot + "/projects")
    createProjectRequest.headers = baseHeaders
    createProjectRequest.method = 'POST'
    createProjectRequest.headers["Content-Type"] = "application/json"
    const project = {
        "project": {
            "name": projectName,
            "wid": workspaceID,
            "cid": withClientID
        }
    }
    createProjectRequest.bodyString = JSON.stringify(project)
    await createProjectRequest.fetch();
}

async function createClient(withName) {
    const createClientRequest = URL.FetchRequest.fromString(URLroot + "/projects")
    createClientRequest.headers = baseHeaders
    createClientRequest.method = 'POST'
    createClientRequest.headers["Content-Type"] = "application/json"
    const client= {
        "client": {
            "name": withName,
            "wid": workspaceID
        }
    }
    createClientRequest.bodyString = JSON.stringify(client)
    await createClientRequest.fetch()
}

customerName = "TEST21"
projectName = "New aysnc project"
(async () => {
    console.log("attemp");
    try {
        const id = getClientID("customerName")
        console.log(id);
        createProject(id, projectName)
    } catch (err) {console.log("Error: " + err.message)} 
})();

async () => {
    try {
        const id = createClient("customerName")
        createProject(id, projectName)
    } catch {}
}



/// ATTEMPT 3

const URLroot = "https://api.track.toggl.com/api/v8";
const workspaceID = "4996675";

function getCredentials() {
    const api_token = "16563ec028a7c4bd1a851f2b0f1f911b";
    const credentials = Data.fromString(api_token + ":" + "api_token");
    return "Basic " + credentials.toBase64();
}
const credentials = getCredentials();



function createClient(withName) {
    const createProjectRequest = URL.FetchRequest.fromString(URLroot + "/client");
    createProjectRequest.headers = {
        "Authorization": credentials,
        "Content-Type": "application/json"
    }
    const client_json = {
        "client": {
            "name": withName,
            "wid": workspaceID
        }
    }
    createProjectRequest.method = 'POST'
    createProjectRequest.bodyString = JSON.stringify(project)
    
    return createProjectRequest.fetch().then(response => {
        const clients = JSON.parse(response.bodyString);
        const client = clients.filter(client => client.name == withClientName)[0];
        if (client) {
            return client.id;
        }
        else {
            throw new Error("no such client");
        }
    });
}

function fetchClientID(withClientName) {
    const getClientsRequest = URL.FetchRequest.fromString(URLroot + "/clients");
    getClientsRequest.headers = { "Authorization": credentials }
    getClientsRequest.method = 'GET'
    return getClientsRequest.fetch().then(response => {
        const clients = JSON.parse(response.bodyString);
        const client = clients.filter(client => client.name == withClientName)[0];
        if (client) {
            return client.id;
        }
        else {
            throw new Error("no such client");
        }
    });
}

fetchClientID("fdlksajflad").then(id => createProject(id, "My new project3"));
createClientWithName("dlajkfls").then(id => createProject(id, "My new project3"));






const getClientPromise = fetchClients();

clientName = "SDI";
getClientPromise.then(response => {
    var responseCode = response.statusCode;
    if (responseCode == 200) {
        const clients = JSON.parse(response.bodyString);
        const client = clients.filter(client => client.name == clientName)[0];
        if (client) {
            return client.id;
        }
    }
    else {
        new Alert(String(responseCode), "An error occurred.").show()
        console.error(JSON.stringify(response.headers))
    }
}).then(id => {

    console.log(id)
}
);



function createProject(clientName, projectName) {
    const credentials = getCredentials();
    const URLroot = "https://api.track.toggl.com/api/v8";
    const workspaceID = "4996675";

    const createProjectRequest = URL.FetchRequest.fromString(URLroot + "/projects");

    createProjectRequest.headers = {
        "Authorization": credentials,
        "Content-Type": "application/json"
    }

    var project = {
        "project":
        {
            "name": "An awesome project",
            "wid": workspaceID,
            "cid": 0
        }
    }

    const getClientsRequest = URL.FetchRequest.fromString(URLroot + "/clients");
    getClientsRequest.headers = { "Authorization": credentials }
    getClientsRequest.method = 'GET'
    const getClientPromise = getClientsRequest.fetch();
    getClientPromise.then(response => {
        var responseCode = response.statusCode;
        if (responseCode == 200) {
            const clients = JSON.parse(response.bodyString);
            const id = clients.filter(client => client.name == clientName)[0].id;
            if (id) {
                console.log("Customer exists");
            }
        }
        else {
            new Alert(String(responseCode), "An error occurred.").show()
            console.error(JSON.stringify(response.headers))
        }
    });

    var withname = "TME999fdasfdas"
    var createClientsRequest = URL.FetchRequest.fromString(URLroot + "/clients");
    createClientsRequest.headers = {
        "Authorization": credentials}
    createClientRequest.headers["Content-Type"] = "application/json";

    var client_json = {
        "client": {
            "name": withname,
            "wid": workspaceID
        }
    }
    createClientsRequest.bodyString = JSON.stringify(client_json)
    createClientsRequest.method = 'POST'
    createClientsRequest.fetch().then( response => console.log(response.bodyString));


    var createClientPromise = createClientsRequest.fetch();
    

    createClientPromise.then(response => {
        console.log(response.json())
        var responseCode = response.statusCode;
        if (responseCode == 200) {
            const client = JSON.parse(response.bodyString);
            const id = client.data.id;
            if (id) {
                project.project.id = id;

                createClientPromise.then(response => {

                });

                console.log("Customer was now created");
            }
        }
        else if (responseCode == 400) {
            // do nothing
        }
        else {
            console.log(response.bodyString);
            new Alert(String(responseCode), "An error occurred.").show();
            console.log("customer exists or error");
            console.error(JSON.stringify(response.headers))
        }
    });
}

function getClientID(clientName) {
    // Creates a client with such name if it doesn't exist
    const URLroot = "https://api.track.toggl.com/api/v8";
    const workspace_ID = "4996675";

    // Assumes it doesn't exists and attempt to create it, if it does get id
    // or checks if exists then create if it doesn't


}
// create a client
var clientName = "TME" + getRandomInt(1, 100);

var URLroot = "https://api.track.toggl.com/api/v8";
var workspace_ID = "4996675";
var request = URL.Fetch

var client_json = {
    "client": {
        "name": clientName,
        "wid": workspace_ID
    }
}
var targetURLString = URLroot + "/clients";
var request = URL.FetchRequest.fromString(targetURLString)

var api_token = "16563ec028a7c4bd1a851f2b0f1f911b";
var data = Data.fromString(api_token + ":" + "api_token")
var credentials = "Basic " + data.toBase64()

request.headers = {
    "Content-Type": "application/json",
    "Authorization": credentials
}
request.method = 'POST'
request.bodyString = JSON.stringify(client_json)
var requestPromise = request.fetch()

var DATA = "";
requestPromise.then(response => {
    var responseCode = response.statusCode;
    if (responseCode == 200) {
        var data_json = JSON.parse(response.bodyString);
        DATA = response.bodyString;
        var id = data_json.data.id;
    } else {
        //new Alert(String(responseCode), "An error occurred.").show()
        console.error(JSON.stringify(response.headers))
    }
})