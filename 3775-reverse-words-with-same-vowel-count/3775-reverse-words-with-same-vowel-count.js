/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  const vowels = {
    'a': true,
    'e': true,
    'i': true,
    'o': true,
    'u': true,
  };

  const wordList = s.split(" ");
  let firstVowels = 0;
  let answer = wordList[0];

  for (const str of wordList[0]) {
    if (vowels[str]) {
      firstVowels++;
    }
  }

  for (let i = 1; i < wordList.length; i++) {
    const currentWord = wordList[i];
    let vowelsCount = 0;

    for (let i = 0; i < currentWord.length; i++) {
      if (vowels[currentWord[i]]) {
        vowelsCount++;
      }
    }

    if (vowelsCount === firstVowels) {
      answer += ` ${currentWord.split("").reverse().join("")}`;

      continue;
    }

    answer += ` ${currentWord}`;
  }

  return answer;
};