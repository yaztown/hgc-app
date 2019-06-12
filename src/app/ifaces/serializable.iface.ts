import { Type } from '@angular/core';

export interface Serializable {
  _type: string;
  value: any;
  component?: Type<any>;
}
