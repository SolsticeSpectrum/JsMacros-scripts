const regex = /^(?:.*)> (:[\S]*)(.*)/;
const noSpace_regex = /^(?:.*)> (:[\S]*)(?:\s)(.*)/;
const regexCommand = `$1`;
const regexArgs = `$2`;
const noSpace_regexArgs = `$2`;
let text = event.text.getString();
let outputcommands = text.replace(regex, regexCommand);
let args = text.replace(regex, regexArgs);
let noSpace_args = text.replace(noSpace_regex, noSpace_regexArgs);
let inv = Player.openInventory();
let map = inv.getMap();

Client.runOnMainThread(JavaWrapper.methodToJava(() => {
    switch (outputcommands) {
        // stop
        case ":stop":
            //Chat.say("@stop");
            Chat.say("#stop");
            break;

        // stop
        case ":pause":
            Chat.say("#pause");
            break;

        // resume
        case ":resume":
            Chat.say("#resume");
            break;

        // path
        case ":path":
            Chat.say("#path");
            break;

        // farm
        case ":farm":
            Chat.say("#farm");
            break;

        // surface
        case ":surface":
            Chat.say("#surface");
            break;

        // tpaccept
        case ":tpaccept":
            Chat.say("/tpaccept");
            break;

        // serversethome
        case ":serversethome":
            Chat.say("/sethome" + args);
            break;

        // serverhome
        case ":serverhome":
            Chat.say("/home" + args);
            break;

        // pvp on
        case ":pvp":
            Player.getPlayer().getRaw().method_44096(".toggle kill-aura on", null)
            //Chat.say(".toggle kill-aura on");
            Player.getPlayer().getRaw().method_44096(".toggle aim-assist on", null)
            //Chat.say(".toggle aim-assist on");
            Chat.say("#follow players");
            break;

        // pvp off
        case ":disablepvp":
            Player.getPlayer().getRaw().method_44096(".toggle kill-aura off", null)
            //Chat.say(".toggle kill-aura off");
            Player.getPlayer().getRaw().method_44096(".toggle aim-assist off", null)
            //Chat.say(".toggle aim-assist off");
            Chat.say("#stop");
            break;

        // pve on
        case ":pve":
            Chat.say("+toggle KillAura");
            Chat.say("#follow entity" + args);
            break;

        // pve off
        case ":disablepve":
            Chat.say("+toggle KillAura");
            Chat.say("#stop");
            break;

        // friend
        case ":friend":
            Player.getPlayer().getRaw().method_44096(".friends add" + args, null)
            //Chat.say(".friends add" + args);
            break;

        // drop
        case ":drop":
            let slots = Array.from(map.get("main")).concat(Array.from(map.get("hotbar")), (map.get("offhand")), (map.get("helmet")), (map.get("chestplate")), (map.get("leggings")), (map.get("boots")));
            for (let slot of slots) {
                if (inv.getSlot(slot).getItemId() == "minecraft:" + noSpace_args) {
                    inv.click(slot);
                    inv.click(-999)
                }
                else if (noSpace_args == "all") {
                    inv.click(slot);
                    inv.click(-999)
                }
            }
            break;

        // tpa
        case ":tpa":
            Chat.say("/tpa" + args);
            break;

        // restp
        case ":restp":
            Chat.say("/res tp" + args);
            break;

        // rtp
        case ":rtp":
            Chat.say("/rtp");
            break;

        // say
        case ":say":
            Chat.say("+say" + args);
            break;

        // sel
        case ":sel":
            Chat.say("#sel" + args);
            break;

        // back
        case ":back":
            Chat.say("/back");
            break;

        // goal
        case ":goal":
            Chat.say("#goal" + args);
            break;

        // sethome
        case ":sethome":
            Chat.say("#sethome" + args);
            break;

        // home
        case ":home":
            Chat.say("#wp goto" + args);
            break;

        // follow
        case ":follow":
            Chat.say("#follow" + args);
            break;

        // mine
        case ":mine":
            Chat.say("#mine" + args);
            break;

        // goto
        case ":goto":
            Chat.say("#goto" + args);
            break;

        // build
        case ":build":
            Chat.say("#build" + args);
            break;
    }
}))