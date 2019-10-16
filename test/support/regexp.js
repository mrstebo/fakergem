
function orList(collection) {
  return collection.map(x => escapeRegExp(x)).join("|");
}

function escapeRegExp(string) {
  return string.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1");
}

module.exports = {
  orList,
  escapeRegExp,
};
