# Flask 웹 프레임워크와 jsonify 모듈을 import합니다.
from flask import Flask, jsonify

# random 모듈과 sys 모듈을 import합니다.
import random
import sys

# Flask 애플리케이션을 생성합니다.
application = Flask(__name__)

# "/random" 경로에 대한 POST 메서드 핸들러를 정의합니다.
@application.route("/random", methods=["POST"])
def random_function():
    # 응답을 위한 JSON 형식의 데이터를 생성합니다.
    response = {
        "version": "2.0",
        "template": {
            "outputs": [
                {
                    "simpleText": { 
                        # 1부터 45 사이의 랜덤한 정수를 문자열로 변환하여 출력합니다.
                        "text": str(random.randint(1, 45)) 
                    }
                }
            ]
        }
    }
    # 생성한 응답을 JSON 형식으로 반환합니다.
    return jsonify(response) 

# 현재 스크립트가 메인 모듈로 실행되는 경우에만 서버를 실행합니다.
if __name__ == "__main__":
    # 명령행 인수로 전달된 포트 번호를 사용하여 Flask 애플리케이션을 실행합니다.
    # debug 모드가 활성화되어 있어서 코드 변경이 자동으로 감지되고 서버가 재시작됩니다.
    application.run(host='0.0.0.0', port=int(sys.argv[1]), debug=True)
