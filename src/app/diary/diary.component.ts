import { Component, OnInit } from '@angular/core';
import { DiaryService } from '../services/diary.service';
import {Diary} from '../models/diary'

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  diary!: Diary[];

  constructor(
    public diaryService: DiaryService,
  ) { }

  ngOnInit(): void {
    this.diary = this.diaryService.getDiaries();
  }

}
