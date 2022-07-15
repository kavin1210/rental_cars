import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Axios from 'axios';


export default class Sign extends React.Component{
    state = {
      firstname :"",
      lastname : "",
      useremail : "",
      userpassword :""
    };
    getfname=(Event)=>{
      this.setState({firstname:Event.target.value})
      
    }
    getlname=(Event)=>{
      this.setState({lastname:Event.target.value})
      
    }
    getusermail=(Event)=>{
      this.setState({useremail:Event.target.value})
      
    }
    getuserpass=(Event)=>{
      this.setState({userpassword:Event.target.value})
      
    }
    sign(){
      const signdata ={
       user_fname:this.state.firstname,
       user_lname:this.state.lastname,
       user_email:this.state.useremail,
       user_password:this.state.userpassword
      };

      Axios.post("http://localhost:3001/second",signdata).then((response)=>{
        console.log(response);
    });
  }
    render(){ 
        return(
            <div>

                <img src="https://preview.redq.io/turbo/car-deal-two/wp-content/uploads/sites/6/2019/05/home5banner-car.png" class="img-fluid" alt="Responsive image" />
    <div class="container p-5">
        <div class="row">
			<div class="col-md-5 mx-auto">
                <div id="second">
                    <div class="myform form">
                          <div class="logo mb-3">
                             <div class="col-md-12 text-center">
                                <h1 >Signup</h1>
                             </div>
                          </div>
                          <form action="#" name="registration">
                             <div class="form-group">
                                <label for="exampleInputEmail1">First Name</label>
                                <input type="text"  name="firstname" class="form-control" id="firstname" aria-describedby="emailHelp" placeholder="Enter Firstname" onChange={this.getfname}/>
                             </div>
                             <div class="form-group">
                                <label for="exampleInputEmail1">Last Name</label>
                                <input type="text"  name="lastname" class="form-control" id="lastname" aria-describedby="emailHelp" placeholder="Enter Lastname" onChange={this.getlname}/>
                             </div>
                             <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" name="email"  class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.getusermail}/>
                             </div>
                             <div class="form-group">
                                <label for="exampleInputEmail1">Password</label>
                                <input type="password" name="password" id="password"  class="form-control" aria-describedby="emailHelp" placeholder="Enter Password" onChange={this.getuserpass}/>
                             </div>
                             <div class="col-md-12 text-center mb-3">
                                <button type="submit" class=" btn btn-block mybtn btn-primary tx-tfm" onClick={this.sign.bind(this)}>Get Started For Free</button>
                             </div>
                             <div class="col-md-12 ">
                                <div class="form-group">
                                   <p class="text-center"><a href="#" id="signin">Already have an account?</a></p>
                                </div>
                             </div>
                             </form>
                              </div>
                          
                       </div>
        </div>
    </div>
        </div>

        <div class="row bg-secondary p-3">
            <div class="column">
              <div class="btn-group-vertical">
                <button type="button" class="btn btn-secondary ">About</button>
                <button type="button" class="btn btn-secondary">Contact us</button>
                <button type="button" class="btn btn-secondary">Home</button>
              </div>
            </div>
            <div class="column">
              <div class="btn-group-vertical">
                <button type="button" class="btn btn-secondary">Car Listing</button>
                <button type="button" class="btn btn-secondary">My Account</button>
                <button type="button" class="btn btn-secondary">Shop</button>
              </div>
            </div>
            <div class="column">
              <div class="btn-group-vertical">
                <button type="button" class="btn btn-secondary">Cart</button>
                <button type="button" class="btn btn-secondary">Check Out</button>
                <button type="button" class="btn btn-secondary">Shop</button>
              </div>
            </div>
            <div class="column" >
              <p class="text-warning">SIGN UP FOR GET OUR NEWSLETTER</p>
             <div class="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text" id="btnGroupAddon2">@</div>
                  </div>
                  <input type="text" class="form-control" placeholder="Your Email..." aria-label="Input group example" aria-describedby="btnGroupAddon2"/>
                </div>
              </div>
            </div>
          </div>

    </div>
        );
    }
}
