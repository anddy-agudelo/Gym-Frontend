import { Component, OnInit } from '@angular/core';
import { Sede } from '../../models/sede.model';
import { SedeService } from '../../services/sede.service';

@Component({
  selector: 'app-sede',
  templateUrl: './sede.component.html',
  styleUrls: ['./sede.component.css']
})
export class SedeComponent implements OnInit {

  public sedes: Sede[] = [];

  //Inyectar el servicio
  constructor(private sedeService: SedeService) { }

  ngOnInit(): void {
    this.traerSedes();
  }

  traerSedes(){
    this.sedeService.traerSedes().subscribe((sedes: any)=>{
        this.sedes=sedes;
        console.log(sedes);
    })
  }
}
