
document.getElementById('ball').addEventListener('animationend', () => {
    document.getElementById('ball').style.animation = "none";
    document.getElementById('ball').style.animation = "moveRight 5s linear forwards";
});
