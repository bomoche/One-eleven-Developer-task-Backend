function sortCharacters(data) {

  const characters = data.split("");

  const sorted = characters.sort((a, b) => a.localeCompare(b));

  return sorted;
}

module.exports = { sortCharacters };