function mail() {
    let emailSender = false;
    let message = "";

    if(user.getPermission != colaboratorPermConfig) {
        stop();
    }
};

function send(to, from, message){
    mail = getConection(url);
    
    if(!message) {
        message = "Mensagem padrão";
    }
    
    mail.send(to, from, message)
}

function conectaServidor() {
    serverIp = "187.489.125.94";
    serverName = "ifc-joinville";
    
    connection['ip'] = serverIp;
    connection['server'] = serverName;

    return connection.status;
}