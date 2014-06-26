
var counter = 0;

console.log(this);

$(document).on('ready', function() {
  console.log('document ready has fired');
  
  	$('.submit-button').on('click', function(eventArgs) {
      var nameData = $('#name-enter').val();
      var bioData = $('#bio-enter').val();
      var bookData = $('#book-enter').val();
      var jsLibData = $('#js-libraries-enter').val();

      window.nameData = nameData;
      console.log('Name: ' + nameData + ' type of: ' + typeof(nameData));
      console.log('Bio: ' + bioData);
      console.log('Books: ' + bookData);
      console.log('JS Libraries: ' + jsLibData);

      var nameDataObj = $('<p/>', {text: ' ' + nameData + ' ', class:'user-data'});
      var bioDataObj = $('<p/>', {text: ' ' + bioData + ' ', class:'user-data'});
      var bookDataObj = $('<p/>', {text: ' ' + bookData + ' ', class:'user-data'});
      var jsLibDataObj = $('<p/>', {text: ' ' + jsLibData + ' ', class:'user-data'});
      /*var nameDataObj = $('p').text(nameData);*/
      nameDataObj.appendTo('#name-data');
      bioDataObj.appendTo('#bio-data');
      bookDataObj.appendTo('#book-data');
      jsLibDataObj.appendTo('#js-libraries-data');
      console.log(nameDataObj);
      /*
      $('#name-data').text(nameData);
      $('#bio-data').text(bioData);
      $('#book-data').text(bookData);
      $('#js-libraries-data').text(jsLibData);
      */

    });

    $('#show-form-button').on('click', function() {
      var formVisibilityStatus = $('#form-input-table').css('visibility');
      var showFormButtonText = $('#show-form-button').text();
      console.log(showFormButtonText);
      console.log(formVisibilityStatus);
      if (formVisibilityStatus === 'hidden') {
        $('#form-input-table').css('visibility','visible');
         $('#show-form-button').text('Hide Forms');
      }
      else {
        $('#form-input-table').css('visibility','hidden');
        $('#show-form-button').text('Show Forms');
      }
    });

    $(document).on('click', '.user-data', function(){
      $(this).remove();

    });

    $('#clear-form').on('click', function() {
      var formEntryPoint = $('.form-entry-point').val();
      console.log(formEntryPoint);
      $('.form-entry-point').val('');
    });
});