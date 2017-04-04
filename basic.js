var $=function(){
	return new Base();
}
function Base(){
	this.elements=[];
}
Base.prototype.getId=function(id){
		this.elements.push(document.getElementById(id));
		return this;
};
Base.prototype.getTagName=function(tag){
	var tags=document.getElementsByTagName(tag);
	for(var j=0;j<tags.length;j++){
		this.elements.push(tags[j]);
	}
	return this;
}
Base.prototype.getClassName=function(cl){
	var cName=document.getElementsByClassName(cl);
	for(var i=0;i<cName.length;i++){
		this.elements.push(cName[i]);
	}
	return this;
}
Base.prototype.getElement=function(num){
	var element=this.elements[num];
	this.elements=[];
	this.elements[0]=element;
	return this;
}
Base.prototype.css=function(attr,value){
	for(var i=0;i<this.elements.length;i++){
		if(arguments.length==1){
			if(typeof this.currentStyle!="undefined"){
				return this.currentStyle[attr];
			}else if(typeof document.defaultView.getComputedStyle(this.elements[i],null)!="undefined"){
				return document.defaultView.getComputedStyle(this.elements[i],null)[attr];
			}
		}
		this.elements[i].style[attr]=value;
	}
	return this;
}
Base.prototype.html=function(str){
	for(var i=0;i<this.elements.length;i++){
		if(arguments.length==0){
			return this.elements[i].innerHTML;
		}
		this.elements[i].innerHTML=str;
	}
	return this; 
}
Base.prototype.click=function(fn){
	for(var i=0;i<this.elements.length;i++){
		this.elements[i].onclick=fn;
	}
	return this;
}
Base.prototype.addClass=function(className){
	for(var i=0;i<this.elements.length;i++){
		if(!this.elements[i].className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'))){
			this.elements[i].className= " "+className;
		}
	}
	return this;
}
Base.prototype.removeClass=function(className){
	for(var i=0;i<this.elements.length;i++){
		if(this.elements[i].className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'))){
			this.elements[i].className=this.elements[i].className.replace(new RegExp('(\\s|^)'+className+'(\\s|$)'),'');
		}
	}
	return this;
}