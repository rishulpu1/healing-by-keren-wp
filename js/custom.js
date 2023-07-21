
// Wait for window load
jQuery(window).load(function() {
    // Animate loader off screen
    //jQuery("#pre-loader").fadeOut("slow");
    jQuery("#pre-loader").addClass('pre-loader-close');
});


jQuery(document).ready(function($) {
    jQuery('.announcements-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    jQuery('.moreInfo-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    })
    //Skrollr initialization
    var s = skrollr.init({
            smoothScrolling:true,
            smoothScrollingDuration: 1000,
            forceHeight: false,
            edgeStrategy:'ease'
        });

    var isMobile = false; //initiate as false
        // device detection
        if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
            || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
                    isMobile = true;
                    console.log('definitely mobile');
                }

    if(s.isMobile()){

        console.log("is mobile");
        s.destroy();

        jQuery('body').css('height','auto');

        s = skrollr.init({
              smoothScrolling:true,
              forceHeight: true,
              mobileDeceleration:0.0009,
              smoothScrollingDuration: 500,
              edgeStrategy:'ease'
            });

        s.refresh();
    }

    jQuery(window).resize(function() {

        // This will fire each time the window is resized:
        if(jQuery(window).width() <= 768) {

            jQuery("#animation-container").html( '<div class="light-bg" style="" data-450="opacity:0;" data-600="opacity:1;" ></div> <div class="animated-opening"> <div id="forest-floor" data-0="bottom[swing]:-40px" data-300="bottom:-150px" data-650="bottom:-393px" data-1000="bottom:-1000px;"></div> <div id="left-rock" data-0="left[swing]:-330px;top[swing]:-150px;" data-150="left:-400px;top:-105px;" data-300="left:-1250px;top:-30px;" data-1000="left:-2500px;top:1000px;z-index:8;" ></div> <div id="right-rock" data-0="right[swing]:-350px;top[swing]:-150px;" data-150="right:-400px;top:-105px;" data-300="right:-1100px;top:-30px;" data-1000="right:-2500px;top:1000px;z-index:8;" ></div> <div id="owl" data-0="left: -120px;top: 35px;transform: scale(0.5);" data-150="left: 0px;top: 15px;transform: scale(1);" data-370="left: 500px;top: -188px;transform: scale(2);" data-1800="left: 600px;top: -300px;transform: scale(3);"></div> <div id="top-ivy" data-0="top[swing]:0px" data-150="top:-40px" data-350="top:-250px" data-1000="top:-1000px;"></div> <div id="bg-hills" > <div id="hill-foreground" data-0="top[swing]:-70px" data-150="top:10px" data-470="top:50px;opacity:1;" data-800="top:250px;opacity:0;"></div> <div id="hill-second" data-0="top[swing]:-50px" data-150="top:20px" data-470="top:80px;opacity:1;" data-800="top:140px;opacity:0;"></div> <div id="hill-third" data-0="top[swing]:-50px" data-150="top:0px" data-470="top:156px;opacity:1;" data-800="top:175px;opacity:0;"></div> <div id="hill-back" data-0="top[swing]:-80px" data-150="top:-30px" data-470="top:135px;opacity:1;" data-800="top:155px;opacity:0;"></div> <div id="hill-sky" data-0="opacity:1;" data-400="opacity:1;" data-700="opacity:0;"></div> </div> <div id="scrolldown-msg" data-0="bottom:20px;" data-100="bottom:-50px;"> <h3 class="scroll-msg">Scroll down to Emerge</h3> </div> <div id="animated-logo" data-0="top[swing]: 1500px;opacity:0;" data-150="top: 1000px;opacity:0;" data-370="top: 200px;opacity:1;" data-900="top: 200px;opacity:1;" data-950="top: 200px;opacity:1;" data-1250="top: -1000px;opacity:1;" data-1400="top: -50px;opacity:0.1;" data-1750="top: -500px;opacity:0.4;" data-400-end="top: 8px;opacity:0.4;" data-300-end="top: 150px;opacity:0.2;" data-100-end="top: 150px;opacity:0.1;" data-end="top: 50px;opacity:0;"></div> <div id="logo-word" data-0="top[swing]: 340px;opacity:1;" data-150="top: 340px;opacity:1;" data-300="top: 500px;opacity:1;" data-970="top:500px;opacity:1;" data-1160="top: -580px;opacity:1;" ></div> <div class="opening-title" id="opening-title" data-700="top: 1000px;" data-800="top: 330px;" data-960="top: 330px;" data-1300="top: -500px;"> <h2 class="main-title">A FESTIVAL FOR PEOPLE & PLANET</h2> <div class="separator"></div> <h3 class="main-date">17<sup>TH</sup> – 21<sup>ST</sup> AUGUST 2O23<br>BERKSHIRE, UK</h3> </div> </div> <div id="flying-creatures"> <div id="hummingbird" data-0="transform[swing]:translate(0px, 0px);" data-150="transform:translate(-80px, -50px);" data-300="transform:translate(-350px, -350px);" data-600-end="transform:translate(-350px, -350px);" data-300-end="transform:translate(-70px, -180px);"></div> <div id="bee1" data-0="transform[swing]:translate(0px, 0px);" data-150="transform:translate(50px, -50px);" data-300="transform:translate(150px, -350px);" data-600-end="transform:translate(150px, -350px);" data-300-end="transform:translate(0px, -70px);"></div> <div id="bee4" data-0="transform[swing]:translate(0px, 0px) scale(-1,1);" data-150="transform:translate(-50px, -50px) scale(-1,1);" data-300="transform:translate(-150px, -350px) scale(-1,1);" data-600-end="transform:translate(-150px, -350px) scale(-1,1);" data-300-end="transform:translate(170px, -40px) scale(-1, 1);" ></div> <div id="butterfly" data-0="transform[swing]:translate(-150px, 100px);" data-150="transform:translate(50px, 50px);" data-300="transform:translate(250px, 70px);" data-600-end="transform:translate(250px, 70px);" data-300-end="transform:translate(-35px, -80px);"></div> </div>' );

            s.destroy();

            jQuery('body').css('height','auto');

            s = skrollr.init({
                  smoothScrolling:true,
                  forceHeight: true,
                  mobileDeceleration:0.0009,
                  smoothScrollingDuration: 500,
                  edgeStrategy:'ease'
                });

            s.refresh();

            jQuery('#hummingbird').sprite({fps: 24, no_of_frames: 6});

            jQuery('#bee1').sprite({fps: 30, no_of_frames: 3}).spRandom({
                  top: 100,
                  left: 100,
                  right: 100,
                  bottom: 140,
                  speed: 500,
                  pause: 300
              });

            jQuery('#bee4').sprite({fps: 30, no_of_frames: 3}).spRandom({
                  top: 100,
                  left: 100,
                  right: 100,
                  bottom: 140,
                  speed: 500,
                  pause: 300
              });

            jQuery('#butterfly').sprite({fps: 40, no_of_frames: 8}).spRandom({
                  top:400,
                  left: 40,
                  right: 500,
                  bottom: 100,
                  speed: 8000,
                  pause: 100
              });

        } else {
            
            jQuery('#animation-container').html('<div class="light-bg" style="" data-1200="opacity:0;" data-1800="opacity:1;" data-3500="opacity:1;" data-9500="" ></div> <div class="site-borders"> <div class="top-left-border corner-border" data-1900="transform[swing]:translate(-200px, -200px);" data-2000="transform:translate(0px, 0px);" ></div> <div class="top-right-border corner-border" data-1900="transform[swing]:scale(-1,1) translate(-200px, -200px);" data-2000="transform:scale(-1,1) translate(0px, 0px);"></div> <div class="bottom-left-border corner-border" data-1900="transform[swing]:scale(1,-1) translate(-200px, -200px);" data-2000="transform: scale(1,-1) translate(0px, 0px);"></div> <div class="bottom-right-border corner-border" data-1900="transform[swing]:scale(-1,-1) translate(-200px, -200px);" data-2000="transform: scale(-1,-1) translate(0px, 0px);"></div> </div> <div id="flying-creatures"> <div id="hummingbird" data-3000="transform[swing]:translate(0%, 1550%);" data-3550="transform:translate(0%, 300%);" data-3700="transform:translate(0%, 60%);" data-4000="transform:translate(10%, 50%);" data-5000="transform:translate(-400%, -400%);" data-7500="transform:translate(-400%, -400%);" data-7700="transform:translate(10%, 28%);"></div> <div id="hummingbird2" data-3000="transform[swing]:translate(0%, 1550%) scale(-1,1);" data-3550="transform:translate(0%, 300%) scale(-1,1);" data-3700="transform:translate(0%, 60%) scale(-1,1);" data-4000="transform:translate(-10%, 50%) scale(-1,1);" data-5000="transform:translate(400%, -400%) scale(-1,1);" data-7500="transform:translate(400%, -400%) scale(-1,1);" data-7700="transform:translate(-20%, 35%) scale(-1,1);"></div> <div id="hummingbird3" data-5000="transform[swing]:translate(-20%, 1550%) scale(-1,1);" data-6500="transform:translate(-12%, 40%) scale(-1,1);" data-6800="transform:translate(400%, -400%) scale(-1,1);" ></div> <div id="hummingbird4" data-0="transform: translate(-21%, -20%) scale(0.5);" data-650="transform:translate(-121%, 110%) scale(0.5);" data-1000="transform:translate(-1000%, -1115%) scale(1);" data-2000="transform:translate(-1000%, 1550%) scale(1);" data-5000="transform:translate(20%, 1550%) scale(1);" data-6500="transform:translate(12%, 40%) scale(1);" data-6800="transform:translate(-400%, -400%) scale(1);" ></div> <div id="bee1" data-0="transform[swing]:translate(-600px, 250px);" data-650="transform:translate(-590px, 220px);" data-1470="transform:translate(-430px, 216px);" data-2000="transform:translate(-400px, 200px);" data-2300="transform:translate(500px, 500px);" data-2450="transform:translate(-275px, 250px);" data-2550="transform:translate(-320px, 205px);" data-2850="transform:translate(-320px, -60px);" data-2950="transform:translate(-300px, -500px);" data-7600="transform:translate(-500px, -500px);" data-7700="transform:translate(-440px, 55px);" ></div> <div id="bee2" data-0="transform[swing]:translate(-800px, 260px) scale(0.85);" data-650="transform:translate(-820px, 330px) scale(0.85);" data-1600="transform:translate(500px, -500px) scale(0.85);" data-2350="transform[swing]:translate(500px, 500px) scale(1);" data-2455="transform:translate(-250px, 300px) scale(1);" data-2550="transform:translate(-280px, 300px) scale(1);" data-2850="transform:translate(-200px, -50px) scale(1);" data-2950="transform:translate(-300px, -500px) scale(1);" data-7500="transform:translate(-500px, -500px) scale(1);" data-7700="transform:translate(-300px, 15px) scale(1);" ></div> <div id="bee3" data-0="transform[swing]:translate(-680px, 370px) scale(0.65);" data-650="transform:translate(-500px, 200px) scale(0.65);"data-1700="transform:translate(500px, -500px) scale(0.65);" data-2370="transform[swing]:translate(500px, 500px) scale(1);" data-2460="transform:translate(-280px, 350px) scale(1);" data-2550="transform:translate(-400px, 305px) scale(1);" data-2850="transform:translate(-410px, 90px) scale(1);" data-3000="transform:translate(-450px, -500px) scale(1);" data-7500="transform:translate(-500px, -500px) scale(1);" data-7700="transform:translate(-470px, 250px) scale(1);"></div> <div id="bee4" data-0="transform[swing]:translate(400px, 300px) scale(-1,1);" data-650="transform:translate(350px, 220px) scale(-1,1);" data-1470="transform:translate(230px, 216px) scale(-1,1);" data-2000="transform:translate(0px, 200px) scale(-1,1);" data-2300="transform:translate(-500px, 500px) scale(-1,1);" data-2460="transform:translate(275px, 250px) scale(-1,1);" data-2550="transform:translate(320px, 205px) scale(-1,1);"data-2850="transform:translate(330px, -60px) scale(-1,1);" data-3000="transform:translate(500px, -500px) scale(-1,1);" data-7500="transform:translate(500px, -500px) scale(-1,1);" data-7700="transform:translate(450px, 130px) scale(-1,1);"></div> <div id="bee5" data-2350="transform[swing]:translate(-500px, 500px) scale(-1,1);" data-2450="transform:translate(250px, 300px) scale(-1,1);" data-2550="transform:translate(220px, 300px) scale(-1,1);" data-2850="transform:translate(200px, -50px) scale(-1,1);" data-3000="transform:translate(300px, -500px) scale(-1,1);" data-7500="transform:translate(500px, -500px) scale(-1,1);" data-7700="transform:translate(200px, 50px) scale(-1,1);"></div> <div id="bee6" data-2370="transform[swing]:translate(-500px, 500px) scale(-1,1);" data-2460="transform:translate(400px, 350px) scale(-1,1);" data-2550="transform:translate(420px, 305px) scale(-1,1);" data-2850="transform:translate(410px, 90px) scale(-1,1);" data-3000="transform:translate(450px, -500px) scale(-1,1);" data-7500="transform:translate(500px, -500px) scale(-1,1);" data-7700="transform:translate(440px, 105px) scale(-1,1);"></div> <div id="bee7" data-7500="transform[swing]:translate(-500px, 900px);" data-7700="transform:translate(270px, 500px);" ></div> <div id="butterfly" data-0="transform[swing]:translate(0px, 0px);" data-650="transform:translate(90px, 20px);" data-1470="transform:translate(300px, 216px);" data-2000="transform:translate(800px, 1000px);" data-7500="transform:translate(800px, 1000px);" data-7700="transform:translate(90px, 150px);" ></div> <div id="butterfly-top" data-0="transform[swing]:translate(0px, 0px) scale(-1,1);" data-650="transform:translate(10px, 200px) scale(-1,1);" data-1470="transform:translate(100px, 116px) scale(-1,1);" data-2000="transform:translate(-800px, 1000px) scale(-1,1);" data-7500="transform:translate(800px, 1000px) scale(-1,1);" data-7700="transform:translate(30px, -70px) scale(-1,1);"></div> </div> <div class="animated-opening"> <div id="forest-floor" data-0="bottom[swing]:-82px" data-500="bottom:-100px" data-1000="bottom:-150px" data-1470="bottom:-393px" data-2000="bottom:-1000px;"></div> <div id="left-rock" data-0="left[swing]:-1200px;top[swing]:-82px;" data-550="left:-1210px;top:-72px;" data-1000="left:-1250px;top:-30px;" data-2000="left:-2500px;top:1000px;z-index:8;" data-2400="left:-2500px;top:1000px;z-index:-1;" data-2500="left:-1150px;top:0px;z-index:-1;" data-3000="left:-1200px;top:0px;z-index:-1;" data-4000="left:-2500px;top:0px;z-index:-1;"></div> <div id="right-rock" data-0="right[swing]:-1010px;top[swing]:-130px;" data-550="right:-1060px;top:-100px;" data-1000="right:-1100px;top:-50px;" data-2000="right:-2500px;top:1000px;z-index:8;" data-2400="right:-2500px;top:1000px;z-index:-1;" data-2500="right:-800px;top:0px;z-index:-1;" data-3000="right:-850px;top:0px;z-index:-1;" data-4000="right:-2500px;top:0px;z-index:-1;"></div> <div id="left-tree" data-0="left[swing]:-89px;top[swing]:-80px;" data-650="left:-99px;top:-70px;" data-1000="left:-250px;top:-40px;" data-2000="left:-2000px;top:0px;z-index:7;" data-3800="left:-2000px;top:0px;z-index:-1;" data-4000="left:-350px;top:20px;z-index:-1;" data-4800="left:-370px;top:20px;z-index:-1;" data-5500="left:-2500px;top:20px;z-index:-1;"></div> <div id="right-tree" data-0="right[swing]:-380px;top[swing]:-200px;" data-650="right:-400px;top:-200px;" data-1000="right:-420px;top:-200px;" data-2000="right:-2000px;top:-200px;z-index:7;" data-3800="right:-2000px;top:-200px;z-index:-1;" data-4000="right:-440px;top:20px;z-index:-1;" data-4800="right:-450px;top:20px;z-index:-1;" data-5500="right:-2500px;top:20px;z-index:-1;"></div> <div id="owl" data-0="left: 255px;top: 75px;transform: scale(0.65);" data-500="left: 409px;top: 8px;transform: scale(1);" data-1470="left: 500px;top: -188px;transform: scale(2);" data-1800="left: 600px;top: -300px;transform: scale(3);"></div> <div id="stag" data-0="right[swing]:140px;top[swing]:120px;" data-500="right:100px;top:150px;" data-1000="right:-200px;top:160px;" data-2000="right:-2000px;top:170px;"></div> <div id="beetle2" data-0="left[swing]:100px; bottom[swing]:210px;" data-500="left:320px; bottom:185px;" data-1000="left:2000px; bottom:140px" data-2000="bottom:-1000px;" ></div> <div id="top-ivy" data-0="top[swing]:-40px" data-500="top:-60px" data-1000="top:-250px" data-2000="top:-1000px;" data-2000="top:-1000px;" data-3100="top:-1000px;" data-3600="top:40px;" data-4900="top:20px;" data-5100="top:-200px;"></div> <div id="bg-hills" data-1800="opacity:1;" data-2000="opacity:0;"> <div id="hill-foreground" data-0="top[swing]:0px" data-500="top:10px" data-1470="top:120px" data-2000="top:250px"></div> <div id="hill-second" data-0="top[swing]:-110px" data-500="top:-100px" data-1470="top:32px" data-2000="top:50px"></div> <div id="hill-third" data-0="top[swing]:-110px" data-500="top:-100px" data-1470="top:106px" data-2000="top:125px"></div> <div id="hill-back" data-0="top[swing]:-150px" data-500="top:-140px" data-1470="top:135px" data-2000="top:155px"></div> <div id="hill-sky" data-0="filter:saturate(3);opacity:1;" data-500="filter:saturate(1);opacity:1;"data-1470="filter:saturate(0);opacity:0.3;" data-2000="filter:saturate(0);opacity:0;"></div> </div> <div id="scrolldown-msg" data-0="bottom:20px;" data-100="bottom:-50px;"> <h3 class="scroll-msg">Scroll down to Emerge</h3> </div> <div id="animated-logo" data-0="top[swing]: 1500px;opacity:0;transform:scale(1);" data-500="top: 1000px;opacity:0;transform:scale(1);" data-1470="top: 175px;opacity:1;transform:scale(1);" data-1900="top: 175px;opacity:1;transform:scale(1);" data-1950="top: 175px;opacity:1;transform:scale(1);" data-2050="top: 175px;opacity:1;transform:scale(1);" data-2100="top: 175px;opacity:1;transform:scale(1);" data-2300="top: -1000px;opacity:1;transform:scale(1);" data-2400="top: -50px;opacity:0.1;transform:scale(0.5);" data-2750="top: -500px;opacity:0.4;transform:scale(0);" data-7500="top: 38px;opacity:0.4;transform:scale(0.3);" data-7700="top: 250px;opacity:0.2;transform:scale(1);"></div> <div id="logo-word" data-0="top[swing]: 400px;opacity:1;" data-500="top: 400px;opacity:1;" data-800="top: 650px;opacity:1;" data-970="top:650px;opacity:1;" data-1300="top:650px;opacity:1;" data-1460="top: 580px;opacity:1;" data-1900="top: 580px;opacity:1;" data-1950="top: 580px;opacity:1;" data-2050="top: 580px;opacity:1;" data-2100="top: 580px;opacity:1;" data-2400="top: -500px;opacity:0;"></div> <div class="opening-title" id="opening-title" data-1900="top: 2000px;" data-1950="top: 460px;"data-2050="top: 460px" data-2100="top: 460px" data-2500="top: -500px;"> <h2 class="main-title">A FESTIVAL FOR PEOPLE & PLANET</h2> <div class="separator"></div> <h3 class="main-date">17<sup>TH</sup> – 21<sup>ST</sup> AUGUST 2O23<br>BERKSHIRE, UK</h3> </div>');

            s.destroy();
            s = skrollr.init({
                smoothScrolling:true,
                smoothScrollingDuration: 1000,
                forceHeight: false,
                edgeStrategy:'ease'
            });
            s.refresh();

            jQuery('#hummingbird').sprite({fps: 24, no_of_frames: 6});
            jQuery('#hummingbird2').sprite({fps: 24, no_of_frames: 6});

            jQuery('#hummingbird3').sprite({fps: 30, no_of_frames: 6});
            jQuery('#hummingbird4').sprite({fps: 30, no_of_frames: 6});

            jQuery('#bee1').sprite({fps: 30, no_of_frames: 3}).spRandom({
                  top: 100,
                  left: 100,
                  right: 100,
                  bottom: 140,
                  speed: 500,
                  pause: 300
              });
            jQuery('#bee2').sprite({fps: 30, no_of_frames: 3}).spRandom({
                  top: 120,
                  left: 150,
                  right: 110,
                  bottom: 100,
                  speed: 300,
                  pause: 100
              });
            jQuery('#bee3').sprite({fps: 30, no_of_frames: 3}).spRandom({
                  top: 40,
                  left: 40,
                  right: 40,
                  bottom: 50,
                  speed: 100,
                  pause: 50
              });

            jQuery('#bee4').sprite({fps: 30, no_of_frames: 3}).spRandom({
                  top: 100,
                  left: 100,
                  right: 100,
                  bottom: 140,
                  speed: 500,
                  pause: 300
              });
            jQuery('#bee5').sprite({fps: 30, no_of_frames: 3}).spRandom({
                  top: 120,
                  left: 150,
                  right: 110,
                  bottom: 100,
                  speed: 300,
                  pause: 100
              });
            jQuery('#bee6').sprite({fps: 30, no_of_frames: 3}).spRandom({
                  top: 40,
                  left: 40,
                  right: 40,
                  bottom: 50,
                  speed: 100,
                  pause: 50
              });

            jQuery('#beetle').sprite({fps:3, no_of_frames: 3}).spRandom({
                  top: 120,
                  left: 150,
                  right: 110,
                  bottom: 100,
                  speed: 3000,
                  pause: 100
              });

            jQuery('#beetle2').sprite({fps:3, no_of_frames: 3});

            jQuery('#bee7').sprite({fps: 30, no_of_frames: 3}).spRandom({
                  top: 100,
                  left: 50,
                  right: 100,
                  bottom: 140,
                  speed: 500,
                  pause: 300
              });

            jQuery('#butterfly').sprite({fps: 40, no_of_frames: 8}).spRandom({
                  top:300,
                  left: 400,
                  right: 1200,
                  bottom: 50,
                  speed: 10000,
                  pause: 700
              });

            jQuery('#butterfly-top').sprite({fps: 60, no_of_frames: 11}).spRandom({
                  top:600,
                  left: 200,
                  right: 900,
                  bottom: 100,
                  speed: 12000,
                  pause: 600
              });

            jQuery('#butterfly-top2').sprite({fps: 60, no_of_frames: 11}).spRandom({
                  top:500,
                  left: 800,
                  right: 900,
                  bottom: 100,
                  speed: 4000,
                  pause: 800
              });

            jQuery('#butterfly-top3').sprite({fps: 60, no_of_frames: 11}).spRandom({
                  top:200,
                  left: 600,
                  right: 1000,
                  bottom: 200,
                  speed: 5000,
                  pause: 600
              });

            jQuery('#butterfly-top4').sprite({fps: 60, no_of_frames: 11}).spRandom({
                  top:100,
                  left: 300,
                  right: 700,
                  bottom: 50,
                  speed: 7000,
                  pause: 300
              });

            jQuery('#butterfly2').sprite({fps: 60, no_of_frames: 11}).spRandom({
                  top:500,
                  left: 800,
                  right: 900,
                  bottom: 100,
                  speed: 4000,
                  pause: 800
              });

            jQuery('#butterfly3').sprite({fps: 60, no_of_frames: 11}).spRandom({
                  top:200,
                  left: 600,
                  right: 1000,
                  bottom: 200,
                  speed: 5000,
                  pause: 600
              });

            jQuery('#butterfly4').sprite({fps: 60, no_of_frames: 11}).spRandom({
                  top:100,
                  left: 300,
                  right: 700,
                  bottom: 50,
                  speed: 7000,
                  pause: 300
              });

            jQuery('#butterfly5').sprite({fps: 60, no_of_frames: 11}).spRandom({
                  top:100,
                  left: 800,
                  right: 900,
                  bottom: 400,
                  speed: 3000,
                  pause: 900
              });

            jQuery('#butterfly6').sprite({fps: 60, no_of_frames: 11}).spRandom({
                  top:600,
                  left: 800,
                  right: 700,
                  bottom: 100,
                  speed: 7000,
                  pause: 300
              });

        }

    }).resize(); // This will simulate a resize to trigger the initial run.
});

jQuery(window).scroll(function(e) {

    var scrollAmount = window.pageYOffset;
    console.log('scroll pos '+ scrollAmount);

 });