import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-clip',
  imports: [],
  templateUrl: './clip.component.html',
  styleUrl: './clip.component.scss',
})
export class ClipComponent implements OnInit{
  id = '';
  constructor(private activatedRoute:ActivatedRoute) {}
  ngOnInit(): void {
   this.activatedRoute.params.subscribe((params:Params)=>{
this.id=params["id"]
   })
  }
}
