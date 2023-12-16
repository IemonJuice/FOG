import {Component} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  currentTheme: string = 'nvidia';
  isBurgerVisible: boolean = false;


  changeCurrentTheme(): void {
    this.currentTheme === 'nvidia' ? this.currentTheme = 'AMD' : this.currentTheme = "nvidia";
  }

  changeBurgerVisibilityToOpposite(): void  {
    this.isBurgerVisible = !this.isBurgerVisible;
  }
}
