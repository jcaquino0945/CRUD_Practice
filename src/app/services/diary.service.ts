import { Injectable } from '@angular/core';
import {DIARIES} from '../models/diaries'
import {Diary} from '../models/diary'
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DiaryService {

  constructor() { }

  getDiaries(): Diary[] {
    return DIARIES;
  }

  getDiaryIDS() {
    return DIARIES.map(a => a.id);
  }

  getProduct(id: string) {
    return DIARIES.find(x => x.id === id)
  }

  getRecentProduct() {
    return DIARIES.slice(-4)
  }

  addToDiary(id: any, title: any,description: any) {
    let diaryEntry = {
      id:  id,
      title: title,
      description: description,
      date: new Date()
    }
    return DIARIES.push(diaryEntry)
  }

  updateDiary(id: any, title: any,description: any) {
    let diaryEntry = {
      id:  id,
      title: title,
      description: description,
      date: new Date()
    }
    console.log(DIARIES)
    return DIARIES[id] = diaryEntry;
  }

  deleteDiary(item:any) {
      return DIARIES.splice(DIARIES.indexOf(item), 1)
  }

  getDiaryLength() {
    return DIARIES.length;
  }
  
}
