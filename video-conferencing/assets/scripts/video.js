function toggleMic(status) {
    if (status) {
        document.getElementById('mic-off').style.display = "none";
        document.getElementById('mic-on').style.display = "inline";
    } else {
        document.getElementById('mic-off').style.display = "inline";
        document.getElementById('mic-on').style.display = "none";
    }
}
function toggleCamera(status) {
    if (status) {
        document.getElementById('camera-off').style.display = "none";
        document.getElementById('camera-on').style.display = "inline";
    } else {
        document.getElementById('camera-off').style.display = "inline";
        document.getElementById('camera-on').style.display = "none";
    }
}
function openChatSidebar() {
    document.getElementById('chat-sidebar').style.display = "block";
    document.getElementById('users-sidebar').style.display = "none";
    document.getElementById('right-sidebar').style.display = "block";
}
function openUsersSidebar() {
    document.getElementById('chat-sidebar').style.display = "none";
    document.getElementById('users-sidebar').style.display = "block";
    document.getElementById('right-sidebar').style.display = "block";
}
function closeSidebar() {
    document.getElementById("right-sidebar").style.display = "none";
}