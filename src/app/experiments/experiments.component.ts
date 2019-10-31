import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experimentItem: object[]=[];
   experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];

   constructor() { }

   ngOnInit() { }
   
   addExperiment(item: object){
    if (!this.experimentItem.includes(item) && (this.experimentItem.length<3) ){
     this.experimentItem.push(item);
    }
   }
   remove(item: object){
     let index=this.experimentItem.indexOf(item);
     this.experimentItem.splice(index,1);

   }

}
