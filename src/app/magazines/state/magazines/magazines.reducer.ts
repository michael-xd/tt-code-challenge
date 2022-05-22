import { createReducer, on, Action } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import * as MagazinesActions from './magazines.actions';
import { Magazine } from '../../models/magazines.models';

export const MAGAZINES_FEATURE_KEY = 'magazines';

export interface State extends EntityState<Magazine> {
  selectedId?: string;
  loaded?: boolean;
  error?: any;
}

export interface MagazinesPartialState {
  readonly [MAGAZINES_FEATURE_KEY]: State;
}

export const magazinesAdapter: EntityAdapter<Magazine> =
  createEntityAdapter<Magazine>({
    selectId: (item) => item.id,
  });

export const initialState: State = magazinesAdapter.getInitialState({});

const magazinesReducer = createReducer(
  initialState,
  on(MagazinesActions.loadAllMagazines, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(MagazinesActions.loadAllMagazinesSuccess, (state, { magazines }) =>
    magazinesAdapter.setAll([...magazines], { ...state, loaded: true })
  ),
  on(MagazinesActions.loadAllMagazinesFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(MagazinesActions.setSelectedMagazine, (state, { id }) => ({
    ...state,
    selectedId: id,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return magazinesReducer(state, action);
}
