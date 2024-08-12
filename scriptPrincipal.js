const musicBackground = new Audio("in-slow-motion-inspiring-ambient-lounge-219592.mp3");
musicBackground.volume = 0.7;
musicBackground.loop = true;
document.getElementById("alertHomeBtn").addEventListener('click', () => {
    musicBackground.play();
    document.getElementById("alertHome").style.display = "none";
    document.getElementById("divTransition").style.display = "flex";
    document.getElementById("mainHome").style.display = "flex";
    setTimeout(
        function () {
            document.getElementById("divTransition").style.display = "none";
        }
    , 3000);
});
document.getElementById("playBtn").addEventListener('click', () => {});
function ConquestAlert() {
    document.getElementById("conquestAlert").style.display = "flex";
    setTimeout(
        function () {
            document.getElementById("conquestAlert").style.display = "none";
        }
    , 4000);
};