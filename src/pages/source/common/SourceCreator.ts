import {SourceType} from './SourceType';

export interface SourceCreator{
  name:string;
  source:string;
  type:SourceType;
  description:string;
}

export interface SourceTransfer extends SourceCreator{
  id:string;
}

export interface SourceQuery extends SourceTransfer{
  createdTime:Date;
}
