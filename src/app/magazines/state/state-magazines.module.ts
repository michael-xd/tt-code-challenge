import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromMagazines from './magazines/magazines.reducer';
import { MagazinesEffects } from './magazines/magazines.effects';
import { MagazinesFacade } from './magazines/magazines.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromMagazines.MAGAZINES_FEATURE_KEY,
      fromMagazines.reducer
    ),
    EffectsModule.forFeature([MagazinesEffects]),
  ],
  providers: [MagazinesFacade],
})
export class StateMagazinesModule {}
