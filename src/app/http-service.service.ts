import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../environments/environment";
import { User } from './user';
import { Repository } from './repository';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  api = environment.apiKey;
  // username:any;
  repos:Repository
  user :User
  

  constructor( private http:HttpClient) {
    //  this.username = 'Ebay-droid';
    this.user = new User ("", "", "","",0,0,0,"","")
    this.repos = new Repository ("","",0,"")

   }

   getUser(  searchUser : string){
     interface Api{
       username: string 
       login: string
       avatar : string
       url:string  
       followers: number
       repositories: number
       following: number
       bio:string
       email: string
     }
     return new Promise ((resolve,reject)=>{
       this.http
       .get<Api>('https://api.github.com/users/'+ searchUser + '?access_token='+ this.api)
       .toPromise().then((result)=>{this.user=result;
        console.log(this.user);
        resolve();
      },
      (error)=>{
        console.log (error);
        reject();
      });
     });
   }

   getRepo(searchUser){
     interface repoApi{
       repo_name :string,
       description:string, 
       forks:number, 
       language:string
     }
     return new Promise((resolve,reject)=>{
       this.http
       .get<repoApi>('https://api.github.com/users/'+ searchUser + '/repos?access_token='+ this.api)
       .toPromise().then((result)=>{this.repos=result;
        console.log(this.repos);
        resolve();
       },
       (error)=>{
         console.log(error);
         reject();
       });
     });
   }



}
