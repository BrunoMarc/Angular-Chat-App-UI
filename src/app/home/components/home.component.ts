import {Component} from "@angular/core";
/**
 * Created by Hiren on 19-03-2017.
 */
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  infos: any;
  isUserProfileActive:boolean;
  isContactProfileActive:boolean;
}
