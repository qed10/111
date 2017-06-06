# 开发报告

------
##策划思路与说明
  这一系列网站的思路起源于一个女生，她想要一个专属的空间来给她和男朋友来记录在一起后的点点滴滴，期望的不只是可以两人互动，也可以记录自己的事情，下面即为报告。
  
  这个站点由主页（index.html），详细页（contentall.html），登录界面（join.html），注册页面（biaodan.html），以及详细页所需的两个子网页（content1.html与content2.html）构成，设计样式除了自己的构思之外，都来源于林宥嘉的微博，而内容的图片大多也是来自于林宥嘉。
  
  在站点的网页之中，登录界面可引入注册页面和主页面，注册页面则是一个相对简单的表单，主页面则是情侣两人的主页，不仅可以看到两人的甜蜜时刻，也可以看到彼此想说的话，在末尾则可以进入详细页面观看。
  
##技术指标
这个站点因为js的原因和有些内容排版的原因，用谷歌浏览器最新版本最为合适，其他浏览器尤其是IE浏览器会出现js动画不出现或者排版不齐的情况。
这些网页都是用了HTML5与CSS3版本，开发工具就比较折磨人了。我用的DreamWeaver编辑器，与谷歌浏览器IE浏览器之间总是会出现各种各样的差别，所以每一次的排版都是一次折磨人的体验。
| 兼容浏览器版本       |  HTML与CSS版本   | 开发工具  |
| --------   | -----:  | :----:  |
|谷歌最新版| HTML5 | DreamWeaver     |
| 火狐        |CSS3   |   Google   |
| Google Chrome        |    /    | ps |

##技术点说明
> * 主页的轮播图效果
> * 主页的打字机输入效果
> * 详细页中的frame框架切换页面内容
> * 详细页中的图片效果

#1.轮播图效果
轮播图效果用到了简单的js语法，难点在于变量的变换与时间，本来希望自己的轮播图可以有小圆圈可以手动观看，但是翻看了很多博客也试验了很多次之后发现做不到...于是只好放弃，只有轮播图

#2.打字机效果
打字机效果用到了简单的js语法，除了function的设计，难点在于我设置了两个打字机效果而想让他们同时输入，可刚开始我用的$（document）.ready()并不能实现所预想的那样，所以我改为了window.onload同时执行两个function。
```
window.onload=function(){
    word=document.getElementById("w").innerHTML;
    setInterval(type, 200);
	word1=document.getElementById("s").innerHTML;
    setInterval(type1, 200);
}
```

#3.frame框架
之前的预想，是想在详细页中做一个table切换页，之前写了自己预想的js代码
```
function newsShow(str) {
    if(str=='1'){
        document.getElementById("text1").className="news-title-left-chosen";
        document.getElementById("text2").className="";
        document.getElementById("text3").className="";
        document.getElementById("news-content-dl1").style.display ="block";
        document.getElementById("news-content-dl2").style.display ="none";
        document.getElementById("news-content-dl3").style.display ="none";
    }//剩下只是换了常数变量
 ```
 这段代码是可行的，可以用来切换列表页，可是当我用在div块时却发现不行，而且div块不能在先开始的时候隐藏下来，后来又百度时，看到了frame框架也可以做成，便把方法变成了frame框架
 ```
 <li id="1" ><a href="content1.html" id="text1" target="frame">主页</a></li>
			<li id="2" ><a href="content2.html" id="text2" target="frame">照片</a></li>
			<div id="content">
<frameset rows="120%">
<iframe src="content1.html" name="frame" scrolling="no";></iframe></frameset>
</div>
```

#4.详细页中的图片效果
有两种，一种是在第一个页面中点击小图可以出现大图，另外一种是在第二个页面中，鼠标移到图片上时，图片会变大。这两种方法都用到了jquery，第一个的js是从博客上扒的，而第二个是自己照葫芦画瓢写下来的
```
  $(function(){
                $('.row1').adipoli({
                    'startEffect' : 'normal',
                    'hoverEffect' : 'popout'
                });
               
            $('#adipoli-download').fadeTo('slow',1);
        });
```
    
#5.开发心得与期望

这次的网页，明显比上学期更加信手拈来，原因不只是自己好好听课，也在于老师讲的更加细化。这次的作业使得我开始接触了更多的js，也看了很多的js语法，虽然还没有系统的学习过js的知识，但接触多了便也会了点皮毛。这次的网页开虽然html比之前更加熟练，可是花费的时间却要更多。因为看了很多的js，但是后来也没能实现。但是总体来说还是大有收获的。

除了这次作业，在知乎上也关注了一些前端开发工程师，会看一看他们不时放出的源码，而他们的动画效果十分炫酷，从网页计时，网页动画分布，都是十分好看。我的展望就是期望我可以通过自己的努力，使得自己也可以写出一些有趣又有型的网页，除了颜值还有实用性。也希望自己在以后的学习道路中，可以多向老师学习，自己也不断琢磨，把web开发这项技术学到家。

------

