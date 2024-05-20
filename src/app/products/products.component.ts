import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  activeFilter: string = 'all';
  cards = [
    { imgSrc: 'assets/images/hampers/h1.jpg', title: 'Hamper', description: 'Lorem ipsum dolor..', dataName: 'Hamper' },
    { imgSrc: 'assets/images/hampers/h2.jpg', title: 'Hamper', description: 'Lorem ipsum dolor..', dataName: 'Hamper' },
    { imgSrc: 'assets/images/hampers/h3.jpg', title: 'Hamper', description: 'Lorem ipsum dolor..', dataName: 'Hamper' },
    { imgSrc: 'assets/images/hampers/h4.jpg', title: 'Hamper', description: 'Lorem ipsum dolor..', dataName: 'Hamper' },
    { imgSrc: 'assets/images/hampers/h5.jpg', title: 'Hamper', description: 'Lorem ipsum dolor..', dataName: 'Hamper' },
    { imgSrc: 'assets/images/soaps/s1.jpg', title: 'Soap', description: 'Lorem ipsum dolor..', dataName: 'Soap' },
    { imgSrc: 'assets/images/soaps/s2.jpg', title: 'Soap', description: 'Lorem ipsum dolor..', dataName: 'Soap' },
    { imgSrc: 'assets/images/soaps/s3.jpg', title: 'Soap', description: 'Lorem ipsum dolor..', dataName: 'Soap' },
    { imgSrc: 'assets/images/oils/o1.JPG', title: 'Oils', description: 'Lorem ipsum dolor..', dataName: 'Oils' },
    { imgSrc: 'assets/images/oils/o2.jpg', title: 'Oils', description: 'Lorem ipsum dolor..', dataName: 'Oils' },
    { imgSrc: 'assets/images/oils/o3.jpg', title: 'Oils', description: 'Lorem ipsum dolor..', dataName: 'Oils' },
    { imgSrc: 'assets/images/lamps/l1.jpg', title: 'Lamps', description: 'Lorem ipsum dolor..', dataName: 'Oils' },
    { imgSrc: 'assets/images/lamps/l3.jpg', title: 'Lamps', description: 'Lorem ipsum dolor..', dataName: 'Oils' },
    { imgSrc: 'assets/images/lamps/l2.jpg', title: 'Lamps', description: 'Lorem ipsum dolor..', dataName: 'Oils' },
    { imgSrc: 'assets/images/lamps/l4.jpg', title: 'Lamps', description: 'Lorem ipsum dolor..', dataName: 'Oils' },
    { imgSrc: 'assets/images/lamps/l5.jpg', title: 'Lamps', description: 'Lorem ipsum dolor..', dataName: 'Oils' },

  ];

  setFilter(filter: string) {
    this.activeFilter = filter;
  }

  shouldShow(card: any) {
    return this.activeFilter === 'all' || card.dataName === this.activeFilter;
  }
  newArray:any=[];
  chunkArray(array: any[], size: number): any[][] {
    const filteredArray = this.activeFilter !== 'all' ? this.cards.filter(e => e.title === this.activeFilter) : this.cards;
    const chunkedArray: any[][] = [];
    for (let i = 0; i < filteredArray.length; i += size) {
      chunkedArray.push(filteredArray.slice(i, i + size));
    }
    return chunkedArray;
  }
}
