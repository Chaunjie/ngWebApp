/**
 * Created by admin on 2016/5/3.
 */
import {Component} from '@angular/core';
import {bootstrap}    from '@angular/platform-browser-dynamic';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
  selector:"ez-video",
  template : `
		<h1>Tab1 Tips: I Love Angular1.</h1>
	`
})
class EzVideo{}

@Component({
  selector:"ez-music",
  template : `
		<h1>Tab2 Tips: I Love Angular2</h1>
	`
})
class EzMusic{}

@Component({
  selector: 'xu-dao',
  template: `
      <a [routerLink]="['Video']">Tab1</a> | 
		  <a [routerLink]="['Music']">Tab2</a>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS
  ]
})

@RouteConfig([
  {path:"/video", component:EzVideo,name:"Video"},
  {path:"/music", component:EzMusic,name:"Music"}
])
class XuDao {}

bootstrap(XuDao);
