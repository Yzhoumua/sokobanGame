import * as map from './map.js'
export function playMove(direction) {
    const playEr = getPlayer();
    //得到玩家的下一个位置的信息
    const nextInfo = nextDirection(playEr.row, playEr.col, direction);
    if (nextInfo.value === map.WALL) {
        return false;
    } else if (nextInfo.value === map.SPACE) {
        exchange(playEr, nextInfo);
        return true;
    } else {
        let nextInfonext = nextDirection(nextInfo.row, nextInfo.col, direction);
        if (nextInfonext.value === map.SPACE) {
            exchange(nextInfo, nextInfonext)
            exchange(playEr, nextInfo)
            return true;
        } else {
            return false;
        }
    }

}
export function isWin(){
    for(let i = 0 ; i < map.correct.length; i++){
        let point = map.correct[i];
        if(map.content[point.row][point.col] !== map.BOX){
            return false
        }
    }
    return true;
}
//交换位置
function exchange(point1, point2) {
    let temp = map.content[point1.row][point1.col];
    map.content[point1.row][point1.col] = map.content[point2.row][point2.col]
    map.content[point2.row][point2.col] = temp;
}
//获得玩家的位置
function getPlayer() {
    for (let row = 0; row < map.rowNumber; row++) {
        for (let col = 0; col < map.colNumber; col++) {
            if (map.content[row][col] === map.PLAYER) {
                return {
                    row,
                    col
                }
            }
        }
    }
}
//得到指定方向的下一个位置
function nextDirection(row, col, direction) {
    if (direction == 'left') {
        return {
            row: row,
            col: col - 1,
            value: map.content[row][col - 1]
        }
    } else if (direction == 'right') {
        return {
            row: row,
            col: col + 1,
            value: map.content[row][col + 1]
        }
    } else if (direction == 'up') {
        return {
            row: row - 1,
            col: col,
            value: map.content[row - 1][col]
        }
    } else if (direction == 'down') {
        return {
            row: row + 1,
            col: col,
            value: map.content[row + 1][col]
        }
    }
}
