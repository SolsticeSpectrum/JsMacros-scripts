const regex = /^(?:.*)➲ (![\S]*)(.*)/;
const noSpace_regex = /^(?:.*)➲ (![\S]*)(?:\s)(.*)/;
const regexCommand = `$1`;
const regexArgs = `$2`;
const noSpace_regexArgs = `$2`;
const Obj2IntMap = Java.type("it.unimi.dsi.fastutil.objects.Object2IntOpenHashMap");
let text = event.text.getString();
let outputai = text.replace(regex, regexCommand);
let args = text.replace(regex, regexArgs);
let noSpace_args = text.replace(noSpace_regex, noSpace_regexArgs);
let itemMap = new Obj2IntMap();
let inv = Player.openInventory()
let map = inv.getMap();

context.releaseLock()
handleMessage(outputai);

function handleMessage(message) {
    switch (outputai) {
        // stop
        case "!stop":
            Chat.say("@idle")
            break;

        // finish
        case "!finish":
            Chat.say("@gamer")
            break;

        // locate
        case "!locate":
            Chat.say("@locate_structure" + args)
            break;

        // mine
        case "!mine":
            Chat.say("@get" + args)
            break;

        // get
        case "!get":
            Chat.say("@get" + args)
            break;

        // give
        case "!give":
            Chat.say("@give" + args)
            break;

        // getfood
        case "!getfood":
            Chat.say("@get" + args)
            break;

        // food
        case "!food":
            Chat.say("@food" + args)
            break;

        // pvp
        case "!pvp":
            Chat.say("@punk" + args)
            break;

        // follow
        case "!follow":
            Chat.say("@follow" + args)
            break;

        // goto
        case "!goto":
            Chat.say("@goto" + args)
            break;

        // tpa
        case "!tpa":
            Chat.say("/tpa" + args)
            break;

        // tpaccept
        case "!tpaccept":
            Chat.say("/tpaccept")
            break;

        // restp
        case "!restp":
            Chat.say("/res tp" + args)
            break;

        // serversethome
        case "!sethome":
            Chat.say("/sethome" + args)
            break;

        // serverhome
        case "!home":
            Chat.say("/home" + args)
            break;

        // back
        case "!back":
            Chat.say("/back")
            break;

        // coords
        case "!coords":
            let coord = Player.getPlayer().getPos();
            Chat.say(coord.toString())
            break;

        // health
        case "!health":
            let health = Player.getPlayer().getHealth() / 2;
            Chat.say(health.toString())
            break;

        // hunger
        case "!hunger":
            let hunger = Player.getPlayer().getFoodLevel() / 2;
            Chat.say(hunger.toString())
            break;

        // radius
        case "!radius":
            const playerNames = []
            for (const players of World.getLoadedPlayers()) {
                playerNames.push(players.getName().getString())
            }
            Chat.say(playerNames.join(", "));
            break;

        // drop
        case "!drop":
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

        // inventory
        case "!inventory":
            if (GlobalVars.getBoolean("LockInventory")) {
                return;
            }

            GlobalVars.putBoolean("LockInventory", true);

            //var inventory = Player.openInventory();
            for (let idx = 0; idx < inv.getTotalSlots(); idx++) {
                let item = inv.getSlot(idx);
                itemMap.addTo(item.getItemId().substring(10), item.getCount());
            }

            itemMap.remove("air");

            itemMap.forEach((item, count) => {
                if (GlobalVars.getBoolean("LockInventory")) {
                    Chat.say(item + " " + count + "x");
                    Time.sleep(3000);
                }
            });

        case "!printstop":
            GlobalVars.putBoolean("LockInventory", false);
            break;
    }
}
