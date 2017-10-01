import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { ChannelListComponent } from './components/channel-list/channel-list.component';
import { ChannelListElementComponent } from './components/channel-list-element/channel-list-element.component';

@NgModule({
  declarations: [
    AppComponent,
    ChannelListComponent,
    ChannelListElementComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
