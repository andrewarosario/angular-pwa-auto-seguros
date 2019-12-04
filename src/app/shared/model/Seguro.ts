import { MarcaCarro } from './MarcaCarro';
import { Proprietario } from './Proprietario';
import { Foto } from './Foto';

export class Seguro {
  marcaCarro: MarcaCarro;
  modeloCarro: string;
  placaCarro: string;
  proprietario: Proprietario;
  fotos: Foto[];

  constructor() {
    this.proprietario = {} as Proprietario;
    this.fotos = [];
  }

  public get totalFotos() {
    return this.fotos.length;
  }
}
