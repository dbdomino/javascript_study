// Module    라이브러리
// node를 효율적으로 실행하기위해 함수를 지원하는 라이브러리

function showLogMessage(msg) {
    console.log(`---------------------------`)
    console.log(`로그메시지는 : ${msg}`)
    console.log(`---------------------------`)
}

function showLogMessage2(msg) {
    console.log(`---------------------------`)
    console.log(`로그메시지 두번째메소드는 : ${msg}`)
    console.log(`---------------------------`)
}

const precious_value = 79

// 모듈 제공할 때
// 다른파일에서 가져다 쓸 때 이런식으로 가져다 쓰라고 정의하는 방식
module.exports.info   = showLogMessage
module.exports.debug  = showLogMessage2
module.exports.pvalue = precious_value
