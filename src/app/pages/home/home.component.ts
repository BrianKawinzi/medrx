import { Component, ViewChild,ElementRef } from '@angular/core';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchTerm: string = '';
  SearchResults: object[] = [];
  searchedMedication: any;

  constructor() {}

  onSearch() {

    const medicationData = [
      {
        image:'https://www.grxstatic.com/d4fuqqd5l3dbz/products/cwf_tms/DrugItem_15029.PNG?width=384&quality=75',
        name: 'Atorvastatin',
        description: '40mg, 30 tablets',
        originalPrice: '59.99',
        discountedPrice: '40',
        discountDetails: '98% off with MedRx'
        
      },
      {
        image:'https://buzzrx.s3.amazonaws.com/gs/DrugItem_5059.JPG',
        name: 'Metformin',
        description: '500mg, 60 tablets',
        originalPrice: '24.99',
        discountedPrice: '0.75',
        discountDetails: '97% off with MedRx'
      },
      {image:'https://buzzrx.s3.amazonaws.com/gs/DrugItem_5059.JPG',
        name: 'Lisinopril',
        description: '20mg, 30 tablets',
        originalPrice: '$29.99',
        discountedPrice: '19',
        discountDetails: '95% off with MedRx'
      },
      {
        image:'https://buzzrx.s3.amazonaws.com/caf6e1e8-8e0e-45c3-840d-c10080913b0e/lisinopril-img.jpeg',
        name: 'Lisinopril',
        description: '20mg, 30 tablets',
        originalPrice: '29.99',
        discountedPrice: '19.22',
        discountDetails: '95% off with MedRx'
      }, 
      {
        image:'https://buzzrx.s3.amazonaws.com/caf6e1e8-8e0e-45c3-840d-c10080913b0e/lipitor-img.jpeg',
        name: 'Lipitor ',
        description: '20mg, 30 tablets',
        originalPrice: '69.99',
        discountedPrice: '50',
        discountDetails: '95% off with MedRx'
      },
    ];

    this.searchedMedication = medicationData.find(medication =>
      medication.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    
  }
  

}
