import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MagazinesComponent } from './components/magazines/magazines.component';
import { StateMagazinesModule } from './state/state-magazines.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromMagazines from './state/magazines/magazines.reducer';
import { MagazinesEffects } from './state/magazines/magazines.effects';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({
      [fromMagazines.MAGAZINES_FEATURE_KEY]: fromMagazines.reducer,
    }),
    EffectsModule.forRoot([MagazinesEffects]),
    RouterModule.forChild([
      {
        path: '',
        component: MagazinesComponent,
      },
      { path: '**', redirectTo: '' },
    ]),
    StateMagazinesModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  declarations: [MagazinesComponent],
})
export class MagazinesModule {}
