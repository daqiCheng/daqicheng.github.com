var login = document.getElementsByClassName("login")[0]
var iconlogin = document.getElementById("iconlogin")
var loginbox = document.getElementsByClassName("login-box-bg")[0]
var closelogin = document.getElementsByClassName("close-login-box")[0]
var backtop = document.getElementsByClassName("back-top")[0]
var head = document.getElementsByClassName("header")[0]
var loginboxbtn= document.getElementsByClassName("login-box-btn")[0]

window.onscroll=function(){
	var scrollT = document.documentElement.scrollTop || document.body.scrollTop
	if(scrollT>500){
		backtop.style.display="block"
	}else{
		backtop.style.display="none"
	}
}
window.onscroll=function(){
	var scrollT = document.documentElement.scrollTop || document.body.scrollTop
	if(scrollT>120){
		head.style.transform="translateY(-90px)"
	}else{
		head.style.display="block"
		head.style.transform="translateY(0px)"
	}
	
	
}
backtop.onclick=function(){
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
}





login.onclick=function(){
	loginbox.style.display="block"
}
iconlogin.onclick=function(){
	loginbox.style.display="block"
}
closelogin.onclick=function(){
	loginbox.style.display="none"
}

var carouselWrap = getCls('carousel-wrap')[0],
	carouselContent = getCls('carousel-content')[0],
	contents = getTag('li',carouselContent),
	leftBtn = getCls('carousel-control-left')[0],
	rightBtn = getCls('carousel-control-right')[0],
	carouselIndicator = getCls('carousel-indicator')[0],
	indicators;

var num = 0,len = contents.length,carouselTimer = null;


init()


rightBtn.onclick = function(){
	changeContents()
};

leftBtn.onclick = function(){
	changeContents(true)
}

for(var i=0;i<len;i++){
	indicators[i].index = i;
	indicators[i].onmouseenter = function(){
		num = this.index;	
		carouselContent.style.marginLeft = -640*num + 'px'
		addIndicatorsActive()
	}
}



carouselTimer = setInterval(function(){
	changeContents()
},3000)


carouselContent.onmouseleave = function(){
	carouselTimer = setInterval(function(){
		changeContents()
	},3000)
}

carouselWrap.onmouseover = function(){
	clearInterval(carouselTimer)
}


function init(){
	var _str = '';
	for(var i=0;i<len;i++){
		_str += '<li></li>'
	}
	carouselIndicator.innerHTML = _str;
	indicators = getTag('li',carouselIndicator);
	indicators[0].className = "active"
}


function addIndicatorsActive(){
	for(var j=0;j<len;j++){
		indicators[j].className = ""
	}
	indicators[num].className = "active"
}


function changeContents(isRight){
	if(isRight){
		num--
		if(num === -1){
			num = len - 1
		}
	}else{
		num++
		if(num === len){
			num = 0
		}
	}
	move(carouselContent, {
		marginLeft:-640*num
	})
	addIndicatorsActive()
}
loginboxbtn.onclick=function(){
		setCookie('username',username.value,30)
		setCookie('password',password.value,30)
		login.innerText = getCookie('username')+" 欢迎您"
		loginbox.style.display="none"
		
}
