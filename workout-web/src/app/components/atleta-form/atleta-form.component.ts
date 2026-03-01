import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AtletaService } from '../../services/atleta.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-atleta-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './atleta-form.component.html',
  styleUrl: './atleta-form.component.scss'
})
export class AtletaFormComponent {
  private fb = inject(FormBuilder);
  private atletaService = inject(AtletaService);
  public router = inject(Router);

  errorMessage = signal('');
  loading = signal(false);

  form = this.fb.group({
    nome: ['', [Validators.required, Validators.maxLength(50)]],
    cpf: ['', [Validators.required, Validators.maxLength(11)]],
    idade: [null, Validators.required],
    peso: [null, Validators.required],
    altura: [null, Validators.required],
    sexo: ['M', Validators.required],
    categoria: this.fb.group({ nome: ['Elite'] }),
    centro_treinamento: this.fb.group({ nome: ['CT M4 Strength'] })
  });

  async onSubmit() {
    if (this.form.valid) {
      this.loading.set(true); // Ativa o estado de carregamento
      this.errorMessage.set('');
      try {
        // Envia o POST para o FastAPI
        await this.atletaService.criar(this.form.value);
        this.router.navigate(['/']);
      } catch (error: any) {
        // Tratamento do erro 303 que configuramos no Backend
        if (error.status === 303) {
          this.errorMessage.set('Já existe um atleta cadastrado com este CPF.');
        } else {
          this.errorMessage.set('Erro ao conectar com o servidor Postgres 16.');
        }
      } finally {
        this.loading.set(false); // Desativa o carregamento
      }
    }
  }

  voltar() {
    this.router.navigate(['/']);
  }
}
