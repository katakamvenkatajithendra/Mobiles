import { Component } from '@angular/core';
import { MobiledataService } from './mobiledata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private ms:MobiledataService){

  }
  mobiles:any=null;
  Formname:any=null;
  showform:any=false;
  fullform:any=false;

  ngOnInit():void{
    this.getdata();

  }
  getdata(){
    this.ms.getdata().subscribe((data)=>{
      this.mobiles=data;
    },
    (err)=>{
      console.log(err);
    }
    )
  }
  addmobile(){
    this.fullform=true;
    this.Formname="AddForm"
  }
  editform(){
    this.fullform=true;
    this.Formname="EditForm";
  }
  close(){
    this.fullform=false;
  }
  save(){
    this.fullform=false;
  }
  




  delete(id:number){
    this.ms.deletemobile(id).subscribe(()=>{
      this.getdata();
    })
  }
}
