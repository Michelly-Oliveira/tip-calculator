import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentContainerComponent } from './components/content-container/content-container.component';
import { CalculatorInputsComponent } from './components/calculator-inputs/calculator-inputs.component';
import { CalculatorResultsComponent } from './components/calculator-results/calculator-results.component';
import { InputComponent } from './components/calculator-inputs/input/input.component';
import { ChooseTipComponent } from './components/calculator-inputs/choose-tip/choose-tip.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentContainerComponent,
    CalculatorInputsComponent,
    CalculatorResultsComponent,
    InputComponent,
    ChooseTipComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
