import { Component } from '@angular/core';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
@Component({
  selector: 'app-home',
  imports: [
    TestimonialsComponent
    
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
