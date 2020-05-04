$(document).ready(function(){
    //start navbarr
    $(".navbarr li ").on('click' , function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
   //end navbar
   //start responsive
$(".part2").hide()
    $(".btn1").click(function(){
       $(".part2").show();
       $(".part1").hide();
       $(".responsive .btn").removeClass("btn3");
       $(".responsive .btn .cli2").css({'transform' : 'scale(0)'});
       $(".btn1").addClass("btn3");
       $(".responsive .btn .cli1").css({'transform' : 'scale(1)'});
    })
    $(".btn2").click(function(){
        $(".part1").show();
        $(".part2").hide();
        $(".responsive .btn").removeClass("btn3");
        $(".responsive .btn .cli1").css({'transform' : 'scale(0)'});
        $(".btn2").addClass("btn3");
        $(".responsive .btn .cli2").css({'transform' : 'scale(1)'});
     })
     //end responsive
     $(".portfolio .btn").on('click' , function(){
         $(this).addClass("active1").siblings().removeClass("active1")
     })
     // start portfolio
     $(".portfolio .btn:nth-child(1)").on('click',function(){
      $('.web').show();
        $(".photography").show();
        $('.desgin').show();
    })
     $(".portfolio .btn:nth-child(2)").on('click',function(){
       $('.web').show();
         $(".photography").hide();
         $('.desgin').hide();
     })
     $(".portfolio .btn:nth-child(3)").on('click',function(){
      $('.web').hide();
        $(".photography").show();
        $('.desgin').hide();
    })
    $(".portfolio .btn:nth-child(4)").on('click',function(){
      $('.web').hide();
        $(".photography").hide();
        $('.desgin').show();
    })
    //end portfolio
    //start video
    $('.video h5').click(function(){
      $(this).parent().toggleClass("overlay");
      $('.video h3').hide();
      $('.video p').hide();
      if ($(this).parent().hasClass('overlay')){
        $('.video h3').show();
      $('.video p').show();
      }
    })
    //end video
    // start contact us 
   $('.contact .btn').on('click' , function(e){
     e.preventDefault();
    if($(' #inp1').val() == '' || $(' #inp2').val() =='' || $(' #inp3').val() ==''){
      $('.contact span').fadeIn().delay(3000).fadeOut();
    }
   })
   //end contact
})
// start icons
let icons = document.querySelectorAll('.icons i');
function inc(){
    this.style.fontSize= '70px';
}
function dec(){
    this.style.fontSize= '50px';
}
icons.forEach(icon => icon.addEventListener("mouseenter" , inc));
icons.forEach(icon => icon.addEventListener("mouseleave" , dec));
//end icons
// start portfoli
const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;
slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active2');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active2');
  });

  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active2');
  });
  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;  // stop the fn from running
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    slider.scrollLeft = scrollLeft - walk;
  });
//end portfolio
// start contact us 
var fname=document.getElementById('inp1'),
    email=document.getElementById('inp2'),
    msg=document.getElementById('inp3');
    fname.onfocus=function(){
        fname.placeholder=''
    }
    fname.onblur=function(){
        fname.placeholder='enter your full name'
    }
    email.onfocus=function(){
        email.placeholder=''
    }
    email.onblur=function(){
        email.placeholder='enter your email'
    }
    msg.onfocus=function(){
        msg.placeholder=''
    }
    msg.onblur=function(){
        msg.placeholder='enter your message'
    }
    // end contact us
 var app=new Vue({
            el: ".app",
            data: {
                //start comment
                sho1 :false ,
                sho2 :false ,
                sho3 :false ,
                sho4 :false ,
                    title1:" Lorem Ipsum is simply dummy text of the printing and typesetting indust" ,
                    title2:" Lorem Ipsum is simply dummy text of the printing and typesetting indust" ,
                    title3:" Lorem Ipsum is simply dummy text of the printing and typesetting indust" ,
                    title4:" Lorem Ipsum is simply dummy text of the printing and typesetting indust" ,
                    //end comment
            }
 })
  // for video 
 var app1=new Vue({
  el: ".app1",
  data: {
    vide :false,
  }
})
// end video 
// start news 
var app2=new Vue({
  el: ".app2",
  data: {
      show1 :false ,
      show2 :false ,
      show3 :false ,
      show4 :false ,
       p1:" Lorem Ipsum is simply dummy text of the printing and typesetting indust" ,
       p2:" Lorem Ipsum is simply dummy text of the printing and typesetting indust" ,
       p3:" Lorem Ipsum is simply dummy text of the printing and typesetting indust" ,
       p4:" Lorem Ipsum is simply dummy text of the printing and typesetting indust" ,
  }
})
// end news
