import { Component } from '@angular/core';
import { NoticiaService } from './services/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplicacion-Noticias';

  constructor(private noticiaService: NoticiaService) {

  }
  

  buscarNoticias(parametros:any){
    this.noticiaService.getNoticia(parametros).subscribe(data => {
      
    })
  }

}
