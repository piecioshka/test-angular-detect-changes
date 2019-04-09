import {
  Component, Input, ChangeDetectorRef,
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit,
  OnInit, DoCheck, OnChanges, OnDestroy
} from '@angular/core';

const console = {
  log: require('debug')('channel-list-element.component:log'),
  warn: (typeof window === 'object' && window || global).console.warn
};

@Component({
  selector: 'demo-channel-list-element',
  templateUrl: './channel-list-element.component.html'
})
export class ChannelListElementComponent implements OnInit, OnChanges, DoCheck, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input() name = null;

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

  public calculate(): void {
    console.warn(' ♨️ calculate (name=' + this.name + ')');
  }
}