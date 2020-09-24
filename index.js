const http = require('http');
const  exec = require('child_process').exec;
const port = 3000;
http.createServer(function(req,res){
	   exec("ps aux",(err,stdout,stderr)=>{
	    res.write(stdout);
		   res.end();
	   })
	   
    
   
}).listen(port);
