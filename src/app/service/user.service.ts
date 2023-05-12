import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { LoginRequest } from '../model/LoginRequest';
import { profile } from '../model/profile';
import { SignupRequest } from '../model/SignupRequest';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 readonly API_URL='http://127.0.0.1:8089/SpringMVC/User';
 id:any;
 req?:HttpRequest<any>;
  constructor(private httpClient:HttpClient) { }
  isLogged(){
    return localStorage.getItem('token')!=null;
  }
  getCurrentToken(){
    return localStorage.getItem('token');
  }
  signin(loginRequest:LoginRequest){

    const body=JSON.stringify(loginRequest);
    const headers={ 'content-type':'application/json'}

    return this.httpClient.post(this.API_URL+'/signin',loginRequest,{'headers':headers})
  }
  setSession(authResult:any){
    
    localStorage.setItem('token',authResult.accessToken);
    //localStorage.setItem('email',authResult.idUser);
  }
  logout(){
    localStorage.clear();
  }
 
 getConnectedUser(){
   return this.httpClient.get(this.API_URL+'/getConnectedUser');
 }
getCurrentUserName(){        
    return this.httpClient.get(this.API_URL+'/getCurrentUserName',{responseType: 'text'});
  }
  dispalyusername(){
    
   return this.getOneUserByUserName(this.getCurrentUserName());
    
  }
 getOneUserByUserName(username:any){
  let request :String=(this.API_URL+`/getuserByUsername/${username}`);
  console.log("in service"+request);
  // return this.httpClient.get(request);
 }

      getCurrentUserId(){
        return this.httpClient.get(this.API_URL+'/getCurrentUserId');
      }
      getProfile(){
        return this.httpClient.get(this.API_URL+'/getProfile/'+this.getCurrentUserId());
      }
      getskill(){
        return this.httpClient.get(this.API_URL+'/getSkill/'+this.getCurrentUserId());
      }
  signup(signupRequest:any){   
    return this.httpClient.post(this.API_URL+'/adduser',signupRequest);
  }
  frogotpassword(username:string){
   
   console.log(username);
    return this.httpClient.post(this.API_URL+`/forgot/${username}`,"");

  }
 

deleteUser(idu:any){
  return this.httpClient.put(this.API_URL+'/deleteuser/'+idu,"");
}
updateUser(u:any){
  return this.httpClient.put(this.API_URL+'/updateuser',u);
}
resetPassword(newpass:any,token:any){
  console.log("in service")
  console.log("the token in service is"+token)
  console.log("the new in service is"+newpass)
  return this.httpClient.post(this.API_URL+'/reset/'+newpass+'/'+token,"");
}

getUndeletedUsers():Observable<profile[]>{
  return this.httpClient.get<profile[]>(this.API_URL+'/getusers2')
}
addRole(idu:any,rname:any){
  return this.httpClient.put(this.API_URL+'/addRole/'+idu+'/'+rname,"")
}
getDeletedUsers():Observable<profile[]>{
  return this.httpClient.get<profile[]>(this.API_URL+'/getDeletedUsers')
}
getUsersParTitre(){
  return this.httpClient.get(this.API_URL+'/getParTitre',{responseType: 'text'})
}
getrole(){
  return this.httpClient.get(this.API_URL+'/getAuthoritie')
}
getUsers(){
  return this.httpClient.get(this.API_URL+'/retrieve-all-Users')
}
retrievePassword(email:string){
  return this.httpClient.post(this.API_URL+'/forgotPassword',email)
}


 
}
