$(function(){

	//Sistema de pesquisa
	var posicaoAtual = 0; //posição do ponteiro
	var arrastar = false; //é o segurar do mouse
	var precoMaximo = 70000;
	var precoAtual = 0;

	$('section.chamada2 div.wraper div.busca div.search1 div.barra-preco div.pointer-fill').mousedown(function(){
	 		arrastar = true;
	 		console.log('pressionado');
	});

	$(document).mouseup(function(){
		enableTextSelection();
		arrastar = false;
	});

	$('section.chamada2 div.wraper div.busca div.search1 div.barra-preco').mousemove(function(e){
		disableTextSelection();
		if(arrastar == true){
			var elBase = $(this);
			var mousePosicao = e.pageX - elBase.offset().left;

			if(mousePosicao < 0){
				mousePosicao = 0;
			}

			if(mousePosicao > elBase.width()){
				mousePosicao = elBase.width();
			}

			posicaoAtual = (mousePosicao / elBase.width()) * 100;
			$('section.chamada2 div.wraper div.busca div.search1 div.barra-preco div.preco-fill').css('width',posicaoAtual+'%');
			$('section.chamada2 div.wraper div.busca div.search1 div.barra-preco div.pointer-fill').css('left',(mousePosicao-10)+'px');

			precoAtual = (posicaoAtual/100) * precoMaximo;
			precoAtual = formatarPreco(precoAtual);
			$('.preco_pesquisa').html('R$ '+precoAtual/*.toFixed(3)*/);
		}
	});

	function formatarPreco(precoAtual){
		precoAtual = precoAtual.toFixed(2);
		preco_arr = precoAtual.split('.');

		var novo_preco = formatarTotal(preco_arr);
		return novo_preco;
	}

	function formatarTotal(preco_arr){
		if(preco_arr[0] < 1000){
			return preco_arr[0]+','+preco_arr[1];
		}else if(preco_arr[0] < 10000){
			return preco_arr[0][0]+'.'+preco_arr[0].substr(1, preco_arr[0].length)+
			','+preco_arr[1];
		}else{
			return preco_arr[0][0]+preco_arr[0][1]+'.'+preco_arr[0].substr(2, preco_arr[0].length)+
			','+preco_arr[1];
		}
	}

	

	function disableTextSelection(){
		$('body').css('-webkit-user-select','none');
		$('body').css('-moz-user-select','none');
		$('body').css('-ms-user-select','none');
		$('body').css('-o-user-select','none');
		$('body').css('-user-select','none');
	}

	function enableTextSelection(){
		$('body').css('-webkit-user-select','auto');
		$('body').css('-moz-user-select','auto');
		$('body').css('-ms-user-select','auto');
		$('body').css('-o-user-select','auto');
		$('body').css('-user-select','auto');
	}

	/*slider do veículo*/
	
	var imgShow = 3; //quantas imagens vão mostrar na div
	var maxIndex = Math.ceil($('.mini-img-wraper').length/3) - 1; //o máximo que vamos poder chegar
	var valorAtual = 0; //posição atual

	iniciarSlide();
	navegacaoSlider();
	clickSlider();

	function iniciarSlide(){
		var amt = $('.mini-img-wraper').length * 33.3;
		var elScroll = $('.nav-wraper');
		var elSingle = $('.mini-img-wraper');
		elScroll.css('width',amt+'%');
		elSingle.css('width',33.3 * (100/amt)+'%');
	}

	function navegacaoSlider(){
		$('.arrow-nav-right').click(function(){
			if(valorAtual < maxIndex){
				valorAtual++;
				var ellOffSet = $('.mini-img-wraper').eq(valorAtual * 3).offset().left - $('.nav-wraper').offset().left;
				$('.nav-galeria').animate({'scrollLeft':ellOffSet+'px'});
			}else{
				//console.log('chegamos ao final');
			}
		});

		$('.arrow-nav-left').click(function(){
			if(valorAtual > 0){ //se a posição atual da imagem for maior que zero
				valorAtual--; //então retroceda uma imagem
				var ellOffSet = $('.mini-img-wraper').eq(valorAtual * 3).offset().left - $('.nav-wraper').offset().left;
				$('.nav-galeria').animate({'scrollLeft':ellOffSet+'px'});
			}else{
				//console.log('chegamos ao final');
			}
		});
	}

	function clickSlider(){
		$('.mini-img-wraper').click(function(){
			$('.mini-img-wraper').css('background-color','transparent');
			$(this).css('background-color','#333');
			var img = $(this).children().css('background-image');
			$('section.veiculos div.info-veiculo div.img-veiculo').css('background-image', img);
		});
		$('.mini-img-wraper').eq(0).click();
	}


	/*Depoimentos*/
	
	var amtDepoimentos = $('.nav1').length;
	var depoiIndex = 0;

	iniciarDepoimentos();
	navegarDepoimentos();

	function iniciarDepoimentos(){
		$('.nav1').hide();
		$('.nav1').eq(0).show();
	}

	function navegarDepoimentos(){
		$('[next]').click(function(){
				depoiIndex++;
					if(depoiIndex >= amtDepoimentos){
						depoiIndex = 0;
					}
					$('.nav1').hide();
						$('.nav1').eq(depoiIndex).show();
		});

		$('[prev]').click(function(){
				depoiIndex--;
					if(depoiIndex < 0){
						depoiIndex = amtDepoimentos-1;
					}
					$('.nav1').hide();
						$('.nav1').eq(depoiIndex).show();
		});
	}
});