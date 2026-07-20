import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { QuoteService } from '../../../core/services/quote.service';

@Component({
  selector: 'app-quote-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.scss']
})
export class QuoteFormComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  protected quoteService = inject(QuoteService);

  // Signals
  readonly currentStep = signal(1);
  readonly isSubmitting = signal(false);
  readonly submitSuccess = signal(false);
  readonly referenceId = signal('');

  // Expose cart values
  quoteItems = this.quoteService.quoteItems;
  totalItemsCount = this.quoteService.totalItemsCount;

  customerForm: FormGroup;

  indianStates = [
    'Maharashtra', 'Delhi NCR', 'Karnataka', 'Tamil Nadu', 'Gujarat', 
    'Uttar Pradesh', 'West Bengal', 'Telangana', 'Rajasthan', 'Kerala'
  ];

  constructor() {
    this.customerForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      email: ['', [Validators.required, Validators.email]],
      state: ['', Validators.required],
      city: ['', Validators.required],
      deliveryAddress: ['', Validators.required],
      projectType: ['Residential', Validators.required],
      comments: ['']
    });
  }

  nextStep() {
    if (this.currentStep() === 1) {
      // Validate customer fields first
      const firstStepFields = ['fullName', 'phone', 'email', 'state', 'city', 'deliveryAddress'];
      let isValid = true;
      for (const field of firstStepFields) {
        const ctrl = this.customerForm.get(field);
        if (ctrl) {
          ctrl.markAsTouched();
          if (ctrl.invalid) isValid = false;
        }
      }
      if (!isValid) return;
    }
    
    this.currentStep.update(s => s + 1);
  }

  prevStep() {
    this.currentStep.update(s => s - 1);
  }

  updateQty(productId: string, val: number) {
    this.quoteService.updateQuantity(productId, val);
  }

  removeItem(productId: string) {
    this.quoteService.removeFromQuote(productId);
  }

  onSubmit() {
    if (this.customerForm.invalid) {
      this.customerForm.markAllAsTouched();
      return;
    }

    if (this.totalItemsCount() === 0) {
      alert('Your quote list is empty. Please add products first.');
      return;
    }

    this.isSubmitting.set(true);

    this.quoteService.submitQuote(this.customerForm.value).then((success) => {
      this.isSubmitting.set(false);
      if (success) {
        this.referenceId.set('BI-' + (Math.floor(Math.random() * 900000) + 100000));
        this.submitSuccess.set(true);
        this.customerForm.reset({
          projectType: 'Residential'
        });
        this.currentStep.set(1);
        setTimeout(() => {
          this.submitSuccess.set(false);
          this.router.navigate(['/products']);
        }, 4000);
      }
    });
  }
}
