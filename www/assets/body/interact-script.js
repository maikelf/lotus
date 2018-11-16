
function isTouchEnabled() {
	return (('ontouchstart' in window)
		|| (navigator.MaxTouchPoints > 0)
		|| (navigator.msMaxTouchPoints > 0));
}

$(function(){
	mprts('mprt_1');mprts('mprt_2');mprts('mprt_3');mprts('mprt_4');mprts('mprt_5');mprts('mprt_6');mprts('mprt_7');mprts('mprt_8');mprts('mprt_9');mprts('mprt_10');mprts('mprt_11');mprts('mprt_12');mprts('mprt_13');mprts('mprt_14');mprts('mprt_15');mprts('mprt_16');mprts('mprt_17');mprts('mprt_18');mprts('mprt_19');mprts('mprt_20');mprts('mprt_21');mprts('mprt_22');mprts('mprt_23');mprts('mprt_24');mprts('mprt_25');mprts('mprt_26');mprts('mprt_27');mprts('mprt_28');mprts('mprt_29');mprts('mprt_30');mprts('mprt_31');mprts('mprt_32');mprts('mprt_33');mprts('mprt_34');fprts('fprt_1');fprts('fprt_2');fprts('fprt_3');fprts('fprt_4');fprts('fprt_5');fprts('fprt_6');fprts('fprt_7');fprts('fprt_8');fprts('fprt_9');fprts('fprt_10');fprts('fprt_11');fprts('fprt_12');fprts('fprt_13');fprts('fprt_14');fprts('fprt_15');fprts('fprt_16');fprts('fprt_17');fprts('fprt_18');fprts('fprt_19');fprts('fprt_20');fprts('fprt_21');fprts('fprt_22');fprts('fprt_23');fprts('fprt_24');fprts('fprt_25');fprts('fprt_26');fprts('fprt_27');fprts('fprt_28');fprts('fprt_29');fprts('fprt_30');fprts('fprt_31');fprts('fprt_32');fprts('fprt_33');fprts('fprt_34');fprts('fprt_35');
})


function mprts(id,relationId){
	var _obj = $('#'+id);
	_obj.attr({'fill':mprts_config[id]['upColor'],'fill-opacity':mprts_config[id]['upOpacity'],'stroke':mprts_config[id]['outlineUpColor'],'stroke-opacity':mprts_config[id]['outlineUpOpacity']});
	_obj.attr({'cursor':'default'});
	if(mprts_config[id]['enable'] == true){
		if (isTouchEnabled()) {
			_obj.on('touchstart', function(e){
				var touch = e.originalEvent.touches[0];
				var x=touch.pageX+10, y=touch.pageY+15;
				var tipw=$('#organs-tip').outerWidth(), tiph=$('#organs-tip').outerHeight(), 
				x=(x+tipw>$(document).scrollLeft()+$(window).width())? x-tipw-(20*2) : x
				y=(y+tiph>$(document).scrollTop()+$(window).height())? $(document).scrollTop()+$(window).height()-tiph-10 : y
				$('#'+id).css({'fill':mprts_config[id]['overColor'],'fill-opacity':mprts_config[id]['downOpacity'],'stroke':mprts_config[id]['outlineDownColor'],'stroke-opacity':mprts_config[id]['outlineDownOpacity']});
				$('#organs-tip').show().html(mprts_config[id]['hover']);
				$('#organs-tip').css({left:x, top:y})
			})
			_obj.on('touchend', function(){
				$('#'+id).css({'fill':mprts_config[id]['upColor'],'fill-opacity':mprts_config[id]['upOpacity'],'stroke':mprts_config[id]['outlineUpColor'],'stroke-opacity':mprts_config[id]['outlineUpOpacity']});
				if(mprts_config[id]['target'] == 'new_window'){
					window.open(mprts_config[id]['url']);	
				}else if(mprts_config[id]['target'] == 'same_window'){
					window.parent.location.href=mprts_config[id]['url'];
				}
			})
		}
		_obj.attr({'cursor':'pointer'});
		_obj.hover(function(){
			$('#organs-tip').show().html(mprts_config[id]['hover']);
			_obj.css({'fill':mprts_config[id]['overColor'],'fill-opacity':mprts_config[id]['overOpacity'],'stroke':mprts_config[id]['outlineOverColor'],'stroke-opacity':mprts_config[id]['outlineOverOpacity']})
		},function(){
			$('#organs-tip').hide();
			$('#'+id).css({'fill':mprts_config[id]['upColor'],'fill-opacity':mprts_config[id]['upOpacity'],'stroke':mprts_config[id]['outlineUpColor'],'stroke-opacity':mprts_config[id]['outlineUpOpacity']});
		})
		_obj.mousedown(function(){
			$('#'+id).css({'fill':mprts_config[id]['downColor'],'fill-opacity':mprts_config[id]['downOpacity'],'stroke':mprts_config[id]['outlineDownColor'],'stroke-opacity':mprts_config[id]['outlineDownOpacity']});
		})
		_obj.mouseup(function(){
			$('#'+id).css({'fill':mprts_config[id]['overColor'],'fill-opacity':mprts_config[id]['overOpacity'],'stroke':mprts_config[id]['outlineOverColor'],'stroke-opacity':mprts_config[id]['outlineOverOpacity']});
			if(mprts_config[id]['target'] == 'new_window'){
				window.open(mprts_config[id]['url']);	
			}else if(mprts_config[id]['target'] == 'same_window'){
				window.parent.location.href=mprts_config[id]['url'];
			}
		})
		_obj.mousemove(function(e){
			var x=e.pageX+10, y=e.pageY+15;
			var tipw=$('#organs-tip').outerWidth(), tiph=$('#organs-tip').outerHeight(), 
			x=(x+tipw>$(document).scrollLeft()+$(window).width())? x-tipw-(20*2) : x
			y=(y+tiph>$(document).scrollTop()+$(window).height())? $(document).scrollTop()+$(window).height()-tiph-10 : y
			$('#organs-tip').css({left:x, top:y})
		})
	}
}

function fprts(id,relationId){
	var _obj = $('#'+id);
	_obj.attr({'fill':fprts_config[id]['upColor'],'fill-opacity':fprts_config[id]['upOpacity'],'stroke':fprts_config[id]['outlineUpColor'],'stroke-opacity':fprts_config[id]['outlineUpOpacity']});
	_obj.attr({'cursor':'default'});
	if(fprts_config[id]['enable'] == true){
		if (isTouchEnabled()) {
			_obj.on('touchstart', function(e){
				var touch = e.originalEvent.touches[0];
				var x=touch.pageX+10, y=touch.pageY+15;
				var tipw=$('#organs-tip').outerWidth(), tiph=$('#organs-tip').outerHeight(), 
				x=(x+tipw>$(document).scrollLeft()+$(window).width())? x-tipw-(20*2) : x
				y=(y+tiph>$(document).scrollTop()+$(window).height())? $(document).scrollTop()+$(window).height()-tiph-10 : y
				$('#'+id).css({'fill':fprts_config[id]['overColor'],'fill-opacity':fprts_config[id]['downOpacity'],'stroke':fprts_config[id]['outlineDownColor'],'stroke-opacity':fprts_config[id]['outlineDownOpacity']});
				$('#organs-tip').show().html(fprts_config[id]['hover']);
				$('#organs-tip').css({left:x, top:y})
			})
			_obj.on('touchend', function(){
				$('#'+id).css({'fill':fprts_config[id]['upColor'],'fill-opacity':fprts_config[id]['upOpacity'],'stroke':fprts_config[id]['outlineUpColor'],'stroke-opacity':fprts_config[id]['outlineUpOpacity']});
				if(fprts_config[id]['target'] == 'new_window'){
					window.open(fprts_config[id]['url']);	
				}else if(fprts_config[id]['target'] == 'same_window'){
					window.parent.location.href=fprts_config[id]['url'];
				}
			})
		}
		_obj.attr({'cursor':'pointer'});
		_obj.hover(function(){
			$('#organs-tip').show().html(fprts_config[id]['hover']);
			_obj.css({'fill':fprts_config[id]['overColor'],'fill-opacity':fprts_config[id]['overOpacity'],'stroke':fprts_config[id]['outlineOverColor'],'stroke-opacity':fprts_config[id]['outlineOverOpacity']})
		},function(){
			$('#organs-tip').hide();
			$('#'+id).css({'fill':fprts_config[id]['upColor'],'fill-opacity':fprts_config[id]['upOpacity'],'stroke':fprts_config[id]['outlineUpColor'],'stroke-opacity':fprts_config[id]['outlineUpOpacity']});
		})
		_obj.mousedown(function(){
			$('#'+id).css({'fill':fprts_config[id]['downColor'],'fill-opacity':fprts_config[id]['downOpacity'],'stroke':fprts_config[id]['outlineDownColor'],'stroke-opacity':fprts_config[id]['outlineDownOpacity']});
		})
		_obj.mouseup(function(){
			$('#'+id).css({'fill':fprts_config[id]['overColor'],'fill-opacity':fprts_config[id]['overOpacity'],'stroke':fprts_config[id]['outlineOverColor'],'stroke-opacity':fprts_config[id]['outlineOverOpacity']});
			if(fprts_config[id]['target'] == 'new_window'){
				window.open(fprts_config[id]['url']);	
			}else if(fprts_config[id]['target'] == 'same_window'){
				window.parent.location.href=fprts_config[id]['url'];
			}
		})
		_obj.mousemove(function(e){
			var x=e.pageX+10, y=e.pageY+15;
			var tipw=$('#organs-tip').outerWidth(), tiph=$('#organs-tip').outerHeight(), 
			x=(x+tipw>$(document).scrollLeft()+$(window).width())? x-tipw-(20*2) : x
			y=(y+tiph>$(document).scrollTop()+$(window).height())? $(document).scrollTop()+$(window).height()-tiph-10 : y
			$('#organs-tip').css({left:x, top:y})
		})
	}
}
//The spots code
/*$(function(){
	var points_len = anatomy_spots['spots'].length;
	if( points_len > 0){
		var xmlns = "http://www.w3.org/2000/svg";
		var tsvg_obj = document.getElementById("anatomy_spots");
		var svg_circle;
		for(var i=0;i<points_len;i++){
			svg_circle = document.createElementNS(xmlns, "circle");
			svg_circle.setAttributeNS(null, "cx", anatomy_spots['spots'][i]['pos_X']);
			svg_circle.setAttributeNS(null, "cy", anatomy_spots['spots'][i]['pos_Y']);
			svg_circle.setAttributeNS(null, "r", anatomy_spots['spots'][i]['diameter']/2);
			svg_circle.setAttributeNS(null, "fill", anatomy_spots['spots'][i]['upColor']);
			svg_circle.setAttributeNS(null, "fill-opacity", anatomy_spots['spots'][i]['upOpacity']);
			svg_circle.setAttributeNS(null, "stroke", anatomy_spots['spots'][i]['outlineUpColor']);
			svg_circle.setAttributeNS(null, "stroke-opacity", anatomy_spots['spots'][i]['outlineUpOpacity']);
			svg_circle.setAttributeNS(null, "id",'anatomy_spots_'+i);
			tsvg_obj.appendChild(svg_circle);
			//dynamicAnatomySpots(i);
		}
	}
});*/

/*function dynamicAnatomySpots(id){
	var obj = $('#anatomy_spots_'+id);

	if(anatomy_spots['spots'][id]['enable'] == true){
		if (isTouchEnabled()) {
			obj.on('touchstart', function(e){
				var touch = e.originalEvent.touches[0];
				var x=touch.pageX+10, y=touch.pageY+15;
				var tipw=$('#organs-tip').outerWidth(), tiph=$('#organs-tip').outerHeight(),
				x=(x+tipw>$(document).scrollLeft()+$(window).width())? x-tipw-(20*2) : x
				y=(y+tiph>$(document).scrollTop()+$(window).height())? $(document).scrollTop()+$(window).height()-tiph-10 : y
				$('#'+id).css({'fill':anatomy_spots['spots'][id]['downColor'],'fill-opacity':anatomy_spots['spots'][id]['downOpacity'],'stroke':anatomy_spots['spots'][id]['outlineDownColor'],'stroke-opacity':anatomy_spots['spots'][id]['outlineDownOpacity']});
				$('#organs-tip').show().html(anatomy_spots['spots'][id]['hover']);
				$('#organs-tip').css({left:x, top:y})
			})
			obj.on('touchend', function(){
				$('#'+id).css({'fill':anatomy_spots['spots'][id]['upColor'],'fill-opacity':anatomy_spots['spots'][id]['upOpacity'],'stroke':anatomy_spots['spots'][id]['outlineUpColor'],'stroke-opacity':anatomy_spots['spots'][id]['outlineUpOpacity']});
				if(anatomy_spots['spots'][id]['target'] == 'new_window'){
					window.open(anatomy_spots['spots'][id]['url']);
				}else if(anatomy_spots['spots'][id]['target'] == 'same_window'){
					window.parent.location.href=anatomy_spots['spots'][id]['url'];
				}
			})
		}
		obj.attr({'cursor':'pointer'});
		obj.hover(function(){
			$('#organs-tip').show().html(anatomy_spots['spots'][id]['hover']);
			obj.css({'fill':anatomy_spots['spots'][id]['overColor'],'fill-opacity':anatomy_spots['spots'][id]['overOpacity'],'stroke':anatomy_spots['spots'][id]['outlineOverColor'],'stroke-opacity':anatomy_spots['spots'][id]['outlineOverOpacity']})
		},function(){
			$('#organs-tip').hide();
			obj.css({'fill':anatomy_spots['spots'][id]['upColor'],'fill-opacity':anatomy_spots['spots'][id]['upOpacity'],'stroke':anatomy_spots['spots'][id]['outlineUpColor'],'stroke-opacity':anatomy_spots['spots'][id]['outlineUpOpacity']});
		})
		obj.mousedown(function(){
			obj.css({'fill':anatomy_spots['spots'][id]['downColor'],'fill-opacity':anatomy_spots['spots'][id]['downOpacity'],'stroke':anatomy_spots['spots'][id]['outlineDownColor'],'stroke-opacity':anatomy_spots['spots'][id]['outlineDownOpacity']});
		})
		obj.mouseup(function(){
			obj.css({'fill':anatomy_spots['spots'][id]['overColor'],'fill-opacity':anatomy_spots['spots'][id]['overOpacity'],'stroke':anatomy_spots['spots'][id]['outlineOverColor'],'stroke-opacity':anatomy_spots['spots'][id]['outlineOverOpacity']});
			if(anatomy_spots['spots'][id]['target'] == 'new_window'){
				window.open(anatomy_spots['spots'][id]['url']);	
			}else if(anatomy_spots['spots'][id]['target'] == 'same_window'){
				window.parent.location.href=anatomy_spots['spots'][id]['url'];
			}
		})
		obj.mousemove(function(e){
				var x=e.pageX+10, y=e.pageY+15;
				var tipw=$('#organs-tip').outerWidth(), tiph=$('#organs-tip').outerHeight(), 
				x=(x+tipw>$(document).scrollLeft()+$(window).width())? x-tipw-(20*2) : x
				y=(y+tiph>$(document).scrollTop()+$(window).height())? $(document).scrollTop()+$(window).height()-tiph-10 : y
				$('#organs-tip').css({left:x, top:y})
		})
	}	
}*/