function generateHackerName() {
    var adjectives = ['Разрушительный', 'Кибер', 'Невидимый', 'Матричный', 'Киберпространственный', 'Кибернетический'];
    var nouns = ['Хакер', 'Ниндзя', 'Геймер', 'Пират', 'Кодер', 'Эксперт', 'Вирус'];

    var randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    var randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

    return randomAdjective + '_' + randomNoun;
}

var name = generateHackerName();

var password = "Password:DevilCan`tCry"

function sendMessage() {
    var message = document.getElementById("messageInput").value;
    if (message ==`alert('password')`){
        var log = document.getElementById('log')
        log.style.display = "block"
        alert(password)
    }
    var chatBox = document.getElementById("chatBox");
    chatBox.innerHTML += "<p>" + name + ":" + message + "</p>";
}


function checkCredentials(name) {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        if (password === "DevilCan`tCry") {
            window.location.href = "/home/motorola/tomorow/hacker2.html"; 
            return false; 
        } else {
            alert("Неправильный логин или пароль");
            return false; 
        }
    }
