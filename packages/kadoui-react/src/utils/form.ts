export const formatInput = (value: string, regex: RegExp) => {
  let correctValue = value;

  const filteredValue = Array.from(value).filter(char => regex.test(char)).join("");

  if (filteredValue !== value) {
    correctValue = filteredValue;
  }

  return correctValue;
}