export const textReplacer = text => {
  const newText = text
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, `'`)
    .replace(/&eacute;/g, "é")
    .replace(/&micro;/g, "µ");
  return newText;
};
