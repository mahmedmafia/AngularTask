import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { PageNotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeListItemComponent } from './components/home/home-list-item/home-list-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListItemComponent } from './components/list/list-item/list-item.component';
import { FeedbackComponent } from './components/list/feedback/feedback.component';
import { MaterialModule } from './app-material.module';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material';
import { InfiniteScrollDirective } from './components/shared/infinite-scroll.directive';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    HomeComponent,
    ListComponent,
    PageNotFoundComponent,
    ListItemComponent,
    FooterComponent,
    HomeListItemComponent,
    FeedbackComponent,
    InfiniteScrollDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    MatDialogModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    ScrollingModule
  ],
   entryComponents: [
    FeedbackComponent
  ],
  providers: [{ provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
