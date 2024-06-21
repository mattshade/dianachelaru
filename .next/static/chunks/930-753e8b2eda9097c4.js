(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[930],{7866:function(t,e){"use strict";/*!
 * lightgallery | 2.7.2 | September 20th 2023
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var o=function(){return(o=Object.assign||function(t){for(var e,o=1,i=arguments.length;o<i;o++)for(var s in e=arguments[o])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},i={thumbnail:!0,animateThumb:!0,currentPagerPosition:"middle",alignThumbnails:"middle",thumbWidth:100,thumbHeight:"80px",thumbMargin:5,appendThumbnailsTo:".lg-components",toggleThumb:!1,enableThumbDrag:!0,enableThumbSwipe:!0,thumbnailSwipeThreshold:10,loadYouTubeThumbnail:!0,youTubeThumbSize:1,thumbnailPluginStrings:{toggleThumbnails:"Toggle thumbnails"}},s="lgBeforeSlide",n=function(){function t(t,e){return this.thumbOuterWidth=0,this.thumbTotalWidth=0,this.translateX=0,this.thumbClickable=!1,this.core=t,this.$LG=e,this}return t.prototype.init=function(){this.settings=o(o({},i),this.core.settings),this.thumbOuterWidth=0,this.thumbTotalWidth=this.core.galleryItems.length*(this.settings.thumbWidth+this.settings.thumbMargin),this.translateX=0,this.setAnimateThumbStyles(),this.core.settings.allowMediaOverlap||(this.settings.toggleThumb=!1),this.settings.thumbnail&&(this.build(),this.settings.animateThumb?(this.settings.enableThumbDrag&&this.enableThumbDrag(),this.settings.enableThumbSwipe&&this.enableThumbSwipe(),this.thumbClickable=!1):this.thumbClickable=!0,this.toggleThumbBar(),this.thumbKeyPress())},t.prototype.build=function(){var t=this;this.setThumbMarkup(),this.manageActiveClassOnSlideChange(),this.$lgThumb.first().on("click.lg touchend.lg",function(e){var o=t.$LG(e.target);o.hasAttribute("data-lg-item-id")&&setTimeout(function(){if(t.thumbClickable&&!t.core.lgBusy){var e=parseInt(o.attr("data-lg-item-id"));t.core.slide(e,!1,!0,!1)}},50)}),this.core.LGel.on(s+".thumb",function(e){var o=e.detail.index;t.animateThumb(o)}),this.core.LGel.on("lgBeforeOpen.thumb",function(){t.thumbOuterWidth=t.core.outer.get().offsetWidth}),this.core.LGel.on("lgUpdateSlides.thumb",function(){t.rebuildThumbnails()}),this.core.LGel.on("lgContainerResize.thumb",function(){t.core.lgOpened&&setTimeout(function(){t.thumbOuterWidth=t.core.outer.get().offsetWidth,t.animateThumb(t.core.index),t.thumbOuterWidth=t.core.outer.get().offsetWidth},50)})},t.prototype.setThumbMarkup=function(){var t="lg-thumb-outer ";this.settings.alignThumbnails&&(t+="lg-thumb-align-"+this.settings.alignThumbnails);var e='<div class="'+t+'">\n        <div class="lg-thumb lg-group">\n        </div>\n        </div>';this.core.outer.addClass("lg-has-thumb"),".lg-components"===this.settings.appendThumbnailsTo?this.core.$lgComponents.append(e):this.core.outer.append(e),this.$thumbOuter=this.core.outer.find(".lg-thumb-outer").first(),this.$lgThumb=this.core.outer.find(".lg-thumb").first(),this.settings.animateThumb&&this.core.outer.find(".lg-thumb").css("transition-duration",this.core.settings.speed+"ms").css("width",this.thumbTotalWidth+"px").css("position","relative"),this.setThumbItemHtml(this.core.galleryItems)},t.prototype.enableThumbDrag=function(){var t=this,e={cords:{startX:0,endX:0},isMoved:!1,newTranslateX:0,startTime:new Date,endTime:new Date,touchMoveTime:0},o=!1;this.$thumbOuter.addClass("lg-grab"),this.core.outer.find(".lg-thumb").first().on("mousedown.lg.thumb",function(i){t.thumbTotalWidth>t.thumbOuterWidth&&(i.preventDefault(),e.cords.startX=i.pageX,e.startTime=new Date,t.thumbClickable=!1,o=!0,t.core.outer.get().scrollLeft+=1,t.core.outer.get().scrollLeft-=1,t.$thumbOuter.removeClass("lg-grab").addClass("lg-grabbing"))}),this.$LG(window).on("mousemove.lg.thumb.global"+this.core.lgId,function(i){t.core.lgOpened&&o&&(e.cords.endX=i.pageX,e=t.onThumbTouchMove(e))}),this.$LG(window).on("mouseup.lg.thumb.global"+this.core.lgId,function(){t.core.lgOpened&&(e.isMoved?e=t.onThumbTouchEnd(e):t.thumbClickable=!0,o&&(o=!1,t.$thumbOuter.removeClass("lg-grabbing").addClass("lg-grab")))})},t.prototype.enableThumbSwipe=function(){var t=this,e={cords:{startX:0,endX:0},isMoved:!1,newTranslateX:0,startTime:new Date,endTime:new Date,touchMoveTime:0};this.$lgThumb.on("touchstart.lg",function(o){t.thumbTotalWidth>t.thumbOuterWidth&&(o.preventDefault(),e.cords.startX=o.targetTouches[0].pageX,t.thumbClickable=!1,e.startTime=new Date)}),this.$lgThumb.on("touchmove.lg",function(o){t.thumbTotalWidth>t.thumbOuterWidth&&(o.preventDefault(),e.cords.endX=o.targetTouches[0].pageX,e=t.onThumbTouchMove(e))}),this.$lgThumb.on("touchend.lg",function(){e.isMoved?e=t.onThumbTouchEnd(e):t.thumbClickable=!0})},t.prototype.rebuildThumbnails=function(){var t=this;this.$thumbOuter.addClass("lg-rebuilding-thumbnails"),setTimeout(function(){t.thumbTotalWidth=t.core.galleryItems.length*(t.settings.thumbWidth+t.settings.thumbMargin),t.$lgThumb.css("width",t.thumbTotalWidth+"px"),t.$lgThumb.empty(),t.setThumbItemHtml(t.core.galleryItems),t.animateThumb(t.core.index)},50),setTimeout(function(){t.$thumbOuter.removeClass("lg-rebuilding-thumbnails")},200)},t.prototype.setTranslate=function(t){this.$lgThumb.css("transform","translate3d(-"+t+"px, 0px, 0px)")},t.prototype.getPossibleTransformX=function(t){return t>this.thumbTotalWidth-this.thumbOuterWidth&&(t=this.thumbTotalWidth-this.thumbOuterWidth),t<0&&(t=0),t},t.prototype.animateThumb=function(t){if(this.$lgThumb.css("transition-duration",this.core.settings.speed+"ms"),this.settings.animateThumb){var e=0;switch(this.settings.currentPagerPosition){case"left":e=0;break;case"middle":e=this.thumbOuterWidth/2-this.settings.thumbWidth/2;break;case"right":e=this.thumbOuterWidth-this.settings.thumbWidth}this.translateX=(this.settings.thumbWidth+this.settings.thumbMargin)*t-1-e,this.translateX>this.thumbTotalWidth-this.thumbOuterWidth&&(this.translateX=this.thumbTotalWidth-this.thumbOuterWidth),this.translateX<0&&(this.translateX=0),this.setTranslate(this.translateX)}},t.prototype.onThumbTouchMove=function(t){return t.newTranslateX=this.translateX,t.isMoved=!0,t.touchMoveTime=new Date().valueOf(),t.newTranslateX-=t.cords.endX-t.cords.startX,t.newTranslateX=this.getPossibleTransformX(t.newTranslateX),this.setTranslate(t.newTranslateX),this.$thumbOuter.addClass("lg-dragging"),t},t.prototype.onThumbTouchEnd=function(t){t.isMoved=!1,t.endTime=new Date,this.$thumbOuter.removeClass("lg-dragging");var e=t.endTime.valueOf()-t.startTime.valueOf(),o=t.cords.endX-t.cords.startX,i=Math.abs(o)/e;return i>.15&&t.endTime.valueOf()-t.touchMoveTime<30?((i+=1)>2&&(i+=1),i+=Math.abs(o)/this.thumbOuterWidth*i,this.$lgThumb.css("transition-duration",Math.min(i-1,2)+"settings"),o*=i,this.translateX=this.getPossibleTransformX(this.translateX-o),this.setTranslate(this.translateX)):this.translateX=t.newTranslateX,Math.abs(t.cords.endX-t.cords.startX)<this.settings.thumbnailSwipeThreshold&&(this.thumbClickable=!0),t},t.prototype.getThumbHtml=function(t,e,o){var i,s=this.core.galleryItems[e].__slideVideoInfo||{};return i=s.youtube&&this.settings.loadYouTubeThumbnail?"//img.youtube.com/vi/"+s.youtube[1]+"/"+this.settings.youTubeThumbSize+".jpg":t,'<div data-lg-item-id="'+e+'" class="lg-thumb-item '+(e===this.core.index?" active":"")+'"\n        style="width:'+this.settings.thumbWidth+"px; height: "+this.settings.thumbHeight+";\n            margin-right: "+this.settings.thumbMargin+'px;">\n            <img '+(o?'alt="'+o+'"':"")+' data-lg-item-id="'+e+'" src="'+i+'" />\n        </div>'},t.prototype.getThumbItemHtml=function(t){for(var e="",o=0;o<t.length;o++)e+=this.getThumbHtml(t[o].thumb,o,t[o].alt);return e},t.prototype.setThumbItemHtml=function(t){var e=this.getThumbItemHtml(t);this.$lgThumb.html(e)},t.prototype.setAnimateThumbStyles=function(){this.settings.animateThumb&&this.core.outer.addClass("lg-animate-thumb")},t.prototype.manageActiveClassOnSlideChange=function(){var t=this;this.core.LGel.on(s+".thumb",function(e){var o=t.core.outer.find(".lg-thumb-item"),i=e.detail.index;o.removeClass("active"),o.eq(i).addClass("active")})},t.prototype.toggleThumbBar=function(){var t=this;this.settings.toggleThumb&&(this.core.outer.addClass("lg-can-toggle"),this.core.$toolbar.append('<button type="button" aria-label="'+this.settings.thumbnailPluginStrings.toggleThumbnails+'" class="lg-toggle-thumb lg-icon"></button>'),this.core.outer.find(".lg-toggle-thumb").first().on("click.lg",function(){t.core.outer.toggleClass("lg-components-open")}))},t.prototype.thumbKeyPress=function(){var t=this;this.$LG(window).on("keydown.lg.thumb.global"+this.core.lgId,function(e){t.core.lgOpened&&t.settings.toggleThumb&&(38===e.keyCode?(e.preventDefault(),t.core.outer.addClass("lg-components-open")):40===e.keyCode&&(e.preventDefault(),t.core.outer.removeClass("lg-components-open")))})},t.prototype.destroy=function(){this.settings.thumbnail&&(this.$LG(window).off(".lg.thumb.global"+this.core.lgId),this.core.LGel.off(".lg.thumb"),this.core.LGel.off(".thumb"),this.$thumbOuter.remove(),this.core.outer.removeClass("lg-has-thumb"))},t}();e.Z=n},2869:function(t,e){"use strict";/*!
 * lightgallery | 2.7.2 | September 20th 2023
 * http://www.lightgalleryjs.com/
 * Copyright (c) 2020 Sachin Neravath;
 * @license GPLv3
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var o=function(){return(o=Object.assign||function(t){for(var e,o=1,i=arguments.length;o<i;o++)for(var s in e=arguments[o])Object.prototype.hasOwnProperty.call(e,s)&&(t[s]=e[s]);return t}).apply(this,arguments)},i={scale:1,zoom:!0,infiniteZoom:!0,actualSize:!0,showZoomInOutIcons:!1,actualSizeIcons:{zoomIn:"lg-zoom-in",zoomOut:"lg-zoom-out"},enableZoomAfter:300,zoomPluginStrings:{zoomIn:"Zoom in",zoomOut:"Zoom out",viewActualSize:"View actual size"}},s=function(){function t(t,e){return this.core=t,this.$LG=e,this.settings=o(o({},i),this.core.settings),this}return t.prototype.buildTemplates=function(){var t=this.settings.showZoomInOutIcons?'<button id="'+this.core.getIdName("lg-zoom-in")+'" type="button" aria-label="'+this.settings.zoomPluginStrings.zoomIn+'" class="lg-zoom-in lg-icon"></button><button id="'+this.core.getIdName("lg-zoom-out")+'" type="button" aria-label="'+this.settings.zoomPluginStrings.zoomIn+'" class="lg-zoom-out lg-icon"></button>':"";this.settings.actualSize&&(t+='<button id="'+this.core.getIdName("lg-actual-size")+'" type="button" aria-label="'+this.settings.zoomPluginStrings.viewActualSize+'" class="'+this.settings.actualSizeIcons.zoomIn+' lg-icon"></button>'),this.core.outer.addClass("lg-use-transition-for-zoom"),this.core.$toolbar.first().append(t)},t.prototype.enableZoom=function(t){var e=this,o=this.settings.enableZoomAfter+t.detail.delay;this.$LG("body").first().hasClass("lg-from-hash")&&t.detail.delay?o=0:this.$LG("body").first().removeClass("lg-from-hash"),this.zoomableTimeout=setTimeout(function(){e.isImageSlide(e.core.index)&&(e.core.getSlideItem(t.detail.index).addClass("lg-zoomable"),t.detail.index===e.core.index&&e.setZoomEssentials())},o+30)},t.prototype.enableZoomOnSlideItemLoad=function(){this.core.LGel.on("lgSlideItemLoad.zoom",this.enableZoom.bind(this))},t.prototype.getDragCords=function(t){return{x:t.pageX,y:t.pageY}},t.prototype.getSwipeCords=function(t){return{x:t.touches[0].pageX,y:t.touches[0].pageY}},t.prototype.getDragAllowedAxises=function(t,e){var o=this.core.getSlideItem(this.core.index).find(".lg-image").first().get(),i=0,s=0,n=o.getBoundingClientRect();t?(i=o.offsetHeight*t,s=o.offsetWidth*t):e?(i=n.height+e*n.height,s=n.width+e*n.width):(i=n.height,s=n.width);var a=i>this.containerRect.height;return{allowX:s>this.containerRect.width,allowY:a}},t.prototype.setZoomEssentials=function(){this.containerRect=this.core.$content.get().getBoundingClientRect()},t.prototype.zoomImage=function(t,e,o,i){if(!(0>=Math.abs(e))){var s,n,a,r,l=this.containerRect.width/2+this.containerRect.left,h=this.containerRect.height/2+this.containerRect.top+this.scrollTop;1===t&&(this.positionChanged=!1);var u=this.getDragAllowedAxises(0,e),c=u.allowY,g=u.allowX;this.positionChanged&&(s=this.left/(this.scale-e),n=this.top/(this.scale-e),this.pageX=l-s,this.pageY=h-n,this.positionChanged=!1);var m=this.getPossibleSwipeDragCords(e),d=l-this.pageX,f=h-this.pageY;if(t-e>1){var p=(t-e)/Math.abs(e);d=(e<0?-d:d)+this.left*(p+(e<0?-1:1)),f=(e<0?-f:f)+this.top*(p+(e<0?-1:1)),a=d/p,r=f/p}else{var p=(t-e)*e;a=d*p,r=f*p}o&&(g?this.isBeyondPossibleLeft(a,m.minX)?a=m.minX:this.isBeyondPossibleRight(a,m.maxX)&&(a=m.maxX):t>1&&(a<m.minX?a=m.minX:a>m.maxX&&(a=m.maxX)),c?this.isBeyondPossibleTop(r,m.minY)?r=m.minY:this.isBeyondPossibleBottom(r,m.maxY)&&(r=m.maxY):t>1&&(r<m.minY?r=m.minY:r>m.maxY&&(r=m.maxY))),this.setZoomStyles({x:a,y:r,scale:t}),this.left=a,this.top=r,i&&this.setZoomImageSize()}},t.prototype.resetImageTranslate=function(t){if(this.isImageSlide(t)){var e=this.core.getSlideItem(t).find(".lg-image").first();this.imageReset=!1,e.removeClass("reset-transition reset-transition-y reset-transition-x"),this.core.outer.removeClass("lg-actual-size"),e.css("width","auto").css("height","auto"),setTimeout(function(){e.removeClass("no-transition")},10)}},t.prototype.setZoomImageSize=function(){var t=this,e=this.core.getSlideItem(this.core.index).find(".lg-image").first();setTimeout(function(){var o=t.getCurrentImageActualSizeScale();t.scale>=o&&(e.addClass("no-transition"),t.imageReset=!0)},500),setTimeout(function(){var o=t.getCurrentImageActualSizeScale();if(t.scale>=o){var i=t.getDragAllowedAxises(t.scale);e.css("width",e.get().naturalWidth+"px").css("height",e.get().naturalHeight+"px"),t.core.outer.addClass("lg-actual-size"),i.allowX&&i.allowY?e.addClass("reset-transition"):i.allowX&&!i.allowY?e.addClass("reset-transition-x"):!i.allowX&&i.allowY&&e.addClass("reset-transition-y")}},550)},t.prototype.setZoomStyles=function(t){var e=this.core.getSlideItem(this.core.index).find(".lg-img-wrap").first(),o=this.core.getSlideItem(this.core.index).find(".lg-image").first(),i=this.core.outer.find(".lg-current .lg-dummy-img").first();this.scale=t.scale,o.css("transform","scale3d("+t.scale+", "+t.scale+", 1)"),i.css("transform","scale3d("+t.scale+", "+t.scale+", 1)");var s="translate3d("+t.x+"px, "+t.y+"px, 0)";e.css("transform",s)},t.prototype.setActualSize=function(t,e){var o=this;if(!this.zoomInProgress){this.zoomInProgress=!0;var i=this.core.galleryItems[this.core.index];this.resetImageTranslate(t),setTimeout(function(){if(!(!i.src||o.core.outer.hasClass("lg-first-slide-loading"))){var t=o.getCurrentImageActualSizeScale(),s=o.scale;o.core.outer.hasClass("lg-zoomed")?o.scale=1:o.scale=o.getScale(t),o.setPageCords(e),o.beginZoom(o.scale),o.zoomImage(o.scale,o.scale-s,!0,!0)}},50),setTimeout(function(){o.core.outer.removeClass("lg-grabbing").addClass("lg-grab")},60),setTimeout(function(){o.zoomInProgress=!1},610)}},t.prototype.getNaturalWidth=function(t){var e=this.core.getSlideItem(t).find(".lg-image").first(),o=this.core.galleryItems[t].width;return o?parseFloat(o):e.get().naturalWidth},t.prototype.getActualSizeScale=function(t,e){return t>=e?t/e||2:1},t.prototype.getCurrentImageActualSizeScale=function(){var t=this.core.getSlideItem(this.core.index).find(".lg-image").first().get().offsetWidth,e=this.getNaturalWidth(this.core.index)||t;return this.getActualSizeScale(e,t)},t.prototype.getPageCords=function(t){var e={};if(t)e.x=t.pageX||t.touches[0].pageX,e.y=t.pageY||t.touches[0].pageY;else{var o=this.core.$content.get().getBoundingClientRect();e.x=o.width/2+o.left,e.y=o.height/2+this.scrollTop+o.top}return e},t.prototype.setPageCords=function(t){var e=this.getPageCords(t);this.pageX=e.x,this.pageY=e.y},t.prototype.manageActualPixelClassNames=function(){this.core.getElementById("lg-actual-size").removeClass(this.settings.actualSizeIcons.zoomIn).addClass(this.settings.actualSizeIcons.zoomOut)},t.prototype.beginZoom=function(t){return this.core.outer.removeClass("lg-zoom-drag-transition lg-zoom-dragging"),t>1?(this.core.outer.addClass("lg-zoomed"),this.manageActualPixelClassNames()):this.resetZoom(),t>1},t.prototype.getScale=function(t){var e=this.getCurrentImageActualSizeScale();return t<1?t=1:t>e&&(t=e),t},t.prototype.init=function(){var t=this;if(this.settings.zoom){this.buildTemplates(),this.enableZoomOnSlideItemLoad();var e=null;this.core.outer.on("dblclick.lg",function(e){t.$LG(e.target).hasClass("lg-image")&&t.setActualSize(t.core.index,e)}),this.core.outer.on("touchstart.lg",function(o){var i=t.$LG(o.target);1===o.touches.length&&i.hasClass("lg-image")&&(e?(clearTimeout(e),e=null,o.preventDefault(),t.setActualSize(t.core.index,o)):e=setTimeout(function(){e=null},300))}),this.core.LGel.on("lgContainerResize.zoom lgRotateRight.zoom lgRotateLeft.zoom lgFlipHorizontal.zoom lgFlipVertical.zoom",function(){if(t.core.lgOpened&&t.isImageSlide(t.core.index)&&!t.core.touchAction){var e=t.core.getSlideItem(t.core.index).find(".lg-img-wrap").first();t.top=0,t.left=0,t.setZoomEssentials(),t.setZoomSwipeStyles(e,{x:0,y:0}),t.positionChanged=!0}}),this.$LG(window).on("scroll.lg.zoom.global"+this.core.lgId,function(){t.core.lgOpened&&(t.scrollTop=t.$LG(window).scrollTop())}),this.core.getElementById("lg-zoom-out").on("click.lg",function(){if(t.isImageSlide(t.core.index)){var e=0;t.imageReset&&(t.resetImageTranslate(t.core.index),e=50),setTimeout(function(){var e=t.scale-t.settings.scale;e<1&&(e=1),t.beginZoom(e),t.zoomImage(e,-t.settings.scale,!0,!t.settings.infiniteZoom)},e)}}),this.core.getElementById("lg-zoom-in").on("click.lg",function(){t.zoomIn()}),this.core.getElementById("lg-actual-size").on("click.lg",function(){t.setActualSize(t.core.index)}),this.core.LGel.on("lgBeforeOpen.zoom",function(){t.core.outer.find(".lg-item").removeClass("lg-zoomable")}),this.core.LGel.on("lgAfterOpen.zoom",function(){t.scrollTop=t.$LG(window).scrollTop(),t.pageX=t.core.outer.width()/2,t.pageY=t.core.outer.height()/2+t.scrollTop,t.scale=1}),this.core.LGel.on("lgAfterSlide.zoom",function(e){var o=e.detail.prevIndex;t.scale=1,t.positionChanged=!1,t.zoomInProgress=!1,t.resetZoom(o),t.resetImageTranslate(o),t.isImageSlide(t.core.index)&&t.setZoomEssentials()}),this.zoomDrag(),this.pinchZoom(),this.zoomSwipe(),this.zoomableTimeout=!1,this.positionChanged=!1,this.zoomInProgress=!1}},t.prototype.zoomIn=function(){if(this.isImageSlide(this.core.index)){var t=this.scale+this.settings.scale;this.settings.infiniteZoom||(t=this.getScale(t)),this.beginZoom(t),this.zoomImage(t,Math.min(this.settings.scale,t-this.scale),!0,!this.settings.infiniteZoom)}},t.prototype.resetZoom=function(t){this.core.outer.removeClass("lg-zoomed lg-zoom-drag-transition");var e=this.core.getElementById("lg-actual-size"),o=this.core.getSlideItem(void 0!==t?t:this.core.index);e.removeClass(this.settings.actualSizeIcons.zoomOut).addClass(this.settings.actualSizeIcons.zoomIn),o.find(".lg-img-wrap").first().removeAttr("style"),o.find(".lg-image").first().removeAttr("style"),this.scale=1,this.left=0,this.top=0,this.setPageCords()},t.prototype.getTouchDistance=function(t){return Math.sqrt((t.touches[0].pageX-t.touches[1].pageX)*(t.touches[0].pageX-t.touches[1].pageX)+(t.touches[0].pageY-t.touches[1].pageY)*(t.touches[0].pageY-t.touches[1].pageY))},t.prototype.pinchZoom=function(){var t=this,e=0,o=!1,i=1,s=0,n=this.core.getSlideItem(this.core.index);this.core.outer.on("touchstart.lg",function(o){n=t.core.getSlideItem(t.core.index),t.isImageSlide(t.core.index)&&2===o.touches.length&&(o.preventDefault(),!t.core.outer.hasClass("lg-first-slide-loading")&&(i=t.scale||1,t.core.outer.removeClass("lg-zoom-drag-transition lg-zoom-dragging"),t.setPageCords(o),t.resetImageTranslate(t.core.index),t.core.touchAction="pinch",e=t.getTouchDistance(o)))}),this.core.$inner.on("touchmove.lg",function(a){if(2===a.touches.length&&"pinch"===t.core.touchAction&&(t.$LG(a.target).hasClass("lg-item")||n.get().contains(a.target))){a.preventDefault();var r=t.getTouchDistance(a),l=e-r;if(!o&&Math.abs(l)>5&&(o=!0),o){s=t.scale;var h=Math.max(1,i+-(.02*l));t.scale=Math.round((h+Number.EPSILON)*100)/100;var u=t.scale-s;t.zoomImage(t.scale,Math.round((u+Number.EPSILON)*100)/100,!1,!1)}}}),this.core.$inner.on("touchend.lg",function(i){if("pinch"===t.core.touchAction&&(t.$LG(i.target).hasClass("lg-item")||n.get().contains(i.target))){if(o=!1,e=0,t.scale<=1)t.resetZoom();else{var s=t.getCurrentImageActualSizeScale();if(t.scale>=s){var a=s-t.scale;0===a&&(a=.01),t.zoomImage(s,a,!1,!0)}t.manageActualPixelClassNames(),t.core.outer.addClass("lg-zoomed")}t.core.touchAction=void 0}})},t.prototype.touchendZoom=function(t,e,o,i,s){var n=e.x-t.x,a=e.y-t.y,r=Math.abs(n)/s+1,l=Math.abs(a)/s+1;r>2&&(r+=1),l>2&&(l+=1),n*=r,a*=l;var h=this.core.getSlideItem(this.core.index).find(".lg-img-wrap").first(),u={};u.x=this.left+n,u.y=this.top+a;var c=this.getPossibleSwipeDragCords();(Math.abs(n)>15||Math.abs(a)>15)&&(i&&(this.isBeyondPossibleTop(u.y,c.minY)?u.y=c.minY:this.isBeyondPossibleBottom(u.y,c.maxY)&&(u.y=c.maxY)),o&&(this.isBeyondPossibleLeft(u.x,c.minX)?u.x=c.minX:this.isBeyondPossibleRight(u.x,c.maxX)&&(u.x=c.maxX)),i?this.top=u.y:u.y=this.top,o?this.left=u.x:u.x=this.left,this.setZoomSwipeStyles(h,u),this.positionChanged=!0)},t.prototype.getZoomSwipeCords=function(t,e,o,i,s){var n={};if(i){if(n.y=this.top+(e.y-t.y),this.isBeyondPossibleTop(n.y,s.minY)){var a=s.minY-n.y;n.y=s.minY-a/6}else if(this.isBeyondPossibleBottom(n.y,s.maxY)){var r=n.y-s.maxY;n.y=s.maxY+r/6}}else n.y=this.top;if(o){if(n.x=this.left+(e.x-t.x),this.isBeyondPossibleLeft(n.x,s.minX)){var l=s.minX-n.x;n.x=s.minX-l/6}else if(this.isBeyondPossibleRight(n.x,s.maxX)){var h=n.x-s.maxX;n.x=s.maxX+h/6}}else n.x=this.left;return n},t.prototype.isBeyondPossibleLeft=function(t,e){return t>=e},t.prototype.isBeyondPossibleRight=function(t,e){return t<=e},t.prototype.isBeyondPossibleTop=function(t,e){return t>=e},t.prototype.isBeyondPossibleBottom=function(t,e){return t<=e},t.prototype.isImageSlide=function(t){var e=this.core.galleryItems[t];return"image"===this.core.getSlideType(e)},t.prototype.getPossibleSwipeDragCords=function(t){var e=this.core.getSlideItem(this.core.index).find(".lg-image").first(),o=this.core.mediaContainerPosition.bottom,i=e.get().getBoundingClientRect(),s=i.height,n=i.width;return t&&(s+=t*s,n+=t*n),{minY:(s-this.containerRect.height)/2,maxY:(this.containerRect.height-s)/2+o,minX:(n-this.containerRect.width)/2,maxX:(this.containerRect.width-n)/2}},t.prototype.setZoomSwipeStyles=function(t,e){t.css("transform","translate3d("+e.x+"px, "+e.y+"px, 0)")},t.prototype.zoomSwipe=function(){var t,e,o=this,i={},s={},n=!1,a=!1,r=!1,l=new Date,h=this.core.getSlideItem(this.core.index);this.core.$inner.on("touchstart.lg",function(s){if(o.isImageSlide(o.core.index)&&(h=o.core.getSlideItem(o.core.index),(o.$LG(s.target).hasClass("lg-item")||h.get().contains(s.target))&&1===s.touches.length&&o.core.outer.hasClass("lg-zoomed"))){s.preventDefault(),l=new Date,o.core.touchAction="zoomSwipe",e=o.core.getSlideItem(o.core.index).find(".lg-img-wrap").first();var n=o.getDragAllowedAxises(0);r=n.allowY,((a=n.allowX)||r)&&(i=o.getSwipeCords(s)),t=o.getPossibleSwipeDragCords(),o.core.outer.addClass("lg-zoom-dragging lg-zoom-drag-transition")}}),this.core.$inner.on("touchmove.lg",function(l){if(1===l.touches.length&&"zoomSwipe"===o.core.touchAction&&(o.$LG(l.target).hasClass("lg-item")||h.get().contains(l.target))){l.preventDefault(),o.core.touchAction="zoomSwipe",s=o.getSwipeCords(l);var u=o.getZoomSwipeCords(i,s,a,r,t);(Math.abs(s.x-i.x)>15||Math.abs(s.y-i.y)>15)&&(n=!0,o.setZoomSwipeStyles(e,u))}}),this.core.$inner.on("touchend.lg",function(t){if("zoomSwipe"===o.core.touchAction&&(o.$LG(t.target).hasClass("lg-item")||h.get().contains(t.target))&&(t.preventDefault(),o.core.touchAction=void 0,o.core.outer.removeClass("lg-zoom-dragging"),n)){n=!1;var e=new Date().valueOf()-l.valueOf();o.touchendZoom(i,s,a,r,e)}})},t.prototype.zoomDrag=function(){var t,e,o,i,s=this,n={},a={},r=!1,l=!1,h=!1,u=!1;this.core.outer.on("mousedown.lg.zoom",function(e){if(s.isImageSlide(s.core.index)){var a=s.core.getSlideItem(s.core.index);if(s.$LG(e.target).hasClass("lg-item")||a.get().contains(e.target)){t=new Date,i=s.core.getSlideItem(s.core.index).find(".lg-img-wrap").first();var l=s.getDragAllowedAxises(0);u=l.allowY,h=l.allowX,s.core.outer.hasClass("lg-zoomed")&&s.$LG(e.target).hasClass("lg-object")&&(h||u)&&(e.preventDefault(),n=s.getDragCords(e),o=s.getPossibleSwipeDragCords(),r=!0,s.core.outer.removeClass("lg-grab").addClass("lg-grabbing lg-zoom-drag-transition lg-zoom-dragging"))}}}),this.$LG(window).on("mousemove.lg.zoom.global"+this.core.lgId,function(t){if(r){l=!0,a=s.getDragCords(t);var e=s.getZoomSwipeCords(n,a,h,u,o);s.setZoomSwipeStyles(i,e)}}),this.$LG(window).on("mouseup.lg.zoom.global"+this.core.lgId,function(o){if(r){if(e=new Date,r=!1,s.core.outer.removeClass("lg-zoom-dragging"),l&&(n.x!==a.x||n.y!==a.y)){a=s.getDragCords(o);var i=e.valueOf()-t.valueOf();s.touchendZoom(n,a,h,u,i)}l=!1}s.core.outer.removeClass("lg-grabbing").addClass("lg-grab")})},t.prototype.closeGallery=function(){this.resetZoom(),this.zoomInProgress=!1},t.prototype.destroy=function(){this.$LG(window).off(".lg.zoom.global"+this.core.lgId),this.core.LGel.off(".lg.zoom"),this.core.LGel.off(".zoom"),clearTimeout(this.zoomableTimeout),this.zoomableTimeout=!1},t}();e.Z=s},8864:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var o in e)Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}(e,{default:function(){return r},noSSR:function(){return a}});let i=o(8754);o(5893),o(7294);let s=i._(o(6016));function n(t){return{default:(null==t?void 0:t.default)||t}}function a(t,e){return delete e.webpack,delete e.modules,t(e)}function r(t,e){let o=s.default,i={loading:t=>{let{error:e,isLoading:o,pastDelay:i}=t;return null}};t instanceof Promise?i.loader=()=>t:"function"==typeof t?i.loader=t:"object"==typeof t&&(i={...i,...t});let r=(i={...i,...e}).loader;return(i.loadableGenerated&&(i={...i,...i.loadableGenerated},delete i.loadableGenerated),"boolean"!=typeof i.ssr||i.ssr)?o({...i,loader:()=>null!=r?r().then(n):Promise.resolve(n(()=>null))}):(delete i.webpack,delete i.modules,a(o,i))}("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},572:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"LoadableContext",{enumerable:!0,get:function(){return i}});let i=o(8754)._(o(7294)).default.createContext(null)},6016:function(t,e,o){"use strict";/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
 MIT License
 Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
 The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return g}});let i=o(8754)._(o(7294)),s=o(572),n=[],a=[],r=!1;function l(t){let e=t(),o={loading:!0,loaded:null,error:null};return o.promise=e.then(t=>(o.loading=!1,o.loaded=t,t)).catch(t=>{throw o.loading=!1,o.error=t,t}),o}class h{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:t,_opts:e}=this;t.loading&&("number"==typeof e.delay&&(0===e.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},e.delay)),"number"==typeof e.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},e.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(t=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(t){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...t},this._callbacks.forEach(t=>t())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(t){return this._callbacks.add(t),()=>{this._callbacks.delete(t)}}constructor(t,e){this._loadFn=t,this._opts=e,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function u(t){return function(t,e){let o=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},e),n=null;function l(){if(!n){let e=new h(t,o);n={getCurrentValue:e.getCurrentValue.bind(e),subscribe:e.subscribe.bind(e),retry:e.retry.bind(e),promise:e.promise.bind(e)}}return n.promise()}if(!r){let t=o.webpack?o.webpack():o.modules;t&&a.push(e=>{for(let o of t)if(e.includes(o))return l()})}function u(t,e){!function(){l();let t=i.default.useContext(s.LoadableContext);t&&Array.isArray(o.modules)&&o.modules.forEach(e=>{t(e)})}();let a=i.default.useSyncExternalStore(n.subscribe,n.getCurrentValue,n.getCurrentValue);return i.default.useImperativeHandle(e,()=>({retry:n.retry}),[]),i.default.useMemo(()=>{var e;return a.loading||a.error?i.default.createElement(o.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:n.retry}):a.loaded?i.default.createElement((e=a.loaded)&&e.default?e.default:e,t):null},[t,a])}return u.preload=()=>l(),u.displayName="LoadableComponent",i.default.forwardRef(u)}(l,t)}function c(t,e){let o=[];for(;t.length;){let i=t.pop();o.push(i(e))}return Promise.all(o).then(()=>{if(t.length)return c(t,e)})}u.preloadAll=()=>new Promise((t,e)=>{c(n).then(t,e)}),u.preloadReady=t=>(void 0===t&&(t=[]),new Promise(e=>{let o=()=>(r=!0,e());c(a,t).then(o,o)})),window.__NEXT_PRELOADREADY=u.preloadReady;let g=u},1915:function(){},4695:function(){},6185:function(){},5152:function(t,e,o){t.exports=o(8864)}}]);