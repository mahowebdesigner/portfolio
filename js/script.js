$(function(){
    // // カルーセル
    $('.mv-carousel').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        autoplaySpeed: 5000,
        arrows: false,
    });

    $('.works-carousel').slick({
        autoplay: true,
        dots: false,
        infinite: true,
        autoplaySpeed: 5000,
        arrows: false,
    });
});

$(function(){
    // hamburger
    $('.hamburger').on('click', function() {
        hamburger();
    });

    $('.menu a').on('click', function() {
        hamburger();
    });

    $(window).scroll(function() {
        // スクロール位置を取得
        let scroll = $(window).scrollTop();
    
        /*=================================================
        ロゴ、ハンバーガーメニューの表示
        ===================================================*/
        // スクロール位置が520pxを超えた場合
        if (scroll > 520) {
            // ロゴとハンバーガ―メニュをfadeInで表示する
            $('#contact-btn').fadeIn(500);
            $('.menu li').fadeIn(500);
        // スクロール位置が520px未満の場合
        } else {
            // ロゴとハンバーガ―メニュをfadeOutで非表示にする
            $('#contact-btn').fadeOut(500);
            $('.menu li').fadeOut(500);
        }
    });

    $(".inview").on("inview", function (event, isInView) {
        if (isInView) {
          // 要素（inviewクラス）が表示されたらshowクラスを追加する
          $(this).stop().addClass("show");
        }
      });
})

// hamburger共通処理
function hamburger() {
    $('.hamburger').toggleClass('active');

    if ($('.hamburger').hasClass('active')) {
        $('.nav-list').addClass('active');
    } else {
        $('.nav-list').removeClass('active');
    }
}
