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
    const message:any = document.getElementById('message')
    const containerItemBubble:any = document.getElementById('containerItemBubble')
    const pStyle:any = document.getElementById('pStyle')
    const date = new Date()
    dateBubble.innerHTML = date.toString().slice(0,25)

    pStyle.innerHTML = "i'm Ghostie your little friend. How's it going ?-?"

    message.addEventListener('input', (event: { target: { value: string; }; }) => {

      if(event.target.value == "fine") {

        containerItemBubble.style.marginBottom = "3em"
        containerItemBubble.style.transition = "1s"
        containerItemBubble.style.opacity = "0"

        setTimeout(() => {
          
          containerItemBubble.style.marginBottom = "0em"
          containerItemBubble.style.transition = "1s"
          containerItemBubble.style.opacity = "1"
          pStyle.innerHTML = "that's so sad, you wanna see a video ?-? maybe u gon feel better (1 YES, 2 NO)"
        }, 1000);

      }

      if(event.target.value == "good") {

        containerItemBubble.style.marginBottom = "3em"
        containerItemBubble.style.transition = "1s"
        containerItemBubble.style.opacity = "0"
        
        setTimeout(() => {
          
          containerItemBubble.style.marginBottom = "0em"
          containerItemBubble.style.transition = "1s"
          containerItemBubble.style.opacity = "1"
          pStyle.innerHTML = "that's so sad, you wanna see a video ?-? maybe u gon feel better (1 YES, 2 NO)"

        }, 1000);

      }

      if(event.target.value == "2") {

        containerItemBubble.style.marginBottom = "3em"
        containerItemBubble.style.transition = "1s"
        containerItemBubble.style.opacity = "0"
        
        setTimeout(() => {
          
          containerItemBubble.style.marginBottom = "0em"
          containerItemBubble.style.transition = "1s"
          containerItemBubble.style.opacity = "1"
          pStyle.innerHTML = "EERR.... do you think that leon from RE is pretty ?-? (yes, i do, No, i don't)"

        }, 1000);

      }

    })

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
