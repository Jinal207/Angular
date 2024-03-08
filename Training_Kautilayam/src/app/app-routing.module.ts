import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuiltPipeComponent } from './built-pipe/built-pipe.component';
import { CustPipeComponent } from './cust-pipe/cust-pipe.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { BuiltDirectiveComponent } from './built-directive/built-directive.component';
import { ArrayMethodsComponent } from './array-methods/array-methods.component';
import { TempDrivenFormComponent } from './temp-driven-form/temp-driven-form.component';
import { NestedTempFormComponent } from './nested-temp-form/nested-temp-form.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { SendDataComponentComponent } from './send-data-component/send-data-component.component';
import { ReceiveDataComponentComponent } from './receive-data-component/receive-data-component.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

const routes: Routes = [
  { path: "builtinPipe", component: BuiltPipeComponent },
  { path: "customPipe", component: CustPipeComponent },
  { path: "customDirective", component: CustomDirectiveComponent },
  { path: "builtDirective", component:BuiltDirectiveComponent },
  { path: "arrayMethods", component:ArrayMethodsComponent },
  { path: "templateDrivenForm", component:TempDrivenFormComponent },
  { path: "nestedTemplateDrivenForm", component:NestedTempFormComponent },
  { path: "inputOutputModel", component:ParentComponentComponent },
  { path: "sendDataComponent", component:SendDataComponentComponent },
  { path: "recieveDataComponent", component:ReceiveDataComponentComponent },
  { path: "reactiveForm", component:ReactiveFormComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
