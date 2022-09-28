const regex = /^(?:.*)> (:[\S]*)/;
const regexCommand = `$1`;
let text = event.text.getString();
let outputfunhelp = text.replace(regex, regexCommand);

context.releaseLock();

switch (outputfunhelp) {
    case ":funhelp":
        if (!GlobalVars.getObject("LockFunHelp")) {
            GlobalVars.putObject("LockFunHelp", context);
            context.releaseLock();
            Time.sleep(1000);
            Chat.say("->:time - shows current time of the bot");
            Time.sleep(3000);
            Chat.say("->:days - shows world's age");
            Time.sleep(3000);
            Chat.say("->:dayornight - says if it's night or day in the world");
            Time.sleep(3000);
            Chat.say("->:tps - shows server tps");
            Time.sleep(3000);
            Chat.say("->:radius - shows names of all players in bot's radius");
            Time.sleep(3000);
            Chat.say("->:randomfact - says random fact");
            Time.sleep(3000);
            Chat.say("->:q <question> - answers with yes or no to given question");
            Time.sleep(3000);
            Chat.say("->:bible - starts or stops spamming of the bible");
            Time.sleep(3000);
            Chat.say("->:coords - shows coords of the bot");
            Time.sleep(3000);
            Chat.say("->:playercoords <player_name> - shows coords of a player in bot's render distance");
            Time.sleep(3000);
            Chat.say("->:uuid <player_name> - shows UUID of a player");
            Time.sleep(3000);
            Chat.say("->:health - current health status");
            Time.sleep(3000);
            Chat.say("->:hunger - current status of hunger bar");
            Time.sleep(3000);
            //Chat.say("->:cooltext <zpráva> - napíše zprávu jiným fontem");
            //Time.sleep(3000);
            Chat.say("->:dice - rolls a dice");
            GlobalVars.remove("LockFunHelp");
        }
        break;

    case ":stop":
        GlobalVars.getObject("LockFunHelp")?.getCtx().closeContext();
        GlobalVars.remove("LockFunHelp");
        break;
}