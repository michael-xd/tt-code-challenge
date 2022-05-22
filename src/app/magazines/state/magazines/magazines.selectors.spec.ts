import { Magazine } from '../../models/magazines.models';
import { createMagazine } from '../util/state-magazines.util';
import { State } from './magazines.reducer';
import * as MagazineSelectors from './magazines.selectors';

describe('Magazine Selectors', () => {
  let magazines: Magazine[];
  let state: State;

  beforeEach(() => {
    magazines = [
      createMagazine({
        id: '4cfe55b4-8133-45ec-8320-1671082c2e55',
        name: 'Magazine A',
      }),
      createMagazine({
        id: '145c0cfa-18bf-4cd1-87ee-2729698f715d',
        name: 'Magazine B',
      }),
    ];

    state = {
      selectedId: '145c0cfa-18bf-4cd1-87ee-2729698f715d',
      entities: magazines.reduce(
        (entityMap, magazine) => ({
          ...entityMap,
          [magazine.id]: magazine,
        }),
        {}
      ),
      ids: magazines.map((magazine) => magazine.id),
      loaded: true,
    };
  });

  describe('selectMagazinesLoaded', () => {
    it('should return a boolean or undefined', () => {
      expect(MagazineSelectors.selectMagazinesLoaded.projector(true))
        .toBeTruthy;
      expect(MagazineSelectors.selectMagazinesLoaded.projector(false))
        .toBeFalsy;
      expect(MagazineSelectors.selectMagazinesLoaded.projector()).toBe(
        undefined
      );
    });
  });

  describe('selectAllMagazines', () => {
    it('should return correct number of entities', () => {
      const allMagazines =
        MagazineSelectors.selectAllMagazines.projector(state);
      expect(allMagazines.length).toBe(2);
    });
  });

  describe('selectSelectedEntity', () => {
    it('should return the correct name for the selected magazine', () => {
      const selectedMagazine = MagazineSelectors.selectSelectedEntity.projector(
        state.entities,
        state.selectedId
      );
      expect((selectedMagazine as Magazine).name).toEqual('Magazine B');
    });
  });

  describe('selectMagazinesError', () => {
    it('should return an error or undefined', () => {
      const error = 'Error loading...';
      expect(
        MagazineSelectors.selectMagazinesError.projector({ error: undefined })
      ).toBe(undefined);
      expect(MagazineSelectors.selectMagazinesError.projector({ error })).toBe(
        error
      );
    });
  });
});
