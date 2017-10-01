import {
  Component, OnInit, OnChanges, DoCheck,
  OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit,
  AfterViewChecked
} from '@angular/core';

const console = {
  log: require('debug')('root.component:log'),
  group: (typeof window === 'object' && window || global).console.group,
  groupEnd: (typeof window === 'object' && window || global).console.groupEnd
};

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, DoCheck, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

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
    console.group('DetectChanges Mechanism');
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
    console.groupEnd();
  }

}
