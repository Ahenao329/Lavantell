import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { equipoModel } from '@core/models/equipo.model';
import { NosotrosService } from '@modules/nosotros/services/nosotros.service';
import { DialogDeleteComponent } from '@shared/components/popup-delete/dialogdelete.component';
import { routerTransition, slideInAnimation } from 'src/app/app.animation';
import { environment } from 'src/environments/environment';
import { AdminPopupEquipoPagesComponent } from '../admin-popup-equipo-pages/admin-popup-equipo-pages.component';

@Component({
  selector: 'app-admin-equipo-page',
  templateUrl: './admin-equipo-page.component.html',
  styleUrls: ['./admin-equipo-page.component.css'],
  animations: [routerTransition(), slideInAnimation]

})
export class AdminEquipoPageComponent implements OnInit {
  optionSort: {property: string | null, order: string} = {property: null, order: 'asc'}
  filterPost= '';
  @Input('showSearchControl') showSearchControl: boolean = true;  
  readonly width: string = '800px';
  readonly height: string = '400px'; 
  azureStorageBaseUrl = environment.azureStorageBaseUrl;
  public fields: Array<any> =[];
  listEquipo: Array<equipoModel> = []

  constructor(private _nosotrosService: NosotrosService,
    public dialog: MatDialog,
  public snackBar: MatSnackBar) {

    this.fields = [
      {
          name: 'nombre',
          display: 'Nombre',
          align: 1,
          link: true,
          allowSorting: true,
          formatter: '1'
      },
      {
          name: 'cargo',
          display: 'Cargo',
          align: 1,
          link: false,
          allowSorting: true,
          formatter: '1'
    },
    {
          name: 'foto',
          display: 'Foto',
          align: 1,
          link: false,
          allowSorting: true,
          formatter: '1'
    },
  ];


   }

  ngOnInit(): void {
    this.obtenerEquipos();
  }

  obtenerEquipos(){
    this._nosotrosService.getListEquipo()
    .subscribe((data: equipoModel[])=> {
       this.listEquipo = data 
       console.log('🔴', this.listEquipo);
       
    }, error => {
      console.log(error)
    });
    
  }

  openAdd(){
    const dialogRef = this.dialog.open(AdminPopupEquipoPagesComponent,{
      width: this.width,
      height: this.height,        
    });
  
  dialogRef.afterClosed().subscribe(result => {
    this.obtenerEquipos();
  });
  }

  clearSearch() {
    this.filterPost= '';
      }

  changeSort(property: string): void {
        const {order} = this.optionSort
        this.optionSort = {
          property,
          order: order == 'asc' ? 'desc': 'asc'
        }
        console.log(this.optionSort)
   }


   openEdit(equipos: equipoModel){
    const dialogRef = this.dialog.open(AdminPopupEquipoPagesComponent,{
      width: this.width,
      data: equipos

    });
    
    dialogRef.afterClosed().subscribe(result => {
      this.obtenerEquipos(); 
    });
    }

    eliminarNosotros(id: number ){
      const dialogRef = this.dialog.open(DialogDeleteComponent,{
        width: '500px',
      });
      
      dialogRef.afterClosed().subscribe(result => {
        if(result){
    
      this._nosotrosService.deleteEquipo(id).subscribe(data =>{
         this.obtenerEquipos();
         this.snackBar.open('El integrante del equipo fue eliminada con éxito!','🤘',{
          duration: 2000
        });
      }, error =>{
        console.log(error)
        this.snackBar.open('ERROR al intentar eliminar el integrante del equipo, consulte con el administrador!','🔴🔴',{
          duration: 2000
        });
      });
    }
    });
    
    }
}
