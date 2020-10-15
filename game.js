var requestAnimationFrame = window.requestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (callback) { setTimeout (callback, 1000 / 30); };

var canvas = document.getElementById("canvas-id");
canvas.width = 800;
canvas.height = 600;
var context = canvas.getContext("2d");
///NE BARAITE REDOVETE NAGORE!

var myX=10, myY=550,mishkaX=0,mishkaY=0,asteroidX=Math.random()*770,asteroidY=0,patroncheX=900,patroncheY=0;  //Suzdadohme promenliva! Tipa i e kakufto i dadete :)
											//ot koi pixel da zapochva asteroida y- kolko nadolu da pochva x- kolko nastrani
window.addEventListener("mouseup", function (args) {      //vika se pri puskane na kopche natiskano do sega
	patroncheX=myX;
	patroncheY=myY;
}, false);

window.addEventListener("mousemove", function (args) {
    mishkaX=args.clientX-canvas.offsetLeft;
    mishkaY=args.clientY-canvas.offsetTop;//Slagame tezi redove za da razberem kude e deistvieto s mishkata
   
   // myY=mishkaY;
}, false);
window.addEventListener("mouseup", function (args) {
	mishkaX=args.clientX-canvas.offsetLeft;
    mishkaY=args.clientY-canvas.offsetTop;//Slagame tezi redove za da razberem kude e deistvieto s mishkata

}, false);
function update() {     //specialna funkcia vikashta se periodichno. V neq shte pishem vsqkuf kod za dvijenie
    myX=myX+(mishkaX-myX)/10;
	patroncheY=patroncheY-5;
	if(asteroidY+30>=600){
		asteroidY=0;
		asteroidX=Math.random()*770
		
	}
	else 
	asteroidY++;
	if(myX+30>asteroidX && myX<asteroidX+30 && myY+30>asteroidY && myY<asteroidY+30){
		endl;
	}
	
	if(patroncheX+3>asteroidX && patroncheX<asteroidX+14 && patroncheY+4>asteroidY && patroncheY<asteroidY+30){
		asteroidX=980;
		asteroidY=980;
		patroncheX=1000;
		patroncheY=1000;
	}
    setTimeout(update, 10); //kolko chesto da se dviji
}

function draw() {       //specialna funkcia v koqto shte pishem koda za risuvane. Shte bude vikana, kogato ni se risuva
    context.clearRect(0, 0, canvas.width, canvas.height);       //NEBAR!
    context.globalAlpha = 1;                                    //NEBARAI Tezi redove- s tqh zapochva draw-a!
    context.fillStyle = "#FG4532";//izbor na cvqt
    context.fillRect(myX, myY, 30, 30); //risuvane na zapulnen kvadrat s izbrania cvqt
	context.fillRect(asteroidX,asteroidY, 14, 30);
	context.fillRect(patroncheX,patroncheY,3, 4);
    //purvite 2 argumenta sa koordinati za goren lqv ugul, a sled tva- razmerite po x i y!
    
    requestAnimationFrame(draw);        //NEBARAI TOZI RED- Trqbva da e posleden ;)
}
update();       //purvo vikane. ne go zatrivai!
draw(); //purvo vikane. ne go zatrivai!