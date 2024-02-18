import { Injectable } from '@angular/core';


export interface Appointment{
  title:string,
  date:string,
  id:string
}

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  appointments:Appointment[]
  count =0
  constructor() { 
    this.appointments=[]
  }

  addAppointment(appointment:Appointment){
    const newAppointment = {
      ...appointment,
      id:this.count++ + ""
    }
    this.appointments?.push(newAppointment)
  }

  deleteAppointment(id:string,index:number){
    this.appointments.splice(index,1)
  }
}
