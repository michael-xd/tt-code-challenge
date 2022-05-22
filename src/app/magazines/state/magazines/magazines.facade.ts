import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';
import { Observable } from 'rxjs';
import { Magazine } from '../../models/magazines.models';
import * as MagazinesSelectors from './magazines.selectors';
import * as MagazinesActions from './magazines.actions';

@Injectable()
export class MagazinesFacade {
  magazinesLoaded$: Observable<boolean | undefined> = this.store.pipe(
    select(MagazinesSelectors.selectMagazinesLoaded)
  );

  magazinesError$: Observable<string | null | undefined> = this.store.pipe(
    select(MagazinesSelectors.selectMagazinesError)
  );

  allMagazines$: Observable<Magazine[]> = this.store.pipe(
    select(MagazinesSelectors.selectAllMagazines)
  );

  magazineEntities$: Observable<Dictionary<Magazine>> = this.store.pipe(
    select(MagazinesSelectors.selectMagazineEntities)
  );

  selectedId$: Observable<string | undefined> = this.store.pipe(
    select(MagazinesSelectors.selectSelectedId)
  );

  selectedEntity$: Observable<Magazine | string | undefined> = this.store.pipe(
    select(MagazinesSelectors.selectSelectedEntity)
  );

  constructor(private readonly store: Store) {}

  loadAllMagazines() {
    this.store.dispatch(MagazinesActions.loadAllMagazines());
  }
}
