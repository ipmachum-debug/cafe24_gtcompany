=================================================================
미미스상회 Skin4 - UI 개선 적용 완료 (2025.12.01)
=================================================================

본 파일은 모바일 UI 개선 사항이 모두 적용된 버전입니다.

■ 적용된 수정 사항
=================================================================

1. 모바일 햄버거 아이콘 수정
   - 파일: layout/basic/css/custom_mobile.css
   - 내용: 3개 라인 모두 표시되도록 CSS 구조 변경

2. 헤더 아이콘 정리
   - 파일: layout/basic/css/custom_mobile.css
   - 내용: 로고 오른쪽에 장바구니만 표시, 검색/마이페이지 숨김

3. 하단 네비게이션 아이콘 디자인 개선
   - 파일: layout/basic/footer.html
   - 파일: svg/icon-grid.html, icon-search.html, icon-home.html, 
          icon-cart.html, icon-user.html
   - 내용: 라인 스타일의 세련된 SVG 아이콘으로 교체

4. 카테고리 아이콘 색상 변경
   - 파일: layout/basic/css/custom_mobile.css
   - 내용: 오렌지색(#ff8c00) 적용

5. 하단 네비게이션 아이콘-텍스트 여백 조정
   - 파일: layout/basic/css/custom_mobile.css
   - 내용: gap 속성으로 6px 여백 추가

6. 홈 텍스트 위치 조정
   - 파일: layout/basic/css/custom_mobile.css
   - 내용: 아이콘 중앙 하단에 배치

7. 히어로 배너 레이아웃 개선
   - 파일: layout/basic/css/custom_mobile.css
   - 파일: layout/basic/js/main.js
   - 내용: 모바일에서 여백 제거, 전체 화면 꽉 채움

8. 히어로 배너 텍스트 오버레이 추가
   - 파일: layout/basic/css/custom_mobile.css
   - 내용: 배너 이미지 위에 텍스트 표시

9. 헤더 JavaScript 코드 복구
   - 파일: layout/basic/header.html
   - 내용: 잘려있던 햄버거 메뉴 스크립트 완전 복구

10. 고객센터 메뉴 수정
    - 파일: layout/basic/header.html
    - 내용: 드롭다운 메뉴 항목 하드코딩으로 변경

■ 적용 방법
=================================================================

1. 기존 스킨 백업
   - 쇼핑몰 관리자 > 디자인 관리 > 스킨 관리
   - 현재 스킨 다운로드하여 백업

2. 수정된 스킨 업로드
   - 이 zip 파일을 압축 해제
   - FTP 또는 관리자 페이지에서 파일 업로드
   - 기존 파일 덮어쓰기

3. 캐시 삭제
   - 쇼핑몰 관리자에서 캐시 초기화
   - 브라우저 캐시 삭제 또는 시크릿 모드에서 테스트

4. 모바일 화면 확인
   - 실제 모바일 기기 또는 브라우저 개발자 도구에서 테스트
   - 햄버거 아이콘, 하단 네비게이션, 히어로 배너 확인

■ 주의 사항
=================================================================

- 본 파일은 2025년 12월 1일 기준으로 제공된 skin4.zip을 
  기반으로 수정되었습니다.

- 적용 전 반드시 기존 스킨을 백업하세요.

- 문제 발생 시 백업한 파일로 복구할 수 있습니다.

- 추가 커스터마이징이 필요한 경우 개별 파일을 수정하세요.

■ 수정된 파일 목록
=================================================================

layout/basic/header.html
layout/basic/footer.html
layout/basic/css/custom_mobile.css
layout/basic/css/mimi_header.css (기존 파일 유지)
layout/basic/js/main.js
svg/icon-grid.html
svg/icon-search.html
svg/icon-home.html
svg/icon-cart.html
svg/icon-user.html

=================================================================
문의: 첨부된 mobile_ui_improvement_guide.md 참고
=================================================================
