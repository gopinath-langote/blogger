$(document).ready(function(){var e={};$('a[data-track-link="true"]').each(function(){var t=$(this),n=t.get(0),r=t.text(),i=t.data("track-cta"),s=t.data("track-type-href")||t.attr("href"),o=t.data("track-type"),u=t.data("track-id");s in e?e[s]+=1:e[s]=1;var a=e[s];t.on("click",function(e){if(window.analytics){var t={CTA:i,href:s,location:a,pageTitle:document.title,pageUrl:location.href,pagePath:location.pathname,piece:u,text:r,type:o};window.analytics.track("Clicked CTA",t)}})})});