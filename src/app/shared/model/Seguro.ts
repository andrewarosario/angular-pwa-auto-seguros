import { MarcaCarro } from './MarcaCarro';
import { Proprietario } from './Proprietario';

export class Seguro {
  marcaCarro: MarcaCarro;
  modeloCarro: string;
  placaCarro: string;
  proprietario: Proprietario;

  constructor() {
    this.proprietario = {} as Proprietario;
  }
}
