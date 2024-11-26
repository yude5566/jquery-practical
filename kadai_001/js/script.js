$(function () {
  // slickを利用してカルーセルを実装する
  $('.carousel').slick({
    dots: true,
    autoplay: true,
    fade: true,
    arrows: false,
    speed: 1500,
    pauseOnHover: false
  });

  // // リンクのホバー時に不透明度を変更する
  $('a, .item img').hover(
    function () {
    $(this).animate({ 'opacity': 0.6 }, 300);
      },
      function () {
        $(this).animate({'opacity': 1.0 }, 300);
      }
  );

  //TOPボタン
  $(window).scroll(function(){
    if($(window).scrollTop() > 100) {
      $('#page-top').fadeIn();
    } else {
      $('#page-top').fadeOut();
    }
  });
  //ページ内のスクロールをなめらかに
  $('a[href^="#"]').click(function() {
    const speed = 500;
    const  href = $(this).attr('href');
    let $target;
    if(href == '#') {
      $target = $('html');
    }
    else {
      $target = $(href);
    }
    const position = $target.offset().top;
    $('html, body').animate({'scrollTop': position}, speed, 'swing');
    return false;
  });

  //スクロールした時にフェードイン
  $(window).scroll(function(){
    const scrollAmount = $(window).scrollTop();
    const windowHeight = $(window).height();
    $('section').each(function() {
      const position = $(this).offset().top;
      if (scrollAmount > position - windowHeight + 100) {
        $(this).addClass('fade');
      }
    });
  });
  //モーダル
  $('.works img').click(function () {
    const iSrc = $(this).attr('src');
    const iAlt = $(this).attr('alt');
    $('.big-img').attr({
      src : iSrc,
      alt : iAlt,
    });
    $('.modal').fadeIn();
  });

  //ボタンを閉じる
  $('.close-btn').click(function(){
    $('.modal').fadeOut();
  });
   
});