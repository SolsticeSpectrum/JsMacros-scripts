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
            Chat.say("->:sel pos1 <x> <y> <z> - nastaví souřadnice bodu 1 výberu");
            Time.sleep(3000);
            Chat.say("->:sel pos2 <x> <y> <z> - nastaví souřadnice bodu 2 výberu");
            Time.sleep(3000);
            Chat.say("->Je možné nastavit více výberů");
            Time.sleep(3000);
            Chat.say("->:sel clear - odstraní všechny výběry");
            Time.sleep(3000);
            Chat.say("->:sel cleararea - vykope všechny bloky ve výberu");
            Time.sleep(3000);
            Chat.say("->:sel fill <název_bloku> - vyplní výber určeným blokem");
            Time.sleep(3000);
            Chat.say("->:sel walls <název_bloku> - postaví stěny na okrajích výberu");
            Time.sleep(3000);
            Chat.say("->:sel shell <název_bloku> - stejné jako walls ale postaví i střechu a podlahu");
            Time.sleep(3000);
            Chat.say("->:sel replace <název_bloku1> <název_bloku2> - nahradí bloky jinými bloky");
            GlobalVars.remove("LockSelHelp");
        }
        break;

    case ":stop":
        GlobalVars.getObject("LockSelHelp")?.getCtx().closeContext();
        GlobalVars.remove("LockSelHelp");
        break;
}