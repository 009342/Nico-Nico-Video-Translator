# 니코니코 동화 번역기(node.js버전)

## 사용법

1. node.js와 OpenSSL의 설치가 선행되어야 합니다.

윈도우용 OpenSSL의 설치는 다음 링크의 Download Win32 OpenSSL을 참고해주세요.

https://slproweb.com/products/Win32OpenSSL.html

node.js의 설치는 다음 링크를 참고해주세요.

https://nodejs.org/ko/

2. 메모장을 관리자 권한으로 실행합니다.

3. 파일->열기를 눌러 파일이름 항목에 C:\Windows\System32\drivers\etc\hosts 를 적고 열기를 눌러주세요. 

4. 맨 아래줄에 127.0.0.1 nmsg.nicovideo.jp를 추가해주세요. 추가하면 다음과 같이 되어야 합니다.
<pre><code># Copyright (c) 1993-2009 Microsoft Corp.
#
# This is a sample HOSTS file used by Microsoft TCP/IP for Windows.
#
# This file contains the mappings of IP addresses to host names. Each
# entry should be kept on an individual line. The IP address should
# be placed in the first column followed by the corresponding host name.
# The IP address and the host name should be separated by at least one
# space.
#
# Additionally, comments (such as these) may be inserted on individual
# lines or following the machine name denoted by a '#' symbol.
#
# For example:
#
#      102.54.94.97     rhino.acme.com          # source server
#       38.25.63.10     x.acme.com              # x client host

# localhost name resolution is handled within DNS itself.
#	127.0.0.1       localhost
#	::1             localhost

127.0.0.1 nmsg.nicovideo.jp
기타 사용자가 추가한 구문들...</pre></code>

5. https://github.com/009342/Nico-Nico-Video-Translator/releases 에서 node.js버전의 니코니코 동화 번역기를 다운받아주세요.

6. 다운받은 파일의 압축을 풀어주고 cert폴더 내의 cert.bat를 관리자권한으로 실행시켜 주세요.

7. 정상적으로 인증서가 설치되면 다음과 같이 출력되어야 합니다.
<pre><code>관리자 권한으로 실행해야 인증서가 설치됩니다!
계속하려면 아무 키나 누르십시오 . . .
개인키를 생성하는 중입니다...
Generating RSA private key, 2048 bit long modulus
.................+++
..................+++
e is 65537 (0x010001)
인증서 서명 요청 파일을 생성하는 중입니다...
인증서를 서명하는 중입니다...
Signature ok
subject=C = KR, CN = sshbrain.tistory.com, emailAddress = 009342@naver.com, O = NA, OU = NA, L = NA
Getting Private key
Root "신뢰할 수 있는 루트 인증 기관"
서명이 공개 키와 일치합니다.
"sshbrain.tistory.com" 인증서가 저장소에 추가되었습니다.
CertUtil: -addstore 명령이 성공적으로 완료되었습니다.
계속하려면 아무 키나 누르십시오 . . .
</pre></code>

8. 다운받은 파일의 run.bat를 실행시켜 주시면 자동으로 동영상 열람시 번역이 됩니다.

9. 한 번만 실행시켜 놓으면 컴퓨터나 프로그램이 꺼지지 않는한 자동 번역이 이뤄집니다.

10. 추후 번역 기능을 사용하고 싶지 않으시다면, 2-4 과정을 반복하되, 맨 아래줄에 추가한 것들만 삭제해주시면 됩니다.

## 알려진 버그

플래시 플레이어를 지원하지 않습니다. 이 버그는, 플래시 플레이어가 간헐적으로 작동하는 관계로 잠시 후 다시 시도해주시거나 새로 고침을 눌러 HTML5 플레이어로 영상을 시청해주시기 바랍니다.

## 오류를 제보하고 싶어요!

오류를 제보하고싶으시다면, GitHub에 회원가입하셔서 위 탭의 issues에 제보를 하시거나,

혹은 제 티스토리 블로그(http://sshbrain.tistory.com/48 )에 댓글로 달아주시면 감사하겠습니다.

오류를 제보하실때에는, 꼭! 동영상 오류가 일어나는 주소를 반드시 함께 첨부해주시기 바랍니다.
