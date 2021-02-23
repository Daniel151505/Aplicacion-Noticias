import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplicacion-Noticias';
  listarNoticia: any[]= []
  loading=false
  constructor(private noticiaService: NoticiaService) {

  }
  

  buscarNoticias(parametros:any){
    this.loading=true
    this.listarNoticia = []

    setTimeout(() => {
       this.noticiaService.getNoticia(parametros).subscribe(data => {
      this.loading= false
      this.listarNoticia = data.articles
    }), error => {
      console.log(error)
      this.loading = false
    }
    }, 2000);

   
  }

}
