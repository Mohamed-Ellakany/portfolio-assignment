import { Component } from '@angular/core';
import { isEmpty, retry } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
userName:string=""
  isEmpty(val:string){
if(val == null || val =="")
{
return true;
}else{
  return false
}
  }

}


