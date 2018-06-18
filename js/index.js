$('.plus1').click(function(){
  var item = $(this).parent().children('p');
  item.text(parseInt(item.text()) + 1)
  total();
});

$('.minus1').click(function(){
  var item = $(this).parent().children('p');
  if (parseInt(item.text()) > 0) {
    item.text(parseInt(item.text()) - 1);
  }
  total();
});

function total() {
  var total = 0;
  $('.antal').each(function() {
    total += (parseInt($(this).attr('data-price'))) * parseInt($(this).text());
  });
  $('#sum').text(total + ':-');
}

$('#clear').click(function() {
  $('.antal').each(function() {
    $(this).text('0');
  });
  total();
  
});