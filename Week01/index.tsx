import React, { useEffect, useCallback, useState } from 'react';
import './index.less'

const Project: React.FC<any> = () => {
  const [color, setColor] = useState(1); // 玩家标志 0: 没选择， 1: O， 2:X
  const [dataSource, setDataSource] = useState([
    [2, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ]);
  
  /**
   * 检查是否结束游戏
   * @returns {boolean} win 是否获胜
   */
   const checkWin = useCallback(() => {
    // 同一行
    for (let i: number = 0; i < 3; i++) {
      let win: boolean = true;
      for (let j: number = 0; j < 3; j++) {
        if (dataSource[i][j] !== color) {
          win = false;
        }
      }
    }
    
    // 同一列
    for (let i: number = 0; i < 3; i++) {
      let win: boolean = true;
      for (let j: number = 0; j < 3; j++) {
        if (dataSource[j][i] !== color) {
          win = false;
        }
      }
    }
    
    // 斜线1
    {
      let win: boolean = true;
      for (let j: number = 0; j < 3; j++) {
        if (dataSource[j][2 - j] !== color) {
          win = false;
        }
      }
      if (win) {
        return true
      }
    }
    // 斜线2
    {
      let win: boolean = true;
      for (let j: number = 0; j < 3; j++) {
        if (dataSource[j][j] !== color) {
          win = false;
        }
      }
      if (win) {
        return true
      }
    }
   }, [dataSource, color]);
   
   /**
   * 点击后触发
   * @param {number} x 坐标x
   * @param {number} y 坐标y
   */.>
   const clickItem = useCallback((x, y) => {
    dataSource[x][y] = color;
    setDataSource(dataSource);
    // 判断是否结束游戏
    if (checkWin()) {
      alert(color === 2 ? 'X is winner' : 'O is winner');
    }
    // 修改下一次玩家对应标志
    setColor(3 - color);
   }, [])
   
   return (
    <div className="board">
      {
        dataSource.map((row: number[], key: number) => (
          <div className="row" key={key}>
            {
              row.map((col: number, key2: number) => (
                <div className="col" key={key2} onClick={() => clickItem(key, key2)} >
                  { col === 2 ? 'X' : col === 1 ? 'O' : '' }
                </div>
              ))
            }
          </div>
        ))
      }
    </div>
  );
};

export default Project;
   
