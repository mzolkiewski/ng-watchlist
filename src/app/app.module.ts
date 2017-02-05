import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgReduxModule } from '@angular-redux/store';

import { ApolloModule } from 'apollo-angular';

import { AppComponent } from './app.component';
import { AppActions } from './app.actions';
import { ReduxRoots } from './app.redux-roots';

import { ElephantsModule } from './elephants/elephants.module';
import { LionsModule } from './lions/lions.module';
import { UpcomingModule } from './upcoming/upcoming.module';

import { provideClient } from './apollo-client-store';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    ElephantsModule,
    LionsModule,
    UpcomingModule,
    ApolloModule.withClient(provideClient),
  ],
  providers: [ AppActions, ReduxRoots ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
