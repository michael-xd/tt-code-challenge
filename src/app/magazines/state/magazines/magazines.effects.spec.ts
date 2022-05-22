import { Observable } from 'rxjs';
import { MagazinesEffects } from './magazines.effects';
import { State } from './magazines.reducer';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { TestBed } from '@angular/core/testing';
import { MagazineService } from '../../services/magazines.service';
import { TestScheduler } from 'rxjs/testing';
import { loadAllMagazines, loadAllMagazinesSuccess } from './magazines.actions';
import { Magazine } from '../../models/magazines.models';
import { createMagazine } from '../util/state-magazines.util';

describe('Magazines Effects', () => {
  const initialState = {};
  const magazineServices = jasmine.createSpyObj('magazineServices', [
    'loadAllMagazines',
  ]);
  let effects: MagazinesEffects;
  let actions: Observable<any>;
  let store: MockStore<State>;
  let testScheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MagazinesEffects,
        provideMockStore({ initialState }),
        provideMockActions(() => actions),
        { provide: MagazineService, useValue: magazineServices },
      ],
    });

    effects = TestBed.inject(MagazinesEffects);
    store = TestBed.inject(MockStore);

    testScheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('loadAllMagazines$', () => {
    it('should handle loadAllMagazines and return a loadAllMagazinesSuccess action', () => {
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
      const action = loadAllMagazines();
      const outcome = loadAllMagazinesSuccess({ magazines });

      testScheduler.run(({ hot, cold, expectObservable }) => {
        actions = hot('-a', { a: action });
        const response = cold('-b|', { b: magazines });
        magazineServices.loadAllMagazines.and.returnValue(response);

        expectObservable(effects.loadAllMagazines$).toBe('--b', { b: outcome });
      });
    });
  });
});
