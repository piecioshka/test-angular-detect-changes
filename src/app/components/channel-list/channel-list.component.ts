// master.component.ts

import {
  Component,
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit,
  OnInit, DoCheck, OnChanges, OnDestroy
} from '@angular/core';

const console = {
  log: require('debug')('channel-list.component:log')
};

@Component({
  selector: 'demo-channel-list',
  templateUrl: './channel-list.component.html'
})
export class ChannelListComponent implements OnInit, OnChanges, DoCheck, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  public onClickHandler() {
    // nic nie rób
  }

  public ngOnInit() {
    console.log('OnInit');
  }

  public ngOnChanges() {
    console.log('OnChanges');
  }

  public ngDoCheck() {
    console.log('DoCheck');
  }

  public ngOnDestroy() {
    console.log('OnDestroy');
  }

  public ngAfterContentInit() {
    console.log(' ↳ AfterContentInit');
  }

  public ngAfterContentChecked() {
    console.log(' ↳ AfterContentChecked');
  }

  public ngAfterViewInit() {
    console.log(' ↳ AfterViewInit');
  }

  public ngAfterViewChecked() {
    console.log(' ↳ AfterViewChecked');
  }

}
