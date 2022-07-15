const exp = require('express');
const db = require('mysql');
const app = exp();

const cors = require('cors');
app.use(cors());
app.use(exp.json());

const c = db.createConnection({
    host : "localhost",
    user : "root",
    password : "pulsar200",
    database : "carreg"
});

app.post('/second',(request,response)=>{
    const f_n = request.body.user_fname;
    const l_n = request.body.user_lname;
    const u_e = request.body.user_email;
    const u_p = request.body.user_password;
    console.log(f_n);
    console.log(l_n);
    console.log(u_e);
    console.log(u_p);

   // const jj = c.query("insert into signup(f_name,l_name,mail,pass) values (f_n,l_n,u_e,u_p)",
   const aa = c.query("insert into signup(f_name,l_name,mail,pass) values(?,?,?,?)",[f_n,l_n,u_e,u_p],

          function(err,result){
            if(result){
                response.send(result);
             
            }
            else{
                console.log("Error");
            }
          })                 
    });


app.post('/first',(request,response)=>{
    const uname = request.body.umail;
    const upass = request.body.pass;
    const role = request.body.role1;
    //console.log(uname);
    //console.log(upass);

    const aa = c.query("select user_email,user_pass,user_role from login where user_email = ?",[uname],
    function(error,rows){
        if(error){
            const s = {status : 'error'};
            response.send(s); 
        }
        else{
            const user1 = rows[0].user_email;
            const user2 = rows[0].user_pass;
            const user3 = rows[0].user_role;

            if(uname == user1 && upass == user2 && role == user3){
                if(role == 1){
                const s = {status :'pass', role:'admin'};
                response.send(s);
                }
                if(role == 2){
                    const s = {status :'pass', role:'staff1'};
                    response.send(s);
                }
                if(role == 3){
                    const s = {status :'pass', role:'staff2'};
                    response.send(s);
                }
                
            }

        }
    }) 
});

app.listen(3001);