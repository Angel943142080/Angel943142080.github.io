// nav导航条
cellphone.onmouseover = function () {
    nav_img.style.display = "block";
    this.style.background = "white"
}
cellphone.onmouseout = function () {
    nav_img.style.display = "none";
    this.style.background = "none"
}
nav_img.onmouseover = function () {
    nav_img.style.display = "block";
    this.style.background = "white"
}
nav_img.onmouseout = function () {
    nav_img.style.display = "none";
    this.style.background = "none"
}
// 导航栏li的悬浮效果
var nav_div = document.querySelectorAll(".on")
var nav_li = document.querySelectorAll(".li")
for (var i = 0; i < nav_div.length; i++) {
    nav_li[i].index = i;
    nav_div[i].index = i;
    nav_li[i].onmouseover = function () {
        this.style.background = "white";
        nav_div[this.index].style.display = "block";
    }
    nav_li[i].onmouseout = function () {
        this.style.background = "none";
        $(this).css("color", "")
        nav_div[this.index].style.display = "none";
    }
    nav_div[i].onmouseover = function () {
        nav_div[this.index].style.display = "block";
    }
    nav_div[i].onmouseout = function () {
        $(this).css("color", "")
        nav_div[this.index].style.display = "none";
    }
}
$("li").on("mouseover", function () {
    this.style.color = "red"
})
$("li").on("mouseout", function () {
    $(this).css("color", "")
})
// 三级联动
// 所有分类
var linkage_ul = document.getElementById("linkage_ul")
data.forEach(function (e, i) {
    var li = document.createElement("li");
    data[i].index = i;
    var index = data[i].index;
    li.innerHTML = e.name;
    linkage_ul.appendChild(li)
});
// 三级联动的显示隐藏效果
$("#linkage_ul").children("li").on("mouseover", function () {
    $("#welcome").hide()
    $("#advertising").hide();
    $("#image_li").hide()
    $("#image_list").hide()
    $("#set").children("section").show()
    $(this).siblings("li").css("color", "")
    this.style.color = "red";
})
$("#linkage_ul").children("li").on("mouseout", function () {
    $("#welcome").show()
    $("#advertising").show();
    $("#image_li").show()
    $("#image_list").show()
    $("#set").children("section").hide()
})
// 创建section
var section = document.createElement("section")
set.appendChild(section)
var li_list = linkage_ul.children
for (var i = 0; i < li_list.length; i++) {
    li_list[i].index = i;
    li_list[i].onmouseover = function () {
        section.innerHTML = ""
        var index = this.index;
        data[index].diversity.forEach(function (e, i) {
            var ul = document.createElement("ul");
            section.appendChild(ul)
            var li1 = document.createElement("li");
            var hr = document.createElement("hr");
            section.appendChild(hr)
            li1.innerHTML = e.name;
            ul.appendChild(li1)
            data[index].diversity[i].multiple.forEach(function (e, i) {
                var li = document.createElement("li");
                li.innerHTML += e.name;
                ul.appendChild(li)
            });
        });
    }
}

// 轮播图
slideshow()
function slideshow() {
    // 获取小方块
    var img_li = document.querySelectorAll(".img_li");
    // 获取图片
    var image = document.querySelectorAll(".image")
    var img = image_list.children;
    var index = 0;
    img[index].style.opacity = "1";
    var times = setInterval(function () {
        index++;
        for (var i = 0; i < img.length; i++) {
            img.index = i;
            if (index < img.length) {
                $(".img_li").css("background", "")
                img[i].style.opacity = 0;
                img[index].style.opacity = 1;
                img_li[index].style.background = "red";
            } else {
                index = 0;
            }
        }
    }, 1500)
    $("#image_list").children(".image").on("mouseover", function () {
        clearTimeout(times);
    })
    //    给小方块添加事件
    for (var i = 0; i < img_li.length; i++) {
        img_li[i].index = i;
        image[i].index = i;
        img_li[i].onmouseover = function () {
            clearTimeout(times);
            $(".img_li").css("background", "")
            this.style.background = "red";
            $(".image").css("opacity", "0")
            image[this.index].style.opacity = "1";
        }
        img_li[i].onmouseout = function () {
            this.style.background = "";
        }
    }
}
// 轮播图鼠标进入
$("#image_list").children(".image").on("mouseout", function () {
    slideshow()
})
// 轮播图下面的四个广告
$("#advertising").children("div").on("mouseover", function () {
    $(this).css({
        width: "750px",
        height: "145px"
    })
})
// 鼠标进入广告图片放大一点
$("#advertising").children("div").on("mouseout", function () {
    $(this).css({
        width: "740px",
        height: "144px"
    })
})

// 头像下面的公告
var head_li = notice.children;
var head_div = document.querySelectorAll(".announcement");
head_li[0].style.color = "red";
head_div[0].style.display = "block";
for (var i = 0; i < head_li.length; i++) {
    head_li[i].index = i;
    head_div[i].index = i;
    head_li[i].onmouseover = function () {
        $(".announcement").css("display", "none")
        head_div[this.index].style.display = "block";
    }
}

// 固定导航栏
d()
function d() {
    var classify = document.querySelector("#classify");
    var st = document.body.scrollTop || document.documentElement.scrollTop;
    // 浏览器窗口的高度
    if (st >= classify.offsetTop) {
        navigation.style.display = "block";
        fixation.style.display = "block";
    } else {
        navigation.style.display = "none"
        fixation.style.display = "none"
    }
    var navigation_li = $("#navigation").children("ul").children("li");
    var setion = document.querySelectorAll(".section");
    var h = window.innerHeight;
    console.log(h);
    // 点击li进入对应的区域
    for (var i = 0; i < navigation_li.length; i++) {
        navigation_li[i].index = i;
        setion[i].index = i;
        navigation_li[i].onclick = function () {
            var ot = setion[this.index].offsetTop;
            document.documentElement.scrollTop = ot;
        }
        if (st + h / 2 >= setion[i].offsetTop) {
            $(navigation_li).css("color", "")
            console.log(setion[i].index);
            var int = setion[i].index;
            navigation_li[int].style.color = "red";
        }
    }
}
window.onscroll = d;

// 鼠标进入图片里面改变样式
var span = $(".aircraft").children("div").children("div").children("span")
var imgs = $(".aircraft").children("div").children("img")
for (var i = 0; i < span.length; i++) {
    span[i].index = i;
    imgs[i].index = i;
    imgs[i].onmouseover = function () {
        span[this.index].className = "LGD";
        var height = $(this).height();
        var index2 = (this.index) + 1
        imgs[this.index].style.height = (height + 2 + "px");
    }
    imgs[i].onmouseout = function () {
        var height = $(this).height() - 2;
        imgs[this.index].style.height = height + "px";
        span[this.index].className = ""
    }
}