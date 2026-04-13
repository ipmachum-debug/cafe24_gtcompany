/* 게시판 사이드바 active 상태 동적 설정 */
(function () {
  var boardNoMap = {
    '1': 'board_no=1',
    '4': 'board_no=4',
    '6': 'board_no=6',
    '3': 'board_no=3',
    '9': 'board_no=9'
  };

  // URL에서 board_no 추출
  var params = new URLSearchParams(window.location.search);
  var boardNo = params.get('board_no');
  var isIndexPage = window.location.pathname.indexOf('/board/index.html') !== -1;

  // 사이드바 메뉴 active 설정
  var sidebarLinks = document.querySelectorAll('.board-sidebar-menu a');
  var mobileLinks = document.querySelectorAll('.mobile-cs-tabs a');

  function setActive(links) {
    // 기존 active 모두 제거
    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove('active');
    }

    for (var i = 0; i < links.length; i++) {
      var href = links[i].getAttribute('href') || '';

      if (isIndexPage) {
        // 고객센터 메인 페이지
        if (href.indexOf('/board/index.html') !== -1 || links[i].classList.contains('cs-link-main')) {
          links[i].classList.add('active');
        }
      } else if (boardNo) {
        // board_no 기반 매칭
        if (href.indexOf('board_no=' + boardNo) !== -1) {
          links[i].classList.add('active');
        }
      }
    }
  }

  if (sidebarLinks.length) setActive(sidebarLinks);
  if (mobileLinks.length) setActive(mobileLinks);
})();
