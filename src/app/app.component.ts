import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { SelectItemGroup } from 'primeng/api';
import jsPDF from 'jspdf';

interface City {
  name: string;
}

interface Type {
  name: string;
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
  time: number[];
  selectedPerson: number;
  selectedCount: number;
  date: Date;

  netto: number = 29;
  belegnummer: number = 1;
  mwst: number = 6;
  brutto: number = 35;
  read: string = 'fünfunddreißig';

  img =
    'https://media.discordapp.net/attachments/977612249860554862/978981507005820938/logo.png';

  constructor() {
    this.cities = [{ name: 'Mettmann' }, { name: 'Erdgeschoss, barrierefrei' }];

    this.massageType = [
      { name: 'Thai-Öl Massage', price: [35, 49] },
      { name: 'Aroma-Öl Massage', price: [35, 55] },
      { name: 'Kräuter-Stempel Massage', price: [39, 55] },
      { name: 'Rücken /Nacken Massage', price: [20, 39] },
      { name: 'Thai-Fuß Massage', price: [20, 35] },
      { name: 'Hot-Stone Massage', price: [59] },
    ];
    this.time = [30, 60, 90];
    this.person = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  test() {
    var number = (<HTMLInputElement>document.getElementById('brutto')).value;
    document.getElementById('german').innerHTML = this.inWords(number);
  }

  inWords(zahl: any) {
    const sonderzahlen = [];
    sonderzahlen[11] = 'elf';
    sonderzahlen[12] = 'zwölf';
    sonderzahlen[16] = 'sechzehn';
    sonderzahlen[17] = 'siebzehn';

    var zahlen = [];
    zahlen[1] = 'ein';
    zahlen[2] = 'zwei';
    zahlen[3] = 'drei';
    zahlen[4] = 'vier';
    zahlen[5] = 'fünf';
    zahlen[6] = 'sechs';
    zahlen[7] = 'sieben';
    zahlen[8] = 'acht';
    zahlen[9] = 'neun';
    zahlen[10] = 'zehn';
    zahlen[20] = 'zwanzig';
    zahlen[30] = 'dreißig';
    zahlen[40] = 'vierzig';
    zahlen[50] = 'fünfzig';
    zahlen[60] = 'sechzig';
    zahlen[70] = 'siebzig';
    zahlen[80] = 'achtzig';
    zahlen[90] = 'neunzig';

    var einheiten = ['', 'tausend', 'Million', 'Milliarde', 'Billion'];
    var trennschritte = 1000;
    var zahlinworten = '';
    var zahlenblock;

    if (zahl == 0) zahlinworten = 'null';
    for (var i = 0; i < Math.ceil(zahl.length / 3); i++) {
      if (i > einheiten.length - 1) return 'Zahl nicht unterstützt';
      if (i == 0) zahlenblock = zahl % trennschritte;
      else
        zahlenblock =
          ((zahl % trennschritte) - (zahl % (trennschritte / 1000))) /
          (trennschritte / 1000);
      var einer = zahlenblock % 10;
      var zehn = zahlenblock % 100;
      var hunderter = (zahlenblock - (zahlenblock % 100)) / 100;
      var einheitenendung = einheiten[i].substr(einheiten[i].length - 1, 1);

      if (zahlenblock > 0) {
        if (zahlenblock > 1 && einheitenendung == 'n')
          zahlinworten = ' ' + einheiten[i] + 'en ' + zahlinworten;
        else if (zahlenblock > 1 && einheitenendung == 'e')
          zahlinworten = ' ' + einheiten[i] + 'n ' + zahlinworten;
        else if (zahlenblock > 0 && i == 1)
          zahlinworten = einheiten[i] + zahlinworten;
        else zahlinworten = ' ' + einheiten[i] + ' ' + zahlinworten;
      }

      if (zehn > 0) {
        if (zehn == 1 && i == 0) zahlinworten = 'eins' + zahlinworten;
        else if (zehn == 1 && i == 1) zahlinworten = 'ein' + zahlinworten;
        else if (zehn == 1 && i > 1) zahlinworten = 'eine' + zahlinworten;
        else if (sonderzahlen[zehn])
          zahlinworten = sonderzahlen[zehn] + zahlinworten;
        else {
          if (zehn > 9) zahlinworten = zahlen[zehn - einer] + zahlinworten;
          if (zehn > 20 && einer > 0) zahlinworten = 'und' + zahlinworten;
          if (einer > 0) zahlinworten = zahlen[einer] + zahlinworten;
        }
      }

      if (hunderter > 0)
        zahlinworten = zahlen[hunderter] + 'hundert' + zahlinworten;

      trennschritte *= 1000;
    }
    return zahlinworten;
  }

  makePdf() {
    // const doc = new jsPDF();
    // var doc = new jsPDF(); // worker_threads
    // doc.text('Hello world!', 10, 10);
    // doc.save('a4.pdf');
  }

  //   genPDF() {
  //     // window.jsPDF = window.jspdf.jsPDF;
  //     var doc = new jsPDF({
  //       orientation: 'landscape',
  //       unit: 'in',
  //       format: [8.3, 5.8],
  //     });
  //     //get value from field

  //     // TODO: loop ตาม #count belegnummer changed
  //     // doc.addPage();
  //     console.log(document.getElementById('countSelect').value);
  //     for (let i = 1; i <= document.getElementById('countSelect').value; i++) {
  //       if (document.getElementById('typeSelect').value == 'm1') {
  //         ftype = 'Thai-Öl Massage';
  //       } else if (document.getElementById('typeSelect').value == 'm2') {
  //         ftype = 'Aroma-Öl Massage';
  //       } else if (document.getElementById('typeSelect').value == 'm3') {
  //         ftype = 'Kräuter-Stempel Massage';
  //       } else if (document.getElementById('typeSelect').value == 'm4') {
  //         ftype = 'Rücken /Nacken Massage';
  //       } else if (document.getElementById('typeSelect').value == 'm5') {
  //         ftype = 'Thai-Fuß Massage';
  //       } else if (document.getElementById('typeSelect').value == 'm6') {
  //         ftype = 'Hot-Stone Massage';
  //       }

  //       //TODO: bele ต้องบวกเพิ่ม หากมีการเจน pdf โดยเอาไปบวกกับใน localStorage
  //       // document.getElementById("fbelegnummer").value += document.getElementById("f")

  //       ftime = document.getElementById('timeSelect').value + ' Minuten';
  //       fperson = document.getElementById('personSelect').value + ' Personen';

  //       fnetto = document.getElementById('fnetto').value + ',00 €';
  //       fbelegnummer = document.getElementById('fbelegnummer').value;
  //       fmwst = document.getElementById('fmwst').value + ',00 €';
  //       fbrutto = document.getElementById('fbrutto').value + ',00 €';
  //       fread = document.getElementById('fRead').value + ' Euro';
  //       fplace = document.getElementById('placeSelect').value;
  //       var date = new Date(document.getElementById('date').value);
  //       // TODO: loop display count and print
  //       doc.setLineWidth(0.01);
  //       doc.line(0.125, 0.125, 8.2, 0.125, null);
  //       doc.line(0.125, 0.125, 0.125, 5.7, null);
  //       doc.line(0.125, 5.7, 8.2, 5.7, null);
  //       doc.line(8.2, 0.125, 8.2, 5.7, null);
  //       //content
  //       //belegmummer
  //       doc.text('Belegnummer', 5, 0.9);
  //       doc.text(fbelegnummer, 7.2, 0.9);
  //       //Netto
  //       doc.text(fnetto, 1.6, 0.9);
  //       doc.text('Netto', 3, 0.9);
  //       //Mwst
  //       doc.text(fmwst, 1.7, 1.5);
  //       doc.text('MwSt. 19%', 3, 1.5);
  //       //Brutto
  //       doc.text(fbrutto, 1.6, 2.1);
  //       doc.text('Brutto', 3, 2.1);
  //       //detail
  //       doc.text(fread, 0.7, 2.7);
  //       doc.text(ftype, 0.7, 3.3);
  //       doc.text(fperson, 0.7, 3.9);
  //       doc.text(ftime, 0.7, 4.5);

  //       // logo
  //       // addImage = imgData: string, format: 'jpg', x (coor): number, y(coor): number, width: number, height: number
  //       doc.addImage(img, 'JPEG', 5.9, 1.8, 0.8, 0.8);
  //       doc.setFont('Helvetica', 'bold');
  //       doc.text('Saichan Thai-Massage GmbH', 4.8, 2.9);
  //       doc.setFontSize(13);
  //       doc.setFont('Helvetica', 'normal');
  //       doc.text('Betriebsstätte Mettmann', 5.4, 3.2);
  //       doc.setFontSize(15);
  //       doc.text('Lavalplatz 10', 5.75, 3.5);
  //       doc.text('40822 Mettmann', 5.54, 3.8);
  //       doc.setFontSize(13);
  //       doc.text('www.thaimassage-mettmann.de', 5.05, 4.1);
  //       //footer
  //       doc.setFontSize(15);
  //       doc.text(
  //         fplace +
  //           ', ' +
  //           date.getDate() +
  //           '.' +
  //           date.getMonth() +
  //           '.' +
  //           date.getFullYear(),
  //         0.7,
  //         5.3
  //       );
  //       doc.text('Betrag bar erhalten', 5.5, 5.3);
  //       if (i != document.getElementById('countSelect').value) {
  //         doc.addPage();
  //       }
  //     }
  //     doc.save('a4.pdf');
  //   }
}
