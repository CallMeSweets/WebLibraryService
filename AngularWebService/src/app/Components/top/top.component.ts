import {Component, Input, OnInit} from '@angular/core';
import {LoginService} from '../../Services/LoginService/login.service';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  private userEmail: string;

  constructor(private loginService: LoginService, private route: ActivatedRoute, private router: Router) { }

  @Input()
  userEmailToShow = '';

  ngOnInit() {
   this.route.paramMap.subscribe((params: ParamMap) => {
     const name = params.get('name');
     console.log('XX: ' + name);
     this.userEmailToShow = name;
   });

   this.loginService.getEmmiter().subscribe((data) => {
      this.userEmailToShow = data;
    });

  }

  logOutUser() {
    this.loginService.logout();
    location.reload();
  }


}
