import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { ListComponent } from '../list/list.component';
import { ItemComponent } from '../item/item.component';

describe('AppComponent', () => {
  let fixture = null;
  let component = null;
  let $component = null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ListComponent,
        ItemComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    $component = fixture.nativeElement;
  }));

  afterEach(() => {
    $component.remove();
  });

  it('should create the component', async(() => {
    expect(component).toBeTruthy();
  }));
});
