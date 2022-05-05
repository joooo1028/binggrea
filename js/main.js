// main.js

window.onload = function(){
    var $devWidth;
    var $limitsize= 768;
    $devWidth = $("body").width();
    console.log($devWidth);

    $(window).resize(function(){
        $devWidth = $("body").width();
        console.log($devWidth);
    });


    //주메뉴
    $(".gnb > ul > li > a").bind("mouseover focus",function(){
        if($devWidth < $limitsize) return false; // 함수 실행 정지 
        $(".header_wrap").animate({"height":"445px"},300,"linear",function(){
            $(".gnb > ul > li > ul ").css("display","block");
        });
    });
    $(".gnb").bind("mouseleave blur",function(){
        if($devWidth < $limitsize) return false; // 함수 실행 정지 
        $(".header_wrap").animate({"height":"140px"},300,"linear");
        $(".gnb > ul > li > ul").css("display","none");
    });

    $(".language").children("a").click(function(e){
        e.preventDefault();
        $(".language").toggleClass("on");

        if($(".language").hasClass("on")){
            $(".language > ul").children("a").attr("title","닫기")
        }else{
            $(".language > ul").children("a").attr("title","열기")
        }
    });

    // 모바일 주메뉴 
    $(".mobBtn").click(function(){
        $(".mob").css("display","block");
    });

    $(".mobBtn_close").click(function(){
        $(".mob").css("display","none");
    });

    $(".mob > nav.mob_gnb > ul > li").click(function(){
        $(this).children("ul").toggleClass("on");
    });

    $(".mob > div.mob_footer > ul.mob_lang > li").click(function(){
        $(this).parent("ul").toggleClass("on");
    });
    $(".mob > div.mob_footer > ul.mob_family > li").click(function(){
        $(this).parent("ul").toggleClass("on");
    });


    // mainvisual
    var $mainNum=0;
    var $lastNum = $(".slide > div").size()-1;
    var $circlebg=["#248dd5","#ffec48","#f64e5a","#c8e746","#ff5e49","#ffdf43"];
    var $bgafter=["#ffec48","#248dd5","#ffec48","#f64e5a","#cef047","#ff4b4b"];
    var $slideconton=["#1c88d2","#feeb47","#f74350","#cef047","#fb4e4e","#ffec48"];
    var $slidecont=["#dbbf17","#6ebbff","#dbbf17","#ff6f79","#a1d31a","#ff9284"];
    var $title=["#ffda14","#1b7ed5","#ffda14","#f3363f","#b3e231","#ff3838"];
    var mainimg="";
    var mobimg="";
    var mainlist = $(".content1 > .slide_cont > ul > li > a ").click(function(e){
        e.preventDefault();
        $mainNum = mainlist.index(this);
        $(".slide > div").removeClass("on");
        $(".slide > div").eq($mainNum).addClass("on");     
        $(".slide_cont > ul").removeClass("on");
        $(".slide_cont > ul").eq($mainNum).addClass("on");
        $(".circle_bg > canvas").css("background-color",$circlebg[$mainNum]); 
        $(".circle_inner").css("background-color",$bgafter[$mainNum]);
        $(".slide_cont > ul > li > a").css("color",$slidecont[$mainNum]);
        $(".slide_cont > ul > li.button").css("background-color",$slidecont[$mainNum]);
        $(".slide_cont > ul.on > li > a").css("color",$slideconton[$mainNum]);
        $(".slide_cont > ul.on > li.button").css("background-color",$slideconton[$mainNum]);
        $(".slide_cont > ul.on > li.maintitle").css("color",$title[$mainNum]);
        mainimg = "<img src='images/main_"+$mainNum+".png' alt='메인이미지"+$mainNum+"'/>";
        $("span.mainimg").html(mainimg);
        mobimg = "<img src='images/prdcont"+$mainNum+".png' alt='모바일메인이미지"+$mainNum+"'/>";
        $("div.mob_circle_bg > span").html(mobimg);
        $(".mob_circle_bg > .mob_circle_inner").css("background-color",$bgafter[$mainNum]);

    });

    function autoBanner(){
        $mainNum++;
        if($mainNum > $lastNum){$mainNum=0;}
        $(".slide > div").removeClass("on");
        $(".slide > div").eq($mainNum).addClass("on");     
        $(".slide_cont > ul").removeClass("on");
        $(".slide_cont > ul").eq($mainNum).addClass("on");
        $(".circle_bg > canvas").css("background-color",$circlebg[$mainNum]); 
        $(".circle_inner").css("background-color",$bgafter[$mainNum]);
        $(".slide_cont > ul > li > a").css("color",$slidecont[$mainNum]);
        $(".slide_cont > ul > li.button").css("background-color",$slidecont[$mainNum]);
        $(".slide_cont > ul.on > li > a").css("color",$slideconton[$mainNum]);
        $(".slide_cont > ul.on > li.button").css("background-color",$slideconton[$mainNum]);
        $(".slide_cont > ul.on > li.maintitle").css("color",$title[$mainNum]);
        mainimg = "<img src='images/main_"+$mainNum+".png' alt='메인이미지"+$mainNum+"'/>";
        $("span.mainimg").html(mainimg);
        mobimg = "<img src='images/prdcont"+$mainNum+".png' alt='모바일메인이미지"+$mainNum+"'/>";
        $("div.mob_circle_bg > span").html(mobimg);
        $(".mob_circle_bg > .mob_circle_inner").css("background-color",$bgafter[$mainNum]);

    }
    var bg = $circlebg[$mainNum];
    console.log(bg);
    $autoBnn = setInterval(autoBanner,5000);

    // mobnext
    $(".next").click(function(){
        $mainNum++;
        if($mainNum > $lastNum){$mainNum=0;}
        $(".slide > div").removeClass("on");
        $(".slide > div").eq($mainNum).addClass("on");     
        $(".slide_cont > ul").removeClass("on");
        $(".slide_cont > ul").eq($mainNum).addClass("on");
        $(".circle_bg > canvas").css("background-color",$circlebg[$mainNum]); 
        $(".circle_inner").css("background-color",$bgafter[$mainNum]);
        $(".slide_cont > ul > li > a").css("color",$slidecont[$mainNum]);
        $(".slide_cont > ul > li.button").css("background-color",$slidecont[$mainNum]);
        $(".slide_cont > ul.on > li > a").css("color",$slideconton[$mainNum]);
        $(".slide_cont > ul.on > li.button").css("background-color",$slideconton[$mainNum]);
        $(".slide_cont > ul.on > li.maintitle").css("color",$title[$mainNum]);
        mainimg = "<img src='images/main_"+$mainNum+".png' alt='메인이미지"+$mainNum+"'/>";
        $("span.mainimg").html(mainimg);
        mobimg = "<img src='images/prdcont"+$mainNum+".png' alt='모바일메인이미지"+$mainNum+"'/>";
        $("div.mob_circle_bg > span").html(mobimg);
        $(".mob_circle_bg > .mob_circle_inner").css("background-color",$bgafter[$mainNum]);
    }); 

    // mobprev
    $(".prev").click(function(){
        $mainNum--;
        if($mainNum < 0){$mainNum=$lastNum;}
        $(".slide > div").removeClass("on");
        $(".slide > div").eq($mainNum).addClass("on");     
        $(".slide_cont > ul").removeClass("on");
        $(".slide_cont > ul").eq($mainNum).addClass("on");
        $(".circle_bg > canvas").css("background-color",$circlebg[$mainNum]); 
        $(".circle_inner").css("background-color",$bgafter[$mainNum]);
        $(".slide_cont > ul > li > a").css("color",$slidecont[$mainNum]);
        $(".slide_cont > ul > li.button").css("background-color",$slidecont[$mainNum]);
        $(".slide_cont > ul.on > li > a").css("color",$slideconton[$mainNum]);
        $(".slide_cont > ul.on > li.button").css("background-color",$slideconton[$mainNum]);
        $(".slide_cont > ul.on > li.maintitle").css("color",$title[$mainNum]);
        mainimg = "<img src='images/main_"+$mainNum+".png' alt='메인이미지"+$mainNum+"'/>";
        $("span.mainimg").html(mainimg);
        mobimg = "<img src='images/prdcont"+$mainNum+".png' alt='모바일메인이미지"+$mainNum+"'/>";
        $("div.mob_circle_bg > span").html(mobimg);
        $(".mob_circle_bg > .mob_circle_inner").css("background-color",$bgafter[$mainNum]);
    });

    //content2
    var $yearNum=0;
    var $titleNum=0;
    var $lastyaer = $(".content2 > div.on > dl > dd").size()-1;
    var yearColor=["#0b8249","#823b0b","#7aba0a","#f32539","#ff6e2e"];
    var $titlelist = $(".content2 > div > ul > li.title").click(function(e){
        e.preventDefault();
        $titleNum=$titlelist.index(this);
        $(".content2 > div > ul > li.title > a").removeClass("on");
        $(this).children("a").addClass("on");
        $(".content2 > div").removeClass("on");
        $(".content2 > div").eq($titleNum).addClass("on");
        $(".content2 > .year_count > ul > li").css("color",yearColor[$titleNum]);
        if($(".content2 > div.togater").hasClass("on")){
            $(".content2 > div.year_count > ul").removeClass();
            $(".content2 > div.year_count").addClass("togater");
            $(".content2 > div.year_count > ul").addClass("togater1")
        }
        if($(".content2 > div.banana").hasClass("on")){
            $(".content2 > div.year_count").removeClass("togater");
            $(".content2 > div.year_count > ul").removeClass();
            $(".content2 > div.year_count > ul").addClass("banana1")
        }
        if($(".content2 > div.melona").hasClass("on")){
            $(".content2 > div.year_count").removeClass("togater");
            $(".content2 > div.year_count > ul").removeClass();
            $(".content2 > div.year_count > ul").addClass("melona1")
        }
        if($(".content2 > div.yoplait").hasClass("on")){
            $(".content2 > div.year_count").removeClass("togater");
            $(".content2 > div.year_count > ul").removeClass();
            $(".content2 > div.year_count > ul").addClass("yoplait1")
        }
        if($(".content2 > div.snack").hasClass("on")){
            $(".content2 > div.year_count").removeClass("togater");
            $(".content2 > div.year_count > ul").removeClass();
            $(".content2 > div.year_count > ul").addClass("snack1")
        }

        $(".content2 > div > dl > dd ").removeClass("on");
        $(".content2 > div > div > ul > li ").removeClass("on");
        $(".content2 > div.on > dl > dd").eq(0).addClass("on")
        $(".content2 > div.on > div > ul > li ").eq(0).addClass("on");


        var $yearlist = $(".content2 > div.on > dl > dd").click(function(e){
            e.preventDefault();
            $yearNum = $($yearlist).index(this);
            $(".content2 > div.on > dl > dd").removeClass("on");
            $(this).addClass("on");
            $(".content2 > div > div > ul > li ").removeClass("on");
            $(".content2 > div.on > div > ul > li ").eq($yearNum).addClass("on");
            yearchange();
    
        });
    });

    var $yearlist = $(".content2 > div.on > dl > dd").click(function(e){
        e.preventDefault();
        $yearNum = $($yearlist).index(this);
        $(".content2 > div.on > dl > dd").removeClass("on");
        $(this).addClass("on");
        $(".content2 > div > ul > li ").removeClass("on");
        $(".content2 > div.on > ul > li ").eq($yearNum).addClass("on");
        yearchange();


    });

    function yearchange(){
        if($(".content2 > div.banana").hasClass("on")){
            switch($yearNum){
                case 1 :
                    $(".year_count > ul").removeClass();
                    $(".year_count > ul").addClass("banana2");
                break;

                case 2:
                    $(".year_count > ul").removeClass();
                    $(".year_count > ul").addClass("banana3");
                break;

                case 3:
                    $(".year_count > ul").removeClass();
                    $(".year_count > ul").addClass("banana4");
                break;

                case 4:
                    $(".year_count > ul").removeClass();
                    $(".year_count > ul").addClass("banana5");
                break;

                default:
                    $(".year_count > ul").removeClass();
                    $(".year_count > ul").addClass("banana1");
                break;

            }
        }
            if($(".content2 > div.togater").hasClass("on")){
            switch($yearNum){
                case 1 :
                    $(".year_count > ul").removeClass();
                    $(".year_count > ul").addClass("togater2");
                break;

                case 2:
                    $(".year_count > ul").removeClass();
                    $(".year_count > ul").addClass("togater3");
                break;

                case 3:
                    $(".year_count > ul").removeClass();
                    $(".year_count > ul").addClass("togater4");
                break;

                case 4:
                    $(".year_count > ul").removeClass();
                    $(".year_count > ul").addClass("togater5");
                break;

                default:
                    $(".year_count > ul").removeClass();
                    $(".year_count > ul").addClass("togater1");
                break;

            }
        }

        if($(".content2 > div.melona").hasClass("on")){
            switch($yearNum){
                case 1 :
                    $(".year_count > ul").removeClass();
                    $(".year_count > ul").addClass("melona2");
                break;

                case 2:
                    $(".year_count > ul").removeClass();
                    $(".year_count > ul").addClass("melona3");
                break;

                case 3:
                    $(".year_count > ul").removeClass();
                    $(".year_count > ul").addClass("melona4");
                break;

                case 4:
                    $(".year_count > ul").removeClass();
                    $(".year_count > ul").addClass("melona5");
                break;

                default:
                    $(".year_count > ul").removeClass();
                    $(".year_count > ul").addClass("melona1");
                break;

            }
        }
        if($(".content2 > div.yoplait").hasClass("on")){
            switch($yearNum){
                case 1 :
                    $(".year_count > ul").removeClass();
                    $(".year_count > ul").addClass("yoplait2");
                break;

                case 2:
                    $(".year_count > ul").removeClass();
                    $(".year_count > ul").addClass("yoplait3");
                break;

                case 3:
                    $(".year_count > ul").removeClass();
                    $(".year_count > ul").addClass("yoplait4");
                break;

                case 4:
                    $(".year_count > ul").removeClass();
                    $(".year_count > ul").addClass("yoplait5");
                break;

                default:
                    $(".year_count > ul").removeClass();
                    $(".year_count > ul").addClass("yoplait1");
                break;

            }
        }
        if($(".content2 > div.snack").hasClass("on")){
            switch($yearNum){
                case 1 :
                    $(".year_count > ul").removeClass();
                    $(".year_count > ul").addClass("snack2");
                break;

                case 2:
                    $(".year_count > ul").removeClass();
                    $(".year_count > ul").addClass("snack3");
                break;

                case 3:
                    $(".year_count > ul").removeClass();
                    $(".year_count > ul").addClass("snack4");
                break;

                case 4:
                    $(".year_count > ul").removeClass();
                    $(".year_count > ul").addClass("snack5");
                break;

                default:
                    $(".year_count > ul").removeClass();
                    $(".year_count > ul").addClass("snack1");
                break;

            }
        }
    }

    function autoyear(){
        $yearNum++;
        if($yearNum > $lastyaer) $yearNum=0;
        $(".content2 > div.on > dl > dd").removeClass("on");
        $(".content2 > div.on > dl > dd").eq($yearNum).addClass("on");
        $(".content2 > div > div > ul > li ").removeClass("on");
        $(".content2 > div.on > div > ul > li ").eq($yearNum).addClass("on");
        yearchange();
    }
   var $yearbnn = setInterval(autoyear,5000);

    //content3
    var $slideNum=0;
    var $lastSlideNum=$(".frame > ul > li ").size()-11;
    var $slide_w=$(".frame > ul > li").width();
    $(window).resize(function(){
        $slide_w=$(".content3 > ul").width();
    });
    var $slidebar= $(".slidebar > ul > li").click(function(e){
        if($devWidth < $limitsize) return false; // 함수 실행 정지 
        e.preventDefault();
        $slideNum=$slidebar.index(this);
        $(".frame").stop().animate({"left":$slideNum*-(3*$slide_w)},600,"linear");
        $(".slidebar > ul > li").removeClass("on");
        $(this).addClass("on");
        
    });

    function autoslide(){
        if($devWidth < $limitsize) return false; // 함수 실행 정지 
        $slideNum++;
        if($slideNum>$lastSlideNum) $slideNum=0;
        $(".frame").stop().animate({"left":$slideNum*-(3*$slide_w)},600,"linear");
        $(".slidebar > ul > li").removeClass("on");
        $(".slidebar > ul > li").eq($slideNum).addClass("on");
    };

    $autoslide = setInterval(autoslide,5000);

    var $lastmobNum=$(".frame > ul > li ").size()-1;
    function mobslide(){
        if($devWidth > $limitsize) return false; 
        $slideNum++;
        if($slideNum>$lastmobNum) $slideNum=0;
        $(".frame").stop().animate({"left":$slideNum*-(1.045*$slide_w)},600,"linear");
        $(".slidebar > ul > li").removeClass("on");
        $(".slidebar > ul > li").eq($slideNum).addClass("on");

    };

    $autoslide = setInterval(mobslide,5000);


    var flag=true;
    $("a.btn_play").click(function(e){
        e.preventDefault();
        if(flag){
            //멈춰라
            clearInterval($autoslide);
            $(this).addClass("on");
            flag = false;
        }else{
            //재생
            $autoslide = setInterval(autoslide,5000);
            $(this).removeClass("on");
            flag = true;
        }
    });
   
    // family site
    $(".family > span").click(function(e){
        e.preventDefault();
        $(".family").toggleClass("on");

    });

    //top
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();

        // top버튼
        if(scroll < 200){
            $("a.btn_top").removeClass("on");
        }
        if(scroll >= 200){
            $("a.btn_top").addClass("on");
        }
    });
    $(".btn_top").click(function(){
        $("html,body").stop().animate({"scrollTop":0},1400,"swing");
    });

}
