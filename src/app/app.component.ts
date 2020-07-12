import { Component, OnInit } from '@angular/core';

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

    this.minhaPromise('Pedro')
    .then(result => console.log(result))
    .catch(err => console.error(err));
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


}
