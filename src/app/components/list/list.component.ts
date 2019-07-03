import {
  Component,
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit,
  OnInit, DoCheck, OnChanges, OnDestroy, ChangeDetectorRef
} from '@angular/core';

const console = {
  log: require('debug')('list.component:log'),
  warn: (typeof window === 'object' && window || global).console.warn
};

@Component({
  selector: 'demo-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit, OnChanges, DoCheck, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  constructor(
    private changeDetection: ChangeDetectorRef
  ) { }

  public onDisableHandler() {
    this.changeDetection.detach();
    console.warn(' ⚠️ ChangeDetection on this component is detached');
  }

  public onEnableHandler() {
    this.changeDetection.reattach();
    console.warn(' ⚠️ ChangeDetection on this component is reattached');
  }

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
