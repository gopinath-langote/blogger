(function(){var e=function(e,t){return function(){return e.apply(t,arguments)}},t=function(e,t){function i(){this.constructor=e}for(var r in t)n.call(t,r)&&(e[r]=t[r]);return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e},n={}.hasOwnProperty;define("opendesk.audiences",function(n,r){var i;return i=function(n){function r(){return this.trigger=e(this.trigger,this),this.rotate_next=e(this.rotate_next,this),this.handle_gear=e(this.handle_gear,this),this.handle=e(this.handle,this),this.rotate=e(this.rotate,this),r.__super__.constructor.apply(this,arguments)}return t(r,n),r.prototype.set_position=function(e,t){var n,r,i,s,o,u;u=[1,2,3];for(s=0,o=u.length;s<o;s++)i=u[s],r="audience-position-"+i,i===t&&!e.hasClass(r)&&e.addClass(r),i!==t&&e.hasClass(r)&&e.removeClass(r);return e.data("current-position",t),n=e.find(".audience-strap-image")},r.prototype.get_position=function(e,t){var n;n=e.data("starting-position");if(t===1)return n;if(t===2){if(n===2)return 1;if(n===3)return 2;if(n===1)return 3}if(t===3){if(n===3)return 1;if(n===1)return 2;if(n===2)return 3}},r.prototype.rotate=function(e){return this.$audiences.each(function(t){return function(n,r){var i,s;return i=$(r),s=t.get_position(i,e),t.set_position(i,s)}}(this))},r.prototype.handle=function(e){var t,n,r,i;return n=$(e.target),t=n.closest(".audience"),i=t.data("current-position"),i===1?!0:(r=t.data("starting-position"),this.rotate(r),this.user_has_clicked=!0)},r.prototype.handle_gear=function(){return this.rotate_next(),this.user_has_clicked=!0},r.prototype.rotate_next=function(){var e;return e=this.$(".audience-position-2"),this.rotate(e.data("starting-position"))},r.prototype.trigger=function(){var e;if(this.user_has_clicked){window.clearTimeout(this.timer);return}e=$("#"+this.id+":hover").length;if(e)return;return this.rotate_next()},r.prototype.initialize=function(){var e,t;return this.id=this.$el.attr("id"),this.user_has_clicked=!1,this.$audiences=this.$(".audience"),e=this.$(".audience .audience-content"),e.click(this.handle),t=this.$(".audiences-gear-image"),t.click(this.handle_gear),this.timer=window.setInterval(this.trigger,7e3)},r}(Backbone.View),n.AudiencesCarousel=i})}).call(this),function(){define("opendesk.util",function(e,t){var n,r,i,s,o,u,a,f,l;return n=_.extend({},Backbone.Events),l="GBP",i={GBP:{format:"%s%v",precision:0,symbol:"£"},USD:{format:"%s%v",precision:0,symbol:"$"},EUR:{format:"%s%v",precision:0,symbol:"€"}},r=function(e,t,n){var r,i;return r=e!=null&&t!=null&&n!=null,r?(i={from:t,to:n},fx.convert(e,i)):e!=null?e:0},s=function(e,t){var n;return e==null?"":(t==null&&(t=l),t in i?n=i[t]:n={format:"%v %s",precision:0,symbol:t},accounting.formatMoney(e,n))},f=function(e,t){var n,r;return r={name:t},n=_.findWhere(e,r),n.value},o=function(e,t,n){var r,i;return i={name:t},r=_.findWhere(e,i),r.value||(r.value=n),e},u=function(){return window.location.protocol+"//"+window.location.host+(""+Backbone.history.options.root+Backbone.history.getFragment())},a=function(){return""+Backbone.history.options.root+Backbone.history.getFragment()},e.broadcaster=n,e.currency_convert=r,e.display_price=s,e.ensure_named_param_value=o,e.get_location_href=u,e.get_location_path=a,e.get_named_param_value=f,e.local_currency=l})}.call(this),function(){var e=function(e,t){return function(){return e.apply(t,arguments)}},t=function(e,t){function i(){this.constructor=e}for(var r in t)n.call(t,r)&&(e[r]=t[r]);return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e},n={}.hasOwnProperty;define("opendesk.rivets",function(n,r){var i,s,o,u,a,f,l,c;return s={observe:function(e,t,n){return e.on("change:"+t,n)},unobserve:function(e,t,n){return e.off("change:"+keypath,n)},get:function(e,t){return e.get(t)},set:function(e,t,n){return e.set(t,n)}},l={publishes:!0,bind:function(e){return function(t){return $(t).on("keyup",e.publish)}}(this),unbind:function(e){return function(t){return $(t).off("keyup",e.publish)}}(this),routine:function(e){return function(e,t){return r.rivets.binders.value.routine(e,t)}}(this)},f={publishes:!0,bind:function(e){return $(e).on("blur",this.publish),$(e).on("change",this.publish)},unbind:function(e){return $(e).off("blur",this.publish),$(e).off("change",this.publish)},routine:function(e){return function(e,t){return r.rivets.binders.value.routine(e,t)}}(this)},u=function(e){return e==null?"":e.toLocaleString!=null?e.toLocaleString():e.toString()},o=function(e,t){return""+t+e},a=function(e,t){return""+e+t},c=function(e,t){return t===1?e:e+"s"},r.rivets.adapters[":"]=s,r.rivets.binders["lazy-value"]=f,r.rivets.binders["live-value"]=l,r.rivets.formatters.append=o,r.rivets.formatters.plural=c,r.rivets.formatters.prepend=a,r.rivets.formatters.number_string=u,i=function(n){function r(){return this.remove=e(this.remove,this),this.render=e(this.render,this),this.set_modified=e(this.set_modified,this),r.__super__.constructor.apply(this,arguments)}return t(r,n),r.prototype.initialize=function(){return r.__super__.initialize.call(this),this.options.error_model!=null&&(this.error_model=this.options.error_model),this.model.on("change",this.set_modified),this.set_modified(),this.render()},r.prototype.set_modified=function(){return this.modified=+(new Date)},r.prototype.render=function(){var e;return r.__super__.render.call(this),e={model:this.model,view:this},this.error_model!=null&&(e.err=this.error_model),this.rivets_view=rivets.bind(this.el,e),this.$el.hasClass("hidden")&&this.$el.removeClass("hidden"),this},r.prototype.remove=function(){return this.rivets_view.unbind(),r.__super__.remove.call(this)},r}(Backbone.View),n.RivetedView=i})}.call(this),function(){var e=function(e,t){return function(){return e.apply(t,arguments)}},t=function(e,t){function i(){this.constructor=e}for(var r in t)n.call(t,r)&&(e[r]=t[r]);return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e},n={}.hasOwnProperty;define("opendesk.controller",function(n,r){var i,s;return i=function(n){function r(){return this.designs=e(this.designs,this),this.index=e(this.index,this),r.__super__.constructor.apply(this,arguments)}return t(r,n),r.prototype.routes={"":"index",designs:"designs","designs/":"designs"},r.prototype.index=function(){return new opendesk.view.index.IndexPage({el:$(document.body),model:new Backbone.Model})},r.prototype.designs=function(){return new opendesk.view.design.DesignsListingPage({el:$(document.body),model:new Backbone.Model})},r}(Backbone.Router),s=function(){var e,t,r,s,o;$(".subscribe-widget").each(function(){return new opendesk.subscribe.SubscribeWidget({el:$(this)})}),$(".js-simple-feedback").each(function(){return new opendesk.view.feedback.SimpleFeedbackWidget({el:$(this)})}),e=new i,n.navigate=e.navigate;if(typeof pyramid_weblayer_is_exception_view=="undefined"||pyramid_weblayer_is_exception_view===null)r={pushState:Modernizr.history,silent:!0},Backbone.history.start(r),Modernizr.history?Backbone.history.loadUrl(Backbone.history.getFragment()):(o=Backbone.history.options.root.length,t=window.location.pathname.substr(o),Backbone.history.navigate(t,{trigger:!0}));if(location.hash==="#_=_")return history.pushState!=null?(s=location.pathname+location.search,history.pushState("",document.title,s)):location.hash=""},n.main=s})}.call(this),function(){var e=function(e,t){return function(){return e.apply(t,arguments)}},t=function(e,t){function i(){this.constructor=e}for(var r in t)n.call(t,r)&&(e[r]=t[r]);return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e},n={}.hasOwnProperty;define("opendesk.events",function(n,r){var i,s,o;return i=function(n){function r(){return this.initialize=e(this.initialize,this),this.update=e(this.update,this),this.toggle=e(this.toggle,this),this.downvote=e(this.downvote,this),this.upvote=e(this.upvote,this),r.__super__.constructor.apply(this,arguments)}return t(r,n),r.prototype.upvote=function(){return this.votes.add({id:this.user_id})},r.prototype.downvote=function(){return this.votes.remove({id:this.user_id})},r.prototype.toggle=function(){var e;return e=this.model.get("has_voted"),e?this.downvote():this.upvote()},r.prototype.update=function(){var e,t;return t=this.votes.get(this.user_id),e={has_voted:t!=null,num_votes:this.votes.length},this.model.set(e)},r.prototype.initialize=function(){var e,t,n,i,s;return r.__super__.initialize.call(this),this.user_id=this.model.get("user_id"),n=this.model.get("event_name"),s=this.$el.data("submission-id"),t="https://spontaneous-voting.firebaseio.com",i={url:t+"/"+n+"/"+s+"/votes"},e=Backbone.Firebase.Collection.extend(i),this.votes=new e,this.votes.on("add",this.update),this.votes.on("remove",this.update),this.update()},r}(opendesk.rivets.RivetedView),o=function(){var e,t,n,r;return n="spontaneous-voting-user-id",window.localStorage!=null&&(r=window.localStorage.getItem(n)),r==null&&(e=Math.random(),t=Math.random(),r=e.toString(36).slice(2)+t.toString(36).slice(2),window.localStorage!=null&&window.localStorage.setItem(n,r)),r},s=function(e,t){var n,r,s;return r=t.split("/")[0],s=o(),n=e.find(".event-submission-tile"),n.each(function(e,n){var r,s,u;return r={event_name:t.split("/")[0],has_upvoted:!1,num_votes:0,user_id:o()},s={el:$(n),model:new Backbone.Model(r)},u=new i(s)})},n.enable_voting=s})}.call(this),function(){var e=function(e,n){function i(){this.constructor=e}for(var r in n)t.call(n,r)&&(e[r]=n[r]);return i.prototype=n.prototype,e.prototype=new i,e.__super__=n.prototype,e},t={}.hasOwnProperty;define("opendesk.subscribe",function(t,n){var r;return r=function(t){function r(){return r.__super__.constructor.apply(this,arguments)}return e(r,t),r.prototype.initialize=function(){var e,t,r,i,s,o,u,a,f,l,c,h;return l=this.$el,i=this.$(".subscribe-widget-inner"),s=this.$(".js-li:first-child"),f=this.$(".js-li a.subscribe-link"),u=this.$(".js-li > a"),e=this.$(".subscribe-hide"),r=this.$("form"),t=this.$("input[name=email]"),a=this.$("input[name=section]"),o=this.$("a.success-message"),r.hide(),o.hide(),r.removeClass("hide"),o.removeClass("hide"),c=function(){return i.fadeOut(800,function(){return i.css({visibility:"hidden"}),i.show(),u.removeClass("visible-xs")})},h=function(t){var i,s,h,p;return r.removeClass("has-error"),i={section:a.val()},s=JSON.stringify(i),h={type:"POST",contentType:"application/json; charset=utf-8",data:s,dataType:"json",success:function(){return o.show(),l.removeClass("showing-form"),r.hide(),f.hide(),u.addClass("visible-xs"),e.hide(),window.setTimeout(c,4e3)},error:function(t){return l.addClass("showing-form"),r.show(),t.status===400&&r.addClass("has-error"),o.hide(),f.hide(),u.addClass("visible-xs"),e.hide()}},t&&(h.headers={Authorization:"Bearer "+t}),p=n.fabbed.api_base_url+"/subscriptions",$.ajax(p,h)},f.click(function(){return h(),!1}),r.submit(function(){var e,r,i;return e={email:t.val(),can_create_user:!0,can_return_bearer_token:!0},r={type:"POST",data:e,success:function(e){var t;return e.bearer_token!=null?t=e.bearer_token.access_token:t=null,h(t)},error:function(e){return window.location.href="/open/auth/signin"}},i=n.fabbed.api_base_url+"/auth/authenticate",$.ajax(i,r),!1})},r}(Backbone.View),t.SubscribeWidget=r})}.call(this),function(){var e=function(e,t){return function(){return e.apply(t,arguments)}},t=function(e,t){function i(){this.constructor=e}for(var r in t)n.call(t,r)&&(e[r]=t[r]);return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e},n={}.hasOwnProperty,r=[].slice;define("opendesk.view.feedback",function(n,i){var s;return s=function(n){function s(){return this.refresh=e(this.refresh,this),this.handle_success=e(this.handle_success,this),this.handle_error=e(this.handle_error,this),this.handle_submit=e(this.handle_submit,this),s.__super__.constructor.apply(this,arguments)}return t(s,n),s.prototype.events={submit:"handle_submit"},s.prototype.handle_submit=function(){var e,t,n,r,s,o,u,a;this.$form.removeClass("has-error"),this.$help.text(""),this.$help.hide(),e={},u=this.$form.serializeArray();for(n=0,s=u.length;n<s;n++)r=u[n],e[r.name]=r.value;return typeof opendesk!="undefined"&&opendesk!==null&&opendesk.util!=null&&opendesk.util.get_location_href!=null?t=opendesk.util.get_location_href():t=window.location.href,e.url=t,o={type:"POST",contentType:"application/json; charset=utf-8",data:JSON.stringify(e),dataType:"json",error:this.handle_error,success:this.handle_success},a=i.fabbed.api_base_url+"/simple-feedbacks",$.ajax(a,o),!1},s.prototype.handle_error=function(){var e;return e=1<=arguments.length?r.call(arguments,0):[],this.$form.addClass("has-error"),this.$help.text("Failed to post your feedback. Please try again."),this.$help.show()},s.prototype.handle_success=function(){return this.$input.val(""),this.$form.hide(),this.$alert.show(),window.setTimeout(this.refresh,6e3)},s.prototype.refresh=function(){return this.$alert.fadeOut(800,function(e){return function(){return e.$form.fadeIn(500)}}(this))},s.prototype.initialize=function(){return this.$alert=this.$(".alert"),this.$alert.hide(),this.$alert.removeClass("hide"),this.$form=this.$("form"),this.$help=this.$(".help-block"),this.$input=this.$("input[name=feedback]"),this.$input.val("")},s}(Backbone.View),n.SimpleFeedbackWidget=s})}.call(this),function(){var e=function(e,n){function i(){this.constructor=e}for(var r in n)t.call(n,r)&&(e[r]=n[r]);return i.prototype=n.prototype,e.prototype=new i,e.__super__=n.prototype,e},t={}.hasOwnProperty;define("opendesk.view.index",function(t,n){var r;return r=function(t){function n(){return n.__super__.constructor.apply(this,arguments)}return e(n,t),n.prototype.initialize=function(){var e,t,n,r,i,s,o,u,a,f;return r=this.$("#map"),n=this.$("#map-form"),e=$("#js-explore-map-link"),t=this.$(".js-explore-map-link"),t.click(function(){var t;return t=new fabhub.view.map.MapView({el:n,map:r,model:new Backbone.Model,map_styles:opendesk.style.map_styles,map_height:.7,map_bg:"#F9F9FA",min_zoom:2}),e.css({visibility:"hidden",width:"1px"}),!1}),a=null,u=!1,i=$(".press-quote-tabs li"),i.one("click",function(){return u=!0}),f=function(){var e,t;return e=i.filter(".active"),t=e.next("li"),t.length||(t=i.filter("li:first")),t.find("a").tab("show")},s=function(){if(u){window.clearInterval(a);return}return f()},o=function(){if(u)return;return f(),a=window.setInterval(s,7e3)},window.setTimeout(o,10500)},n}(Backbone.View),t.IndexPage=r})}.call(this),function(){var e=function(e,n){function i(){this.constructor=e}for(var r in n)t.call(n,r)&&(e[r]=n[r]);return i.prototype=n.prototype,e.prototype=new i,e.__super__=n.prototype,e},t={}.hasOwnProperty;define("opendesk.view.design",function(t,n){var r;return r=function(t){function n(){return n.__super__.constructor.apply(this,arguments)}return e(n,t),n.prototype.initialize=function(){},n}(Backbone.View),t.DesignsListingPage=r})}.call(this),function(){var e=function(e,n){function i(){this.constructor=e}for(var r in n)t.call(n,r)&&(e[r]=n[r]);return i.prototype=n.prototype,e.prototype=new i,e.__super__=n.prototype,e},t={}.hasOwnProperty,n=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return-1},r=function(e,t){return function(){return e.apply(t,arguments)}};define("opendesk.workspaces",function(i,s){var o,u,a;return u=function(r){function i(){return i.__super__.constructor.apply(this,arguments)}return e(i,r),i.prototype.defaults={name:"",company:"",email:"",phone:"",message:"",num_seats:"",budget:"",budget_option:"",is_shop:!1,location_name:""},i.prototype.validate=function(e,r){var i,s,o;i={},!e.name&&this.hasChanged("name")&&(i.name="Please enter your name."),!e.email&&this.hasChanged("email")&&(i.email="Please enter your email."),n.call(e.email,"@")<0&&this.hasChanged("email")&&(i.email="Is that a valid email address?");for(s in i){if(!t.call(i,s))continue;return o=i[s],i}return null},i}(Backbone.Model),o=function(t){function n(){return this.display=r(this.display,this),this.convert=r(this.convert,this),this.bootstrap=r(this.bootstrap,this),this.handle_success=r(this.handle_success,this),this.handle_error=r(this.handle_error,this),this.submit=r(this.submit,this),this.validate=r(this.validate,this),this.expand=r(this.expand,this),n.__super__.constructor.apply(this,arguments)}return e(n,t),n.prototype.expand=function(e){var t;return this.model.set({expanded:!0}),t=this.$("input"),t.first().focus(),!1},n.prototype.validate=function(){var e,t,n;e=this.model.validate(this.model.attributes);if(e){e.has_errors=!0;for(t in e)n=e[t],this.error_model.set(t,n);return!1}return this.error_model.clear(),!0},n.prototype.submit=function(){var e,t,n;return e=this.model.toJSON(),e.budget&&(e.budget=accounting.unformat(e.budget),e.budget_currency=e.local_currency),t={type:"POST",contentType:"application/json; charset=utf-8",data:JSON.stringify(e),dataType:"json",error:function(e){return function(t){return e.handle_error(t)}}(this),success:function(e){return function(t){return e.handle_success(t)}}(this)},n=s.fabbed.api_base_url+"/workspace-enquiries",$.ajax(n,t),this.model.set({in_progress:!0}),!1},n.prototype.handle_error=function(e){var t,n,r,i,s,o;this.model.set({in_progress:!1}),t={},n=e.responseJSON!=null?e.responseJSON:{},r=n.errors!=null?n.errors:[];for(s=0,o=r.length;s<o;s++)i=r[s],this.error_model.set(""+i.name,i.description);return this.error_model.set({has_errors:!0})},n.prototype.handle_success=function(){var e,t;return this.model.set({in_progress:!1}),this.model.set({submitted:!0}),window.google_trackConversion!=null&&(e={},window.google_conversion_color="ffffff",window.google_conversion_format="3",window.google_conversion_id=956819616,window.google_conversion_label="3_0gCIjIz1oQoNGfyAM",window.google_conversion_language="en",window.google_remarketing_only=!1,window.google_trackConversion(e)),window.twttr!=null&&window.twttr.conversion!=null&&(t={tw_sale_amount:0,tw_order_quantity:0},window.twttr.conversion.trackPid("l5rwg",t)),null},n.prototype.bootstrap=function(){var e,t;return e={dataType:"json",success:function(e){return function(t){return window.fx.base=t.fx.base,window.fx.rates=JSON.parse(t.fx.rates),e.model.set("local_currency",t.fabbed.currency)}}(this)},t=s.fabbed.api_base_url+"/bootstrap",$.ajax(t,e)},n.prototype.convert=function(e,t){var n,r;return n=this.model.get("local_currency"),r=opendesk.util.currency_convert(e,"GBP",n),t&&"XXX round to nearest foo",r},n.prototype.display=function(e){var t,n;return t=this.model.get("local_currency"),n=opendesk.util.display_price(e,t),n},n.prototype.round=function(e){var t;return e>1e5?t=1e4:e>1e4?t=1e3:e>1e4?t=1e3:e>1e3?t=100:t=10,Math.round(e/t)*t},n.prototype.initialize=function(){var e,t;return n.__super__.initialize.call(this),this.model.on("change:location_name",function(e){return function(){var t,n;n=e.model.get("location_name"),t=e.$("#user_location");if(n&&!t.val())return t.val(n)}}(this)),e=document.getElementById("range"),t=document.getElementById("user_budget"),this.bootstrap(),this.model.once("change:local_currency",function(n){return function(){var r,i,s,o,u,a,f,l,c,h,p,d,v,m;r=n.convert,i=n.display,h=n.round,s={to:function(e){return i(h(e))},from:function(e){return accounting.unformat(e)}},c={min:[0,h(r(20))],max:[h(r(1e5))]},d=function(){var e,t;t=[];for(u=e=1;e<=9;u=++e)t.push(u*10);return t}();for(a=0,f=d.length;a<f;a++)v=d[a],m=r(v*v*10),p=h(m/20),c[v+"%"]=[m,p];return l={format:s,range:c,start:h(r(2e4)),pips:{density:3,format:s,mode:"positions",values:[0,25,50,75,100]}},noUiSlider.create(e,l),e.noUiSlider.on("update",function(e,n){return t.value=e[n],$(t).trigger("change")}),t.addEventListener("change",function(){return e.noUiSlider.set(this.value)}),o=e.querySelector(".noUi-origin"),o.setAttribute("tabindex",0),o.addEventListener("click",function(){return this.focus()}),o.addEventListener("keydown",function(t){var n,r,i;i=Number(accounting.unformat(e.noUiSlider.get())),r=e.noUiSlider.steps(),n=r[0];switch(t.which){case 37:return e.noUiSlider.set(i-n[0]*2);case 39:return e.noUiSlider.set(i+n[1]*2)}})}}(this))},n}(opendesk.rivets.RivetedView),a=function(e,t){var n,r,i;return n=new u({is_shop:t}),r={el:e,model:n,error_model:new Backbone.Model},i=new o(r),window.setTimeout(i.expand,10),n},i.WorkspaceEnquiry=u,i.WorkspaceEnquiriesView=o,i.apply_workspace_enquiries_view=a})}.call(this),function(){$(function(){return opendesk.controller.main()})}.call(this),function(e,t){"use strict";function r(e){return e}function i(e){return decodeURIComponent(e.replace(n," "))}var n=/\+/g;e.cookie=function(n,s,o){if(arguments.length>1&&(!/Object/.test(Object.prototype.toString.call(s))||s==null)){o=e.extend({},e.cookie.defaults,o),s==null&&(o.expires=-1);if(typeof o.expires=="number"){var u=o.expires,a=o.expires=new Date;a.setDate(a.getDate()+u)}return s=String(s),t.cookie=[encodeURIComponent(n),"=",o.raw?s:encodeURIComponent(s),o.expires?"; expires="+o.expires.toUTCString():"",o.path?"; path="+o.path:"",o.domain?"; domain="+o.domain:"",o.secure?"; secure":""].join("")}o=s||e.cookie.defaults||{};var f=o.raw?r:i,l=t.cookie.split("; ");for(var c=0,h;h=l[c]&&l[c].split("=");c++)if(f(h.shift())===n)return f(h.join("="));return null},e.cookie.defaults={},e.cookieConsent=function(t){var n={dialogeId:"eu-cookie-compliance",cookieName:"cookie_consent_cookie",acceptText:"OK, Thanks",message:"This site uses cookies. By continuing to browse the site you are agreeing to this.",infoText:"Find out more",infoHref:"/cookies",autoAccept:!1,expiry:365,path:"/"},r=e.extend(!0,n,t),i=e.cookie(r.cookieName),s=function(){e.cookie(r.cookieName,"y",{path:r.path,expires:r.expiry})};if(!i){var o=e("<div/>",{id:r.dialogeId}),u=e("<div/>",{"class":"container"}),a=e("body"),f=e("<button/>",{"class":"accept btn btn-sm btn-default"}).text(r.acceptText).click(function(){s(),o.fadeOut(300,function(){a.removeClass("without-cookie-consent")})}),l=e("<div/>",{"class":"cookie-compliance-message"}).html(r.message.replace("{infoHref}",r.infoHref)),c=e("<div/>",{"class":"row"}).append(l,f);a.addClass("without-cookie-consent").prepend(o.append(u.append(c))),o.show()}r.autoAccept&&s()}}(jQuery,document);