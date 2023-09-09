import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  imgUrl :object=[]
imgClicked(e:any){
 this.imgUrl = e.currentTarget.children[0].getAttribute('src');
document.querySelector('.imgLayer')?.classList.remove('d-none')
}

backlayer(){

  document.querySelector(".imgLayer")?.classList.add("d-none");

}
// notdo(){
//   document.querySelector(".imgLayer ")?.classList.add("d-block");

// }
}
