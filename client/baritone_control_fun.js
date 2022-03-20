const regex = /^(?:.*)> (![\S]*)(.*)/;
const noSpace_regex = /^(?:.*)> (![\S]*)(?:\s)(.*)/;
const regexCommand = `$1`;
const regexArgs = `$2`;
const noSpace_regexArgs = `$2`;
let text = event.text.getString();
let outputfun = text.replace(regex, regexCommand);
let args = text.replace(regex, regexArgs);
let noSpace_args = text.replace(noSpace_regex, noSpace_regexArgs);

context.releaseLock();

switch (outputfun) {
    // time
    case "!time":
        Chat.say(new (Java.type("java.text.SimpleDateFormat"))("dd/MM/yy - hh:mm:ss").format(new (Java.type("java.util.Date"))()));
        break;

    // dayornight
    case "!dayornight":
        let ticks = World.getTimeOfDay();
        const isDay = (ticks % 24000) < 12000;
        if (isDay) {
            Chat.say("V tomto světě je den")
        } else {
            Chat.say("V tomto světě je noc")
        }
        break;

    // days
    case "!days":
        const Days = Math.floor(World.getTimeOfDay() / 24000);
        Chat.say("Tento svět je " + Days.toString() + " dní starý");
        break;

    // radius
    case "!radius":
        const playerNames = [];
        for (const players of World.getLoadedPlayers()) {
            playerNames.push(players.getName().getString())
        }
        Chat.say("V mém okolí jsou: " + playerNames.join(", "));
        break;

    // playercoords
    case "!playercoords":
        const playerName = noSpace_args;
        for (const player of World.getLoadedPlayers()) {
            if (player.getName().getString() === playerName) {
                Chat.say("Hráč " + noSpace_args + " se nachází na souřadnicích " + player.getPos().toString())
            }
        }
        break;

    // uuid
    case "!uuid":
        const playerUUID = noSpace_args;
        for (const playeru of World.getLoadedPlayers()) {
            if (playeru.getName().getString() === playerUUID) {
                Chat.say("UUID hráče " + noSpace_args + " je " + playeru.getUUID())
            }
        }
        break;

    // tps
    case "!tps":
        Chat.say("Server má přibližně " + Math.floor(World.getServer1MAverageTPS()).toString() + " TPS");
        break;

    // players
    case "!players":
        Chat.say("V tomto světě je " + World.getPlayers().size().toString() + " hráčů");
        break;

    // cooltext
    case "!cooltext":
        Chat.say("+toggle BetterChat");
        Time.sleep(50);
        Chat.say(args);
        Time.sleep(100);
        Chat.say("+toggle BetterChat");
        break;

    // dice
    case "!dice":
        Chat.say("Padlo ti " + Math.ceil(Math.random() * 6).toString());
        break;

    // q
    case "!q":
        if (args === "") {
            Chat.say("Nepoložil jsi otázku")
        } else {
            if (Math.ceil(Math.random() * 2) == 1) {
                Chat.say("Ano")
            } else {
                Chat.say("Ne")
            }
        }
        break;

    // randomfact
    case "!randomfact":
        let facts = FS.open("facts.txt").read().split('\n');
        let fact = facts[Math.floor(Math.random() * facts.length)];
        Chat.say(fact);
        break;

    // bible
    case "!bible":
        Chat.say("+toggle Spammer");
        break;

    // coords
    case "!coords":
        let coord = Player.getPlayer().getPos();
        Chat.say("Nacházím se na souřadnicích " + coord.toString());
        break;

    // health
    case "!health":
        let health = Player.getPlayer().getHealth() / 2;
        Chat.say("Mám " + health.toString() + " srdíček");
        break;

    // hunger
    case "!hunger":
        let hunger = Player.getPlayer().getFoodLevel() / 2;
        Chat.say("Mám " + hunger.toString() + " paliček hunger baru");
        break;
}