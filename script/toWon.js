// 숫자를 원(Won) 단위로 포맷팅하는 함수
function toWon(price) {
    return new Intl.NumberFormat('ko-KR').format(price);
    
}

// 사용 예시:
// toWon(3000)      // "₩3,000"
// toWon(100000)    // "₩100,000"
// toWon(1500000)   // "₩1,500,000"
