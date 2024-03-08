import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuiltPipeComponent } from './built-pipe/built-pipe.component';
import { CustPipeComponent } from './cust-pipe/cust-pipe.component';
import { SearchPipePipe } from './search-pipe.pipe';
import {FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CustomDirectiveDirective } from './custom-directive.directive';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { BuiltDirectiveComponent } from './built-directive/built-directive.component';
import { ArrayMethodsComponent } from './array-methods/array-methods.component';
import { TempDrivenFormComponent } from './temp-driven-form/temp-driven-form.component';
import { NestedTempFormComponent } from './nested-temp-form/nested-temp-form.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './parent-component/child-component/child-component.component';
import { SendDataComponentComponent } from './send-data-component/send-data-component.component';
import { ReceiveDataComponentComponent } from './receive-data-component/receive-data-component.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { NgContentComponent } from './ng-content/ng-content.component'
@NgModule({
  declarations: [
    AppComponent,
    BuiltPipeComponent,
    CustPipeComponent,
    SearchPipePipe,
    CustomDirectiveDirective,
    CustomDirectiveComponent,
    BuiltDirectiveComponent,
    ArrayMethodsComponent,
    TempDrivenFormComponent,
    NestedTempFormComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    SendDataComponentComponent,
    ReceiveDataComponentComponent,
    ReactiveFormComponent,
    NgContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
