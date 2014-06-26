
var counter = 0;

console.log(this);

$(document).on('ready', function() {
  console.log('document ready has fired');
  
  	$('.submit-button').on('click', function(eventArgs) {
      var nameData = $('#name-enter').val();
      var bioData = $('#bio-enter').val();
      var bookData = $('#book-enter').val();
      var jsLibData = $('#js-libraries-enter').val();

      alert('Name: ' + nameData);
      alert('Bio: ' + bioData);
      alert('Books: ' + bookData);
      alert('JS Libraries: ' + jsLibData);

      $('#name-data').text(nameData);
      $('#bio-data').text(bioData);
      $('#book-data').text(bookData);
      $('#js-libraries-data').text(jsLibData);

    });

    $('.show-form-button').on('click', function() {
      var formVisibilityStatus = $('#form-input-table').css('visibility');
      console.log(formVisibilityStatus);
      if (formVisibilityStatus === 'hidden') {
        $('#form-input-table').css('visibility','visible');
      }
      else {
        $('#form-input-table').css('visibility','hidden');
      }
    });
});