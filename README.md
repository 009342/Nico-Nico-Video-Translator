# 니코니코 동화 번역기

제작과정의 자세한 내용은 아래의 링크를 참고해주세요.

http://sshbrain.tistory.com/48

**HTTPS 지원을 위해 기존 C#버전과는 다른 node.js버전을 새로 추가했습니다.**

**각 버전마다 장단점이 다르니, 비교 후 이용해주시기를 부탁드립니다!**

## C#버전

C#버전의 이용방법은 기존과 같습니다.

사용법은 아래링크를 참조하시기 바랍니다.

https://github.com/009342/Nico-Nico-Video-Translator/blob/master/README-c-sharp.md

## node.js버전

C#버전과 다르게 HTTPS를 자체 지원해 안정성이 대폭 향상되었지만, OpenSSL, node.js의 설치가 필요합니다.

사용법은 아래링크를 참조하시기 바랍니다.

https://github.com/009342/Nico-Nico-Video-Translator/blob/master/README-nodejs.md

## 오류를 제보하고 싶어요!

오류를 제보하고싶으시다면, GitHub에 회원가입하셔서 위 탭의 issues에 제보를 하시거나,

혹은 제 티스토리 블로그(http://sshbrain.tistory.com/48 )에 댓글로 달아주시면 감사하겠습니다.

오류를 제보하실때에는, 꼭! 동영상 오류가 일어나는 주소를 반드시 함께 첨부해주시기 바랍니다.

## 주의

이 프로그램을 사용하여 발생할 수 있는 모든 책임은 사용자에게 있습니다.

또한 이 프로그램의 소스코드는 GNU 일반 공중 사용 허가서(GNU General Public License)에 의해 보호받습니다.

GNU 일반 공중 사용 허가서(GNU General Public License)의 전문은 다음을 참고하십시오.

https://github.com/009342/Nico-Nico-Video-Translator/blob/master/LICENSE

### 변경 사항

#### 2018-10-22

HTTPS 적용을 위해 언어를 C#에서 HTTPS라이브러리가 제공되는 node.js버전을 추가했습니다.

#### 2018-10-04

nmsg.nicovideo.jp를 HTTPS에서 HTTP를 이용하도록 임시로 수정했지만, 매우 안정적이지 않습니다.

상황에 따라서 적당히 이용해주시기를 부탁드립니다.

#### 2018-08-07

Google 번역 API의 버그로 인해 GoogleTranslateFreeApi를 54afbff로 초기화

#### 2018-08-06 #3

파파고 번역 API 구현과 파파고 번역 기능을 추가하였습니다.

#### 2018-08-06 #2

함수가 async로 변경되면서 try~ catch문이 빠진 문제를 수정하였습니다.

#### 2018-08-06 

Google 번역 라이브러리를 추가하여 Google 번역을 사용하여 이용할 수 있도록 수정하였습니다.

과도한 트래픽이 발생하면 IP밴을 먹을 가능성이 있으니, 사용시 주의해 주시기 바랍니다.

#### 2018-03-31

~~마이크로소프트 측에서 편법으로 Bing 번역을 사용하는 알고리즘을 막았습니다.~~

~~더 이상 사용이 불가능합니다.~~

