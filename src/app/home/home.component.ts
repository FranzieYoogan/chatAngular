import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  eventOver() {

    const subtitle:any = document.getElementById('subtitle')
    const iconStyle:any = document.getElementById('iconStyle')

    subtitle.style.visibility = "visible"
    iconStyle.style.border = "1px solid purple"

    setTimeout(() => {

       subtitle.style.left = "9em"
 
      subtitle.style.transition = "1s"

      subtitle.style.opacity = "1"
      
    }, 100);

  


  }

  eventOut() {

    const subtitle:any = document.getElementById('subtitle')
    const iconStyle:any = document.getElementById('iconStyle')

    
       subtitle.style.left = "6em"
 
      subtitle.style.transition = "1s"

      setTimeout(() => {

        subtitle.style.opacity = "0"
        
      }, 100);

      


  }

}
