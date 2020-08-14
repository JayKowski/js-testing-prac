const analyze = (arr) => {
  const analysis = {
    average: (arr.reduce((a, b) => a + b) / arr.length),
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
  return analysis;
};

export default analyze;