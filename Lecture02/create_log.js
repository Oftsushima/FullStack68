function createLogEntry(message){
    const now = new Date();
    const timestamp = now.toLocaleTimeString('th-TH')
    const eventId = Math.random().toString(16).substring(2, 10).toUpperCase();
    const logmessage = message.toUpperCase();
    return `[${timestamp}] [${eventId}] ${logmessage}`;
}

const log = createLogEntry("User logged in");
console.log(log);