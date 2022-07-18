import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { SelectItemGroup } from 'primeng/api';

interface City {
  name: string;
}

interface Type {
  name: string;
  time: number[];
  price: number[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  cities: City[];

  selectedCity: City;

  selectedCity2: City;

  selectedCity3: string;

  selectedCountry: string;

  countries: any[];

  groupedCities: SelectItemGroup[];

  items: SelectItem[];

  item: string;
  // --------- add -------------//
  massageType: Type[];
  selectedMassage: Type;
  person: number[];
  count: number[];
  selectedPerson: number;
  selectedCount: number;
  date: Date;

  constructor() {
    // this.items = [];
    // for (let i = 0; i < 10000; i++) {
    //   this.items.push({ label: 'Item ' + i, value: 'Item ' + i });
    // }

    this.cities = [{ name: 'Mettmann' }, { name: 'Erdgeschoss, barrierefrei' }];

    this.massageType = [
      { name: 'Thai-Öl Massage', time: [60, 90], price: [35, 49] },
      { name: 'Aroma-Öl Massage', time: [60, 90], price: [35, 55] },
      { name: 'Kräuter-Stempel Massage', time: [60, 90], price: [39, 55] },
      { name: 'Rücken /Nacken Massage', time: [30, 60], price: [20, 39] },
      { name: 'Thai-Fuß Massage', time: [30, 60], price: [20, 35] },
      { name: 'Hot-Stone Massage', time: [90], price: [59] },
    ];

    this.person = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // this.groupedCities = [
    //   {
    //     label: 'Germany',
    //     value: 'de',
    //     items: [
    //       { label: 'Berlin', value: 'Berlin' },
    //       { label: 'Frankfurt', value: 'Frankfurt' },
    //       { label: 'Hamburg', value: 'Hamburg' },
    //       { label: 'Munich', value: 'Munich' },
    //     ],
    //   },
    //   {
    //     label: 'USA',
    //     value: 'us',
    //     items: [
    //       { label: 'Chicago', value: 'Chicago' },
    //       { label: 'Los Angeles', value: 'Los Angeles' },
    //       { label: 'New York', value: 'New York' },
    //       { label: 'San Francisco', value: 'San Francisco' },
    //     ],
    //   },
    //   {
    //     label: 'Japan',
    //     value: 'jp',
    //     items: [
    //       { label: 'Kyoto', value: 'Kyoto' },
    //       { label: 'Osaka', value: 'Osaka' },
    //       { label: 'Tokyo', value: 'Tokyo' },
    //       { label: 'Yokohama', value: 'Yokohama' },
    //     ],
    //   },
    // ];

    // this.countries = [
    //   { name: 'Australia', code: 'AU' },
    //   { name: 'Brazil', code: 'BR' },
    //   { name: 'China', code: 'CN' },
    //   { name: 'Egypt', code: 'EG' },
    //   { name: 'France', code: 'FR' },
    //   { name: 'Germany', code: 'DE' },
    //   { name: 'India', code: 'IN' },
    //   { name: 'Japan', code: 'JP' },
    //   { name: 'Spain', code: 'ES' },
    //   { name: 'United States', code: 'US' },
    // ];
  }
}
