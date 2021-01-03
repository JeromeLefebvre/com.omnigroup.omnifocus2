/*{
    "type": "action",
    "targets": ["omnifocus"],
    "author": "Jerome Lefebvre",
    "identifier": "com.jpl.newPISquare",
    "version": "0.1",
    "description": "Create a new PI Square Article",
    "label": "New PI Square Project",
    "shortLabel": "PI Square Project"
}*/
(() => {
    var action = new PlugIn.Action(function (selection) {

        var inputForm = new Form()
        var topicField = new Form.Field.String(
            "topic",
            "Topic",
            "article about.."
        )
        inputForm.addField(topicField)

        formPrompt = "New PI Square article";
        formPromise = inputForm.show(formPrompt, "Continue")

        formPromise.then(function (formObject) {
            console.log("New project will be created");

            projectName = "PI Square " + formObject.values["topic"];
            const osiFolder = folderNamed("OSIsoft").folderNamed("OSIsoft");

            var project = new Project(projectName, osiFolder)
            const tag = tagNamed("Office");
            project.addTag(tag);

            project.status = Project.Status.Active
            project.sequential = true

            const tasksName = ["Create VS project", "Write article", "Ask for a reviewer"];

            tasksName.forEach(task => {
                new Task(task, project)
            });
            document.windows[0].perspective = Perspective.BuiltIn.Projects
            document.windows[0].selectObjects([project])
        });

    });
    return action;
})();
