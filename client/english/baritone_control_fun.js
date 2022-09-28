const regex = /^(?:.*)> (:[\S]*)(.*)/;
const noSpace_regex = /^(?:.*)> (:[\S]*)(?:\s)(.*)/;
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
    case ":time":
        Chat.say(new (Java.type("java.text.SimpleDateFormat"))("dd/MM/yy - hh:mm:ss").format(new (Java.type("java.util.Date"))()));
        break;

    // dayornight
    case ":dayornight":
        let ticks = World.getTimeOfDay();
        const isDay = (ticks % 24000) < 12000;
        if (isDay) {
            Chat.say("It's a day")
        } else {
            Chat.say("It's a night")
        }
        break;

    // days
    case ":days":
        const Days = Math.floor(World.getTimeOfDay() / 24000);
        Chat.say("This world is " + Days.toString() + " days old");
        break;

    // radius
    case ":radius":
        const playerNames = [];
        for (const players of World.getLoadedPlayers()) {
            playerNames.push(players.getName().getString())
        }
        Chat.say("These players are in my radius: " + playerNames.join(", "));
        break;

    // playercoords
    case ":playercoords":
        const playerName = noSpace_args;
        for (const player of World.getLoadedPlayers()) {
            if (player.getName().getString() === playerName) {
                Chat.say("Player " + noSpace_args + " is located at " + player.getPos().toString())
            }
        }
        break;

    // uuid
    case ":uuid":
        const playerUUID = noSpace_args;
        for (const playeru of World.getLoadedPlayers()) {
            if (playeru.getName().getString() === playerUUID) {
                Chat.say("The UUID of a player " + noSpace_args + " is " + playeru.getUUID())
            }
        }
        break;

    // tps
    case ":tps":
        Chat.say("Server has approximately " + Math.floor(World.getServer1MAverageTPS()).toString() + " TPS");
        break;

    // players
    case ":players":
        Chat.say("There are " + World.getPlayers().size().toString() + " players");
        break;

    // cooltext
    //case ":cooltext":
    //    Chat.say("+toggle BetterChat");
    //    Time.sleep(50);
    //    Chat.say(args);
    //    Time.sleep(100);
    //    Chat.say("+toggle BetterChat");
    //    break;

    // dice
    case ":dice":
        Chat.say("You rolled " + Math.ceil(Math.random() * 6).toString());
        break;

    // q
    case ":q":
        if (args === "") {
            Chat.say("You didn't ask a question")
        } else {
            if (Math.ceil(Math.random() * 2) == 1) {
                Chat.say("Yes")
            } else {
                Chat.say("No")
            }
        }
        break;

    // randomfact
    case ":randomfact":
        let facts = FS.open("facts.txt").read().split('\n');
        let fact = facts[Math.floor(Math.random() * facts.length)];
        Chat.say(fact);
        break;

    // bible
    case ":bible":
        Chat.say("+toggle Spammer");
        break;

    // coords
    case ":coords":
        let coord = Player.getPlayer().getPos();
        Chat.say("I am located at " + coord.toString());
        break;

    // health
    case ":health":
        let health = Player.getPlayer().getHealth() / 2;
        Chat.say("I have " + health.toString() + " hearts");
        break;

    // hunger
    case ":hunger":
        let hunger = Player.getPlayer().getFoodLevel() / 2;
        Chat.say("I have " + hunger.toString() + " pieces of hunger bar");
        break;
}