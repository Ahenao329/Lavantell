import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NosotrosModel } from '@core/models/nosotros.model';
import { NosotrosService } from '@modules/nosotros/services/nosotros.service';
import { DialogDeleteComponent } from '@shared/components/popup-delete/dialogdelete.component';
import { routerTransition, slideInAnimation } from 'src/app/app.animation';
import { AdminPopupNosotrosPageComponent } from '../admin-popup-nosotros-page/admin-popup-nosotros-page.component';
@Component({
  selector: 'app-admin-nosotros-page',
  templateUrl: './admin-nosotros-page.component.html',
  styleUrls: ['./admin-nosotros-page.component.css'],
  animations: [routerTransition(), slideInAnimation],

})
export class AdminNosotrosPageComponent implements OnInit {
  readonly width: string = '800px';
  readonly height: string = '400px'; 
  @Input('showSearchControl') showSearchControl: boolean = true;  
  data: Array<NosotrosModel> = [];
  filterPost= '';
  optionSort: {property: string | null, order: string} = {property: null, order: 'asc'}
  public fields: Array<any> =[];
  listNosotros: Array<NosotrosModel> = []

  constructor(  private _nosotrosService: NosotrosService,
      public dialog: MatDialog,
    public snackBar: MatSnackBar) { 


                
      this.fields = [
        {
            name: 'descripcion',
            display: 'Descripción',
            align: 1,
            link: true,
            allowSorting: true,
            formatter: '1'
        },
    ];

  }

  ngOnInit(): void {
    this.obtenerNosotros();
  }

  obtenerNosotros(){
    this._nosotrosService.getListNosotros()
    .subscribe((data: NosotrosModel[])=> {
       this.data = data 
       console.log('-🔴🔴',this.data);
       
    }, error => {
      console.log(error)
    });
    
  }


  openAdd(){
    const dialogRef = this.dialog.open(AdminPopupNosotrosPageComponent,{
      width: this.width,
      height: this.height,        
    });
  
  dialogRef.afterClosed().subscribe(result => {
    this.obtenerNosotros();
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

      
    openEdit(nosotros: NosotrosModel){
      const dialogRef = this.dialog.open(AdminPopupNosotrosPageComponent,{
        width: this.width,
        data: nosotros

      });
      
      dialogRef.afterClosed().subscribe(result => {
        this.obtenerNosotros(); 
      });
      }
      eliminarNosotros(id: number ){
        const dialogRef = this.dialog.open(DialogDeleteComponent,{
          width: '500px',
        });
        
        dialogRef.afterClosed().subscribe(result => {
          if(result){
      
        this._nosotrosService.deleteNosotros(id).subscribe(data =>{
           this.obtenerNosotros();
           this.snackBar.open('La sesión de nosotros fue eliminada con éxito!','🤘',{
            duration: 2000
          });
        }, error =>{
          console.log(error)
          this.snackBar.open('ERROR al intentar eliminar la sesión de nosotros, consulte con el administrador!','🔴🔴',{
            duration: 2000
          });
        });
      }
      });
      
      }

}
