import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit{
  dataSource : any;
  id : any;
  name : any;
  price : any;
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
    this.price = "";
    this.inStock = false;
  }

  add(){
    if(this.editObj){
      this.store.collection('/product').doc(this.editObj.id).update({name : this.name, price : this.price, inStock: this.inStock});
    } else {
      this.store.collection('/product').add({name : this.name, price : this.price, inStock: this.inStock});
    }
    this.closeDialog();
  }

  edit(id : string){
    this.store.collection('/product').doc(id).get().subscribe((response) => {
      this.editObj = Object.assign({id : response.id}, response.data());
      this.name = this.editObj.name;
      this.price = this.editObj.price;
      this.inStock = this.editObj.inStock;
      this.openDialog();
    })
  }

  delete(id : string){
    this.store.collection('/product').doc(id).delete();
  }

  getAll(){
    this.store.collection('/product').snapshotChanges().subscribe((response) => {
      this.dataSource = response.map(item => {
        return Object.assign({id : item.payload.doc.id}, item.payload.doc.data())
      });
    })
  }
}
