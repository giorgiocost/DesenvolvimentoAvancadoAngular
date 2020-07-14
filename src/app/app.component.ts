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
      next: valor => console.log('Next: ' +valor),
      error: err => console.error('Error: ' +err),
      complete: () => console.warn('Complete !')
    }

    const obs = this.minhaObservable('Giorgio');

    obs.subscribe(observer);

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
  

}
