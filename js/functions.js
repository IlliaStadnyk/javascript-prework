function printMessage(msg) {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);}
function clearMessage() {
    document.getElementById('message').innerHTML = '';
}