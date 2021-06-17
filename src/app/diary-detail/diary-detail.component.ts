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

  constructor(
    public diaryService: DiaryService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    console.log(this.diaryService.getDiaryIDS());

    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.diary = this.diaryService.getProduct(params['id'])
    });
/*
    this.diaryService.getProduct(this.route.params)


    this.route.params
    .pipe(
      switchMap((params: Params) => {
        return this.productService.getProduct(params['id']);
      })
    )
    */
  }

}
