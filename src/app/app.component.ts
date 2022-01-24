import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tobiasText: string = "Her har vi Tobias, Han drikker kakao fordi han er for fat-svag til at drikke Kaffe";

  elmoPath: string = "https://pbs.twimg.com/profile_images/1092947128370884613/LN-Wm4fc_400x400.jpg";
  elmoText: string = "Its me Elmo :)";
}
