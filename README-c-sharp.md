# 니코니코 동화 번역기(C# 버전)

제작과정의 자세한 내용은 아래의 링크를 참고해주세요.

http://sshbrain.tistory.com/48

## 사용법

1. 메모장을 관리자 권한으로 실행합니다.

2. 파일->열기를 눌러 파일이름 항목에 C:\Windows\System32\drivers\etc\hosts 를 적고 열기를 눌러주세요. 

3. 맨 아래줄에 127.0.0.1 nmsg.nicovideo.jp와 127.0.0.1 www.nicovideo.jp 를 추가해주세요. 추가하면 다음과 같이 되어야 합니다.
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
127.0.0.1 www.nicovideo.jp
기타 사용자가 추가한 구문들...</pre></code>

4. https://github.com/009342/Nico-Nico-Video-Translator/releases 에서 최신버전의 니코니코 동화 번역기를 다운받아주세요.

5. 사용할 번역 서비스의 번호를 입력해주세요.

6. 정상적으로 실행이 되면, 다음과 같이 실행됩니다.
<pre><code>사용할 번역 서비스를 선택해주세요.
1. Google 번역
2. 파파고 번역
3. 사용하지 않음
1
서버가 127.0.0.1:80에서 작동되고 있습니다...
</pre></code>

만약 위와 같은 메세지가 뜨지 않고, 다음과 같은 오류가 뜰 경우,
<pre><code>사용할 번역 서비스를 선택해주세요.
1. Google 번역
2. 파파고 번역
3. 사용하지 않음
1
서버가 127.0.0.1:80에서 작동되고 있습니다...

처리되지 않은 예외: System.Net.Sockets.SocketException: 각 소켓 주소(프로토콜/네트워크 주소/포트)는 하나만 사용할 수 있 습니다
   위치: System.Net.Sockets.Socket.DoBind(EndPoint endPointSnapshot, SocketAddress socketAddress)
   위치: System.Net.Sockets.Socket.Bind(EndPoint localEP)
   위치: NicoNicoTranslator.NicoNicoServer.RunServer()
   위치: NicoNicoTranslator.Program.Main(String[] args)
</pre></code>

80번 포트가 사용되고 있는지 확인해주시기 바랍니다.(웹서버, 기타 80번 포트를 사용하는 프로그램들...)

7. 니코니코 동화 사이트에 접속하여 동영상을 보게 되면,
<pre><code>사용할 번역 서비스를 선택해주세요.
1. Google 번역
2. 파파고 번역
3. 사용하지 않음
1
서버가 127.0.0.1:80에서 작동되고 있습니다...
접속 :127.0.0.1:2231
Host: nmsg.nicovideo.jp
Origin: http://www.nicovideo.jp
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36
Content-Type: text/plain;charset=UTF-8
Accept: */*
Referer: http://www.nicovideo.jp/watch/sm32430755
Accept-Encoding: gzip, deflate
Accept-Language: ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7
51 / 51 완료
접속해제 :127.0.0.1:2231
</pre></code>

과 같은 창이 나오고, 가장 하단에 **접속해제 :127.0.0.1:XXXX** 와 같은 창이 나오면, 웹 페이지로 전송이 된 것입니다.

8. 한 번만 실행시켜 놓으면 컴퓨터나 프로그램이 꺼지지 않는한 자동 번역이 이뤄집니다.

9. 추후 번역 기능을 사용하고 싶지 않으시다면, 2-3 과정을 반복하되, 맨 아래줄에 추가한 것들만 삭제해주시면 됩니다.

## 알려진 버그

플래시 플레이어를 지원하지 않습니다. 이 버그는, 플래시 플레이어가 간헐적으로 작동하는 관계로 잠시 후 다시 시도해주시거나 새로 고침을 눌러 HTML5 플레이어로 영상을 시청해주시기 바랍니다.

**로그인시 https://account.nicovideo.jp로 접속해야만 합니다.**

**언어변경이 불가능합니다.**

## 오류를 제보하고 싶어요!

오류를 제보하고싶으시다면, GitHub에 회원가입하셔서 위 탭의 issues에 제보를 하시거나,

혹은 제 티스토리 블로그(http://sshbrain.tistory.com/48 )에 댓글로 달아주시면 감사하겠습니다.

오류를 제보하실때에는, 꼭! 동영상 오류가 일어나는 주소를 반드시 함께 첨부해주시기 바랍니다.


## 참고

http://nowonbun.tistory.com/178

https://github.com/Grizley56/GoogleTranslateFreeApi

https://github.com/009342/PapagoTranslateAPI

위 코드의 일부를 인용하였습니다.