export class Card {
  public header: string;
  public text: string;
  public imagePath: string;


  constructor(header: string, text: string, imagePath: string) {
    this.header = header;
    this.text = text;
    this.imagePath = imagePath;
  }
}