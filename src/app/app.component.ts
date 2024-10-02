import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReproductorMusicaComponent } from './components/reproductor-musica/reproductor-musica.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReproductorMusicaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reproductor';
}
