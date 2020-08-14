const capitalize = (word) => {
  const lower = word.toLowerCase();
  const sliced = lower.slice(1);
  const upperLetter = lower.charAt(0).toUpperCase();
  const capWord = upperLetter + sliced;

  return capWord;
};

export default capitalize;