$(document).ready(function(){
    $(".intro_icon").on('click', function(){
        $("#modalCompare").show();
    });
    $(".show-modal-compare").on('click', function(){
        $("#modalCompare").show();
    });
    $(".modal").on('click', function(){
        $("#modalCompare").hide();
    });
    $(".accordion").on("click", function() {
        $(this).toggleClass("active");
        $(this).next().slideToggle(200);
    });
    $(".accordion .icon").html("<div class='btn flex items-center justify-center'><i class='fas fa-angle-down primary-blue1'></i></div>")
  });