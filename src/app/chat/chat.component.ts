import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit {

  ngOnInit(): void {
    
    const dateBubble:any = document.getElementById('dateBubble')
    const date = new Date()
    dateBubble.innerHTML = date.toString().slice(0,25)

  }


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
