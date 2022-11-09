//Training JS #18: Methods of String object--concat split and its good friend join

function splitAndMerge(str, sp) {
  return str.split(" ").map(word => word.split("").join(sp)).join(" ");
}