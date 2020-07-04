import {
  Component, Input, ChangeDetectorRef,
  AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit,
  OnInit, DoCheck, OnChanges, OnDestroy
} from '@angular/core';

const console = {
  log: require('debug')('item.component:log'),
  warn: (typeof window === 'object' && window || global).console.warn
};

@Component({
  selector: 'demo-item',
  templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit, OnChanges, DoCheck, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input() name: string = null;

  constructor(
    private changeDetection: ChangeDetectorRef
  ) { }

  public onDisableHandler() {
    this.changeDetection.detach();
    console.warn(' ⚠️ ChangeDetection on this component is detached (name=' + this.name + ')');
  }

  public onEnableHandler() {
    this.changeDetection.reattach();
    console.warn(' ⚠️ ChangeDetection on this component is reattached (name=' + this.name + ')');
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
