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

    // スムーススクロール
    $('a[href^="#"]').click(function() {
        // リンク取得
        let href = $(this).attr("href");
        // ジャンプ先のidをセット
        let target = $(href == "#" || href == "" ? 'hmtl' : href);
        // 移動距離
        let position = target.offset().top;
        // スクロール時間
        $("html, body").animate({scrollTop:position}, 600, "swing");
        return false;
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

// scroll時のheader背景変更
$(function () {
    $(window).on('scroll', function () {
        const sliderHeight = $("#mv-img").height();
        if ( sliderHeight < $(this).scrollTop()) {
            $('#container').addClass('change-color');
        } else {
            $('#container').removeClass('change-color');
        }
    });
});