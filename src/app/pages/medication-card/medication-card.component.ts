import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-medication-card',
  templateUrl: './medication-card.component.html',
  styleUrls: ['./medication-card.component.css']
})
export class MedicationCardComponent {
  @Input() medication: any;

  getCoupon(): void {
    
    // Implement your logic to get a coupon here...
  }

}
