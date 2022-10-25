import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SucursalesModel } from '@core/models/sucursales.model';
import { regExps } from '@core/util/Validaciones.service';
import { SucursalesService } from '@modules/sucursales/services/sucursales.service';
import { routerTransition, slideInAnimation } from 'src/app/app.animation';
import { AdminPopupSucursalesPageComponent } from '../admin-popup-sucursales-page/admin-popup-sucursales-page.component';
import { DynamicPipe } from '@shared/components/grid/dynamic.pipes';
import { Observable, of } from 'rxjs';
import { DialogDeleteComponent } from '@shared/components/popup-delete/dialogdelete.component';

@Component({
  selector: 'app-admin-sucursales-page',
  templateUrl: './admin-sucursales-page.component.html',
  styleUrls: ['./admin-sucursales-page.component.css'],
  animations: [routerTransition(), slideInAnimation],
  providers: [DynamicPipe]

})
export class AdminSucursalesPageComponent implements OnInit {
  @Input('showSearchControl') showSearchControl: boolean = true;  
  @Input('searchAlways') searchAlways: boolean = true; //Para que refresque siempre que se presiona el ícono de buscar
  @Input('paginador') paginador: any;

  public searchText: any;
  public query: any;
  public searchField: string = '';

  panelOpenState = false;
  optionSort: {property: string | null, order: string} = {property: null, order: 'asc'}
  accion ='Agregar';
  id: number | undefined
  public fields: Array<any> =[];

  @Input() data: Array<SucursalesModel> = [];
  listResults$: Observable<any> = of ([]);
  // public columnas: string[] =['id', 'nombre', 'actions'];
  readonly width: string = '800px';
  readonly height: string = '400px'; 
  filterPost= '';

  constructor( 
    private _sucursalesService: SucursalesService,
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
            name: 'telefono',
            display: 'Teléfono',
            align: 1,
            allowSorting: true,
            formatter: ''
        },
        {
            name: 'direccion',
            display: 'Dirección',
            align: 2,
            allowSorting: true,
            formatter: ''
        },
        {
          name: 'horario',
          display: 'Horario',
          align: 2,
          allowSorting: true,
          formatter: ''
       },
        {
          name: 'administrador',
          display: 'Administrador',
          align: 2,
          allowSorting: true,
          formatter: ''
        } 
    ];

  }

  ngOnInit(): void {
    this.obtenerSucursales();
  }


  obtenerSucursales(){
    this._sucursalesService.getSucursales()
    .subscribe(response => {
       this.data = response.data;
    }, error => {
      console.log(error);
    }
    )
  }

  

eliminarSucursal(id: number ){
  const dialogRef = this.dialog.open(DialogDeleteComponent,{
    width: '500px',
  });
  
  dialogRef.afterClosed().subscribe(result => {
    if(result){

  this._sucursalesService.deleteSucursales(id).subscribe(data =>{
     this.obtenerSucursales();
     this.snackBar.open('La sucursal fue eliminada con éxito!','🤘',{
      duration: 2000
    });
  }, error =>{
    console.log(error)
    this.snackBar.open('ERROR al intentar eliminar la sucursal, consulte con el administrador!','🔴🔴',{
      duration: 2000
    });
  });
}
});

}

    openAdd(){
      const dialogRef = this.dialog.open(AdminPopupSucursalesPageComponent,{
        width: this.width,
        height: this.height,        
      });
    
    dialogRef.afterClosed().subscribe(result => {
      this.obtenerSucursales();
    });
    }

    openEdit(sucursales: SucursalesModel){
      const dialogRef = this.dialog.open(AdminPopupSucursalesPageComponent,{
        width: this.width,
        data: sucursales

      });
      
      dialogRef.afterClosed().subscribe(result => {
        this.obtenerSucursales(); 
      });
      }
    

      clearSearch() {
        this.filterPost= '';
          }

      searchOnKeyPress(keyEvent: KeyboardEvent) {
        if (keyEvent.which === 13) {
          this.search();
        }
      }
      search() {
        if (!this.searchAlways && this.searchText.last === this.searchText.value)
          return;
    
        this.paginador.paginaActual = 1;
    
        this.query();
      }
      pageChanged(page: number) {
        this.paginador.paginaActual = page;
        this.query();
      }

      changeSort(property: string): void {
        const {order} = this.optionSort
        this.optionSort = {
          property,
          order: order == 'asc' ? 'desc': 'asc'
        }
        console.log(this.optionSort)
      }


      // recivieData(event: string): void{
      //   console.log('estoy en el padre jua🔴🐷🐷', event);
      //   this._sucursalesService.getSucursales2(event)
      //   .subscribe(response => {
      //      this.data = response.data;
      //      console.log('🔴👉', this.data);
           
      //   }, error => {
      //     console.log(error);
      //   }
      //   )
      // }
}
