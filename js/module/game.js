import { playMove, isWin } from './play.js';
import showUi from './ui.js';
showUi();

let win = false;
window.addEventListener('keydown', function (e) {
    if (win) {
        return;
    }
    let position = e.key;
    let result = false;
    if (position == 'ArrowLeft') {
        result = playMove('left')
    } else if (position == 'ArrowRight') {
        result = playMove('right')
    } else if (position == 'ArrowUp') {
        result = playMove('up')
    } else if (position == 'ArrowDown') {
        result = playMove('down')
    }
    if (result) {
        showUi();
        if (isWin()) {
            console.log('游戏胜利')
            win = true;
        }
    }
})
