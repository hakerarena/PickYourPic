import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';
import { CONTACT } from '../../core/constants';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, ScrollRevealDirective],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  readonly contact = CONTACT;

  readonly eventTypes = [
    'Wedding',
    'Pre-Wedding Shoot',
    'Destination Wedding',
    'Engagement',
    'Other',
  ];

  readonly referralSources = [
    'Instagram',
    'YouTube',
    'Facebook',
    'Google Search',
    'Word of Mouth',
    'Wedding Planner',
    'Other',
  ];

  form: FormGroup;
  submitted = signal(false);

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName:       ['', [Validators.required, Validators.minLength(2)]],
      lastName:        ['', [Validators.required, Validators.minLength(2)]],
      email:           ['', [Validators.required, Validators.email]],
      phone:           ['', Validators.pattern(/^[0-9+\s\-()]{7,15}$/)],
      eventDate:       ['', Validators.required],
      guestCount:      [null, [Validators.required, Validators.min(1), Validators.max(10000)]],
      eventType:       ['', Validators.required],
      weddingStyle:    ['', Validators.required],
      venueCity:       ['', Validators.required],
      howDidYouFindUs: ['', Validators.required],
      message:         ['', [Validators.required, Validators.minLength(20)]],
    });
  }

  get f() { return this.form.controls; }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const v = this.form.value;

    // ── WhatsApp ──────────────────────────────────────────────────────
    const waLines = [
      'Hello PickYourPic! 👋',
      '',
      '*New Booking Enquiry*',
      '',
      `*Name:*              ${v.firstName} ${v.lastName}`,
      `*Email:*             ${v.email}`,
      `*Phone:*             ${v.phone || 'Not provided'}`,
      `*Event Date:*        ${v.eventDate}`,
      `*Guest Count:*       ${v.guestCount}`,
      `*Event Type:*        ${v.eventType}`,
      `*Wedding Style:*     ${v.weddingStyle}`,
      `*Venue City:*        ${v.venueCity}`,
      `*How Found Us:*      ${v.howDidYouFindUs}`,
      '',
      '*More Details:*',
      v.message,
    ];

    window.open(
      `${this.contact.whatsappUrl}?text=${encodeURIComponent(waLines.join('\n'))}`,
      '_blank',
    );

    this.submitted.set(true);
  }

  resetForm(): void {
    this.form.reset();
    this.submitted.set(false);
  }
}
