import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { isEmpty, isEmptyObject, isSuccess } from '../utils/utils';
import { NotificationsService } from 'angular2-notifications';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public isLoading : boolean = false;

  private loadingSubject : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  loading$: Observable<boolean> = this.loadingSubject.asObservable();

  constructor(private notificaionService: NotificationsService, private title: Title, private meta: Meta) { }

  loadingState(isLoading: boolean){
    this.isLoading = isLoading;
    this.loadingSubject.next(this.isLoading);
  }

  notificationSuccess(description: string = '', config: any = {title: 'Thông báo', timeOut: 2000}){
    this.notificaionService.success(config.title, description, {
      timeOut: config.timeOut,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true
    });
  }

  notificationError(description: string = '', config: any = {title: 'Thông báo', timeOut: 2000}){
    this.notificaionService.error(config.title, description, {
      timeOut: config.timeOut,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true
    });
  }

  notificationWarning(description: string = '', config: any = {title: 'Thông báo', timeOut: 2000}){
    this.notificaionService.warn(config.title, description, {
      timeOut: config.timeOut,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true
    });
  }

  //Seo Page
  initSeoPage(seoInfo: any = {title: '', image: '', keyword: '', description: ''}){
    if(isEmpty(seoInfo.title)){
      seoInfo.title = 'Tiêu đề test'
    }

    if(isEmpty(seoInfo.image)){
      seoInfo.image = 'https://cdn.mayhantanthanhsaigon.com/thienphumayhantanthanhjpg-1999978223-d637591338381160385.jpg'
    }

    if(isEmpty(seoInfo.description)){
      seoInfo.description = 'description test'
    }

    if(isEmpty(seoInfo.keyword)){
      seoInfo.keyword = 'keyword test'
    }

    this.title.setTitle(seoInfo.title);
    this.meta.addTags([
      {
        name: 'og:image',
        content: seoInfo.image
      },
      {
        name: 'description',
        content: seoInfo.description
      },
      {
        name: 'keywords',
        content: seoInfo.keyword
      },
    ]);
  }
}
