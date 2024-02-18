import { Component } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  appointmentTitle:string=""
  appointmentDate:string=""

  constructor(private appointmentService:AppointmentService){}


  onSubmit(event:Event){
    event.preventDefault()
    if(!this.appointmentTitle.length || !this.appointmentDate.length){
      throw "inputs are empty"
    }
    const appointment = {
      title:this.appointmentTitle,
      date:this.appointmentDate,
      id:""
    }
    this.appointmentService.addAppointment(appointment)
    console.log(appointment);

  }

}
