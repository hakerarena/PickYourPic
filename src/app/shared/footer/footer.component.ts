import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BRAND, CONTACT, SOCIAL } from '../../core/constants';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  readonly brand   = BRAND;
  readonly contact = CONTACT;
  readonly social  = SOCIAL;
  year = new Date().getFullYear();
}
