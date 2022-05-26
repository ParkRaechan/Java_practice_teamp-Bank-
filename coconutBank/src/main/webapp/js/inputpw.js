$( function(){
	boxview();
});


function boxview(){
	let bx = '<button onclick="">'+1+'</button>';
	let bxx = ['1','2','3','4','5','6','7','8','9'];

	for(let t=0; t<9; t++){
		let renum = Math.floor(Math.random() * 9)+1;
		for(let i=0; i<t; i++){
				if(renum==bxx[i]){
					console.log("qwer222");
					console.log(renum);
					renum = Math.floor(Math.random() * 9)+1;
					i=0;
				}
				else if(i==t){
					console.log("qwer111");
					bxx[i]=renum;
				}
				else{
					console.log("qwer");
					bxx[i]=renum;
				}
			}
	}
	
	console.log(bxx);

}
