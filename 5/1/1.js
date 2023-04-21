// 1. Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги. Доска должна быть 
// верно разлинована на черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы — латинскими
//  буквами A, B, C, D, E, F, G, H.


function generateChessboard(container) {
  // Создаем таблицу
  const table = document.createElement('table');
  table.style.borderCollapse = 'collapse';
  table.style.border = '1px solid black';
  table.style.position = 'relative'
  // создаем ячейки
  for (let row = 1; row <= 8; row++) {
    const tr = document.createElement('tr');
    for (let column = 0; column <= 7; column++) {
      const td = document.createElement('td');
      td.style.width = '50px';
      td.style.height = '50px';
      td.style.border = '1px solid black';
      td.style.textAlign = 'centre';

      // Определяем цвет
      const isBlack = (row + column) % 2 === 0;
      td.style.backgroundColor = isBlack ? 'black' : 'white';
      td.style.color = isBlack ? 'white' : 'black';


      // Добавляем буквы
      if (row === 1) {
        const letter = String.fromCharCode(65 + column)
        const div = document.createElement('div');
        div.style.position = 'absolute';
        div.style.top = '-25px';
        div.textContent = letter;
        div.style.fontSize = '20px';
        div.style.fontWeight = 'bold';
        div.style.color = 'green';
        td.appendChild(div);
      }

      // Добавляем цифры 
      if (column === 0) {
        const div = document.createElement('div');
        div.textContent = row;
        div.style.fontSize = '20px';
        div.style.fontWeight = 'bold';
        td.appendChild(div);
        div.style.position = 'absolute';
        div.style.left = '-25px';
        div.style.color = 'green';
      }

      // Добавляем столбцец
      table.appendChild(td);
    }
    table.appendChild(tr);
  }
  container.appendChild(table);
}

const container = document.getElementById('chessboard-container');
generateChessboard(container);

const test = document.getElementById('test');
anyText = document.createElement('h3');
anyText.textContent = 'sdkfbskjdfbkjsbdfkjbsdkjfbkj'; 
anyText.style.fontSize = '20px';
anyText.style.fontWeight = 'bold';
test.appendChild(anyText);


