import { Component } from '@angular/core';
import { ASLStudio } from '../models/aslstudio.model';
import { ClientContactComponent } from '../client-contact/client-contact.component';

@Component({
  selector: 'app-footer',
  imports: [ClientContactComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  email = ASLStudio.email
  phone = ASLStudio.phone
  instagram = ASLStudio.instagram
  youtube = ASLStudio.youtube
}
