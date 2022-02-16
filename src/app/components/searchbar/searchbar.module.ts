import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  imports: [CommonModule,IonicModule],
  declarations: [SearchbarComponent],
  exports: [SearchbarComponent],
})
export class SearchbarModule {}