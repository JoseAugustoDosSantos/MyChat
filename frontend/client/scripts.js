function sendMessage() {
    let text = document.querySelector('textarea').value

    if (text.trim() !== '') {
        let div = document.querySelector('div.sentText')

        const img = document.createElement('img')
        img.setAttribute('src', './img/user.png');
        img.className = 'imgIconClient'

        const textBallon = document.createElement('div')
        const textParagraph = document.createElement('p')
        textParagraph.innerHTML = text
        textBallon.appendChild(textParagraph)
        textBallon.className = 'chatBallon'

        const divMessage = document.createElement('div')
        divMessage.className = 'divMessageSend'
        divMessage.appendChild(textBallon)
        divMessage.appendChild(img)

        div.appendChild(divMessage)
        socket.send(text)
        document.querySelector('textarea').value = ''
        div.scrollTop = div.scrollHeight;
    }
    else{
        document.querySelector('textarea').value = ''
    }
}

function messageReceivedSocket(event) {
    let div = document.querySelector('div.sentText')

    const img = document.createElement('img')
    img.setAttribute('src', './img/user.png');
    img.className = 'imgIconClient'

    const textBallon = document.createElement('div')
    const textParagraph = document.createElement('p')
    textParagraph.innerHTML = event
    textBallon.appendChild(textParagraph)
    textBallon.className = 'chatBallon'

    const divMessage = document.createElement('div')
    divMessage.className = 'divMessageReceived'
    divMessage.appendChild(img)
    divMessage.appendChild(textBallon)

    div.appendChild(divMessage)
    document.querySelector('textarea').value = ''
    div.scrollTop = div.scrollHeight;
}

document.addEventListener('keypress', function (event) {
    if(event.key === 'Enter' ){
        if(event.shiftKey){
            console.log("apertei os dois")
        }
        else{
            event.preventDefault()
            sendMessage()
        }
    }
})

const socket = new WebSocket('ws://localhost:3000');
socket.onopen = () => console.log('Conectado com sucesso!');
socket.onerror = (error) => console.error('Erro na conexão WebSocket:', error);
socket.onmessage = (event) => {
    messageReceivedSocket(event.data.toString())
    console.log('Mensagem recebida:', event.data.toString());
}
