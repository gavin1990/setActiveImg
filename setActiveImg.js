/**
 * setActiveImg
 * The jQuery plugin for lazy loading images and animation effects.
 *(c) Gavin1990 2015 (@gavin1990)
 * @return {function}      setActiveImg 
 */

;(function($, window, document,undefined) {
	$.fn.setActiveImg = function(){
		var _self = this;
		var bH = document.documentElement.clientHeight;
		//初始化页面
		$(document).scrollTop(0);

		//遍历元素  显示可是化区域动画以及加载区域图片
		_self.each(function(){
			var _this = $(this);
			var _tTop = _this.offset().top,_tHeight = _this.height();
			if(_tTop + _tHeight < bH){
				_this.addClass('active');
				_this.find("img").each(function(i){
					var _thisImg = $(this);
					var srcd = _thisImg.attr("data-src");
					var pic = _thisImg.attr("src");
					if(pic=="" || pic == undefined){
						_thisImg.attr("src",srcd);
					}
				});
			}
		});

		//监听页面滚动 添加动画及图片懒加载
		$(window).scroll(function(event) {
			var wt = $(window).scrollTop();
			_self.each(function(i){
				var el = _self.eq(i),et = el.offset().top;

				//动画添加  .active样式
				if((et-bH/2) < wt){
					el.addClass('active');
				}else if((et-bH) > wt){
					el.removeClass('active');
				}

				//加载图片
				if(et-bH < wt){
					el.find("img").each(function(i){
						var _this = $(this);
						var srcd = _this.attr("data-src");
						var pic = _this.attr("src");
						if(pic=="" || pic == undefined){
							_this.attr({"src":srcd}).css("opacity","0");
							setTimeout(function(){
								_this.animate({"opacity":"1"},1000);
							},200);
						}else{
							return;
						}
					});
				}
			})
		});
	}
})(jQuery, window, document);