const regex = /^(?:.*)> (:[\S]*)/;
const regexCommand = `$1`;
let text = event.text.getString();
let outputselhelp = text.replace(regex, regexCommand);

context.releaseLock();

switch (outputselhelp) {
    case ":selhelp":
        if (!GlobalVars.getObject("LockSelHelp")) {
            GlobalVars.putObject("LockSelHelp", context);
            context.releaseLock();
            Time.sleep(1000);
            Chat.say("->:sel pos1 <x> <y> <z> - sets coords for first point of selection");
            Time.sleep(3000);
            Chat.say("->:sel pos2 <x> <y> <z> - sets coords for second point of selection");
            Time.sleep(3000);
            Chat.say("->It's possible to make multiple selection boxes");
            Time.sleep(3000);
            Chat.say("->:sel clear - clears all selections");
            Time.sleep(3000);
            Chat.say("->:sel cleararea - mines all blocks in selection");
            Time.sleep(3000);
            Chat.say("->:sel fill <block_name> - fills selection with specified block");
            Time.sleep(3000);
            Chat.say("->:sel walls <block_name> - builds walls around the selection");
            Time.sleep(3000);
            Chat.say("->:sel shell <block_name> - same as walls including floor and roof");
            Time.sleep(3000);
            Chat.say("->:sel replace <block_name1> <block_name2> - replaces blocks in selection with different blocks");
            GlobalVars.remove("LockSelHelp");
        }
        break;

    case ":stop":
        GlobalVars.getObject("LockSelHelp")?.getCtx().closeContext();
        GlobalVars.remove("LockSelHelp");
        break;
}