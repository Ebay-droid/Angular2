import { Component, OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchUser : string; 
  @Output () searchEmmiter = new EventEmitter<any>();



  constructor() { }



   

  ngOnInit(): void {}
  findUser (){
    this.searchEmmiter.emit(this.searchUser)
    this.searchUser = '';
  }


}
