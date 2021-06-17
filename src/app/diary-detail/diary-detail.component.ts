import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Params, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Diary } from '../models/diary';
import { DiaryService } from '../services/diary.service';

@Component({
  selector: 'app-diary-detail',
  templateUrl: './diary-detail.component.html',
  styleUrls: ['./diary-detail.component.css']
})
export class DiaryDetailComponent implements OnInit {
  diary!: any;
  private routeSub!: Subscription;
  title: any;
  description: any;
  id: any;


  constructor(
    public diaryService: DiaryService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    console.log(this.diaryService.getDiaryIDS());

    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.diary = this.diaryService.getProduct(params['id'])

      this.title= this.diary.title;
      this.description= this.diary.description;
      this.id= this.diary.id;


    });
  }

  addEntry() {

    console.log(this.title,this.description,this.id)
    this.diaryService.updateDiary(this.diary.id,this.title,this.description)
    this.diaryService.deleteDiary(this.diary)


    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.diary = this.diaryService.getProduct(params['id'])

      this.title= this.diary.title;
      this.description= this.diary.description;
      this.id = (this.diaryService.getDiaryLength() + 1).toString();
      

    });
  }

  deleteEntry(item:any) {
    console.log(item)
    this.diaryService.deleteDiary(item)
    this.router.navigate(['/diary'])
  }

}
