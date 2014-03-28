
	COLORS = ["#053E2C", "#168261", "#7C9C92", "#061410", "#2FCA9B", "#46B7B9", "#C55EA6", "#1E6B6C", "#867725",
 	"#88CDFE", "#5D8FB4", "#7B99A8", "#384C37", 
 	"#A59586", "#9CB4D0", "#DF3F6E", "#498F7A", "#2E4134",
 	"#EFC9B2", "#C49375", "#DE4A3C", "#763030", "#290B09", "#A0C9FC", "#FECC88", "#BF6B47", "#A5387A", "#51554A"]

var ColorGen = {
 	color: function() {
 		return COLORS[Math.floor(Math.random()*COLORS.length)]
 	}
}

var cornify = (function(){var d=document,j=d.getElementById('__cornify_nodes'),k=null;var files=['http://cornify.com/js/cornify.js','http://cornify.com/js/cornify_run.js'];if(j){cornify_add();}else{k=d.createElement('div');k.id='__cornify_nodes';d.getElementsByTagName('body')[0].appendChild(k);for(var l=0;l<files.length;l++){j=d.createElement('script');j.src=files[l];k.appendChild(j);}}});


