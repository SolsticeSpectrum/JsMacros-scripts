const regex = /^(?:.*)➲ (![\S]*)/;
const regexCommand = `$1`;
let text = event.text.getString();
let outputfunhelp = text.replace(regex, regexCommand);

context.releaseLock();

switch (outputfunhelp) {
    case "!funhelp":
        if (!GlobalVars.getObject("LockFunHelp")) {
            GlobalVars.putObject("LockFunHelp", context);
            context.releaseLock();
            Time.sleep(1000);
            Chat.say("->!time - napíše aktuální čas");
            Time.sleep(3000);
            Chat.say("->!days - napíše počet dnů v Minecraft světe");
            Time.sleep(3000);
            Chat.say("->!dayornight - napíše jestli je den nebo noc");
            Time.sleep(3000);
            Chat.say("->!tps - napíše současné tps serveru");
            Time.sleep(3000);
            Chat.say("->!radius - napíše do chatu jména všech hráčů v okolí bota");
            Time.sleep(3000);
            Chat.say("->!randomfact - napíše náhodný fakt");
            Time.sleep(3000);
            Chat.say("->!q <otázka> - odpoví na otázku ano nebo ne");
            Time.sleep(3000);
            Chat.say("->!bible - zapne nebo vypne výpis bible");
            Time.sleep(3000);
            Chat.say("->!coords - zobrazí aktuální souřadnice bota");
            Time.sleep(3000);
            Chat.say("->!playercoords <jméno_hráče> - zobrazí aktuální souřadnice daného hráče");
            Time.sleep(3000);
            Chat.say("->!uuid <jméno_hráče> - zobrazí UUID hráče");
            Time.sleep(3000);
            Chat.say("->!health - zobrazí počet srdíček");
            Time.sleep(3000);
            Chat.say("->!hunger - zobrazí stav hunger baru");
            Time.sleep(3000);
            Chat.say("->!cooltext <zpráva> - napíše zprávu jiným fontem");
            Time.sleep(3000);
            Chat.say("->!dice - hodí kostkou");
            GlobalVars.remove("LockFunHelp");
        }
        break;

    case "!stop":
        GlobalVars.getObject("LockFunHelp")?.getCtx().closeContext();
        GlobalVars.remove("LockFunHelp");
        break;
}