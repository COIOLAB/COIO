import { Component } from '@angular/core';
import { faStar,faAnchor } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent {
  star=faStar;
  generateRange(length: number): number[] {
    return Array.from({ length }, (_, i) => i + 1);
  }
  reviewList:review[]=[
    {
      name:'RajShree',
      review:'MUST BUY!! Cold pressed coconut oil is of premium quality. I have been using for my baby (oil massage). It is 100% genuine, natural & toxic free unlike other packed oils. Soap is very aromatic with all natural ingredients.\nI will highly recommend to purchase this products.',
      rating:5
    },
    {
      name:'Ajit',
      review:'Coio Pure Coconut Oil has been a game-changer for me! Its quality and purity are unmatched, and I \'m thrilled to see it showcased at the mesh exhibition in Dadar. Kudos to the brand for their commitment to excellence!\nThank you so much...🙏😌',
      rating:5
    },
    {
      name:'Dr. Amola',
      review:'I have tried a lot of coconut hair oils but lio has been my go to hair oil ever since i have used it. Have noticed a considerable change in the texture of my hair. Also since its pure it can be used for cooking purposes also. Kudos to the owners.. they have come up with a good quality hair oil. All the best to team lio!!',
      rating:5
    },
    {
      name:'Daksha',
      review:'One the best pure cold pressed coconut oil. It\'s good.for cooking as well as you are not left with the strong coconut oil smell.\nAlso, you can use for hair, scalp & skin oiling.\n\nIt\'s a 3 in 1 oil...definitely worth a try!!',
      rating:5
    }
  ]

}

class review{
  name:string | undefined;
  review:string|undefined;
  rating:number=0;
}