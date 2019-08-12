/**
 * util for framework
 * @type {{getCols: (cols) => (string | any | string)}}
 */
const util = {

  getCols: (cols) => {
    if (!cols) {
      return "";
    }
    if (cols instanceof Array) {
      const colsConvert = [];
      for (const col of cols) {
        colsConvert.push(`dk-col-${col}`);
      }
      return colsConvert.join(" ");
    }
    return `dk-col-${cols}`;
  },

};

export default util;