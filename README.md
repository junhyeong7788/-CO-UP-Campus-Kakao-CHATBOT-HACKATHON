<img width="1067" alt="KakaoTalk_Photo_2024-02-01-18-38-24" src="https://github.com/junhyeong7788/-CO-UP-Campus-Kakao-CHATBOT-HACKATHON/assets/114178402/e1b04804-9324-4fa1-b497-5dc3b1db152b"># CO-UP Campus CHATBOT HACKATHON 경진대회

### 지자체, 대학 협력기반 지역혁신 사업 창업 실전 교육

---

## 🏆 Result

24.01.08 ~ 24.01.09 - 경진대회 예선 대회 참석
24.01.09, 16:00 이후 경진대회 - 본선 합격 / 미수상

---

주최 : 교육부, 한국 연구재단, 대구광역시, 대구﹒경북지역혁신플랫폼, 대구창조경제혁신센터
규모 : 총 50명 참가

---

# About

---

## 카카오 오픈빌더와 카카오 비즈니스를 사용하여 `소상공인을 위한 카카오톡 채널 개설 및 카카오톡 챗봇 개발` 하는 대회

# 대회 접근법 및 배운 점

---

이번 대회는 카카오 오픈빌더를 통해 채널과 챗봇을 생성하고 소상공인한테 필요한 기능들을 개발하여 추가하는 대회였습니다.
아래는 텍스트로 작성하였습니다. 자세한 챗봇 구현 그림은 PDF에 첨부되어있습니다.

#### 문제정의

물가 상승으로 인한 소비 위축 및 소상공인 폐업증가에 따른 솔루션 필요성의 대두 되었습니다.
대출 및 지원금은 일시적인 방편이므로 근본적인 해결이 필요했습니다.

#### 구현목표

- 소상공인의 매출증가 및 브랜딩에 도움을 줄 수 있는 챗봇 제작
- 소상공인의 손실 비용을 줄여줄 수 있는 챗봇 제작
- 소비자 위치를 기반으로 하여 메뉴 추천 및 합리적인 소비를 돕는 챗봇 제작
  -> "프롬플레이스"

#### 챗봇 소개

메뉴 추천 : 적응형 추천 시스템/ Ai를 이용한 메뉴 추천 시스템을 이용한 편리하고 간편한 메뉴 선정
(1) 커스텀메뉴 : 커스텀 메뉴창을 이용해 언제든 원하는 시점에서 원하는 작업으로 넘어 갈 수 있도록 함
(2) 카카오맵 연동 : 음식 선택시 주변 반경 1km내 관련 음식점이 전부 검색됨
(3) 카카오맵 앱 이동 : 원하는 식당의 마커 선태깃 카카오맵으로 이동하여 가게 상세정보를 확인가능함
(4) CHATGPT : 음식카테고리 내 원하는게 없으면, chatGPT와의 대화를 통해 어떤 음식을 추천받고 싶은지 자세한 오더 가능함

할인/이벤트 매장 : 주변 진행중인 프로모션에 대한 정보를 한 눈에 정리해주는 활용도 높은 기능 탑재
(1) : 카드 블록을 이용해 가게, 음식 이미지와 진행 프로모션을 동시에 확인하고, 가게 클릭을 통해 예약 및 쿠폰발급까지 가능
(2) : 프롬플레이스와 식당채널의 제휴를 통해 자체쿠폰을 발급해 유입을 늘리는 방식으로 확장이 가능함

마감할인 매장 : 마감할인매장 소개 기능을 이용한 소상공인 비용손실감소 및 소비자 구매심리 연결
(1) : 편리한 원터치 마감할인정보 확인

#### 적용스킬

카카오맵 api -> 소비자 거리파악 api, 추천 검색어 마커 api, 지도 api, 위치기반 검색범위 api, 추천 검색어 리스트 api
ChatGPT -> chatGPT api를 사용하여 연동, 챗봇 스킬 적용 (카카오 Ai 챗봇 심사 후 이용가능, 심사 승인 후 시연 성공)
Json 데이터 크롤링 -> 프로모션 진행정보 수집, 마감할인 정보 수집

#### 개발환경
![Uploading KakaoTalk_Photo_2024-02-01-18-38-24.png…]()

#### 비즈니스 모델

![[Pasted image 20240201174810.png]]

### 배운 점

카카오비즈니스 오픈빌더를 통해 아주 쉽게 카카오챗봇을 만들 수 있었습니다.
챗봇 관리자센터에서 시나리오와 스킬목록을 등록하여, 간단한 기능을 추가할 수 있었습니다.

제가 주로 사용하는 언어는 파이썬이였기에 ChatGPT기능 연동은 flask라이브러리를 사용하였고,
카카오 map API는 자바스크립트로 지원을 하고 있었기에 급하게 해커톤하는 내에 최대한 찾아보게 되었습니다.
flask서버는 잘 연동하여 ChatGPT기능을 추가하였고, 실시간 map 서비스는 현재 위치를 기반으로 주변 음식점을 검색할 수 있는 기능까지 추가할 수 있었습니다.

지도 데이터를 땡겨와서 카드블럭에 띄우지 못했고, 카카오 map api ui 한계로 인해 사용자 친화적인 ui를 그릴 수 가 없었습니다.
또한 지도 내에서 사용자가 상호작용 할 수 있는 부분이 미흡했습니다.