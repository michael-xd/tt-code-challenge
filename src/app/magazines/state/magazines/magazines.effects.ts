import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as MagazinesActions from './magazines.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { MagazineService } from '../../services/magazines.service';

@Injectable()
export class MagazinesEffects {
  loadAllMagazines$ = createEffect(() =>
    this.actions.pipe(
      ofType(MagazinesActions.loadAllMagazines),
      switchMap(() =>
        this.service.loadAllMagazines().pipe(
          map((magazines) =>
            MagazinesActions.loadAllMagazinesSuccess({ magazines })
          ),
          catchError(async (error) =>
            MagazinesActions.loadAllMagazinesFailure({ error })
          )
        )
      )
    )
  );

  constructor(private actions: Actions, private service: MagazineService) {}
}
