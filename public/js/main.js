// IE10 "temporary" fix as outlined here: http://getbootstrap.com/getting-started/#browsers
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement("style")
  msViewportStyle.appendChild(
	document.createTextNode(
	  "@-ms-viewport{width:auto!important}"
	)
  )
  document.getElementsByTagName("head")[0].appendChild(msViewportStyle)
}

// Initialise packery
var $packeryWidgets = $('.widget-layout');

// initialize
$packeryWidgets.packery({
	itemSelector: '.widget',
	gutter: 10
});