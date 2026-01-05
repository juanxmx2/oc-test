import { Directive, input, signal } from '@angular/core';
import { COMPONENT_LIST } from '../const/components-list';
import { ComponentInfo } from '../static/data';

@Directive({ selector: '[dynamics]' })
export class DynamicsDirective{
    component = input.required<ComponentInfo>();
    componentList = signal(COMPONENT_LIST);

    //implement logic to render dynamic components here

}
