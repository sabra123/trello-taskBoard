import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { HomeComponent } from './components/home/home.component';
import { BoardsComponent } from './components/boards/boards.component';
import { InlineFormComponent } from './shared/component/inline-form/inline-form.component';
import { TopbarComponent } from './shared/component/topbar/topbar.component';
import { TaskComponent } from './components/task/task.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    HomeComponent,
    BoardsComponent,
    InlineFormComponent,
    TopbarComponent,
    TaskComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DragDropModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
