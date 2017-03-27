import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component ({
    templateUrl: 'modal2.html',
})

export class ModalPage2 {

  meetings2: any;

  date: Date;

    constructor(public navCtrl: NavController, public viewCtrl: ViewController){

        this.date = new Date()

        this.meetings2 = [
        { 
        meeting: 'Sprint Meeting',
        ago: 1,
        starttime: 9.15,
        endtime: 10.45,
        image: '../img/businessevent.jpg',
        description: 'Having meeting about what we have done so far and what we are going to do next for the project.'
        },
        { 
        meeting: 'Product Presentation',
        ago: 3,
        starttime: 12.15,
        endtime: 16.35,
        image: '../img/businessevent.jpg',
        description: 'Giving information about the product and show casing a small demo of the project.'
        },
        { 
        meeting: 'Team Meeting',
        ago: 4,
        starttime: 18.15,
        endtime: 18.45,
        image: '../img/businessevent.jpg',
        description: 'Small meeting with project team where we discuss about the current state of the project.'
        },
        { 
        meeting: 'Job Conference',
        ago: 6,
        starttime: 19.45,
        endtime: 20.45,
        image: '../img/businessevent.jpg',
        description: 'Various companies are gathered to present their work and offering some job opportunities.'
        }
        ];

    }

    closeModal2(){

        this.viewCtrl.dismiss();

    }

}