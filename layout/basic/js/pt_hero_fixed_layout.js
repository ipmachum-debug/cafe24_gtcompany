/**
 * Pinterest 스타일 히어로 배너 - 고정 배치 버전
 * 2,2,1,1,1,2,2 열 구조 + 10px 간격 + 상하 페이드
 */
(function() {
  const hero = document.getElementById('ptHero');
  if (!hero) return;

  const grid = document.getElementById('ptGrid');
  const dots = hero.querySelectorAll('.pt-hero__dots .dot');

  // ✅ 11장씩 4세트
  const sets = [
    [
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero01.jpg",
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero02.jpg",
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero03.jpg",
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero04.jpg",
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero05.jpg",
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero06.jpg",
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero07.jpg",
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero08.jpg",
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero09.jpg",
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero10.jpg",
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero11.jpg"
    ],
    [
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero02.jpg",
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero03.jpg",
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero04.jpg",
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero05.jpg",
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero06.jpg",
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero07.jpg",
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero08.jpg",
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero09.jpg",
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero10.jpg",
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero11.jpg",
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero01.jpg"
    ],
    [
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero03.jpg",
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero04.jpg",
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero05.jpg",
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero06.jpg",
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero07.jpg",
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero08.jpg",
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero09.jpg",
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero10.jpg",
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero11.jpg",
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero01.jpg",
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero02.jpg"
    ],
    [
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero04.jpg",
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero05.jpg",
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero06.jpg",
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero07.jpg",
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero08.jpg",
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero09.jpg",
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero10.jpg",
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero11.jpg",
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero01.jpg",
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero02.jpg",
      "https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/hero03.jpg"
    ]
  ];

  /**
   * 2,2,1,1,1,2,2 열 구조 고정 배치
   * 카드 너비: 210px, 간격: 10px
   * 
   * 열 0,1: 2개 (좌측)
   * 열 2,3: 2개
   * 열 4: 1개 (중앙)
   * 열 5: 1개
   * 열 6: 1개
   * 열 7,8: 2개 (우측)
   * 열 9,10: 2개
   */
  const CARD_WIDTH = 210;
  const GAP = 10;
  const CARD_HEIGHT = 274; // 210 * (1040/800)

  // 2,2,1,1,1,2,2 패턴
  const columnPattern = [2, 2, 1, 1, 1, 2, 2];
  
  // 각 카드의 열(col) 및 행(row) 위치 계산
  const positions = [];
  let cardIdx = 0;
  
  for (let col = 0; col < columnPattern.length; col++) {
    const colCount = columnPattern[col];
    for (let row = 0; row < colCount; row++) {
      positions.push({ col, row });
      cardIdx++;
    }
  }

  /**
   * 열의 X 좌표 계산 (중앙 정렬)
   */
  function getColumnX(col) {
    let x = 0;
    for (let i = 0; i < col; i++) {
      x += CARD_WIDTH + GAP;
    }
    return x;
  }

  /**
   * 전체 너비 계산
   */
  function getTotalWidth() {
    let total = 0;
    for (let col = 0; col < columnPattern.length; col++) {
      total += CARD_WIDTH + GAP;
    }
    return total - GAP; // 마지막 간격 제거
  }

  /**
   * 행의 Y 좌표 계산
   */
  function getRowY(row) {
    return row * (CARD_HEIGHT + GAP);
  }

  /**
   * 세트 렌더링
   */
  function renderSet(setIdx) {
    hero.classList.remove('is-on');
    grid.innerHTML = '';

    const urls = sets[setIdx] || sets[0];
    const totalWidth = getTotalWidth();
    const containerWidth = window.innerWidth;
    const offsetX = (containerWidth - totalWidth) / 2; // 중앙 정렬

    urls.forEach((src, i) => {
      const pos = positions[i];
      if (!pos) return;

      const card = document.createElement('div');
      card.className = 'pt-card';

      // 좌우 맨끝 카드 (col 0과 col 6) → topLift(-50px)
      if (pos.col === 0 || pos.col === columnPattern.length - 1) {
        card.classList.add('is-lifted');
      }

      // 이미지
      const img = document.createElement('img');
      img.src = src + '?v=' + Date.now();
      img.alt = '';
      card.appendChild(img);

      // CSS 변수: 블러 배경
      card.style.setProperty('--bg', `url("${src}")`);

      // 위치 계산
      const x = offsetX + getColumnX(pos.col);
      const y = getRowY(pos.row);

      card.style.left = x + 'px';
      card.style.top = y + 'px';

      // 애니메이션 딜레이
      card.style.transitionDelay = (i * 35) + 'ms';

      grid.appendChild(card);
    });

    // 등장 애니메이션 트리거
    requestAnimationFrame(() => {
      hero.classList.add('is-on');
    });

    // 닷 업데이트
    dots.forEach(d => d.classList.remove('is-active'));
    if (dots[setIdx]) dots[setIdx].classList.add('is-active');
  }

  // 닷 클릭 이벤트
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      renderSet(parseInt(dot.dataset.set, 10));
    });
  });

  // 초기 렌더링
  renderSet(0);

  // 윈도우 리사이즈 시 재렌더링
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const currentSetIdx = Array.from(dots).findIndex(d => d.classList.contains('is-active'));
      renderSet(currentSetIdx >= 0 ? currentSetIdx : 0);
    }, 300);
  });

})();
