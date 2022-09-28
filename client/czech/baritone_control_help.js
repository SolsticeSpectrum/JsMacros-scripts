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
            Chat.say("->:stop - zastaví aktuální proces");
            Time.sleep(3000);
            Chat.say("->:funhelp - vypíše zábavné příkazy");
            Time.sleep(3000);
            Chat.say("->:pause - pozastaví proces");
            Time.sleep(3000);
            Chat.say("->:resume - obnoví pozastavený proces");
            Time.sleep(3000);
            Chat.say("->:sethome <název> - nastaví domov pod určeným názvem");
            Time.sleep(3000);
            Chat.say("->:home <název> - půjde k nastavenému domovu");
            Time.sleep(3000);
            Chat.say("->:goal <x> <y> <z> - nastaví cílové souřadnice");
            Time.sleep(3000);
            Chat.say("->:path - půjde k nastaveným cílovým souřadnicím");
            Time.sleep(3000);
            Chat.say("->:goto <x> <y> <z> | <název_bloku> - půjde k daným souřadnicím nebo bloku");
            Time.sleep(3000);
            Chat.say("->:farm - spustí farmaření");
            Time.sleep(3000);
            Chat.say("->:mine <název_bloku> - začne těžit daný blok (xray je vypnutý)");
            Time.sleep(3000);
            //Chat.say("->:get <název_itemu> <počet> - pokusí se získat suroviny a vycraftit/vypéct určený item");
            //Time.sleep(3000);
            //Chat.say("->:beatgame - pokusí se zabít draka");
            //Time.sleep(3000);
            Chat.say("->:inventory - vypíše obsah inventáře");
            Time.sleep(3000);
            Chat.say("->:drop <název_itemu> | all - vyhodí určený nebo všechny itemy z inventáře");
            Time.sleep(3000);
            Chat.say("->:surface - vykope se z podzemí na povrch");
            Time.sleep(3000);
            Chat.say("->:build <schéma> - začne stavět libovolný .schematic soubor");
            Time.sleep(3000);
            Chat.say("->:follow player <jméno> | entity <jméno_entity> - začné následovat hráče nebo entitu");
            Time.sleep(3000);
            Chat.say("->:say <zpráva> - zopakuje zprávu");
            Time.sleep(3000);
            Chat.say("->:pvp - zapne pvp");
            Time.sleep(3000);
            Chat.say("->:disablepvp - vypne pvp");
            Time.sleep(3000);
            Chat.say("->:pve <název_entity> - zapne pve proti entitě");
            Time.sleep(3000);
            Chat.say("->:disablepve - vypne pve");
            Time.sleep(3000);
            Chat.say("->:friend <jméno> - bude ignorovat hráče v režimu pvp");
            Time.sleep(3000);
            Chat.say("->:tpa <jméno> - pošle žádost o teleport");
            Time.sleep(3000);
            Chat.say("->:tpaccept - potvrdí žádost o teleport");
            Time.sleep(3000);
            Chat.say("->:restp <jméno_residence> - teleportuje se na residenci");
            Time.sleep(3000);
            Chat.say("->:rtp - použije příkaz /rtp");
            Time.sleep(3000);
            Chat.say("->:back - použije /back pokud je k dispozici");
            Time.sleep(3000);
            Chat.say("->:serversethome <název> - nastaví sethome pomocí server příkazu");
            Time.sleep(3000);
            Chat.say("->:serverhome <název> - teleportuje se na home pomocí server příkazu");
            Time.sleep(3000);
            Chat.say("->:sel - worldedit, pro :sel příkazy napište :selhelp");
            GlobalVars.remove("LockHelp");
        }
        break;

    case ":stop":
        GlobalVars.getObject("LockHelp")?.getCtx().closeContext();
        GlobalVars.remove("LockHelp");
        break;
}