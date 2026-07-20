import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  private fb = inject(FormBuilder);

  contactForm: FormGroup;
  isSubmitting = signal(false);
  submitSuccess = signal(false);

  constructor() {
    this.contactForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]], // Indian mobile numbers starting with 6-9
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    console.log('Sending message to contact desk:', this.contactForm.value);

    // Mock network call
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.submitSuccess.set(true);
      this.contactForm.reset();
      
      // Auto-hide success checkmark after 5s
      setTimeout(() => this.submitSuccess.set(false), 5000);
    }, 1500);
  }
}
