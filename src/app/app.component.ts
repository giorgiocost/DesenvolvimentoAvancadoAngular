import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'projeto';

  ngOnInit(): void {
    // this.minhaPromise('Giorgio')
    // .then(result => {
    //   console.log(result);
    // });

    // this.minhaPromise('Pedro')
    // .then(result => console.log(result))
    // .catch(err => console.error(err));

    // this.minhaObservable('Giorgio').subscribe(result => {
    //   console.log(result)
    // },
    // err => console.error(err),
    // );

    const observer = {
      next: valor => console.log('Next: ' , valor),
      error: err => console.error('Error: ' + err),
      complete: () => console.warn('Complete !')
    }

    // const obs = this.minhaObservable('Giorgio');

    // obs.subscribe(observer);

    const obsUsuario = this.usuarioObservable('giorgio', 'giorgio');
    const subs = obsUsuario.subscribe(observer);

    setTimeout(() => {
      subs.unsubscribe();
      console.log('conexão fechada: ',subs.closed);
    }, 3500);

  }

  minhaPromise(nome: string ): Promise<string> {
    return  new Promise((resolve, reject) => {
      if( nome === 'Giorgio'){
        setTimeout(() => {
          resolve('seja bem vindo ' + nome);
        },1000);
      }else {
        reject('ops ! você não é o Giorgio');
      }
    })
  }

  minhaObservable(nome: string): Observable<string > {
    return new Observable(subscriber => {
      if(nome === 'Giorgio'){
        subscriber.next('Olá !'+ nome);
        subscriber.next('Olá de novo '+ nome);
        setTimeout(() => {
          subscriber.next('Resposta com delay ' + nome);
        },1000);
        subscriber.complete();
      }else{
          subscriber.error('Ops ! deu erro');
      }
      })
  }

  usuarioObservable(nome: string, email: string): Observable<Usuario > {
    return new Observable(subscriber => {
      if(nome === 'giorgio'){
        let usuario = new Usuario(nome, email);
        
        setTimeout(() => {
          subscriber.next(usuario);
        },1000);

        setTimeout(() => {
          subscriber.next(usuario);
        },2000);

        setTimeout(() => {
          subscriber.next(usuario);
        },3000);

        setTimeout(() => {
          subscriber.next(usuario);
        },4000);

        setTimeout(() => {
          subscriber.complete();
        },5000);
        
      }else{
          subscriber.error('Ops ! deu erro');
      }
      })
  }
  

}

export class Usuario {

  constructor(private nome: string, private email: string){
    this.nome = nome;
    this.nome = email;
  }
}
