import { Component, OnInit } from '@angular/core';
import { ClipService } from '../../../services/clip.service';

@Component({
  selector: 'app-manage',
  standalone: false,
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.scss'
})
export class ManageComponent implements OnInit{
// constructor(private clipService:ClipService){}
  ngOnInit(): void {
    // this.clipService.getUserClips().subscribe((res)=>{
    //   console.log(res);
      
    // })
    
  }

}
