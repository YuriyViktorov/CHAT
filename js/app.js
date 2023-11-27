

function send() {
    let name = document.getElementById("name").value
    let message = document.getElementById("message").value
    document.getElementById("message").value = ""

    if (name == '') {
        document.getElementById("error").innerText = 'Гость, привет!'
        return
    }
    
    if (message == '') {
        document.getElementById("error").innerText = 'Ошибка, введите текст.'
        return
    }

    

    document.getElementById("error").innerText = ''
    document.getElementById("output").innerHTML = `<b>${name}</b>: ${message}`
}
