$(document).ready(function () {
    // ▣ 네비게이션 메뉴 호버 시 서브메뉴 열기
    $('.nav-links li').hover(function () {
      $(this).find('.submenu').stop(true, true).slideDown(200);
    }, function () {
      $(this).find('.submenu').stop(true, true).slideUp(200);
    });

    // ▣ Learn More 버튼 → hero 숨기고 fade-overlay 표시
    $('#learnBtn').on('click', function () {
      
      $('.fade-overlay').fadeIn(600).css('display', 'flex');
      /*$('.hero').fadeOut(600, function () {
        
      });*/
    });

    // ▣ Back 버튼 → fade-overlay 숨기고 hero 표시
    $('.back-btn').on('click', function () {
      $('.fade-overlay').fadeOut(600, function () {
        /*$('.hero').fadeIn(600);*/
      });
    });

    // ▣ 모달 닫기 (닫기 버튼 또는 배경 클릭)
    $('.close-btn, .modal-overlay').on('click', function (e) {
      if (e.target === this || $(e.target).hasClass('close-btn')) {
        $('.modal-overlay').fadeOut(300);
      }
    });

    // ▣ 슬라이더 무한 반복용 이미지 복제
    let slider = $('.card-slider');
    slider.append(slider.html());

    // ▣ 슬라이더 마우스 오버 시 애니메이션 일시정지
    slider.on('mouseenter', function () {
      $(this).css('animation-play-state', 'paused');
    });

    slider.on('mouseleave', function () {
      $(this).css('animation-play-state', 'running');
    });

    // ▣ 갤러리 이미지 클릭 시 모달 열기
    $('.gallery-img').on('click', function () {
const src = $(this).attr('src');
const title = $(this).data('title'); // 제목 가져오기
const desc = $(this).data('desc');

$('#modal-img').attr('src', src);
$('#modal-title').text(title); // 제목 표시
$('#modal-desc').text(desc);

$('.modal-overlay').fadeIn(300).css('display', 'flex');
});

  });