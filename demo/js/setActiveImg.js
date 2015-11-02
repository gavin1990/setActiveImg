/**混淆 min*/
// (function(d,g,h,l){d.fn.setActiveImg=function(){var f=this,e=h.documentElement.clientHeight;d(h).scrollTop(0);f.each(function(){var b=d(this),c=b.offset().top,a=b.height();c+a<e&&(b.addClass("active"),b.find("img").each(function(a){a=d(this);var k=a.attr("data-src"),b=a.attr("src");""!=b&&void 0!=b||a.attr("src",k)}))});d(g).scroll(function(b){var c=d(g).scrollTop();f.each(function(a){a=f.eq(a);var b=a.offset().top;b-e/2<c?a.addClass("active"):b-e>c&&a.removeClass("active");b-e<c&&a.find("img").each(function(a){a=
// d(this);var b=a.attr("data-src"),c=a.attr("src");""!=c&&void 0!=c||a.attr("src",b)})})})}})(jQuery,window,document);


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


// function setActive(){
// 	var b = $("body").find(".sec");
// 	b.each(function(i){
// 		var _this = $(this);
// 		var _tTop = _this.offset().top,_tHeight = _this.height();
// 		if(_tTop + _tHeight < bH){
// 			_this.addClass('active');
// 			_this.find("img").each(function(i){
// 				var _thisImg = $(this);
// 				var srcd = _thisImg.attr("data-src");
// 				var pic = _thisImg.attr("src");
// 				if(pic=="" || pic == undefined){
// 					_thisImg.attr("src",srcd);
// 				}else{
// 					return;
// 				}
// 			});
// 		}
// 	})
// 	$(window).scroll(function(event) {
// 		var wt = $(window).scrollTop();
// 		b.each(function(i){
// 			var el = $(".sec_0"+ (i+1)),et = el.offset().top;
// 			if((et-bH/2) < wt){
// 				$(".sec_0"+ (i+1)).addClass('active');
// 			}else if((et-bH) > wt){
// 				$(".sec_0"+ (i+1)).removeClass('active');
// 			}

// 			if(et-bH < wt){
// 				$(".sec_0"+ (i+1)).find("img").each(function(i){
// 					var _this = $(this);
// 					var srcd = _this.attr("data-src");
// 					var pic = _this.attr("src");
// 					if(pic=="" || pic == undefined){
// 						_this.attr("src",srcd);
// 					}else{
// 						return;
// 					}
// 				});
// 			}
// 		})
// 	});
// }