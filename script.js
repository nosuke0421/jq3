$(function() {
  hide_change_btn();
  //セレクトボタンがクリックされたとき
  $('.select-btn').click(function() {
    //何番目のボタンをか調べる
    var s_btn_index = $('.select-btn').index($(this));

    //activeを取り除く
    $('.active').removeClass('active');

    //ボタンと同じ番号のスライドを表示
    $('.slide').eq(s_btn_index).addClass('active');

    hide_change_btn();
  });

  //次へボタンがクリックされたとき
  $('#next-btn').click(function() {
    //今表示されているスライドの次にactiveをセット
    var $active = $('.active');
    $active.removeClass('active');
    $active.next().addClass('active');
    hide_change_btn();
  });

  //後ろへボタンがクリックされたとき
  $('#prev-btn').click(function() {
    var $active = $('.active');
    $active.removeClass('active');
    $active.prev().addClass('active');
    hide_change_btn();
  });

  //データの参照

  //テキストを参照
  var sample_text = $('.sample p').text();
  $('.out_text').text(sample_text);

  //リンク
  var sample_link = $('.sample a').attr('href');
  $('.out_link').text(sample_link);

  //クラス
  var sample_class = $('.sample_class').attr('class');
  $('.out_class').text(sample_class);

  //テキストエリア
  $('.submit').click(function() {
    var sample_textarea = $('.sample_textarea').val();
    if (sample_textarea == '') {
      $('.out_textarea').text('入力されていない検知もできる');
    } else {
      $('.out_textarea').text(sample_textarea);
    }
  });

  //セレクト
  $('.select_submit').click(function() {
    var selected = $('.sample_select').val();
    var tmp;
    if (selected == 'male') {
      tmp = '男'
    } else if (selected == 'female') {
      tmp = '女'
    } else {
      tmp = 'その他'
    }
    $('.out_select').text(tmp + "を選択しましたね");
  });

  $('.btn').click(function() {
    if ($(this).hasClass('male_btn')) {
      $('.sample_select').val('male');
    }
    if ($(this).hasClass('female_btn')) {
      $('.sample_select').val('female');
    }
    if ($(this).hasClass('other_btn')) {
      $('.sample_select').val('other');
    }
  });

  $('.anime_text').hover(function() {
      $(this).animate({
        'font-size': '90px',
      }, 1000);
    },
    function() {
      $(this).animate({
        'font-size': '32px'
      }, 1000);
    });



});

//次へ・前へボタンを隠す関数
function hide_change_btn() {
  //アクティブなとこのindex
  var index = $('.slide').index($('.active'));

  //indexが0なら前へを隠す
  if (index == 0) {
    $('#prev-btn').hide();
  } else {
    $('#prev-btn').show();
  }

  if (index == $('.slide').length - 1) {
    $('#next-btn').hide();
  } else {
    $('#next-btn').show();
  }
}
