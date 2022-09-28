const regex = /^(?:.*)> (:[\S]*)(.*)/;
const regexCommand = `$1`;
const regexArgs = `$2`;
const Obj2IntMap = Java.type("it.unimi.dsi.fastutil.objects.Object2IntOpenHashMap");
let text = event.text.getString();
let outputaltoclef = text.replace(regex, regexCommand);
let args = text.replace(regex, regexArgs);
let itemMap = new Obj2IntMap();

context.releaseLock();
handleMessage(outputaltoclef);

function handleMessage(message) {
    switch (outputaltoclef) {
/*
        // beatgame
        case ":beatgame":
            Chat.say("@gamer");
            break;

        // get
        case ":get":
            Chat.say("@get" + args);
            break;

        // locate
        case ":locate":
            Chat.say("@locate_structure" + args);
            break;
*/

        // inventory
        case ":inventory":
            if (GlobalVars.getBoolean("LockInventory")) {
                return;
            }

            GlobalVars.putBoolean("LockInventory", true);

            var inv = Player.openInventory();
            for (let idx = 0; idx < inv.getTotalSlots(); idx++) {
                let item = inv.getSlot(idx);
                itemMap.addTo(item.getItemId().substring(10), item.getCount())
            }

            itemMap.remove("air");

            itemMap.forEach((item, count) => {
                if (GlobalVars.getBoolean("LockInventory")) {
                    Chat.say(item + " " + count + "x");
                    Time.sleep(3000)
                }
            });

        case ":stop":
            GlobalVars.putBoolean("LockInventory", false);
            break;
    }
}