import { createAction, props } from '@ngrx/store';
import { Magazine } from '../../models/magazines.models';

export const loadAllMagazines = createAction('[Magazines] Load All Magazines');

export const loadAllMagazinesSuccess = createAction(
  '[Magazines] Load All Magazines success',
  props<{ magazines: Magazine[] }>()
);

export const loadAllMagazinesFailure = createAction(
  '[Magazines] Load All Magazines failure',
  props<{ error: any }>()
);

export const setSelectedMagazine = createAction(
  '[Magazines] Set Selected Magazine',
  props<{ id: string }>()
);
