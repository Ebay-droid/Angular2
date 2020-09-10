import { HttpServiceService } from '../http-service.service';
import { Component, OnInit, } from '@angular/core';
import { Repository } from '../repository';
@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  repos: Repository ;
 
  

  constructor( public repoService:HttpServiceService) { }

  findRepo(searchUser){
    this.repoService.getRepo(searchUser).then(
      (result)=>{
        this.repos= this.repoService.repos;
      },
      (error)=>{
        console.log("Ooops!!");
      });
  }


  
   

  ngOnInit() {
    this.findRepo ("Ebay-droid")
  }

}
