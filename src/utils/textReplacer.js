export const textReplacer = (text) => {
  const newText = text
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, `'`)
    .replace(/&eacute;/g, "é")
    .replace(/&micro;/g, "µ")
    .replace(/&rdquo;/g, "”")
    .replace(/&idquo;/g, "“")
    .replace(/&shy;/g, "-")
    .replace(/&Uuml;/g, "Ü")
    .replace(/&amp;/g, "&")
    .replace(/&deg;/g, "°");

  return newText;
};
