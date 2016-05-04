/**
 * Created by admin on 2016/5/4.
 */
import {Component} from '@angular/core';

@Component({
  selector:"app-footer",
  template : `
    <footer class="aui-nav" id="aui-footer">
        <ul class="aui-bar-tab">
            <li class="active-warning" id="tabbar1" tapmode >
                <span class="aui-iconfont aui-icon-favor"></span>
                <p>栏目1</p>
            </li>
            <li id="tabbar2" tapmode >
                <span class="aui-iconfont aui-icon-mark"></span>
                <p>栏目2</p>
            </li>
            <li id="tabbar3" tapmode >
                <span class="aui-iconfont aui-icon-like"></span>
                <p>栏目3</p>
            </li>
            <li id="tabbar4" tapmode >
                <span class="aui-iconfont aui-icon-my"></span>
                <p>栏目4</p>
            </li>
        </ul>
    </footer>
	`
})

export class Footer{};
