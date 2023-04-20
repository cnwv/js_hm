function generateChessboard(container) {
    // Создаем таблицу
    const table = document.createElement('table');
    table.style.borderCollapse = 'collapse';
    table.style.border = '1px solid black';
  
    // Создаем ячейки таблицы
    for (let row = 1; row <= 8; row++) {
      const tr = document.createElement('tr');
  
      for (let col = 0; col <= 7; col++) {
        const td = document.createElement('td');
        td.style.width = '50px';
        td.style.height = '50px';
        td.style.border = '1px solid black';
        td.style.textAlign = 'center';
        
        // Определяем цвет ячейки
        const isBlack = (row + col) % 2 === 0;
        td.style.backgroundColor = isBlack ? 'black' : 'white';
        td.style.color = isBlack ? 'white' : 'black';
  
        // Добавляем буквенные обозначения столбцов в первую строку
        if (row === 1) {
          const letter = String.fromCharCode(65 + col);
          const div = document.createElement('div');
          div.textContent = letter;
          div.style.fontSize = '20px';
          div.style.fontWeight = 'bold';
          td.appendChild(div);
        }
  
        // Добавляем цифровые обозначения строк в первый столбец
        if (col === 0) {
          const div = document.createElement('div');
          div.textContent = row;
          div.style.fontSize = '20px';
          div.style.fontWeight = 'bold';
          td.appendChild(div);
        }
  
        tr.appendChild(td);
      }
  
      table.appendChild(tr);
    }
  
    // Добавляем таблицу в указанный контейнер
    container.appendChild(table);
  }
  
  // Используем функцию для генерации доски на странице
  const container = document.getElementById('chessboard-container');
  generateChessboard(container);
  