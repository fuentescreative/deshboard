$(document).ready(function () {
	$('#panel_icono').panel({
		animate: true,
		animationDuration: 200,
		animationEasing: 'linear',
		dismissible: false,
		display: 'push',
		position: 'left',
	});
	$('#PanelMenu2').panel({
		animate: true,
		animationDuration: 200,
		animationEasing: 'easeInQuad',
		dismissible: true,
		display: 'push',
		position: 'left',
		toggle: true,
		overlay: true,
	});
	$('#PanelMenu2_markup ul li a').click(function (event) {
		$.panel.hide($('#PanelMenu2_panel'));
	});
	$('#PanelMenu2-close a').click(function (event) {
		$.panel.hide($('#PanelMenu2_panel'));
	});
	$('#PanelMenu3').panel({
		animate: true,
		animationDuration: 200,
		animationEasing: 'easeInQuad',
		dismissible: true,
		display: 'overlay',
		position: 'left',
		toggle: true,
		overlay: true,
	});
	$('#PanelMenu3_markup ul li a').click(function (event) {
		$.panel.hide($('#PanelMenu3_panel'));
	});
	$('#PanelMenu3-close a').click(function (event) {
		$.panel.hide($('#PanelMenu3_panel'));
	});
	$('#panel_nav').panel({
		animate: true,
		animationDuration: 200,
		animationEasing: 'linear',
		dismissible: false,
		display: 'overlay',
		position: 'left',
	});
	$('#PanelMenu_perfil_usuario').panel({
		animate: true,
		animationDuration: 200,
		animationEasing: 'easeInOutBack',
		dismissible: true,
		display: 'overlay',
		position: 'left',
		toggle: true,
	});
	$('#PanelMenu_perfil_usuario_markup ul li a').click(function (event) {
		$.panel.hide($('#PanelMenu_perfil_usuario_panel'));
	});
	$('#PanelMenu_perfil_usuario-close a').click(function (event) {
		$.panel.hide($('#PanelMenu_perfil_usuario_panel'));
	});
	$('.SlideMenu1_Folder a').click(function () {
		var $popup = $(this).parent().find('ul');
		if ($popup.is(':hidden')) {
			$('#SlideMenu1 > ul > li > ul').slideUp();
			$popup.slideDown();
			$popup.attr('aria-expanded', 'true');
		} else {
			$popup.slideUp();
			$popup.attr('aria-expanded', 'false');
		}
	});
	$(document).on('click', '.ThemeableMenu1-navbar-collapse.in', function (e) {
		if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
			$(this).collapse('hide');
		}
	});
	$('#PanelMenu1').panel({
		animate: true,
		animationDuration: 200,
		animationEasing: 'easeInQuad',
		dismissible: true,
		display: 'overlay',
		position: 'right',
		toggle: true,
	});
	$('#PanelMenu1_markup ul li a').click(function (event) {
		$.panel.hide($('#PanelMenu1_panel'));
	});
	$('#PanelMenu1-close a').click(function (event) {
		$.panel.hide($('#PanelMenu1_panel'));
	});
	$('#PanelMenu4').panel({
		animate: true,
		animationDuration: 200,
		animationEasing: 'easeInQuad',
		dismissible: true,
		display: 'overlay',
		position: 'right',
		toggle: true,
	});
	$('#PanelMenu4_markup ul li a').click(function (event) {
		$.panel.hide($('#PanelMenu4_panel'));
	});
	$('#PanelMenu4-close a').click(function (event) {
		$.panel.hide($('#PanelMenu4_panel'));
	});
	$('#PanelMenu5').panel({
		animate: true,
		animationDuration: 200,
		animationEasing: 'easeInQuad',
		dismissible: true,
		display: 'push',
		position: 'left',
		toggle: true,
		overlay: true,
	});
	$('#PanelMenu5_markup ul li a').click(function (event) {
		$.panel.hide($('#PanelMenu5_panel'));
	});
	$('#PanelMenu5-close a').click(function (event) {
		$.panel.hide($('#PanelMenu5_panel'));
	});
	$('#PanelMenu6').panel({
		animate: true,
		animationDuration: 200,
		animationEasing: 'easeInQuad',
		dismissible: true,
		display: 'push',
		position: 'left',
		toggle: true,
		overlay: true,
	});
	$('#PanelMenu6_markup ul li a').click(function (event) {
		$.panel.hide($('#PanelMenu6_panel'));
	});
	$('#PanelMenu6-close a').click(function (event) {
		$.panel.hide($('#PanelMenu6_panel'));
	});
	$('#PanelMenu7').panel({
		animate: true,
		animationDuration: 200,
		animationEasing: 'easeInQuad',
		dismissible: true,
		display: 'push',
		position: 'left',
		toggle: true,
		overlay: true,
	});
	$('#PanelMenu7_markup ul li a').click(function (event) {
		$.panel.hide($('#PanelMenu7_panel'));
	});
	$('#PanelMenu7-close a').click(function (event) {
		$.panel.hide($('#PanelMenu7_panel'));
	});
});
