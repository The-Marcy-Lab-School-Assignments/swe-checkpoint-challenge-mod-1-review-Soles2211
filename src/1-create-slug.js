// Return a URL-friendly "slug": lowercase with hyphens instead of spaces.
// Return null if the title contains banned characters: "!", "#", "?"
const createSlug = (title) => {
  const banned = /[#?!]/g;
  const space = / /g;
  const lower = title.toLowerCase();
  if (title.match(banned)) {
    return null;
  }
  return lower.replaceAll(space, '-');
};

module.exports = {
  createSlug,
};
