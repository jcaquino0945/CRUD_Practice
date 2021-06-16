import { Injectable } from '@angular/core';
import {DIARIES} from '../models/diaries'
import {Diary} from '../models/diary'

@Injectable({
  providedIn: 'root'
})
export class DiaryService {

  constructor() { }

  getDiaries(): Diary[] {
    return DIARIES;
  }
  
}
