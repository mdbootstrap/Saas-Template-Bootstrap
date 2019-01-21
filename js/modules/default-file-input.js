<<<<<<< HEAD
"use strict";

(function ($) {
  $('.input-default-wrapper').on('change', '.input-default-js', function (e) {
=======
'use strict';

(function ($) {
  $('.input-default-wrapper').on('change', '.input-default-js', function (e) {

>>>>>>> 8c36d5c795b6b3754e58387e349501095bf4bc38
    var $this = $(e.target),
        $label = $this.next('label'),
        $files = $this[0].files;
    var fileName = '';

    if ($files && $files.length > 1) {
      fileName = ($this.attr('data-multiple-target') || '').replace('{target}', $files.length);
    } else if (e.target.value) {
      fileName = e.target.value.split('\\').pop();
    }
<<<<<<< HEAD

=======
>>>>>>> 8c36d5c795b6b3754e58387e349501095bf4bc38
    if (fileName) {
      $label.find('.span-choose-file').html(fileName);
    } else {
      $label.html($label.html());
    }
  });
})(jQuery);