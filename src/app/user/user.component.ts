import { HttpServiceService } from '../http-service.service';
import { Component, OnInit } from '@angular/core';
import { Repository } from '../repository';
import { User } from '../user';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User ;
  repos: Repository ;
 

  constructor(public httpService:HttpServiceService, public repoService :HttpServiceService) { }

    find(searchUser){
      this.httpService.getUser(searchUser).then(
        (success)=>{
          this.user=this.httpService.user;
        },
        (error)=>{
          console.log ("Ooops");
        });

      this.repoService.getRepo(searchUser).then(
        (result)=>{
          this.repos=this.repoService.repos;
        },
        (error)=>{
          console.log("Ooops..Sorry");
        });  
    }


  ngOnInit(): void {
    this.find("Ebay-droid");
  }

}
