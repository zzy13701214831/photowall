//获取样式
function getStyle(obj, attr)
{
 	if(obj.currentStyle)//不兼容火狐谷歌
 	{
  		return obj.currentStyle[attr];
 	}
 	else
 	{
 		return getComputedStyle(obj, false)[attr];//不兼容IE
 	}
}
//move 运动框架
function move(obj,json,endFn){
	clearInterval(obj.timer); //关闭前一个定时器，防止定时器叠加。

	obj.timer = setInterval(function(){
		var bStop = true; //假设所有运动到达终点 
		for(var attr in json){
			var iCur = 0; //当前值
			if(attr == 'opacity'){
				if(Math.round(parseFloat(getStyle(obj,attr))*100)==0){
					iCur = Math.round(parseFloat(getStyle(obj,attr))*100);
				}
				else{
					iCur = Math.round(parseFloat(getStyle(obj,attr))*100) || 100;
				}
			}
			else{
				iCur = parseInt(getStyle(obj,attr)) || 0;
			}
			//算运动速度，动画缓存效果
			var iSpeed = (json[attr] - iCur)/8;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed); //向上向下取整

			if(iCur!=json[attr]){
				bStop = false;//终止条件
			}

			if(attr == 'opacity'){
				obj.style.filter = 'alpha(opacity=' + (iCur +iSpeed) + ')';
				obj.style.opacity = (iCur + iSpeed)/100;
			}
			else {
				obj.style[attr] = iCur + iSpeed + 'px';
			}
		}
		//运动终止，是否回调
		if(bStop) {
			clearInterval(obj.timer);

			if(endFn){
				endFn.call(obj);
			}
		}
	},30);
}