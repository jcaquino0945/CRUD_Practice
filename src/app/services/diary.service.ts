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
  
}
