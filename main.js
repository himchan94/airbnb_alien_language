"use strict";

const inputBox = document.querySelector("#before_converted");
const outputBox = document.querySelector("#after_converted");
const btn = document.querySelector(".btn");

const cho_list = [
  "ㄱ",
  "ㄲ",
  "ㄴ",
  "ㄷ",
  "ㄸ",
  "ㄹ",
  "ㅁ",
  "ㅂ",
  "ㅃ",
  "ㅅ",
  "ㅆ",
  "ㅇ",
  "ㅈ",
  "ㅉ",
  "ㅊ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
];
const joong_list = [
  "ㅏ",
  "ㅐ",
  "ㅑ",
  "ㅒ",
  "ㅓ",
  "ㅔ",
  "ㅕ",
  "ㅖ",
  "ㅗ",
  "ㅘ",
  "ㅙ",
  "ㅚ",
  "ㅛ",
  "ㅜ",
  "ㅝ",
  "ㅞ",
  "ㅟ",
  "ㅠ",
  "ㅡ",
  "ㅢ",
  "ㅣ",
];

const jong_list = [
  "",
  "ㄱ",
  "ㄲ",
  "ㄳ",
  "ㄴ",
  "ㄵ",
  "ㄶ",
  "ㄷ",
  "ㄹ",
  "ㄺ",
  "ㄻ",
  "ㄼ",
  "ㄽ",
  "ㄾ",
  "ㄿ",
  "ㅀ",
  "ㅁ",
  "ㅂ",
  "ㅄ",
  "ㅅ",
  "ㅆ",
  "ㅇ",
  "ㅈ",
  "ㅊ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
];

const componentConversionTable = [
  {
    ㄱ: "ㄱㄲㅋ",
    ㄲ: "ㄲㅋ",
    ㄴ: "ㄴ",
    ㄷ: "ㄷㄸㅌ",
    ㄸ: "ㄸㅌ",
    ㄹ: "ㄹ",
    ㅁ: "ㅁ",
    ㅂ: "ㅂㅃㅍ",
    ㅃ: "ㅃㅍ",
    ㅅ: "ㅅㅆ",
    ㅆ: "ㅆㅅ",
    ㅇ: "ㅇ",
    ㅈ: "ㅈㅉㅊ",
    ㅉ: "ㅉㅊ",
    ㅊ: "ㅊㅉ",
    ㅋ: "ㅋㄲ",
    ㅌ: "ㅌㄸ",
    ㅍ: "ㅍㅃ",
    ㅎ: "ㅎ",
  },
  {
    ㅏ: "ㅏㅑ",
    ㅐ: "ㅐㅒㅔ",
    ㅑ: "ㅑㅏ",
    ㅒ: "ㅒㅖ",
    ㅓ: "ㅓㅕ",
    ㅔ: "ㅔㅖㅞ",
    ㅕ: "ㅕㅓ",
    ㅖ: "ㅖㅒ",
    ㅗ: "ㅗㅛ",
    ㅘ: "ㅘ",
    ㅙ: "ㅙㅚㅞ",
    ㅚ: "ㅚㅙㅞ",
    ㅛ: "ㅛㅗ",
    ㅜ: "ㅜㅠ",
    ㅝ: "ㅝㅓ",
    ㅞ: "ㅞㅚㅙㅔ",
    ㅟ: "ㅟ",
    ㅠ: "ㅠㅜ",
    ㅡ: "ㅡㅜ",
    ㅢ: "ㅢㅟ",
    ㅣ: "ㅣㅟ",
  },
  {
    x: "x",
    ㄱ: "ㄱㄳㅋ",
    ㄲ: "ㄲㅋ",
    ㄳ: "ㄳㄱㅋ",
    ㄴ: "ㄴㄵㄶ",
    ㄵ: "ㄵㄶㄴ",
    ㄶ: "ㄶㄵㄴ",
    ㄷ: "ㄷㅌㅅㅆㅈㅊ",
    ㄹ: "ㄹㄺㄻㄼㄽㄾㄿㅀ",
    ㄺ: "ㄺㄹㄻㄼㄽㄾㄿㅀ",
    ㄻ: "ㄻㄹㄺㄼㄽㄾㄿㅀ",
    ㄼ: "ㄼㄹㄺㄻㄽㄾㄿㅀ",
    ㄽ: "ㄽㄹㄺㄻㄼㄾㄿㅀ",
    ㄾ: "ㄾㄹㄺㄻㄼㄽㄿㅀ",
    ㄿ: "ㄿㄹㄺㄻㄼㄽㄾㅀ",
    ㅀ: "ㅀㄹㄺㄻㄼㄽㄾㄿ",
    ㅁ: "ㅁㄻ",
    ㅂ: "ㅂㅄㅍ",
    ㅄ: "ㅄㅂㅍ",
    ㅅ: "ㅅㄷㅌㅆㅈㅊ",
    ㅆ: "ㅆㄷㅌㅅㅈㅊ",
    ㅇ: "ㅇㅎ",
    ㅈ: "ㅈㄷㅌㅅㅆㅊ",
    ㅊ: "ㅊㄷㅌㅅㅆㅈ",
    ㅋ: "ㅋㄱㄳ",
    ㅌ: "ㅌㄷㅅㅆㅈㅊ",
    ㅍ: "ㅍㅂㅄ",
    ㅎ: "ㅎ",
  },
];

const extraEndSoundCandidates = [
  "ㄱ",
  "ㄲ",
  "ㄳ",
  "ㄴ",
  "ㄵ",
  "ㄶ",
  "ㄷ",
  "ㄹ",
  "ㄺ",
  "ㄻ",
  "ㄼ",
  "ㄽ",
  "ㄾ",
  "ㄿ",
  "ㅀ",
  "ㅁ",
  "ㅂ",
  "ㅄ",
  "ㅅ",
  "ㅆ",
  "ㅇ",
  "ㅈ",
  "ㅊ",
  "ㅋ",
  "ㅌ",
  "ㅍ",
  "ㅎ",
];

const korean_combinationer = (char) => {};

const korean_spliter = (char) => {
  const ga = 44032;
  let charUnicode = char.charCodeAt(0);

  charUnicode = charUnicode - ga;

  let cho = parseInt(charUnicode / 588);
  let joong = parseInt((charUnicode - cho * 588) / 28);
  let jong = parseInt(charUnicode % 28);

  return {
    chosung: { index: cho, char: cho_list[cho] },
    joongsung: { index: joong, char: joong_list[joong] },
    jongsung: { index: jong, char: jong_list[jong] },
  };
};

const korean_obfuscationer = (text) => {
  const charList = text.split("");
  charList.forEach((char) => {
    if (char === " ") {
      return " ";
    } else {
      const splited_korean = korean_spliter(char);
    }
  });
};

btn.addEventListener("click", () => {
  korean_obfuscationer(inputBox.value);
});

// 우선 초성, 중성, 종성의 내용을 담고있는 배열을 생성한다. 첫 번째 문자인 '가'의 유니코드 상수로 지정한다.
// uni 변수는 인수로 받아들인 kor를 유니코드로 변환한다. uni 변수는 기존의 uni 값에서 '가'의 유니코그 값을
// 뺀 것을 저장한다.

// 한글 코드 = 44032 + (초성 * 588) + (중성 * 28) + 종성
// Math.floor((Math.random()*list.length))
