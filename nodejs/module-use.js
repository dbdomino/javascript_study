// module.js 불러오기
const logger = require('./module.js')  // 파일명으로 불러온다.
// express 모듈을 불러와서 webservice 를 작성할 수 있다.

logger.info('모듈에 대해 테스트하고있어요.')
logger.debug('모듈에 대해 테스트하고있어요.')
logger.debug('모듈에 대해 pvalue 받아오는 : ' + logger.pvalue)
