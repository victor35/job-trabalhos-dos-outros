import { Component, OnInit } from '@angular/core';
import { produtos } from 'src/constants/articles';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  displayedColumns: any = ['foto','marca','produto',
  'tipo','cor','preco','descricao','destaque','operacoes']
  
  dataSource = produtos;
 
  constructor() { }

  ngOnInit(): void {
  }

}
