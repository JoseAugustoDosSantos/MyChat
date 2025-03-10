function sendMessage(){
    let text = document.querySelector('textarea').value

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
    divMessage.className = 'divMessage'
    divMessage.appendChild(textBallon)
    divMessage.appendChild(img)
    

    div.appendChild(divMessage)

    document.querySelector('textarea').value = ""
    div.scrollTop = div.scrollHeight;


}
