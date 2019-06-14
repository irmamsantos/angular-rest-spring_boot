import { FuncionarioService } from './funcionario.service';
import { Component, OnInit } from '@angular/core';

type NewType = FuncionarioService;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  funcionarios = [];

  constructor(private funcionarioService: NewType) {  }

  ngOnInit() {
    this.funcionarios = this.funcionarioService.consultar();
  }

}
