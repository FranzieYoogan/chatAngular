import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {


  eventFocus() {

    const labelStyle:any = document.getElementById('labelStyle')

    labelStyle.style.top = "-20%"
    labelStyle.style.transition = "1s"

  }

  eventFocusOut() {

    const labelStyle:any = document.getElementById('labelStyle')

    labelStyle.style.top = "23%"
    labelStyle.style.transition = "1s"
    
  }

}
