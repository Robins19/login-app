import { Component, OnInit } from '@angular/core';
import { UserDetailsApiService } from 'src/app/core/service/api-service/user-details-api-service/user-details-api.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  allUserLists: any;

  constructor(private userDetailsApiService:UserDetailsApiService) { }

  ngOnInit() {
    this.userLogin();
  }

  public userLogin():void{
    this.userDetailsApiService.getList().subscribe((response) => {
      if (response) {
        this.allUserLists = response
        console.log(response);
      }
    })
  }

}
