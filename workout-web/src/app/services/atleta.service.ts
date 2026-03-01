import { inject, Injectable, signal } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtletaService {
  private http = inject(HttpClient);
  private readonly API_URL = 'http://localhost:8000/atletas/';

  // Usamos um Signal para gerenciar o estado dos atletas (Zoneless)
  listaAtletas = signal<any[]>([]);

  totalPaginas = signal(0);
  paginaAtual = signal(1);

  async listar(nome?: string, page = 1, size = 10) {
    let params = new HttpParams().set('page', page).set('size', size);
    if (nome) params = params.set('nome', nome);

    try {
      const response = await firstValueFrom(this.http.get<any>(this.API_URL, { params }));

      // Atualiza os dados e os metadados da paginação
      this.listaAtletas.set(response.items);
      this.totalPaginas.set(Math.ceil(response.total / response.size));
      this.paginaAtual.set(response.page);

      return response;
    } catch (error) {
      console.error('Erro na API:', error);
      throw error;
    }
  }

  async criar(atleta: any) {
  try {
    // Realiza o POST para o endpoint que configuramos no FastAPI
    const response = await firstValueFrom(
      this.http.post<any>(this.API_URL, atleta)
    );

    // Após criar, podemos limpar a lista local ou forçar uma atualização
    await this.listar();

    return response;
  } catch (error) {
    // O erro será capturado pelo 'try/catch' do componente de formulário
    throw error;
  }
}
}
