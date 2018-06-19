$(function(){
   $("#tt").click(function(){
    event.preventDefault(); 
    $("html, body").animate({scrollTop: $("#tintuc").offset().top}, 1000 )
   })

   $("#gt").click(function(){
    event.preventDefault(); 
    $("html, body").animate({scrollTop: $("#gioithieu").offset().top}, 1000 )
   })

   $("#tb").click(function(){
    event.preventDefault(); 
    $("html, body").animate({scrollTop: $("#thebai").offset().top}, 1000 )
   })

   $("#ld").click(function(){
    event.preventDefault(); 
    $("html, body").animate({scrollTop: $("#legendary").offset().top}, 1000 )
   })

   $("#gd").click(function(){
    event.preventDefault(); 
    $("html, body").animate({scrollTop: $("#giaidau").offset().top}, 1000 )
   })

   // xóa tất cả .active trên thẻ .nav-link
   $(".nav-link").click(function(){
        $(".nav-link").removeClass("active");
        $(this).addClass("active");
   })

   // khi rê chuột qua sẽ thêm active vào menu của phần tử đó, khi rời đi thì sẽ mất .active
    $("#legendary").mouseover(function(){
    $(".nav-link").removeClass("active");
    $("#ld").addClass("active");
    })
    $("#legendary").mouseout(function(){
        $(".nav-link").removeClass("active")
    })
    
    $("#tintuc").mouseover(function(){
        $(".nav-link").removeClass("active");
        $("#tt").addClass("active");
    })
        $("#tintuc").mouseout(function(){
            $(".nav-link").removeClass("active")
        })

        $("#giaidau").mouseover(function(){
            $(".nav-link").removeClass("active");
            $("#gd").addClass("active");
        })
            $("#giaidau").mouseout(function(){
                $(".nav-link").removeClass("active")
            })

            $("#gioithieu").mouseover(function(){
                $(".nav-link").removeClass("active");
                $("#gt").addClass("active");
            })
                $("#gioithieu").mouseout(function(){
                    $(".nav-link").removeClass("active")
                })

      $("#thebai").mouseover(function(){
          $(".nav-link").removeClass("active");
          $("#tb").addClass("active");
      })
          $("#thebai").mouseout(function(){
              $(".nav-link").removeClass("active")
          })

                   
})