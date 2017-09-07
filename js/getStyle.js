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

//简写
// function getStyle(obj, name)  
// {  
//     return obj.currentStyle ? obj.currentStyle[name] : getComputedStyle( obj ,false )[name];  
// }  
