from flask import Flask, jsonify, request
import sys, json, datetime
app = Flask(__name__)

days_of_the_week_list = ['월', '화', '수', '목', '금', '토', '일']
@app.route("/day", methods=["POST"])
def days_of_the_week():
    request_data = json.loads(request.get_data(), encoding='utf-8') # request.get_data()는 bytes 타입이므로 json.loads()를 사용하여 문자열로 변환
    print(request_data)

    params = request_data['action']['params'] #'action'의 'params'를 가져옴 #params란? 사용자가 입력한 데이터를 의미
    param_date = json.loads(params['sys_date_params']) 
    print(param_date)

    date_obj = datetime.datetime(
        int(param_date['year']) if param_date['year'] else datetime.datetime.today().year,
        int(param_date['month']),
        int(param_date['day'])
    )
    response = {
        "version": "2.0",
        "template": {
            "outputs": [
                {
                    "simpleText": {
                        "text": days_of_the_week_list[date_obj.weekday()] + "요일입니다."
                    }
                }
            ]
        }
    }
    return jsonify(response) # jsonify()는 dict 타입을 JSON 형식으로 변환

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=int(sys.argv[1]), debug=True)