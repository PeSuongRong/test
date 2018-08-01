$(document).ready(function(){
    $('.btndangnhap').click( function(even){
        $('.dangky').animate({opacity: 0, marginLeft:-50, zIndex:-1});
        $('.dangnhap').animate({opacity: 1, marginLeft:0, zIndex:1});
    });
    $('.btndangky').click( function(even){
        $('.dangnhap').animate({opacity: 0, marginLeft:-50, zIndex:-1});
        $('.dangky').animate({opacity: 1, marginLeft:0, zIndex:1});
    });
});