/** 오우이_JS 210806 **/
jQuery(document).ready(function () {

  /* =========================
     1. 메인 상품 슬라이드 (기존)
     ========================= */
  var special_slide = new Swiper('.special_slide', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    observer: true,
    observeParents: true,
    speed: 700,
    watchOverflow: 'true',
    preloadImages: false,
    lazy: {
      loadPrevNext: true,
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
      draggable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next-special_slide',
      prevEl: '.swiper-button-prev-special_slide',
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      768: {
        slidesPerView: 'auto',
        spaceBetween: 10,
      },
    }
  });

  /* =========================
     2. 메인 탭카테고리 (기존)
     ========================= */
  jQuery(".main_product_tab li").bind("click", function () {
    jQuery(this).parent().find('li button').removeClass("active");
    jQuery(this).parents('.main_product_category').find('.content_list .tabcontent').removeClass("active");
    jQuery('button', this).addClass("active");
    var activeTab = jQuery('button', this).attr("data-id");
    jQuery(this).parents('.main_product_category').find('.content_list .tabcontent' + '#' + activeTab).addClass("active");
  });
  jQuery('.main_product_category .main_product_inner .main_product_tab li button, .content_list .tabcontent').removeClass('active'); // 나머지 탭 숨김
  jQuery('.main_product_category .main_product_inner .main_product_tab li:first-child button, .content_list .tabcontent:first-child').addClass('active'); // 첫번째 탭 오픈

  /* =========================
     3. 메인 텍스트배너 링크 없을시 영역삭제 (기존)
     ========================= */
  jQuery(".main_text_link").each(function () {
    var text_none = jQuery('a', this).text();
    if (text_none == '') {
      jQuery(this).hide();
    }
  });

  /* =========================
     4. EZST 이미지 갤러리 (기존)
     ========================= */
  EZST.register('image-gallery/2', function () {
    return {
      connect: connect,
      change: change,
    };

    function connect(section, type) {
      _reset(section, type);
    }

    function change(section, type) {
      _reset(section, type);
    }

    function _reset(section, type) {
      // 섹션 초기화 처리
      /* 메인 텍스트갤러리배너 노출설정보다 배너가 적을때 중앙정렬 */
      jQuery(section).find(".main_3dan_banner ul").each(function () {
        var grid_num = parseInt(jQuery(section).find("[data-ez-column]").attr('data-ez-column'), 10); //설정한 노출개수
        var li_num = parseInt(jQuery(section).attr('data-ez-item-length'), 10); //등록된 아이템 개수

        if (!document.documentElement.classList.contains('ez-view-type-mobile') && grid_num > li_num) { // 모바일 아닐때
          jQuery(this).css('justify-content', 'center');
          jQuery('li', this).css('flex', '1');
        } else {
          jQuery(this).css('justify-content', '');
          jQuery('li', this).css('flex', '');
        }

        if (grid_num == '4') { // 설정한 노출 개수가 4개일때
          if (li_num >= grid_num) { // 등록한 아이템 개수가 노출개수보다 많을때
            jQuery(this).addClass("fs_medium");
          }
        }

        if (grid_num == '5') { // 설정한 노출 개수가 5개일때
          if (li_num >= grid_num) { // 등록한 아이템 개수가 노출개수보다 많을때
            jQuery(this).addClass("fs_small");
          } else if (li_num == '4') {
            jQuery(this).addClass("fs_medium");
          }
        }

        if (li_num < '4') { // 배너가 4개 미만이면 더보기 버튼 숨김
          jQuery(this).parent('.main_3dan_banner').find('.main_image_text_gallery_more').hide();
        }
        if (li_num == '1') { // 배너가 1장일때
          jQuery('li a picture img', this).css('width', '100%');
          jQuery('li', this).css('width', '100%');
        }
      });
      /* 메인 텍스트갤러리배너 더보기 */
      jQuery(section).find(".main_image_text_gallery_more_btn").on("click", function (event) {
        jQuery(section).find('ul li').show().animate({ opacity: 1 });
        jQuery(this).parent().hide();
      });
    }
  });

  /* =====================================================
     5. 미미스 메인 : 히어로 배너 Swiper
  ===================================================== */
  function initHeroSwiper() {
    if (typeof Swiper === 'undefined' || !document.querySelector('.hero-swiper')) {
      return;
    }

    // 히어로 배너 이미지 로드 대기
    var heroImages = document.querySelectorAll('.hero-swiper img');
    var loadedCount = 0;
    var totalImages = heroImages.length;

    function checkAllImagesLoaded() {
      loadedCount++;
      if (loadedCount === totalImages) {
        createSwiper();
      }
    }

    function createSwiper() {
      var heroSwiper = new Swiper('.hero-swiper', {
        loop: true,
        speed: 300,
        centeredSlides: true,
        slidesPerView: 3.1,
        spaceBetween: 32,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.hero-swiper .swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          0: {                      // 모바일 (0~639px)
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 0,
            speed: 300,
            width: window.innerWidth,
          },
          640: {                    // 작은 태블릿
            slidesPerView: 2.0,
            centeredSlides: true,
            spaceBetween: 18,
          },
          1024: {                   // 태블릿
            slidesPerView: 2.5,
            centeredSlides: true,
            spaceBetween: 26,
          },
          1280: {                   // PC 이상
            slidesPerView: 3.1,
            centeredSlides: true,
            spaceBetween: 32,
          }
        }
      });
    }

    // 이미지 로드 확인
    if (totalImages === 0) {
      createSwiper();
    } else {
      heroImages.forEach(function(img) {
        if (img.complete) {
          checkAllImagesLoaded();
        } else {
          img.addEventListener('load', checkAllImagesLoaded);
          img.addEventListener('error', checkAllImagesLoaded);
        }
      });
    }
  }

  // DOM 로드 후 초기화
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHeroSwiper);
  } else {
    initHeroSwiper();
  }

  /* =====================================================
     6. 미미스 메인 : 레시피 상품 Swiper
     ===================================================== */
  if (typeof Swiper !== 'undefined' && document.querySelector('.recipe-swiper')) {
    var recipeSwiper = new Swiper('.recipe-swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 4,
        },
      },
    });
  }

  /* =====================================================
     7. 오늘만 판매특가 실시간 타이머
     ===================================================== */
  function initFlashSaleTimer() {
    var section = document.querySelector('.flash-sale-section');
    if (!section) return;

    var timerEls = section.querySelectorAll('.timer-text');
    if (!timerEls.length) return;

    // 오늘 자정(23:59:59)까지 남은 시간 기준
    function getTodayDeadline() {
      var now = new Date();
      var end = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        23, 59, 59
      );
      // 이미 자정을 넘었다면 내일 자정까지로 설정 (안전장치)
      if (end.getTime() <= now.getTime()) {
        end = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() + 1,
          23, 59, 59
        );
      }
      return end;
    }

    var deadline = getTodayDeadline();
    var timerId = null;

    function updateTimer() {
      var now = new Date();
      var diff = deadline - now;

      if (diff <= 0) {
        timerEls.forEach(function (el) {
          el.textContent = '오늘 특가가 종료되었습니다.';
        });
        if (timerId) clearInterval(timerId);
        return;
      }

      var totalSeconds = Math.floor(diff / 1000);
      var hours = Math.floor(totalSeconds / 3600);
      var minutes = Math.floor((totalSeconds % 3600) / 60);
      var seconds = totalSeconds % 60;

      var hStr = String(hours).padStart(2, '0');
      var mStr = String(minutes).padStart(2, '0');
      var sStr = String(seconds).padStart(2, '0');

      var text = '오늘 마감까지 ' + hStr + ':' + mStr + ':' + sStr + ' 남음';

      timerEls.forEach(function (el) {
        el.textContent = text;
      });
    }

    updateTimer();
    timerId = setInterval(updateTimer, 1000);
  }

  initFlashSaleTimer();

  /* =====================================================
     8. 카테고리별 인기 TOP4 탭 버튼 + 패널 전환
     ===================================================== */
  (function initTop20Tabs() {
    var root = document.getElementById('mimis-main');
    if (!root) return;

    // 탭 버튼 & 패널 DOM
    var tabBtns = root.querySelectorAll('.top20-section .tab-btn');
    var panels = root.querySelectorAll('.top20-section .top20-panel');

    if (!tabBtns.length || !panels.length) return;

    // 초기 상태: 첫 번째 패널만 보이도록
    panels.forEach(function (panel, index) {
      if (index === 0) {
        panel.classList.add('is-active');
        panel.style.opacity = '1';
      } else {
        panel.classList.remove('is-active');
        panel.style.opacity = '0';
        panel.style.display = 'none';
      }
    });

    tabBtns.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault(); // 혹시 a태그로 바꾸더라도 페이지 이동 방지

        var target = this.getAttribute('data-tab'); // all / anggeum / traditional / dessert / gift

        // 버튼 active 토글
        tabBtns.forEach(function (b) { b.classList.remove('active'); });
        this.classList.add('active');

        // 패널 페이드 인/아웃 애니메이션
        panels.forEach(function (panel) {
          var key = panel.getAttribute('data-tab-panel');
          if (key === target) {
            // 페이드 인
            panel.style.display = 'block';
            setTimeout(function() {
              panel.classList.add('is-active');
              panel.style.opacity = '1';
            }, 10);
          } else {
            // 페이드 아웃
            panel.style.opacity = '0';
            setTimeout(function() {
              panel.classList.remove('is-active');
              panel.style.display = 'none';
            }, 400);
          }
        });
      });
    });
  })();

  /* =====================================================
     9. 레시피 제품 리스트 재구성 (신규 추가)
  ===================================================== */
  (function initRecipeProducts() {
    var productList = document.querySelector('#mimis-main .recipe-products .ec-base-product .prdList');
    
    if (!productList) {
      console.log('레시피 제품 리스트를 찾을 수 없습니다.');
      return;
    }
    
    var productItems = Array.from(productList.querySelectorAll(':scope > li'));
    
    if (productItems.length === 0) {
      console.log('제품 항목이 없습니다.');
      return;
    }
    
    console.log('총 ' + productItems.length + '개의 제품을 재구성합니다.');
    
    // 제품 묶음: 1,5 / 2,6 / 3,7 / 4,8
    var pairs = [
      [0, 4],
      [1, 5],
      [2, 6],
      [3, 7]
    ];
    
    pairs.forEach(function(pair) {
      var firstIndex = pair[0];
      var secondIndex = pair[1];
      
      var firstItem = productItems[firstIndex];
      var secondItem = productItems[secondIndex];
      
      if (!firstItem) return;
      
      var firstBox = firstItem.querySelector('.box');
      if (!firstBox) return;
      
      var firstThumbnail = firstItem.querySelector('.thumbnail');
      var firstDescription = firstItem.querySelector('.description');
      
      if (firstThumbnail && firstDescription) {
        var firstCard = document.createElement('div');
        firstCard.className = 'recipe-product-item';
        firstCard.appendChild(firstThumbnail.cloneNode(true));
        firstCard.appendChild(firstDescription.cloneNode(true));
        
        firstBox.innerHTML = '';
        firstBox.appendChild(firstCard);
        
        if (secondItem) {
          var secondThumbnail = secondItem.querySelector('.thumbnail');
          var secondDescription = secondItem.querySelector('.description');
          
          if (secondThumbnail && secondDescription) {
            var secondCard = document.createElement('div');
            secondCard.className = 'recipe-product-item';
            secondCard.appendChild(secondThumbnail.cloneNode(true));
            secondCard.appendChild(secondDescription.cloneNode(true));
            
            firstBox.appendChild(secondCard);
          }
          
          secondItem.style.display = 'none';
        }
      }
    });
    
    console.log('레시피 제품 리스트 재구성 완료 (1,5 / 2,6 / 3,7 / 4,8)');
  })();

  /* =====================================================
     9. Pinterest 스타일 히어로 배너
     - 2,2,1,1,1,2,2 열 구조
     ===================================================== */
  (function(){
    const hero = document.getElementById('ptHero');
    if (!hero) return;

    const grid = document.getElementById('ptGrid');
    const dots = hero.querySelectorAll('.pt-hero__dots .dot');

    const sets = [
      [ "hero01.jpg","hero02.jpg","hero03.jpg","hero04.jpg","hero05.jpg","hero06.jpg","hero07.jpg","hero08.jpg","hero09.jpg","hero10.jpg","hero11.jpg" ],
      [ "hero02.jpg","hero03.jpg","hero04.jpg","hero05.jpg","hero06.jpg","hero07.jpg","hero08.jpg","hero09.jpg","hero10.jpg","hero11.jpg","hero01.jpg" ],
      [ "hero03.jpg","hero04.jpg","hero05.jpg","hero06.jpg","hero07.jpg","hero08.jpg","hero09.jpg","hero10.jpg","hero11.jpg","hero01.jpg","hero02.jpg" ],
      [ "hero04.jpg","hero05.jpg","hero06.jpg","hero07.jpg","hero08.jpg","hero09.jpg","hero10.jpg","hero11.jpg","hero01.jpg","hero02.jpg","hero03.jpg" ],
    ];

    const COL_PATTERN = [2,2,1,1,1,2,2];

    function isMobile(){
      return window.matchMedia('(max-width: 768px)').matches;
    }

    function makeCard(url, type, delayMs){
      const card = document.createElement('div');
      card.className = 'pt-card ' + (type === 'double' ? 'is-double' : 'is-single');
      card.style.transitionDelay = delayMs + 'ms';

      const img = document.createElement('img');
      img.src = 'https://ecimg.cafe24img.com/pg2163b11650358008/gtcompany1004/web/upload/' + url;
      img.alt = '';
      card.appendChild(img);
      return card;
    }

    function renderSet(idx){
      hero.classList.remove('is-on');
      grid.innerHTML = "";

      const urls = sets[idx] || sets[0];
      const list = urls.slice(0, 11);

      if (isMobile()){
        list.forEach((u, i) => {
          const card = makeCard(u, 'single', i * 30);
          grid.appendChild(card);
        });

        requestAnimationFrame(() => hero.classList.add('is-on'));
      } else {
        let cursor = 0;

        COL_PATTERN.forEach((n, colIdx) => {
          const col = document.createElement('div');
          col.className = 'pt-col';

          if (colIdx === 0 || colIdx === COL_PATTERN.length - 1) col.classList.add('is-edge');
          if (colIdx === 1 || colIdx === COL_PATTERN.length - 2) col.classList.add('is-near-edge');

          for (let r=0; r<n; r++){
            const url = list[cursor++];
            const type = (n === 2) ? 'double' : 'single';
            const delay = (colIdx * 70) + (r * 40);
            col.appendChild(makeCard(url, type, delay));
          }
          grid.appendChild(col);
        });

        requestAnimationFrame(() => hero.classList.add('is-on'));
      }

      dots.forEach(d => d.classList.remove('is-active'));
      if (dots[idx]) dots[idx].classList.add('is-active');
      hero.dataset.activeSet = String(idx);
    }

    dots.forEach(dot => {
      dot.addEventListener('click', () => renderSet(parseInt(dot.dataset.set, 10) || 0));
    });

    renderSet(0);

    let rAF = null;
    window.addEventListener('resize', () => {
      if (rAF) cancelAnimationFrame(rAF);
      rAF = requestAnimationFrame(() => {
        const active = parseInt(hero.dataset.activeSet || '0', 10);
        renderSet(active);
      });
    });
  })();

}); // jQuery(document).ready 끝


/* =====================================================
   레시피 제품 리스트 재구성 (최종 버전)
   ===================================================== */
(function initRecipeProducts() {
  var recipeSection = document.querySelector('.recipe-section');
  if (!recipeSection) {
    console.log('레시피 섹션을 찾을 수 없습니다.');
    return;
  }

  // 상단 레시피 카드 4개 가져오기
  var recipeCards = recipeSection.querySelectorAll('.recipe-grid .recipe-card');
  
  // 제품 리스트 가져오기
  var productList = recipeSection.querySelector('.recipe-products .ec-base-product .prdList');
  
  if (!productList || recipeCards.length === 0) {
    console.log('레시피 카드 또는 제품 리스트를 찾을 수 없습니다.');
    return;
  }
  
  var productItems = Array.from(productList.querySelectorAll(':scope > li'));
  
  if (productItems.length === 0) {
    console.log('제품 항목이 없습니다.');
    return;
  }
  
  console.log('레시피 카드 ' + recipeCards.length + '개, 제품 ' + productItems.length + '개를 재구성합니다.');
  
  // 제품 묶음: 1,5 / 2,6 / 3,7 / 4,8
  var productPairs = [
    [0, 4],
    [1, 5],
    [2, 6],
    [3, 7]
  ];
  
  // 각 레시피 카드와 제품을 매칭
  recipeCards.forEach(function(recipeCard, index) {
    if (index >= productPairs.length) return;
    
    var pair = productPairs[index];
    var firstIndex = pair[0];
    var secondIndex = pair[1];
    
    var firstItem = productItems[firstIndex];
    var secondItem = productItems[secondIndex];
    
    if (!firstItem) return;
    
    var firstBox = firstItem.querySelector('.box');
    if (!firstBox) return;
    
    // 레시피 헤더 카드 생성
    var recipeHeader = document.createElement('div');
    recipeHeader.className = 'recipe-header-card';
    
    // 레시피 이미지 복제
    var recipeImage = recipeCard.querySelector('.recipe-image');
    if (recipeImage) {
      recipeHeader.appendChild(recipeImage.cloneNode(true));
    }
    
    // 레시피 제목
    var recipeTitle = recipeCard.querySelector('h3');
    if (recipeTitle) {
      var titleDiv = document.createElement('div');
      titleDiv.className = 'recipe-title';
      titleDiv.textContent = recipeTitle.textContent;
      recipeHeader.appendChild(titleDiv);
    }
    
    // 레시피 설명
    var recipeDesc = recipeCard.querySelector('p');
    if (recipeDesc) {
      var descDiv = document.createElement('div');
      descDiv.className = 'recipe-description';
      descDiv.textContent = recipeDesc.textContent;
      recipeHeader.appendChild(descDiv);
    }
    
    // 제품 리스트 컨테이너 생성
    var productsList = document.createElement('div');
    productsList.className = 'recipe-products-list';
    
    // 첫 번째 제품 추가
    var firstThumbnail = firstItem.querySelector('.thumbnail');
    var firstDescription = firstItem.querySelector('.description');
    
    if (firstThumbnail && firstDescription) {
      var firstCard = document.createElement('div');
      firstCard.className = 'recipe-product-item';
      firstCard.appendChild(firstThumbnail.cloneNode(true));
      firstCard.appendChild(firstDescription.cloneNode(true));
      productsList.appendChild(firstCard);
    }
    
    // 두 번째 제품 추가
    if (secondItem) {
      var secondThumbnail = secondItem.querySelector('.thumbnail');
      var secondDescription = secondItem.querySelector('.description');
      
      if (secondThumbnail && secondDescription) {
        var secondCard = document.createElement('div');
        secondCard.className = 'recipe-product-item';
        secondCard.appendChild(secondThumbnail.cloneNode(true));
        secondCard.appendChild(secondDescription.cloneNode(true));
        productsList.appendChild(secondCard);
      }
      
      // 두 번째 아이템은 숨김
      secondItem.style.display = 'none';
    }
    
    // .box 내용을 비우고 새로운 구조로 채움
    firstBox.innerHTML = '';
    firstBox.appendChild(recipeHeader);
    firstBox.appendChild(productsList);
  });
  
  // 5,6,7,8번째 제품 숨김 처리 확인
  for (var i = 4; i < 8; i++) {
    if (productItems[i]) {
      productItems[i].style.display = 'none';
    }
  }
  
  console.log('레시피 제품 리스트 재구성 완료 (레시피별 그룹화)');
})();

/* =====================================================
   하단바 검색창 토글
===================================================== */
(function() {
  // 하단 네비의 검색 버튼들
  var searchButtons = document.querySelectorAll('.btnSearch, .eSearch');
  var searchLayer = document.getElementById('bottomSearchLayer');
  var searchOverlay = document.getElementById('bottomSearchOverlay');
  var searchClose = document.getElementById('bottomSearchClose');
  var searchInput = document.querySelector('.bottom-search-input');

  if (searchButtons.length > 0 && searchLayer && searchOverlay) {
    // 검색 버튼 클릭 시 열기
    searchButtons.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('검색 버튼 클릭');
        searchLayer.classList.add('active');
        searchOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        if (searchInput) {
          setTimeout(function() {
            searchInput.focus();
          }, 100);
        }
      });
    });

    // 검색창 닫기 함수
    function closeSearch() {
      console.log('검색창 닫기 함수 호출');
      searchLayer.classList.remove('active');
      searchOverlay.classList.remove('active');
      if (searchInput) {
        searchInput.value = '';
        searchInput.blur();
      }
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (document.activeElement) {
        document.activeElement.blur();
      }
      console.log('검색창 닫기 완료');
    }

    // 닫기 버튼 클릭 시 닫기
    if (searchClose) {
      searchClose.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('검색창 닫기 버튼 클릭');
        closeSearch();
      });
    }

    // 오버레이 클릭 시 닫기
    searchOverlay.addEventListener('click', function() {
      closeSearch();
    });

    // 배경 클릭 시 닫기
    document.addEventListener('click', function(e) {
      if (searchLayer.classList.contains('active')) {
        var isClickInside = searchLayer.contains(e.target);
        var isSearchButton = false;
        searchButtons.forEach(function(btn) {
          if (btn.contains(e.target)) {
            isSearchButton = true;
          }
        });
        if (!isClickInside && !isSearchButton) {
          closeSearch();
        }
      }
    });
  }
})();

/* =========================
   고객센터 드롭다운 제어
   ========================= */
// 마우스 오버 시 드롭다운 열기 (자동으로 닫히지 않음)
jQuery('.gnb-cs').on('mouseenter', function() {
  jQuery(this).addClass('active');
});

// 닫기 버튼 클릭 시에만 드롭다운 닫기
jQuery('.btn-close-dropdown').on('click', function(e) {
  e.preventDefault();
  e.stopPropagation();
  jQuery('.gnb-cs').removeClass('active');
});

// 고객센터 링크 클릭 시 FAQ 페이지로 이동
jQuery('.gnb-cs-link').on('click', function(e) {
  window.location.href = 'https://gtcompany1004.cafe24.com/shop1/front/php/b/board_list.php?board_no=3&is_pcver=T';
});

/* =========================
   고객센터 사이드/모바일 탭 active 자동 인식
   ========================= */
(function() {
  function setCsActive() {
    try {
      var href = window.location.href;
      var boardNo = null;
      var match = href.match(/board_no=(\d+)/);
      if (match) {
        boardNo = match[1];
      }

      var targetClass = '.cs-link-main';

      if (boardNo) {
        switch (boardNo) {
          case '1': targetClass = '.cs-link-notice'; break;
          case '4': targetClass = '.cs-link-review'; break;
          case '6': targetClass = '.cs-link-qna'; break;
          case '3': targetClass = '.cs-link-faq'; break;
          case '9': targetClass = '.cs-link-franchise'; break;
          default:  targetClass = '.cs-link-main'; break;
        }
      } else if (href.indexOf('cons_board_list.php') > -1) {
        // 프랜차이즈 상담 PHP 경로
        targetClass = '.cs-link-franchise';
      } else if (href.indexOf('board_index') > -1) {
        targetClass = '.cs-link-main';
      }

      var allLinks = document.querySelectorAll(
        '.board-sidebar-menu a, .mobile-cs-tabs a'
      );
      if (!allLinks.length) return;

      allLinks.forEach(function(a) {
        a.classList.remove('active');
      });

      var actives = document.querySelectorAll(targetClass);
      actives.forEach(function(a) {
        a.classList.add('active');
      });
    } catch (e) {
      console.error('CS active set error:', e);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setCsActive);
  } else {
    setCsActive();
  }
})();

/* =========================
   고객센터 좌측/모바일 메뉴 active 자동 적용 (skin4)
   ========================= */
(function() {
  var href = window.location.href;
  var key = 'main';

  if (href.indexOf('/board/index.html') > -1) {
    key = 'main';
  } else if (href.indexOf('board_no=1') > -1) {
    key = 'notice';
  } else if (href.indexOf('board_no=4') > -1) {
    key = 'review';
  } else if (href.indexOf('board_no=6') > -1) {
    key = 'qna';
  } else if (href.indexOf('board_no=3') > -1) {
    key = 'faq';
  } else if (href.indexOf('board_no=9') > -1) {
    key = 'franchise';
  }

  // board/index.html 에서 사용한 공통 클래스들
  var map = {
    main: '.cs-link-main',
    notice: '.cs-link-notice',
    review: '.cs-link-review',
    qna: '.cs-link-qna',
    faq: '.cs-link-faq',
    franchise: '.cs-link-franchise'
  };

  var selector = map[key];
  if (!selector) return;

  // 좌측/모바일 모든 링크에서 active 제거
  var allLinks = document.querySelectorAll('.board-sidebar-menu a, .mobile-cs-tabs a');
  allLinks.forEach(function(a) {
    a.classList.remove('active');
  });

  // 해당되는 링크들에 active 부여
  var targetLinks = document.querySelectorAll(selector);
  targetLinks.forEach(function(a) {
    a.classList.add('active');
  });
})();

