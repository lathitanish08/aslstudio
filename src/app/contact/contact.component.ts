import { Component } from '@angular/core';
import { ASLStudio } from '../models/aslstudio.model';
import { ClientContactComponent } from '../client-contact/client-contact.component';

@Component({
  selector: 'app-contact',
  imports: [
    ClientContactComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  email = ASLStudio.email
  phone = ASLStudio.phone
  address = ASLStudio.address
} 
