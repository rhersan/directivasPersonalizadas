import { Directive, OnInit, ElementRef, Input, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { style } from '@angular/animations';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color  : string = 'red';
  private _mensaje: string = 'Este campo es requerido';

  htmlElement: ElementRef<HTMLElement>;

  @Input() set color( valor: string){
    this.color = valor;
    this.setColor();
  } 

  @Input() set mensaje( valor: string){
    this._mensaje = valor;
    this.setMsg();
  }

  @Input() set valido( valor: boolean ){
    (valor)
    ?
      this.htmlElement.nativeElement.className = 'hiden-msg'
    :
      this.htmlElement.nativeElement.className = 'show-msg'
    ;
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement =  el;
   }
  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
    // console.log(this.color);
    // console.log(this.mensaje);
    
    this.setEstilo();
    this.setColor();
    this.setMsg();
  }

  setEstilo():void{
    this.htmlElement.nativeElement.classList.add('form-text');
  }


  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;

  }

  setMsg(): void{
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }

}
