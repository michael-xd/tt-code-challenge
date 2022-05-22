import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MagazinesFacade } from '../../state/magazines/magazines.facade';

import { MagazinesComponent } from './magazines.component';
import * as fromMagazines from '../../state/magazines/magazines.reducer';

describe('MagazinesComponent', () => {
  let component: MagazinesComponent;
  let fixture: ComponentFixture<MagazinesComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MagazinesComponent],
      imports: [
        StoreModule.forRoot({
          [fromMagazines.MAGAZINES_FEATURE_KEY]: fromMagazines.reducer,
        }),
        EffectsModule.forRoot(),
      ],
      providers: [MagazinesFacade],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagazinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Thought Trace Code Challange'
    );
  });

  it('should render a fetch button', () => {
    expect(compiled.querySelector('button')?.textContent).toContain('Fetch');
  });
});
