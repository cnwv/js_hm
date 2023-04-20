// 1. Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги. Доска должна быть 
// верно разлинована на черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы — латинскими
//  буквами A, B, C, D, E, F, G, H.


function generateChessboard(container) {
    // Создаем таблицу
    const table = document.createElement('table');
    table.style.borderCollapse = 'collapse';
    table.style.border = '1px solid black';
    // создаем ячейки
  for (let row = 1; row <= 8; row++) {
    const tr = document.createElement('tr');
    for (let column = 0; column <= 7; column++) {
      const td = document.createElement('td');
      td.style.width = '50px';
      td.style.height = '50px';
      td.style.border = '1px solid black';
      td.style.textAlign = 'center';

      // Определяем цвет
      сonst isBlack = (row + column) % 2 === 0
      tr.appendChild(td);
    }
  table.appendChild(tr);
  }
  container.appendChild(table);
}

const container = document.getElementById('chessboard-container');
generateChessboard(container);