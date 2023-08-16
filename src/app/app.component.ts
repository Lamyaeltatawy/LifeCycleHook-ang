import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'ang-structure';
  toggle = false;
  lamya = 'lamya;';
  ngOnInit(): void {
    setInterval(() => {
      this.lamya = Math.random() > 0.5 ? 'nada' : 'bavly';
    }, 10000);
  }
}
