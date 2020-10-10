/*{
    "author": "Jerome Lefebvre",
    "targets": ["omnifocus"],
    "type": "action",
    "identifier": "com.mycompany.test",
    "version": "0.2",
    "description": "Increase the frequency of the selected repetable tasks",
    "label": "Increase Frequency",
    "mediumLabel": "Increase tasks frequency",
    "paletteLabel": "Increase tasks frequency"
}*/
(() => {
    var action = new PlugIn.Action(function(selection) {
        selection.tasks.forEach(task => {
            const oldRuleString = task.repetitionRule.ruleString;
            const repetitionMethod = task.repetitionRule.method;
            var newRuleString = "";
            if (oldRuleString.indexOf("INTERVAL") > -1) {
                const indexOfLastEqual = oldRuleString.lastIndexOf('=');
                const oldInterval = oldRuleString.substring(indexOfLastEqual + 1);
                const newInterval = Math.floor(oldInterval*0.9);
                newRuleString = oldRuleString.replace(oldInterval, newInterval);
            }
            else {
                newRuleString = "FREQ=HOURLY;INTERVAL=2"
            }
            const newRule = new Task.RepetitionRule(newRuleString, repetitionMethod);
            task.repetitionRule = newRule;
            task.markComplete();
        });
    });

    action.validate = function(selection){
        // Only works if all selected tasks are repeatable tasks
        return selection.tasks.every(x => null !== x.repetitionRule);
    };
    return action;
})();
