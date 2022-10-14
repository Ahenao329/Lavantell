import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  public searchText: any;
  public searchField: string = '';
  private lastSortField: any;

  @Input('boxTitle') boxTitle?: string;
  @Input('iconClass') iconClass: string;
  @Input('boxClass') boxClass?: string;
  @Input('modalMode') modalMode: boolean;
  @Input('searchAlways') searchAlways: boolean = true; 
  @Input('showSearchControl') showSearchControl: boolean = true;  
  @Input('SearchOnInit') SearchOnInit: boolean = true;
  @Input('initSortField') initSortField?: any;
  @Input('fields') fields: Array<any>;
  @Input('searchValueInit') searchValueInit: string;
  @Input('searchFieldInit') searchFieldInit?: string;
  @Input('data') data?: Array<any>;
  @Input('paginador') paginador: any;
  @Input('addMethod') addMethod: Function;
  @Input('editMethod') editMethod: Function;
  @Input('deleteMethod') deleteMethod: Function;
  @Input('queryMethod') queryMethod: Function;
  @Input('viewMethod') viewMethod: Function;
  @Input('exportMethod') exportMethod: Function;
  @Input('externParams') externParams: Function;
  @Input('showAdd') showAdd: boolean = true;

  
  constructor() {
    this.searchText = { value: '', last: '' };

    this.fields = [];
    this.iconClass = String.toString();
    this.modalMode = false;
    this.searchValueInit = String.toString();
    this.addMethod = Function;
    this.editMethod = Function;

    this.deleteMethod = Function;
    this.queryMethod = Function;
    this.viewMethod = Function;
    this.exportMethod = Function;
    this.externParams = Function;
   }

  ngOnInit(): void {
  }
  add() {
    if (this.addMethod) {
      var retParams = {
        Paginador: this.paginador,
        Orden: this.lastSortField,
        searchValue: this.searchText.value
      }

      this.addMethod(retParams);
    } else {
      alert("add method not implemented");
    }
  }
}
