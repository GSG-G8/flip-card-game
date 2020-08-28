export const names = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
];

export const cardsGenerator = (arr, limit) => {
  let id = 0;
  return arr
    .slice(0, limit / 2)
    .reduce((acc, name) => {
      const clone = [...acc];
      clone.push({
        id: (id += 1),
        name,
      });
      clone.push({
        id: (id += 1),
        name,
      });
      return clone;
    }, [])
    .sort(() => 0.5 - Math.random());
};
