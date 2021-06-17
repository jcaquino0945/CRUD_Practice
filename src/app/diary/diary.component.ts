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
  title: any;
  description: any;
  id!: any;
  constructor(
    public diaryService: DiaryService,
  ) { }

  ngOnInit(): void {
    this.diary = this.diaryService.getDiaries();

    this.id = (this.diaryService.getDiaryLength() + 1).toString();

  }

  addEntry() {
    this.diaryService.addToDiary(this.id,this.title,this.description)

    this.title='';
    this.description='';
    this.id = (this.diaryService.getDiaryLength() + 1).toString();

    console.log(this.id,this.title,this.description)
  }
/*
  makeid(length: number) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
    
 }
*/
}
