function validateEmail(email) {
  if (typeof (email) === "string") {
    const emailArray = Array.from(email);
    // 주어진 객체나 이터러블을 배열로 변환하는 javascriipt 함수
    // 한문자씩 나눠서 배열에 담아짐
    // [q,j,q,m,f,g..]

// '@'와 '.'문자를 필터링
const filteredArray = emailArray.filter(char => {
  // filter() 함수는 callback 함수를 배열의 모든 요소에 대해 실행하고, callback 함수가 true를 반환하는 요소만을 새 배열에 포함시킵니다. 그렇지 않은 요소는 제외됩니다.
  // filter() 함수는 원본 배열을 변경하지 않고 새 배열을 반환하므로, 필요에 따라 결과를 변수에 할당하거나 직접 사용할 수 있습니다.
  if (char === '@') {
    return true;
  } else if (char === '.') {
    return true;
  } else {
    return false;
  }
});
// 필터링된 배열에서 '@'와 '.' 문자의 존재 여부를 확인
// includes() 메서드는 배열 메서드이다. 
// 원할한 사용을 위해서는 공식문서(mdn)사용이 필수적이다. 

const hasAtSign = filteredArray.includes('@');
const hasDot = filteredArray.includes('.');
// filteredArray.includes('@');는 JavaScript 배열(filteredArray)에 특정 요소('@')가 포함되어 있는지를 확인하는 함수 호출입니다.

// includes() 메서드는 배열 내에서 주어진 요소가 존재하는지 여부를 불리언(Boolean) 값으로 반환합니다. 만약 배열에 해당 요소가 존재하면 true를 반환하고, 그렇지 않으면 false를 반환합니다.

return hasAtSign && hasDot; // 두개의 값이 모두 참이면 참을 반환한다.
} else {
  console.log(email + "<- 이 매개변수는 올바른 데이터타입이 아닙니다.");
}
}

module.exports = validateEmail;
