"use strict";

$(document).ready(function () {
  $('.nav-link').click(function () {
    $('.nav-item').removeClass('active');
    $(this).parent().addClass('active');
  });
  $('.reply-btn').click(function () {
    $('.card-comment').addClass('d-none');
    $('.footer').addClass('d-none');
    $('.card-reply').show();
  });
  $('.cancel-btn').click(function () {
    $('.card-comment').removeClass('d-none');
    $('.footer').removeClass('d-none');
    $('.card-reply').hide();
  });
  $('.page-link').click(function () {
    $('.page-item').removeClass('active');
    $(this).parent().addClass('active');
  });
  $('.btn-more').click(function () {
    $(this).hide();
    $('.btn-less').show();
    $('.more-block').addClass('active');
  });
  $('.btn-less').click(function () {
    $(this).hide();
    $('.btn-more').show();
    $('.more-block').removeClass('active');
  });
});
//# sourceMappingURL=all.js.map
