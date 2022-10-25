var L_sentence = 0;
var N_words = 0;
var N_vowels = 0;
var i = 0;
var voyels = ["a", "e", "i", "o", "u", "y"];
var str = " hello  my name is Zied.";
if (str[str.length - 2] != " ") {
  N_words++;
}
while (str[i] != ".") {
  if (str[i] != " ") {
    L_sentence++;
    if (voyels.includes(str[i].toLowerCase())) {
      N_vowels++;
    }
  } else {
    if (str[i - 1] != " " && i != 0) {
      N_words++;
    }
  }

  i++;
}
console.log(L_sentence);
console.log(N_words);
console.log(N_vowels);
