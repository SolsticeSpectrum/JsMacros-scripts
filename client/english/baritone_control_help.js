const regex = /^(?:.*)> (:[\S]*)/;
const regexCommand = `$1`;
let text = event.text.getString();
let outputhelp = text.replace(regex, regexCommand);

context.releaseLock();

switch (outputhelp) {
    case ":help":
        if (!GlobalVars.getObject("LockHelp")) {
            GlobalVars.putObject("LockHelp", context);
            context.releaseLock();
            Time.sleep(1000);
            Chat.say("->:stop - stops current process");
            Time.sleep(3000);
            Chat.say("->:funhelp - shows all fun commands");
            Time.sleep(3000);
            Chat.say("->:pause - pauses a process");
            Time.sleep(3000);
            Chat.say("->:resume - resumes paused process");
            Time.sleep(3000);
            Chat.say("->:sethome <home_name> - sets home under given name on current coords");
            Time.sleep(3000);
            Chat.say("->:home <home_name> - goes to given home name");
            Time.sleep(3000);
            Chat.say("->:goal <x> <y> <z> - sets goal on given coords");
            Time.sleep(3000);
            Chat.say("->:path - goes to set goal");
            Time.sleep(3000);
            Chat.say("->:goto <x> <y> <z> | <block_name> - goes to given coords/block");
            Time.sleep(3000);
            Chat.say("->:farm - starts farming");
            Time.sleep(3000);
            Chat.say("->:mine <block_name> - starts mining given block");
            Time.sleep(3000);
            //Chat.say("->:get <item_id> <count> - tries to get a given item");
            //Time.sleep(3000);
            //Chat.say("->:beatgame - tries to kill an ender dragon");
            //Time.sleep(3000);
            Chat.say("->:inventory - shows contains of inventory");
            Time.sleep(3000);
            Chat.say("->:drop <item_id> | all - drops a given item or entire inventory");
            Time.sleep(3000);
            Chat.say("->:surface - tries to surface from underground");
            Time.sleep(3000);
            Chat.say("->:build <schematic_name> - builds a given schematic file in bot's memory");
            Time.sleep(3000);
            Chat.say("->:follow player <player_name> | entity <entity_name> - follows given player or entity");
            Time.sleep(3000);
            Chat.say("->:say <message> - says give message in chat");
            Time.sleep(3000);
            Chat.say("->:pvp - enables pvp");
            Time.sleep(3000);
            Chat.say("->:disablepvp - disables pvp");
            Time.sleep(3000);
            Chat.say("->:pve <entity_name> - hunts specified entity");
            Time.sleep(3000);
            Chat.say("->:disablepve - disables pve");
            Time.sleep(3000);
            Chat.say("->:friend <player_name> - ignores a player in pvp mode");
            Time.sleep(3000);
            //Chat.say("->:tpa <player_name> - uses /tpa if available on the server");
            //Time.sleep(3000);
            //Chat.say("->:tpaccept - uses /tpaaccept if available on the server");
            //Time.sleep(3000);
            //Chat.say("->:restp <res_name> - uses /restp if available on the server");
            //Time.sleep(3000);
            //Chat.say("->:rtp - uses /rtp if available on the server");
            //Time.sleep(3000);
            //Chat.say("->:back - uses /back if available on the server");
            //Time.sleep(3000);
            //Chat.say("->:serversethome <home_name> - uses /sethome if available on the server");
            //Time.sleep(3000);
            //Chat.say("->:serverhome <home_name> - uses /home if available on the server");
            //Time.sleep(3000);
            Chat.say("->:sel - worldedit, for all :sel commands, use :selhelp");
            GlobalVars.remove("LockHelp");
        }
        break;

    case ":stop":
        GlobalVars.getObject("LockHelp")?.getCtx().closeContext();
        GlobalVars.remove("LockHelp");
        break;
}