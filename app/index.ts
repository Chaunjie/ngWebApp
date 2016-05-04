/**
 * Created by admin on 2016/5/4.
 */
import {Component, ElementRef, Renderer} from '@angular/core';
import {bootstrap}    from '@angular/platform-browser-dynamic';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS , Router } from '@angular/router-deprecated';
import {Header} from './head';
import {EzVideo} from './video';
import {EzMusic} from './music';

@Component({
  selector: 'app-index',
  directives:[ Header, ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS
  ],
  template:`
    <app-header title={{title}}></app-header>
    <footer class="aui-nav" id="aui-footer">
      <ul class="aui-bar-tab">
        <li [ngClass]="{'active-warning': activeIndex === 0}" id="tabbar1" (click)="changeTab(0)" [routerLink]="['Music']">
          <span class="aui-iconfont aui-icon-favor"></span>
          <p>栏目1</p>
        </li>
        <li [ngClass]="{'active-warning': activeIndex === 1}" id="tabbar2" (click)="changeTab(1)" [routerLink]="['Video']">
          <span class="aui-iconfont aui-icon-mark"></span>
          <p>栏目2</p>
        </li>
        <li [ngClass]="{'active-warning': activeIndex === 2}" id="tabbar3" (click)="changeTab(2)">
          <span class="aui-iconfont aui-icon-like"></span>
          <p>栏目3</p>
        </li>
        <li [ngClass]="{'active-warning': activeIndex === 3}" id="tabbar4" (click)="changeTab(3)">
          <span class="aui-iconfont aui-icon-my"></span>
          <p>栏目4</p>
        </li>
      </ul>
    </footer>
    <router-outlet></router-outlet>
  `
})

@RouteConfig([
  {path:"/video", component:EzVideo,name:"Video"},
  {path:"/music", component:EzMusic,name:"Music",useAsDefault: true}
])

class AppIndex{
  title = '栏目1';

  titles = [
    '栏目1',
    '栏目2',
    '栏目3',
    '栏目4'
    ];

  activeIndex = 0;

  constructor(private _renderer: Renderer, private _elementRef: ElementRef, private _router: Router) {
    //this.name = 'xudao';
    console.log(this._router);
  }

  changeTab(index){
    this.activeIndex = index;
    this.title = this.titles[index];
  }

  go(path){
    console.log(path);
    let link = ['Video', {id:1}];
    console.log(this._router);
    this._router.navigate(link);
  }

};

bootstrap(AppIndex);
