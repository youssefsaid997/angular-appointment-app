import { Component } from '@angular/core';
import { Appointment, AppointmentService } from 'src/app/services/appointment.service';

interface TableHeaders{
  id:string,
  title:string,
  date:string,
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  tableHeaders={
    id:"id",
    title:"title",
    date:"Date",
  }
  appointments?:Appointment[]

  constructor(private appointmentService:AppointmentService){}
  ngOnInit(){
    this.appointments = this.appointmentService.appointments
  }

  getTableHeaders(tableHeaders:TableHeaders){
    return Object.values(tableHeaders)
  }

  onDelete(id:any,index:number){
    // this.appointments?.splice(index,1)
    this.appointmentService.deleteAppointment(id,index)
  }

}
