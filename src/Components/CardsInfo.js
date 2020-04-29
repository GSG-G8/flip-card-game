const Generate = (arr) => {
  let id = 0;
  return arr
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

export default Generate;
