import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Magazine } from '../../models/magazines.models';
import { MagazinesFacade } from '../../state/magazines/magazines.facade';

@Component({
  selector: 'app-magazines',
  templateUrl: './magazines.component.html',
  styleUrls: ['./magazines.component.scss'],
})
export class MagazinesComponent implements OnInit {
  magazinesLoaded$: Observable<boolean | undefined> =
    this.magazinesStoreFacade.magazinesLoaded$;
  magazinesError$: Observable<any | undefined> =
    this.magazinesStoreFacade.magazinesError$;
  allMagazines$: Observable<Magazine[]> =
    this.magazinesStoreFacade.allMagazines$;

  constructor(private magazinesStoreFacade: MagazinesFacade) {}

  ngOnInit(): void {}

  loadMagazines() {
    this.magazinesStoreFacade.loadAllMagazines();
  }
}
