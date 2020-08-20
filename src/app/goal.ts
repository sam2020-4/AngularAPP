export class Goal {
    // id: number;
    // name: string;
    // description: string;

    // displaying ouput binding tuesday content
    // showDescription: boolean;
    // constructor(public id: number,public name: string,public description: string){
    //   this.showDescription=false;
    // }

    // pipes
    public showDescription: boolean;
    constructor(public id: number,public name: string,public description: string, public completeDate: Date){
    this.showDescription=false;
  }
}
