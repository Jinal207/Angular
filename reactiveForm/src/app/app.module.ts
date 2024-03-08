import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MyPipePipe } from './my-pipe.pipe';
import { PipeComponent } from './pipe/pipe.component';
import {FormsModule} from '@angular/forms';
import { RainbowDirective } from './rainbow.directive'

@NgModule({
  declarations: [
    AppComponent,
    MyPipePipe,
    PipeComponent,
    RainbowDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
