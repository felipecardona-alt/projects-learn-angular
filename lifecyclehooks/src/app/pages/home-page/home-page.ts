import { afterEveryRender, afterNextRender, Component, effect, OnChanges, OnDestroy, OnInit, signal } from '@angular/core';
import { Title } from "../../component/title/title";

const log = (...messages:string[]) => {
  console.log(`${messages[0] } %c${messages.slice(1).join(' ')}`, 'color: #17cf30ff; font-weight: bold;');
}

@Component({
  selector: 'home-page',
  imports: [Title],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage implements OnInit, OnChanges, OnDestroy{

  traditionalProperty = 'Felipe';
  signalProperty = signal('Felipe');

  changeTraditional() {
    this.traditionalProperty = 'Felipe Cardona';
  }

  changeSignal() {
    this.signalProperty.set('Felipe Cardona');
  }


  constructor() {
    console.log('Constructor  llamado');

/*     setTimeout(() => {
      this.changeSignal();
      this.changeTraditional();
      console.log('Traditional property changed hecho');
    }, 1000); */
  }

  basicEffect = effect((onCleanup) => {
    log('Effect','Runs once when created and then every time any reactive dependency changes.');

    onCleanup(() => {
      log('Effect Cleanup','Runs before the effect re-runs or when the component is destroyed.');
    });
  });

  ngOnDestroy(): void {
    log('NgOnDestroy','Runs just before Angular destroys the component.');
  }
  ngOnInit() {
    log('NgOnInit','Runs once after Angular has initialized all the component\'s inputs.');
  }
  ngOnChanges(){
    log('NgOnChanges','Runs every time the component\'s inputs have changed.');
  }
  ngDoCheck(){
    log('NgDoCheck','Runs every time this component is checked for changes.');
  }
  ngAfterContentInit(){
    log('NgAfterContentInit','Runs once after the component\'s content has been initialized.');
  }
  ngAfterContentChecked(){
    log('NgAfterContentChecked','Runs every time this component content has been checked for changes.');
  }
  ngAfterViewInit(){
    log('NgAfterViewInit','Runs once after the component\'s view has been initialized.');
  }
  ngAfterViewChecked(){
    log('NgAfterViewChecked','Runs every time the component\'s view has been checked for changes.');
  }

  afterNextRenderEffect = afterNextRender(() => {
    log('afterNextRender','Runs after the next render of the component.');
  });

  afterRenderEffect = afterEveryRender(() => {
    log('afterEveryRender','Runs after every render of the component.');
  });
}
