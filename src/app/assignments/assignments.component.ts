import { Component, OnInit } from '@angular/core';
import { Assignment } from './assignments.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {

  titre = "Mon application sur les Assignments !"
  ajoutActive = false;
  nomDevoir : string = "";
  dateDeRendu: Date = new Date();

  ngOnInit(): void {
    setTimeout(() => {
      this.ajoutActive = true;
    }, 2000);
  }
  onSubmit() {
    const newAssignments = new Assignment();
    newAssignments.nom = this.nomDevoir;
    newAssignments.dateDeRendu = this.dateDeRendu;
    newAssignments.rendu = false;

    this.assignments.push(newAssignments);
  }

  assignments:Assignment[] = [
    {
      nom: "Devoir Angular à rendre",
      dateDeRendu: new Date("2021-05-01"),
      rendu: false
    },
    {
      nom: "Devoir Java à rendre",
      dateDeRendu: new Date("2021-05-08"),
      rendu: true
    },
    {
      nom: "Devoir C# à rendre",
      dateDeRendu: new Date("2021-05-21"),
      rendu: false
    }
  ];

  constructor() { }

}