let message = "";
let task = '"chop.tree"';

message += "vIndex=0.00" + (Math.floor(Math.random() * 100) + 300) + "; ";
message += "internalState=[AUTO]; ";
message += "currentTask=" + task + "; ";

if (Math.ceil(Math.random() * 2) == 1) {
    message += "isStateWithinRange(0.8, 1.0)=true; ";
    message += "actualState=0." + (Math.floor(Math.random() * 1000) + 8700) + "; "
} else {
    message += "isStateWithinRange(0.8, 1.0)=false; ";
    message += "actualState=0." + (Math.floor(Math.random() * 1000) + 7000) + "; "
}

message += "punishPoints=0." + (Math.floor(Math.random() * 30) + 50);

Chat.say(message);
