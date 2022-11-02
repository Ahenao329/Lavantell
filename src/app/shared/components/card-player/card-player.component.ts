import { Component, Input, OnInit } from '@angular/core';
import { equipoModel } from '@core/models/equipo.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit {
  @Input() mode: 'small' | 'big' = 'small';// = es que vamos a inicializarlo en small
  // @Input() equipo!: equipoModel;
  @Input() equipo: equipoModel = { id: 0, nombre: '', cargo: '', foto: '', facebook: '', intagram: '', twitter: '' };
  azureStorageBaseUrl = environment.azureStorageBaseUrl;
  constructor() { }

  ngOnInit(): void {
  }

}
