function escapeRegExp(str: string): string{
  return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

module.exports = {
  escapeRegExp
};
