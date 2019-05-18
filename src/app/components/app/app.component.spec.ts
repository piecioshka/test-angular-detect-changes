import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { ChannelListComponent } from '../channel-list/channel-list.component';
import { ChannelListElementComponent } from '../channel-list-element/channel-list-element.component';

describe('AppComponent', () => {
  let fixture = null;
  let component = null;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ChannelListComponent,
        ChannelListElementComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  }));

  it('should create the component', async(() => {
    expect(component).toBeTruthy();
  }));
});
