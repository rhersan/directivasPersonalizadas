import { Directive, Input, TemplateRef, ViewChildrenDecorator, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {

  @Input() set costomIf( condicion: boolean){
    if ( condicion )
    {
      this.viewContainer.createEmbeddedView( this.templateRef);

    }else{
      this.viewContainer.clear();
    }
  }

  constructor(
      private templateRef: TemplateRef<HTMLElement>,
      private viewContainer: ViewContainerRef
  ) {

   }

}
