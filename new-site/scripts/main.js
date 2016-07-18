var myHeading = document.querySelector('h1');
var stupid_number = 1;
if (stupid_number === 1){
	myHeading.textContent = '井盖展示';
} else {
	alert('Got you!');
}

var myImage = document.querySelector('img');

myImage.onclick = function(){
	// 如果点击图片，则切换为另一张图片
	var mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/shuzhi-jinggai_1.jpg'){
		myImage.setAttribute('src', 'images/zhutie-jinggai_1.jpg');
	}else{
		myImage.setAttribute('src', 'images/shuzhi-jinggai_1.jpg');
	}
}

var myButton = document.querySelector('button');

function setUserName(){
	// 修改标题，增加用户名
	var myName = prompt('Please enter your name');
	localStorage.setItem('name', myName);
	myHeading.textContent = '为' + myName + '展示井盖';
}

if(!localStorage.getItem('name')){
	// 如果还没有localStorage.name信息，则运行setUserName()
	setUserName();
}else{
	// 否则提取用户名数据，并做相应展示
	var storedName = localStorage.getItem('name');
	myHeading.textContent = '为' + storedName + '展示井盖';
}

myButton.onclick = function(){
	setUserName();
}
