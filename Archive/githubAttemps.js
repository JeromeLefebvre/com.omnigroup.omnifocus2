const githubFolder = foldersMatching("GitHub")[0]

githubFolder.projects.forEach(project => {
    const issues = getIssuesForRepo(project.name).then(
        issues =>
            issues.forEach(issue => {
                console.info(issue.title)
                if (!project.taskNamed(issue.title)) {
                    const task = new Task(issue.title, project)
                    task.note = issue.url
                }
            })
    )
})

function getIssuesForRepo(withName) {
    const baseURL = "https://api.github.com/repos/JeromeLefebvre"

    console.info(`${baseURL}/${withName}/issues`)
    var createClientRequest = URL.FetchRequest.fromString(`${baseURL}/${withName}/issues`);

    //createClientRequest.method = 'Get'

    return createClientRequest.fetch().then(response => {
        const issues = JSON.parse(response.bodyString);
        return issues
    });
}
getIssuesForRepo("com.omnigroup.omnifocus3")

const buildErrorObject = (r) => ({
    statusCode: r.statusCode,
    data: r.bodyString,
});

async function syncIssues(withProject) {
    const fetchRequest = new URL.FetchRequest();
    const baseURL = "https://api.github.com/repos/JeromeLefebvre";
    console.info(`${baseURL}/${withProject}/issues`);
    fetchRequest.url = URL.fromString(
        `${baseURL}/${withProject.name}/issues`
    );
    const r = await fetchRequest.fetch();
    
    console.info(r);
    if (r.statusCode !== 200) {
        throw buildErrorObject(r);
    }

    const issues = JSON.parse(r.bodyString).data;
    console.info(issues);

    issues.forEach(issue => {
        console.info(issue.title);
    })
    return "a";
}
const dataa = await syncIssues("com.omnigroup.omnifocus3");



async function syncIssues(withProject) {
    const fetchRequest = new URL.FetchRequest();
    const baseURL = "https://api.github.com/repos/JeromeLefebvre";
    await "a";
}

var f = await syncIssues("com.omnigroup.omnifocus3");



async function syncIssues(withProject) {
    const fetchRequest = new URL.FetchRequest();
    const baseURL = "https://api.github.com/repos/JeromeLefebvre"
    console.info(`${baseURL}/${withProject.name}/issues`)
    fetchRequest.url = URL.fromString(
        `${baseURL}/${withProject.name}/issues`
    );
    fetchRequest.fetch().then(response => {
        console.info(response.statusCode)
        console.info(response.bodyString);
        const issues = JSON.parse(response.bodyString).data;
        console.info(issues);
    });
}
syncIssues(g)


/*
dependencyLibrary.getCurrentTogglTimer = async function getCurrentTogglTimer() {
    const fetchRequest = new URL.FetchRequest();

    fetchRequest.method = 'GET';
    fetchRequest.headers = {
      Authorization: AuthHeader,
      'Content-Type': 'application/json',
    };
    fetchRequest.url = URL.fromString(
      `${BASE_URL}time_entries/current`,
    );
    const r = await fetchRequest.fetch();

    if (r.statusCode !== 200) {
      throw buildErrorObject(r);
    }

    return JSON.parse(r.bodyString).data;
  };

*/