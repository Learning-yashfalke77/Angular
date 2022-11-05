import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { FormWithArrayValueComponent } from './form-with-array-value/form-with-array-value.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    AuthFormComponent,
    FormWithArrayValueComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
