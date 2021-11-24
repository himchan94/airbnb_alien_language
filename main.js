"use strict";

const inputBox = document.querySelector("#before_converted");
const outputBox = document.querySelector("#after_converted");
const convertBtn = document.querySelector(".convert");
const clearBtn = document.querySelector(".clear");

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

const korean_combinationer = (kor) => {
  // kor format
  //     {
  //     chosung: { index: cho, char: cho_list[cho] },
  //     joongsung: { index: joong, char: joong_list[joong] },
  //     jongsung: { index: jong, char: jong_list[jong] },
  //   }

  // 변환 가능한 초성 리스트
  const changable_choList =
    componentConversionTable[0][kor.chosung.char].split("");

  // 변환된 초성
  const changed_cho =
    changable_choList[Math.floor(Math.random() * changable_choList.length)];

  // 변환 가능한 중성 리스트
  const changable_joongList =
    componentConversionTable[1][kor.joongsung.char].split("");

  // 변환된 중성
  const changed_joong =
    changable_joongList[Math.floor(Math.random() * changable_joongList.length)];

  // 종성의 경우에는 종성이 없을 경우, 종성이 있을 경우를 고려한다.
  let changable_jongList;

  if (kor.jongsung.char === "") {
    changable_jongList = jong_list;
  } else {
    changable_jongList =
      componentConversionTable[2][kor.jongsung.char].split("");
  }

  // 변환된 종성
  const changed_jong =
    changable_jongList[Math.floor(Math.random() * changable_jongList.length)];

  // 변환된 문자들의 인덱스값
  let cho_index, joong_index, jong_index;

  cho_index = cho_list.findIndex((char) => char === changed_cho);
  joong_index = joong_list.findIndex((char) => char === changed_joong);
  jong_index = jong_list.findIndex((char) => char === changed_jong);

  // 출력부분, String.fromCharCode(유니코드)
  // 유니코드는 44032 + (초성 * 588) + (중성 * 28)) + 종성
  // String.fromCharCode(44032)

  return String.fromCharCode(
    44032 + cho_index * 588 + joong_index * 28 + jong_index
  );
};

const korean_spliter = (char) => {
  // starting korean unicode
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

  // 한글 이외의 문자와 하나로 구성된 모음 및 자음을 찾기 위한 정규식
  const reg =
    /[ㄱ-ㅎㅏ-ㅣa-zA-Z\d!?@#$%^&*():;+-=~{}<>\_\[\]\|\\\"\'\,\.\/\`\₩]/;

  const conveted_list = charList.map((char) => {
    if (char === " ") {
      return " ";
    } else if (reg.test(char)) {
      return char;
    } else {
      const splited_korean = korean_spliter(char);
      const conveted_korean = korean_combinationer(splited_korean);
      // console.log(conveted_korean);
      return conveted_korean;
    }
  });
  //   console.log(conveted_list);
  return conveted_list;
};

convertBtn.addEventListener("click", () => {
  let output = korean_obfuscationer(inputBox.value);
  outputBox.value = output.join("");
});

clearBtn.addEventListener("click", () => {
  inputBox.value = "";
  outputBox.value = "";
});
