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
    const createClientRequest = URL.FetchRequest.fromString(`${baseURL}/${withName}/issues`);

    createClientRequest.method = 'Get'

    return createClientRequest.fetch().then(response => {
        const issues = JSON.parse(response.bodyString);
        return issues
    });
}
getIssuesForRepo()