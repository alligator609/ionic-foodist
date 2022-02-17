import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CategoryItemComponent } from './category-item.component';


@NgModule({
  imports: [CommonModule,IonicModule],
  declarations: [CategoryItemComponent],
  exports: [CategoryItemComponent],
})
export class CategoryModule {}