import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  MAGAZINES_FEATURE_KEY,
  State,
  magazinesAdapter,
} from './magazines.reducer';

const { selectAll, selectEntities } = magazinesAdapter.getSelectors();

// Lookup the 'Magazines' feature state managed by NgRx
export const selectMagazinesState = createFeatureSelector<State>(
  MAGAZINES_FEATURE_KEY
);

export const selectMagazinesLoaded = createSelector(
  selectMagazinesState,
  (state: State) => state.loaded
);

export const selectMagazinesError = createSelector(
  selectMagazinesState,
  (state: State) => state.error
);

export const selectAllMagazines = createSelector(
  selectMagazinesState,
  (state: State) => selectAll(state)
);

export const selectMagazineEntities = createSelector(
  selectMagazinesState,
  (state: State) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectMagazinesState,
  (state: State) => state.selectedId
);

export const selectSelectedEntity = createSelector(
  selectMagazineEntities,
  selectSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
