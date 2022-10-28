import * as map from './map.js';

let container = document.getElementById('game');
let boxHeight = 45;
let boxWidth = 45;

//创建游戏容器
function gameContainer() {
    container.style.width = map.colNumber * boxWidth + 'px';
    container.style.height = map.rowNumber * boxHeight + 'px';
}
//创建游戏容器里面的箱子
function gameInBox() {
    container.innerHTML = '';
    for (let row = 0; row < map.rowNumber; row++) {
        for (let col = 0; col < map.colNumber; col++) {
            gameBoxStyle(row, col)
        }
    }
}
//每个箱子的样式
function gameBoxStyle(row, col) {
    const value = map.content[row][col];
    const div = document.createElement('div');
    div.className = 'item';
    div.style.left = col * boxWidth + 'px';
    div.style.top = row * boxHeight + 'px';
    const position = isContBox(row, col);
    if (value === map.PLAYER) {
        div.classList.add('player');
    } else if (value === map.WALL) {
        div.classList.add('wall');
    } else if (value === map.BOX) {
        if (position) {
            div.classList.add('correct-box')
        } else {
            div.classList.add('box')
        }
    } else {
        if (position) {
            div.classList.add('correct')
        } else {
            return;
        }
    }
    container.appendChild(div);
}
function isContBox(row, col) {
    return map.correct.find(n => n.row == row && n.col == col) !== undefined
}
//判断是否箱子是否在正确位置

export default function () {
    gameContainer();
    gameInBox();
}