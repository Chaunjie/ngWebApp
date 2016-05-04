/**
 * Created by admin on 2016/5/4.
 */
import {Component} from '@angular/core';

@Component({
  selector:"app-header",
  properties:["title"],
  template : `
    <header class="aui-bar aui-bar-nav aui-bar-warning" id="aui-header">
        <a class="aui-btn aui-btn-warning aui-pull-left" tapmode>
            <!--<span class="aui-iconfont aui-icon-left"></span>-->
        </a>
        <div class="aui-title" id="header-title">{{title}}</div>
    </header>
	`
})

export class Header{
  title1 = 'sdbfs';
  constructor(){

  }
};
