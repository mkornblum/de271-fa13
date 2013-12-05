$(document).ready(function(){

    var pageCount = 1;

    $('.close-ad').on('click', function(event){
        $(this).closest('aside').hide();
    });

    $('.next-page').on('click', function(event){
        event.preventDefault();
        pageCount++;
        $('.pageable').html('Hey we are on page' + pageCount + '!!!!!11');
    });

    var queryTerm = $.url().param('query-term');
    $('.search-term').text(queryTerm);

    var reportType = $.url().param('report-type');
    $('.report-type').text(reportType);


});
