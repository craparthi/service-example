import { Component , OnInit} from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-services';
  employee: any;
  constructor(private configService: ConfigService) { }

  ngOnInit() {
    this.showConfig();
  }

  showConfig() {

    this.configService.getConfig()
      .subscribe((employee: any) => {
        console.log("data received ", employee)
        this.employee = employee;
    });
  }
}
