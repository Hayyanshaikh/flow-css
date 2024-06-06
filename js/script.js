$(function() {
  setActiveListItem();
  $('.dashboard-list-item').click(function() {
    var clickedLink = $(this).children('.dashboard-list-link');
    var subList = clickedLink.next('.dashboard-sub-list');
    $(this).toggleClass("active")
    subList.stop(true, true).slideToggle(200);
  });

});

function setActiveListItem() {
  var currentPath = window.location.href;

  $('.dashboard-list-item').removeClass('active');

  $('.dashboard-list-item').each(function() {
    var linkPath = $(this).children('a').attr('href');
    if (currentPath.indexOf(linkPath) !== -1) {
      $(this).addClass('active');
    }
  });
}