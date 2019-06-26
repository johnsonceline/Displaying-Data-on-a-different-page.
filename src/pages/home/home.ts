import { Component } from '@angular/core';
import { NavController,ToastController  } from 'ionic-angular';
import { SecondPage } from '../second/second';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

name:string ="";
surname: string ="";
age: Date = new Date() ;

text: any;
  constructor(public navCtrl: NavController,public toastController: ToastController) {

  }
    
  launchSecondPage() {
if(this.name ==""){
  const toast = this.toastController.create({
    message: 'Name cannot be empty',
    duration: 2000
  });
  toast.present();
}else if(this.surname ==""){
  const toast = this.toastController.create({
    message: 'Surname cannot be empty',
    duration: 2000
  });
  toast.present();
}else if(this.age.getDate){
  const toast = this.toastController.create({
    message: 'DOB cannot be empty',
    duration: 2000
  });
  toast.present();
}
else
{
  this.text = this.name + ' '+ this.surname +' ' + ' Born  '+ this.age; 
    this.navCtrl.push(SecondPage,{
      data:this.text

    });
}

  
}

}
  


