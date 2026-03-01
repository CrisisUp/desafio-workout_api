import { Component, inject, OnInit, signal } from '@angular/core';
import { AtletaService } from '../../services/atleta.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atleta-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './atleta-list.component.html',
  styleUrl: './atleta-list.component.scss'
})
export class AtletaListComponent implements OnInit {
  public atletaService = inject(AtletaService);
  public router = inject(Router);
  // Signals para gerenciar estado local
  loading = signal(true);
  atletas = this.atletaService.listaAtletas; // Conecta ao Signal do Service

  ngOnInit() {
    this.carregarDados();
  }

  async carregarDados() {
    this.loading.set(true);
    try {
      await this.atletaService.listar();
      console.log('Lista atualizada:', this.atletaService.listaAtletas());
    } finally {
      this.loading.set(false);
    }
  }

  filtroNome = signal('');

  async filtrar() {
    this.loading.set(true);
    try {
      // Passamos o valor do signal de filtro para o serviço
      await this.atletaService.listar(this.filtroNome());
    } finally {
      this.loading.set(false);
    }
  }

  async mudarPagina(novaPagina: number) {
    this.loading.set(true);
    try {
      // Mantém o filtro de nome atual se existir
      await this.atletaService.listar(this.filtroNome(), novaPagina);
    } finally {
      this.loading.set(false);
    }
  }
}
