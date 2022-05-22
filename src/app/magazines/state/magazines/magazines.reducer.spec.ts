import { Magazine } from '../../models/magazines.models';
import { createMagazine } from '../util/state-magazines.util';
import {
  loadAllMagazines,
  loadAllMagazinesFailure,
  loadAllMagazinesSuccess,
  setSelectedMagazine,
} from './magazines.actions';
import * as fromMagazines from './magazines.reducer';

describe('Magazines Reducer', () => {
  let initialState: fromMagazines.State;

  beforeEach(() => {
    initialState = fromMagazines.initialState;
  });

  describe('[Magazines] Unkown action', () => {
    it('should return the default state', () => {
      const action = {
        type: 'unknown',
      };
      const state = fromMagazines.reducer(initialState, action);

      expect(state).toBe(initialState);
    });
  });

  describe('[Magazines] Load All Magazines', () => {
    it('should set loaded to false and error to null', () => {
      const action = loadAllMagazines();
      const state = fromMagazines.reducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        error: null,
        loaded: false,
      });
    });
  });
  describe('[Magazines] Load All Magazines Success', () => {
    it('should update the state with magazine entities', () => {
      const magazines: Magazine[] = [
        createMagazine({
          id: '4cfe55b4-8133-45ec-8320-1671082c2e55',
          name: 'Magazine A',
        }),
        createMagazine({
          id: '145c0cfa-18bf-4cd1-87ee-2729698f715d',
          name: 'Magazine B',
        }),
      ];
      const action = loadAllMagazinesSuccess({ magazines });
      const state = fromMagazines.reducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        entities: magazines.reduce(
          (entityMap, magazine) => ({
            ...entityMap,
            [magazine.id]: magazine,
          }),
          {}
        ),
        ids: magazines.map((magazine) => magazine.id),
        loaded: true,
      });
    });
  });

  describe('[Magazines] Load All Magazines Fail', () => {
    it('should update error in state', () => {
      const error = new Error();
      const action = loadAllMagazinesFailure({ error });
      const state = fromMagazines.reducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        error,
      });
    });
  });

  describe('[Magazines] Set Selected Magazine', () => {
    it('should update selectedId in state', () => {
      const id = '4cfe55b4-8133-45ec-8320-1671082c2e55';
      const action = setSelectedMagazine({ id });
      const state = fromMagazines.reducer(initialState, action);

      expect(state).toEqual({
        ...initialState,
        selectedId: id,
      });
    });
  });
});
