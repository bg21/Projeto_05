/*
$(function(){
	$('nav a').click(function(){
		$('nav a').css('color','black'); //vai funcionar no contato
		$(this).css('color','#EA2D2F'); //vai funcionar no contato
		var href = $(this).attr('href');
		var offSetTop = $(this).settop().top;
		$('html,body').animate('scrollTop', offSetTop);
		return false;
	});
});
*/

//Ou esse abaixo
$(function(){
	var directory = '/DankiCode/Curso_Webmaster_Front-End_Completo/07-Projeto_Pratico_05/'

	$('[goto="contato"]').click(function(){
		location.href=directory+'?contato'; //já está funcionando quando ativa a url amigável
		return false;
	});

	checkUrl();

	function checkUrl(){
		var url = location.href.split('/');
		var curPage = url[url.length-1].split('?');

		if(curPage[1] != undefined && curPage[1] == 'contato'){
			//$('header nav a').css('color','black');
			//$('footer nav a').css('color', 'white');
			$('[goto="contato"]').css('color','#EA2D2F');
			$('html,body').animate({'scrollTop':$('#contato').offset().top});
		}else{
			$('a[href='+curPage[0]+']').css('color','red'); //vai trocar a cor dos links
		}
	}
})