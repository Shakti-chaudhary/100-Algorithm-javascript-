// HtmlEndTagByStartTag

function HtmlEndTagByStartTag(startTag) {
  const tagName = startTag.split(" ")[0].substring(1, startTag.length - 1);
  return `</${tagName}>`;
}

console.log(HtmlEndTagByStartTag("<div>")); // </div>
console.log(HtmlEndTagByStartTag("<button type='button' disabled>")); // </button>
