/*$('.locations')
.append(
  '<p> location ' + window.location + '</p>'
)
.append(
  '<p> location_hash ' + window.location.hash + '</p>'
)
.append(
  '<p> location_host ' + window.location.host + '</p>'
)
.append(
  '<p> location_hostname ' + window.location.hostname + '</p>'
)
.append(
  '<p> location_href ' + window.location.href + '</p>'
)
.append(
  '<p> location_origin ' + window.location.origin + '</p>'
)
.append(
  '<p> location_pathname ' + window.location.pathname + '</p>'
)
.append(
  '<p> location_port ' + window.location.port + '</p>'
)
.append(
  '<p> location_protocol ' + window.location.protocol + '</p>'
)
.append(
  '<p> location_search ' + window.location.search + '</p>'
);
*/

let count = Number(localStorage.getItem('comment_count'));
let comment = '';

//localStorage.removeItem('comment_count');
//
$('#clear').click( function() { window.localStorage.clear(); location.reload(); return false; });




//localStorage.clear();
if (count === null) {
  localStorage.setItem('comment_count', 0 );
  count = 0;
}

//$('#comments_box').find('ul').append('<li>' + comment + '</li>');

for (let i = 1; i <= count; i++ ) {
  comment = localStorage.getItem('comment_value[' + i + ']');
  $('#comments_box').find('ul').append('<li>' + comment + '</li>');
}
$('.comment').submit(function () {
  event.preventDefault();
  let textarea = $(this).find('textarea');
  let comment = textarea.val();
  let count = Number(localStorage.getItem('comment_count'));
  textarea.val('');

$('#comments_box').find('ul').append('<li>' + comment + '</li>');

localStorage.setItem('comment_count', ++count);
localStorage.setItem('comment_value [' + count + ']' ,comment);
});
