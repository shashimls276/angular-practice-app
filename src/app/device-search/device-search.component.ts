import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DeviceService } from '../service/device.service';

@Component( {
    selector: 'app-device-search',
    templateUrl: './device-search.component.html',
    styleUrls: ['./device-search.component.css']
} )
export class DeviceSearchComponent implements OnInit {

    constructor( private deviceService: DeviceService ) { }

    ngOnInit() {
    }

    deviceDetails: any;
    page: number = 1;

    onSubmit( form: NgForm ) {
        this.deviceService.getDevice( form.value ).subscribe( data => {
            this.deviceDetails = data;
        } );
        console.log( this.deviceDetails );
    }

    resetForm(form: NgForm){
        form.reset();
    }

}
