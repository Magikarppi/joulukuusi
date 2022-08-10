const createXRows = (rows) => {
  if (!rows || typeof rows !== 'number') {
    throw Error('pass number to createXRows() as rows');
  }

  const baseStringLength = rows * 2 - 1;
  const baseString = ' '.repeat(baseStringLength);
  let onRow = 1;
  let xString = 'x';

  while (onRow <= rows) {
    if (onRow === 1) {
      const rowText = baseString.slice(baseStringLength / 2 + onRow) + xString;
      console.log(rowText);
    } else {
      const newXstring = xString + 'xx';
      const rowText =
        baseString.slice(baseStringLength / 2 + onRow) + newXstring;
      console.log(rowText);

      xString = newXstring;
    }
    onRow++;
  }
};

createXRows();
