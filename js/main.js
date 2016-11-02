$(function(){
    //图片瀑布流
    $('.grid').masonry({
      columnWidth: '.grid-item',
      itemSelector: '.grid-item'
    });

    //bottom-side 伸缩效果
    $('.side-list').mouseover(function(){
        
        $(this).stop().animate({opacity:'1',right:'0'},1000);
    });
    $('.side-list').mouseout(function(){
        $(this).stop().animate({opacity:'0.5',right:'-3.3rem'},1000);
    });

    //留言板随机颜色
    radomCloudLabel();
    function radomCloudLabel(){
        var obj = $('#cloudlabel .panel');
        function randomcolor(){
            var str = Math.ceil(Math.random()*16777215).toString(16);
            if(str.length<6){
                str="0"+str;
            }
            return str;
        }
        for (len=obj.length,i=len;i--;){
            // obj[i].style.color="#"+randomcolor();
            obj[i].style.backgroundColor="#"+randomcolor();
            obj[i].style.fontWeight = "900";
        }
    }

    //留言板提交效果 board-list
    $('.list-btn').on('click',function(){
        var boardMes =$('#message').val() ;

        if(boardMes != ''){
            //留言板样式
            var mydate = new Date();
            var $month = mydate.getMonth()+1;
            var $mydate = mydate.getDate();
            var $day = $month+'.'+$mydate

            var closeBtn = '<button class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span></button>',
                panelBody = '<div class="panel-body">'+boardMes+'</div>',
                panelFooter = '<div class="panel-footer"><span class="day">'+$day+'<i class="icon-cloud"></i></span></div>'
                panels = '<div class="panel">'+panelBody+panelFooter+'</div>',
                boardList = '<li class="list-group-item alert">'+closeBtn+panels+'</li>'
            $(boardList).hide().prependTo('.board').slideDown();
            radomCloudLabel();

        }else{
            alert("er~u r so boring!")
        }

        //提交后清空input value值
        $('#message').val("");

    })

    //返回顶部 gotop
    $('#gotop').on('click',function(){
        $('html,body').animate({scrollTop:0},700);
    })


    
})


