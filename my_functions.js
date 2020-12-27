
function isTouching(a, b) {
    if (a.x - b.x < a.width / 2 + b.width / 2 &&
        b.x - a.x < b.width / 2 + b.width / 2 &&
        a.y - b.y < a.height / 2 + b.height / 2 &&
        b.y - a.y < b.height / 2 + b.height / 2) {
        return true;

    }
    else {
        return false;
    }
}
function Bounce(a, b) {
    if (a.x - b.x < a.width / 2 + b.width / 2 &&
        b.x - a.x < b.width / 2 + b.width / 2) {
        a.velocityX = 0 - a.velocityX;
        b.velocityX = 0 - b.velocityX;
    }

    if (a.y - b.y < a.height / 2 + b.height / 2 &&
        b.y - a.y < b.height / 2 + b.height / 2) {
        a.velocityY = 0 - a.velocityY;
        b.velocityY = 0 - b.velocityY;
    }

}