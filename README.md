# 니코니코 동화 번역기

**0.9버전으로, 일부 대사가 제대로 번역되지 않는 버그가 존재합니다.**

**그럼에도 불구하고, 사용하시고 싶으신 분은 아래의 사용법을 참고해주세요.**

제작과정의 자세한 내용은 아래의 링크를 참고해주세요.

http://sshbrain.tistory.com/48

## 사용법

1. 메모장을 관리자 권한으로 실행합니다.

2. 파일->열기를 눌러 파일이름 항목에 C:\Windows\System32\drivers\etc\hosts 를 적고 열기를 눌러주세요. 

3. 맨 아래줄에 **127.0.0.1 nmsg.nicovideo.jp** 를 추가해주세요. 추가하면 다음과 같이 되야 합니다.
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

4. https://github.com/009342/Nico-Nico-Video-Translator/releases 에서 최신버전의 니코니코 동화 번역기를 다운받아주세요.

5. 정상적으로 실행이 되면, 다음과 같이 실행됩니다.
<pre><code>Bing 번역 쿠키를 가져오는 중입니다...
Bing 쿠키 저장 완료!
서버가 127.0.0.1:80에서 작동되고 있습니다...
</pre></code>

만약 위와 같은 메세지가 뜨지 않고, 다음과 같은 오류가 뜰 경우,
<pre><code>Bing 번역 쿠키를 가져오는 중입니다...
Bing 쿠키 저장 완료!
서버가 127.0.0.1:80에서 작동되고 있습니다...

처리되지 않은 예외: System.Net.Sockets.SocketException: 각 소켓 주소(프로토콜/네트워크 주소/포트)는 하나만 사용할 수 있 습니다
   위치: System.Net.Sockets.Socket.DoBind(EndPoint endPointSnapshot, SocketAddress socketAddress)
   위치: System.Net.Sockets.Socket.Bind(EndPoint localEP)
   위치: NicoNicoTranslator.NicoNicoServer.RunServer()
   위치: NicoNicoTranslator.Program.Main(String[] args)
</pre></code>

80번 포트가 사용외고 있는지 확인해주시기 바랍니다.(웹서버, 기타 80번 포트를 사용하는 프로그램들...)

6. 니코니코 동화 사이트에 접속하여 동영상을 보게 되면,
<pre><code>Bing 번역 쿠키를 가져오는 중입니다...
Bing 쿠키 저장 완료!
서버가 127.0.0.1:80에서 작동되고 있습니다...
접속 :127.0.0.1:8258
Host: nmsg.nicovideo.jp
Origin: http://www.nicovideo.jp
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36
Content-Type: text/plain;charset=UTF-8
Accept: */*
Referer: http://www.nicovideo.jp/watch/sm32430755
Accept-Encoding: gzip, deflate
Accept-Language: ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7
46/2 : かっこいい->멋 있는
46/3 : 主ありがとう->주 님 감사 합니다
46/4 : ?がクリソツ->음성이 クリソツ
46/5 : ↓韓?版の日本語いいね->↓ 대한민국 버전의 일본어.
46/6 : 鳥肌やばい->소름이 돋는 조금은 어두운 면
46/7 : 韓?版はこんな感じなんだ->대한민국 판은 이런 느낌 이에요
46/8 : 歌詞?の日本語?あるのありがたい->가사 번역의 일본어 번역 인의 감사
46/9 : 胸の??がる　舞台の上、その熱?->가슴 뒤로 눕는 무대 위, 그 열기
46/10 : 七色かせ?　解いたら->7 가지 색 타래 실 폐지 되 면
46/11 : 知ってるじゃない！もう37.5℃->알고 계십니까 잖 아! 다시 37.5 ° C
46/12 : 熱望、何が正しい道か->열망, 무엇이 올바른 길 인지
46/13 : 彷徨、どこに向かってるのか->망설임, 어디로 향하고 계십니까?
46/14 : Shout out、?目を閉じていた私->Shout out 두 눈을 감고 있었는데
중략...
접속해제 :127.0.0.1:8258
</pre></code>

과 같은 창이 나오고, 가장 하단에 **접속해제 :127.0.0.1:XXXX** 와 같은 창이 나오면, 웹 페이지로 전송이 된 것입니다.

7. 한 번만 실행시켜 놓으면 컴퓨터나 프로그램이 꺼지지 않는한 자동 번역이 이뤄집니다. Bing번역을 사용하니, 번역의 퀄리티는 기대하지 말아주세요.

8. 추후 변역 기능을 사용하고 싶지 않으시다면, 2-3 과정을 반복하되, 맨 아래줄에 추가한 **127.0.0.1 nmsg.nicovideo.jp** 만 삭제해주시면 됩니다.

## 오류를 제보하고 싶어요!

오류를 제보하고싶으시다면, GitHub에 회원가입하셔서 위 탭의 issues에 제보를 하시거나,

혹은 제 티스토리 블로그(http://sshbrain.tistory.com/48 )에 댓글로 달아주시면 감사하겠습니다.

오류를 제보하실때에는, 꼭! 동영상 오류가 일어나는 주소를 반드시 함께 첨부해주시기 바랍니다.

## 알려진 버그

일부 대사가 번역되지 않습니다.

플래시 플레이어를 지원하지 않습니다. 이 버그는, 플래시 플레이어가 간헐적으로 작동하는 관계로 잠시 후 다시 시도해주시거나 새로 고침을 눌러 HTML5 플레이어로 영상을 시청해주시기 바랍니다.

일부 스크립트에 '\' 와 같은 일부 특수문자가 들어가 있을 경우, Bing 번역의 오류로 아래와 같은 오류가 발생할 수 있습니다.

    コメントの取得に失敗しました。
	댓글을 가져 오는 데 실패했습니다.

## 참고

http://nowonbun.tistory.com/178

https://github.com/bmg0001/Bing-Translator-API

위 코드의 일부, 혹은 전체를 인용하였습니다.

## 주의

이 프로그램을 사용하여 발생할 수 있는 모든 책임은 사용자에게 있습니다.

또한 이 프로그램의 소스코드는 GNU 일반 공중 사용 허가서(GNU General Public License)에 의해 보호받습니다.

GNU 일반 공중 사용 허가서(GNU General Public License)의 전문은 다음을 참고하십시오.

https://github.com/009342/Nico-Nico-Video-Translator/blob/master/LICENSE
