import { Component, OnInit } from '@angular/core';
import { DiaryService } from '../services/diary.service';
import {Diary} from '../models/diary'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  diary!: Diary[];

  constructor(
    public diaryService: DiaryService,
  ) { }

  ngOnInit(): void {
    this.diary = this.diaryService.getDiaries();
    console.log(this.diary)
  }

}
