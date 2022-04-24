import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  dataSource : any;
  id : any;
  name : any;
  personalInfo : any;
  inStock : any;
  editObj : any;

  @ViewChild('btnShow')
  btnShow!: ElementRef;
  @ViewChild('btnClose')
  btnClose!: ElementRef;



  constructor(private store: AngularFirestore){
    
  }

  ngOnInit(){
    this.getAll();
  }

  openDialog(){
    this.btnShow.nativeElement.click();
  }

  closeDialog(){
    this.btnClose.nativeElement.click();
  }

  clearEdit(){
    this.editObj = null;
    this.name = "";
    this.personalInfo = "";
  }

  add(){
    if(this.editObj){
      this.store.collection('/user').doc(this.editObj.id).update({name : this.name, personalInfo : this.personalInfo});
    } else {
      this.store.collection('/user').add({name : this.name, personalInfo : this.personalInfo});
    }
    this.closeDialog();
  }

  edit(id : string){
    this.store.collection('/user').doc(id).get().subscribe((response) => {
      this.editObj = Object.assign({id : response.id}, response.data());
      this.name = this.editObj.name;
      this.personalInfo = this.editObj.personalInfo;
      this.openDialog();
    })
  }

  delete(id : string){
    this.store.collection('/user').doc(id).delete();
  }

  getAll(){
    this.store.collection('/user').snapshotChanges().subscribe((response) => {
      this.dataSource = response.map(item => {
        return Object.assign({id : item.payload.doc.id}, item.payload.doc.data())
      });
    })
  }
}
