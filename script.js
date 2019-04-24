/*-------------------- FUNÇAO DE ADIÇÃO-----------------------------------------*/
			function mais(){
				var a, b, r;
				a = parseFloat($("#num1").val())
				b = parseFloat($("#num2").val())
				r = a+b;
				$("#num3").val(r);
			}
/*--------------------- FUNÇAO DE SUBTRAÇÃO ----------------------*/
			function menos(){
				var a, b, r;
				a = parseFloat($("#num1").val())
				b = parseFloat($("#num2").val())
				r = a-b;
				$("#num3").val(r);
			}
/*--------------------- FUNÇAO DE MULTIPLICAÇÃO ---------------------*/
			function vezes(){
				var a, b, r;
				a = parseFloat($("#num1").val())
				b = parseFloat($("#num2").val())
				r = a*b;
				$("#num3").val(r);
			}
/*--------------------- FUNÇAO DE DIVISÃO ---------------------*/
			function dividir(){
				var a, b, r;
				a = parseFloat($("#num1").val())
				b = parseFloat($("#num2").val())
				if(b==0){							/*Se o divisor for igual 0 é impossivel a divisao*/
					alert("Divisor Impossivel a!=0");
				}else{
					r = a/b;
					$("#num3").val(r);
				}
			}
/*--------------------- FUNÇAO DE EXPOENTE ---------------------*/
			function expoente(){
				var a, b, r;
				a = parseFloat($("#num1").val())
				b = parseFloat($("#num2").val())
				if((a==0)&&(b<0)){					/*Se o expoente for negativo e a base for igual a 0 é impossivel a resoluçao*/
					alert("Valor invalido");
				}else{
					r = Math.pow(a, b);
					$("#num3").val(r);
				}
			}
/*--------------------- FUNÇAO DE RAIZ QUADRADA E CUBICA --------------------*/
			function raiz(){
				var a, b, r, ra;
				a = parseFloat($("#num1").val())
				b = parseFloat($("#num2").val())
				ra = parseInt($("#raiz").val())
				if(a<0){							/*Não existe raiz de numero negativo*/
					alert("Raiz Impossivel a>=0");
				}else{
						if(ra==2){
							r=Math.sqrt(a);
							$("#num3").val(r);
						}else{
							r=Math.cbrt(a);
							$("#num3").val(r);
							}
				}
			}
/*--------------------- FUNÇAO DE LOGARITMO ---------------------*/
			function log(){
				var a, b, r;
				a = parseFloat($("#num1").val())
				b = parseFloat($("#num2").val())
				if((a<=0)||(b<=0)){				/*A base e o numero do log nao podem ser negativos*/
					alert("Log Impossivel a>0");					
				}else{
					r=Math.log(a) / Math.log(b);
					$("#num3").val(r);
				}
			}
/*--------------------- FUNÇAO DE BHASKARA ---------------------*/
			function bhaskara(){
				var a, b, c, d, x, X;
				a = parseFloat($("#bas1").val());
				b = parseFloat($("#bas2").val());
				c = parseFloat($("#bas3").val());
				d=Math.pow(b, 2)-(4*a*c);
				if(d<0){					/*Delta nao pode dar negativo*/
					alert("Delta NEGATIVO");
				}else{
					x=(-b+Math.sqrt(d))/(2*a);
					X=(-b-Math.sqrt(d))/(2*a);
					$("#basx1").val(x);
					$("#basx2").val(X);
					if(a>=0){
						$("#bas4").val("É voltada para cima");
                    }else{
						$("#bas4").val("É voltada para baixo");	
					}
				}
			}
/*--------------------- FUNÇAO DE SENO COS E TAN ---------------------*/
			function sin(){
				var a, rad, r, tri;
				a = parseFloat($("#num1").val())
				tri = $("#trigono").val()
				if(tri=="Deg"){					/*Seno Para Degrees*/
					r = Math.sin(a);			
					$("#num3").val(r);
				}else{							/*Seno Para Radianos*/
					rad=a*(Math.PI/180);
					r=Math.sin(rad);
					$("#num3").val(r);
				}
			}
			function tan(){
				var a, rad, r, tri;
				a = parseFloat($("#num1").val())
				tri = $("#trigono").val()
				if(tri=="Deg"){					/*Tangente Para Degrees*/
					r = Math.tan(a);			
					$("#num3").val(r);
				}else{							/*Tangente Para Radianos*/
					rad=a*(Math.PI/180);
					r=Math.tan(rad);
					$("#num3").val(r);
				}
			}
			function cos(){
				var a, rad, r, tri;
				a = parseFloat($("#num1").val())
				tri = $("#trigono").val()
				if(tri=="Deg"){					/*Cosseno Para Degrees*/
					r = Math.cos(a);			
					$("#num3").val(r);
				}else{							/*Cosseno Para Radianos*/
					rad=a*(Math.PI/180);
					r=Math.cos(rad);
					$("#num3").val(r);
				}
			}
/*--------------------- MINIMO MULTIPLO COMUM ---------------------------------------------------------		TENTATIVA FRUSTADA DE FAZER UM MMC ! 
			function mmc(){
				var n1=1, n2=1, n3=1, n4=1, n5=1, cont1=1;
				n1 = parseInt($("#mc1").val())
				n2 = parseInt($("#mc2").val())
				n3 = parseInt($("#mc3").val())
				n4 = parseInt($("#mc4").val())
				n5 = parseInt($("#mc5").val())
				while((n1>1)||(n2>1)||(n3>1)||(n4>1)||(n5>1)){	/*-Essa condiçao garante que a repitiçao acontece ate dividir o maximo possivel
					if((n1%2==0)||(n2%2==0)||(n3%2==0)||(n4%2==0)||(n5%2==0)){						
						cont1=cont1*2;/*-toda vez que algum numero for divisivel por 2 a variavel cont1 é multiplicada por 2 e os if em seguida garante que se for divisivel a operaçao ocorra
						if(n1%2==0){
							n1=n1/2;
						}
						if(n2%2==0){
							n2=n2/2;
						}
						if(n3%2==0){
							n3=n3/2;
						}
						if(n4%2==0){
							n4=n4/2;
						}
						if(n5%2==0){
							n5=n5/2;
						}
					}else{
						if((n1%3==0)||(n2%3==0)||(n3%3==0)||(n4%3==0)||(n5%3==0)){mesma coisa que o if de cima mas para 3 agora
							cont1=cont1*3;
							if(n1%3==0){
								n1=n1/3;
							}
							if(n2%3==0){
								n2=n2/3;
							}
							if(n3%3==0){
								n3=n3/3;
							}
							if(n4%3==0){
								n4=n4/3;
							}
							if(n5%3==0){
								n5=n5/3;
							}
							
						}else{
							if((n1%5==0)||(n2%5==0)||(n3%5==0)||(n4%5==0)||(n5%5==0)){mesma coisa que o if de cima mas para 5 agora
								cont1=cont1*5;
								if(n1%5==0){
									n1=n1/5;
								}
								if(n2%5==0){
									n2=n2/5;
								}
								if(n3%5==0){
									n3=n3/5;
								}
								if(n4%5==0){
									n4=n4/5;
								}								
								if(n5%5==0){
									n5=n5/5;
								}
							
							}else{
								if((n1!=1)||(n2!=1)||(n3!=1)||(n4!=1)||(n5!=1)){-apartir daqui se o numero nao for divisivel por 2,3 ou 5 ele so pode ser divisivel por ele mesmo 
									if((n1!=n2)&&(n1!=n3)&&(n1!=n4)&&(n1!=n5)){
											cont1=cont1*n1;
											n1=n1/n1;											
									}else{
										n1=n1/n1
									}
									if((n2!=n1)&&(n2!=n3)&&(n2!=n4)&&(n2!=n5)){
											cont1=cont1*n2;
											n2=n2/n2;											
									}else{
										n2=n2/n2
									}
									if((n3!=n2)&&(n3!=n1)&&(n3!=n4)&&(n3!=n5)){
											cont1=cont1*n3;
											n3=n3/n3;											
									}else{
										n3=n3/n3
									}
									if((n4!=n2)&&(n4!=n3)&&(n4!=n1)&&(n4!=n5)){
											cont1=cont1*n4;
											n4=n4/n4;											
									}else{
										n4=n4/n4
									}
									if((n5!=n2)&&(n5!=n3)&&(n5!=n4)&&(n5!=n1)){
											cont1=cont1*n5;
											n5=n5/n5;										
									}else{
										n5=n5/n5
									}
										
				
								}
									
							}	
						}
					}
				}
				$("#mc6").val(cont1);
			}-*/
/*--------------------- REGRA DE TRES SIMPLES ---------------------------------------------------------*/
			function regra(){
				var a, b, c, r;
				a = parseFloat($("#regra1").val())
				b = parseFloat($("#regra2").val())
				c = parseFloat($("#regra3").val())
				r=(b*c)/a;  /*-Regra de 3 simples-*/
				$("#regra4").val(r);
								
			}
/*--------------------- FUNÇAO AREA DO CIRCULO ---------------------------------------------------------*/
			function circulo(){
				var r, raio, pi;
				raio = parseFloat($("#area1").val())
				raio = Math.abs(raio);	/*-Coloquei numero absolute para garantir que se o usuario colocar negativo ele vira positivo-*/
				r = Math.PI*(Math.pow(raio, 2));
				$("#area16").val(r);
			}
/*--------------------- FUNÇAO AREA DO QUADRADO ---------------------------------------------------------*/			
			function quadrado(){
				var r, lado;
				lado = parseFloat($("#area2").val())
				lado = Math.abs(lado);
				r = Math.pow(lado, 2);
				$("#area16").val(r);
			}
/*--------------------- FUNÇAO AREA DO RETANGULO ---------------------------------------------------------*/			
			function retangulo(){
				var r, ladoM, ladom;
				ladoM = parseFloat($("#area3").val())
				ladom = parseFloat($("#area4").val())
				ladoM = Math.abs(ladoM);
				ladom = Math.abs(ladom);
				r = ladoM*ladom;
				$("#area16").val(r);
			}
/*--------------------- FUNÇAO AREA DO TRIANGULO ---------------------------------------------------------*/			
			function triangulo(){
				var r, base, altura;
				base = parseFloat($("#area5").val())
				altura = parseFloat($("#area6").val())
				base = Math.abs(base);
				altura = Math.abs(altura);
				r = (base*altura)/2;
				$("#area16").val(r);
			}
/*--------------------- FUNÇAO AREA DO PENTAGONO ---------------------------------------------------------*/			
			function pentagono(){
				var r, lado, tan=0.726542528;/*-variavel tan = tangente de 36 graus-*/
				lado = parseFloat($("#area7").val())
				lado = Math.abs(lado);
				r = (5*(Math.pow(lado,2)))/(4*tan);
				$("#area16").val(r);
			}
/*--------------------- FUNÇAO AREA DO HEXAGONO ---------------------------------------------------------*/			
			function hexagono(){
				var r, lado, tan=0.57735026919;/*-variavel tan = tangente de 30 graus-*/
				lado = parseFloat($("#area8").val())
				lado = Math.abs(lado);
				r = (6*(Math.pow(lado,2)))/(4*tan);
				$("#area16").val(r);
			}
/*--------------------- FUNÇAO AREA DO POLIGONO ---------------------------------------------------------*/			
			function poligono(){
				var r, quan, lado;
				quan = parseFloat($("#area9").val())
				lado = parseFloat($("#area10").val())
				quan = Math.abs(quan);
				lado = Math.abs(lado);
				r = ((Math.pow(lado,2)*quan)/(4*Math.tan(Math.PI/quan)));
				$("#area16").val(r);
			}
/*--------------------- FUNÇAO AREA DO LOSANGO ---------------------------------------------------------*/			
			function losango(){
				var r, d1, d2;
				d1 = parseFloat($("#area11").val())
				d2 = parseFloat($("#area12").val())
				d1 = Math.abs(d1);
				d2 = Math.abs(d2);
				r = (d1*d2)/2;
				$("#area16").val(r);
			}
/*--------------------- FUNÇAO AREA DO TRAPEZIO ---------------------------------------------------------*/			
			function trapezio(){
				var r, baseM, basem, h;
				baseM = parseFloat($("#area13").val())
				basem = parseFloat($("#area14").val())
				h = parseFloat($("#area15").val())
				baseM = Math.abs(baseM);
				basem = Math.abs(basem);
				h = Math.abs(h);
				r = (baseM+basem)*(h/2);
				$("#area16").val(r);
			}
/*--------------------- FUNÇAO DA MATRIZ 3X3 ---------------------------------------------------------*/		
			function matriz(){
				var a, b, c, d, e, f, g, h, i, det;
				a = parseFloat($("#ma").val())
				b = parseFloat($("#mb").val())
				c = parseFloat($("#mc").val())
				d = parseFloat($("#md").val())
				e = parseFloat($("#me").val())
				f = parseFloat($("#mf").val())
				g = parseFloat($("#mg").val())
				h = parseFloat($("#mh").val())
				i = parseFloat($("#mi").val())
				det=((a*e*i)+(b*f*g)+(c*d*h))-((b*d*i)+(a*f*h)+(c*e*g));
				$("#det").val(det);
			}
/*--------------------- FUNÇAO DO CONVERTOR DE UNIDADES ---------------------------------------------------------*/	
			function convertor(){
				var num, uni;
				num = parseFloat($("#convertor").val())
				uni = $("#unidade").val()
				if(uni=='M'){
					$("#rkm").val(num/1000);
					$("#rhm").val(num/100);
					$("#rdam").val(num/10);
					$("#rm").val(num);
					$("#rdm").val(num*10);
					$("#rcm").val(num*100);
					$("#rmm").val(num*1000);
				}
				if(uni=='KM'){
					$("#rkm").val(num);
					$("#rhm").val(num*10);
					$("#rdam").val(num*100);
					$("#rm").val(num*1000);
					$("#rdm").val(num*10000);
					$("#rcm").val(num*100000);
					$("#rmm").val(num*1000000);
				}
				if(uni=='HM'){
					$("#rkm").val(num/10);
					$("#rhm").val(num);
					$("#rdam").val(num*10);
					$("#rm").val(num*100);
					$("#rdm").val(num*1000);
					$("#rcm").val(num*10000);
					$("#rmm").val(num*100000);
				}
				if(uni=='DAM'){
					$("#rkm").val(num/100);
					$("#rhm").val(num/10);
					$("#rdam").val(num);
					$("#rm").val(num*10);
					$("#rdm").val(num*100);
					$("#rcm").val(num*1000);
					$("#rmm").val(num*10000);
				}
				if(uni=='DM'){
					$("#rkm").val(num/10000);
					$("#rhm").val(num/1000);
					$("#rdam").val(num/100);
					$("#rm").val(num/10);
					$("#rdm").val(num);
					$("#rcm").val(num*10);
					$("#rmm").val(num*100);
				}
				if(uni=='CM'){
					$("#rkm").val(num/100000);
					$("#rhm").val(num/10000);
					$("#rdam").val(num/1000);
					$("#rm").val(num/100);
					$("#rdm").val(num/10);
					$("#rcm").val(num);
					$("#rmm").val(num*10);
				}
				if(uni=='MM'){
					$("#rkm").val(num/1000000);
					$("#rhm").val(num/100000);
					$("#rdam").val(num/10000);
					$("#rm").val(num/1000);
					$("#rdm").val(num/100);
					$("#rcm").val(num/10);
					$("#rmm").val(num);
				}
				
			}


/*--------------------- FUNÇAO DOS BOTÕES ---------------------------------------------------------*/								
			function ShowCC(){
				$(".div1").css('visibility', 'visible');
				$(".div2").css('visibility', 'hidden');
				$(".div3").css('visibility', 'hidden');
				$(".div4").css('visibility', 'hidden');
				$(".div5").css('visibility', 'hidden');
				$(".div6").css('visibility', 'hidden');
			}
			function ShowBhaskara(){
				$(".div2").css('visibility', 'visible');
				$(".div1").css('visibility', 'hidden');
				$(".div3").css('visibility', 'hidden');
				$(".div4").css('visibility', 'hidden');
				$(".div5").css('visibility', 'hidden');
				$(".div6").css('visibility', 'hidden');
			}
			function ShowM3(){
				$(".div3").css('visibility', 'visible');
				$(".div2").css('visibility', 'hidden');
				$(".div1").css('visibility', 'hidden');
				$(".div4").css('visibility', 'hidden');
				$(".div5").css('visibility', 'hidden');
				$(".div6").css('visibility', 'hidden');
			}
			function ShowAreas(){
				$(".div5").css('visibility', 'visible');
				$(".div2").css('visibility', 'hidden');
				$(".div3").css('visibility', 'hidden');
				$(".div4").css('visibility', 'hidden');
				$(".div1").css('visibility', 'hidden');
				$(".div6").css('visibility', 'hidden');
			}
			function ShowRegra3(){
				$(".div4").css('visibility', 'visible');
				$(".div2").css('visibility', 'hidden');
				$(".div3").css('visibility', 'hidden');
				$(".div1").css('visibility', 'hidden');
				$(".div5").css('visibility', 'hidden');
				$(".div6").css('visibility', 'hidden');
			}
			function ShowConvertor(){
				$(".div6").css('visibility', 'visible');
				$(".div2").css('visibility', 'hidden');
				$(".div3").css('visibility', 'hidden');
				$(".div4").css('visibility', 'hidden');
				$(".div5").css('visibility', 'hidden');
				$(".div1").css('visibility', 'hidden');
			}