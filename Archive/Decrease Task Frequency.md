/*{
    "author": "Jerome Lefebvre",
    "targets": ["omnifocus"],
    "type": "action",
    "identifier": "com.mycompany.Increase",
    "version": "0.2",
    "description": "Decrease the frequency of repeated task",
    "label": "Decrease Frequency",
    "mediumLabel": "Decrease Frequency",
    "paletteLabel": "Decrease Frequency",
    "actions": [{
        "identifier": "myFirstAction",
        "image": "icon-filled-blue@2x.png"
        }
     ]
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
                const newInterval = Math.ceil(oldInterval*1.1);
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
