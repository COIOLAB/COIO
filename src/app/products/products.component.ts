import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  ngOnInit(): void {
    this.ScrollToTop()
    let filter:string|null=sessionStorage.getItem('filter');
    this.activeFilter= filter?filter:'all';
  }
  ScrollToTop(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: Smooth scrolling animation
    });
  }
  activeFilter: string = 'all';
  cards = [
    { imgSrc: 'assets/images/hampers/h1.jpg', title: 'Jumbo Hamper', description: ' COIO Handmade Gift Solutions is here for you.. \n✅ Healthy \n✅ Actual ingredient Additions\n❌ No Artificial Colors \n❌ No Chemicals \n❌ No paraben and SLS ', dataName: 'Hamper' },
    // { imgSrc: 'assets/images/hampers/h2.jpg', title: 'Jumbo Hamper', description: ' COIO Handmade Gift Solutions is here for you.. \n❌ No Artificial Colors \n❌ No Chemicals \n❌ No paraben and SLS \n✅ Healthy \n✅ Actual ingredient Additions', dataName: 'Hamper' },
    // { imgSrc: 'assets/images/hampers/h3.jpg', title: 'Jumbo Hamper', description: ' COIO Handmade Gift Solutions is here for you.. \n❌ No Artificial Colors \n❌ No Chemicals \n❌ No paraben and SLS \n✅ Healthy \n✅ Actual ingredient Additions', dataName: 'Hamper' },
    // { imgSrc: 'assets/images/hampers/h4.jpg', title: 'Jumbo Hamper', description: ' COIO Handmade Gift Solutions is here for you.. \n❌ No Artificial Colors \n❌ No Chemicals \n❌ No paraben and SLS \n✅ Healthy \n✅ Actual ingredient Additions', dataName: 'Hamper' },
    { imgSrc: 'assets/images/hampers/20240810_192603.jpg', title: 'Premium Hamper', description: 'The perfect gift box featuring a Handmade coconut bowl, a stylish lamp, a soothing candle, and a beautifully hand-embroidered hand towel.  \n✅ Healthy \n✅ Actual ingredient Additions\n❌ No Artificial Colors \n❌ No Chemicals \n❌ No paraben and SLS ', dataName: 'Hamper' },
    { imgSrc: 'assets/images/hampers/Hair Oil Combo.jpg', title: 'Hair Oil Combo', description: 'COIO Haircare Combo features a delightful handmade soap and a natural cold-pressed hair oil, complemented by a coconut handmade soap case.. \n✅ Healthy \n✅ Actual ingredient Additions \n❌ No Artificial Colors \n❌ No Chemicals \n❌ No paraben and SLS', dataName: 'Hamper' },
    { imgSrc: 'assets/images/soaps/Coconut Soap.jpg', title: 'Coconut Soap \u2022 90gm', description: 'Helps in skin moisturization\n✅Organic \n✅ Handmade \n✅ Vegan \n✅ Artifical Colors \n❌ Animal Cruelty \n❌ Artificial Chemicals \n❌ Parabens', dataName: 'Soap' },
    { imgSrc: 'assets/images/soaps/Turmeric Soap.jpg', title: 'Turmeric Soap \u2022 90gm', description: 'Helps in skin enhancement\n✅Organic \n✅ Handmade \n✅ Vegan \n✅ Artifical Colors \n❌ Animal Cruelty \n❌ Artificial Chemicals \n❌ Parabens', dataName: 'Soap' },
    { imgSrc: 'assets/images/soaps/Coffee Soap.jpg', title: 'Coffee Soap \u2022 90gm', description: 'Helps in skin exfoliation\n✅Organic \n✅ Handmade \n✅ Vegan \n✅ Artifical Colors \n❌ Animal Cruelty \n❌ Artificial Chemicals \n❌ Parabens', dataName: 'Soap' },
    { imgSrc: 'assets/images/oils/o1.JPG', title: 'Hair Oil \u2022 100ml', description: ' Control hair fall |Reduce dandruff |No heating applied \n11 different types of herbs naturally infused by cold pressed method in COIO Cold Pressed Coconut Oil. \n✅ Organic \n✅ Natural \n✅ Vegan \n❌ Chemicals \n❌ Preservatives \n❌ Artificial additives', dataName: 'Oils' },
    { imgSrc: 'assets/images/oils/o2.jpg', title: 'Cold Pressed Coconut Oil \u2022 200ml', description: 'Cold pressed |No preservatives added |All purpose oil| Made from a special species of Coconut. \n First by Segregation of best coconuts.\n Sun Drying for high oil extraction.\n Coconuts are then put in Cold press machine to extract best water like looking oil.', dataName: 'Oils' },
    //{ imgSrc: 'assets/images/oils/o3.jpg', title: 'Cold Pressed Coconut Oil \u2022 500ml', description: 'Cold pressed |No preservatives added |All purpose oil| Made from a special Banavali species of Coconut. \n First by Segregation of best coconuts. \n Sun Drying for high oil extraction.\n Coconuts are then put in Cold press machine to extract best water like looking oil.', dataName: 'Oils' },
    { imgSrc: 'assets/images/lamps/l4.jpg', title: 'Coconut Shell Lamp Hamper \u2022 400ml', description: 'Perfect for Romantic Dinner | Dim-light Relaxation | Valentine Gifting | Unique Festival Decoration\n✅ Organic\n✅ Eco-Friendly\n✅ Sustainable  \n❌ Artificial Chemicals', dataName: 'Lamps' },
    { imgSrc: 'assets/images/lamps/Coconut Bowl 200ml.jpg', title: 'Handmade Coconut bowl \u2022 200ml/ 400ml', description: 'Perfect for Gifting | Valentine Gifting | Unique Festival Decoration\n✅ Organic\n✅ Eco-Friendly\n✅ Sustainable  \n❌ Artificial Chemicals', dataName: 'Lamps' },
    { imgSrc: 'assets/images/lamps/Lemongrass Candle.jpg', title: 'Handmade Coconut Candle \u2022 100ml', description: 'Perfect for Gifting | Valentine Gifting | Unique Festival Decoration\n✅ Organic\n✅ Eco-Friendly\n✅ Sustainable  \n❌ Artificial Chemicals', dataName: 'Lamps' },


  ];

  setFilter(filter: string) {
    this.activeFilter = filter;
  }

  shouldShow(card: any) {
    return this.activeFilter === 'all' || card.dataName === this.activeFilter;
  }
  newArray:any=[];
  chunkArray(array: any[], size: number): any[][] {
    const filteredArray = this.activeFilter !== 'all' ? this.cards.filter(e => e.dataName === this.activeFilter) : this.cards;
    const chunkedArray: any[][] = [];
    for (let i = 0; i < filteredArray.length; i += size) {
      chunkedArray.push(filteredArray.slice(i, i + size));
    }
    return chunkedArray;
  }
  order(product:string){
    var url='https://wa.me/919108283427?text=';
    url+=encodeURIComponent('Hey, I am interested in buying '+product);
    window.location.href=url;
  }
}
