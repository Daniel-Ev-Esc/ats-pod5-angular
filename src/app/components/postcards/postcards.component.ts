import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Type, Postcard } from '../../interfaces/postcard';
import { MatIcon } from '@angular/material/icon'
import { PostcardComponent } from './postcard/postcard.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-postcards',
  standalone: true,
  imports: [CommonModule, PostcardComponent, MatIcon, FormsModule],
  templateUrl: './postcards.component.html',
  styleUrl: './postcards.component.scss'
})
export class PostcardsComponent {

  
  postcards:Postcard[] = [
    {
      imageUrl:"",
      title:"The waves are high & beautiful",
      commenter:"Daniel",
      description:"An iceberg",
      type:Type.TRAVEL
    },
    {
      imageUrl:"",
      title:"At the beach in winter",
      commenter:"Daniel",
      description:"Lorem ipsum dolor the cat the watch the sand",
      type:Type.LIFESTYLE
    },
    {
      imageUrl:"",
      title:"5 tips to work better",
      commenter:"Daniel",
      description:"Lorem ipsum dolor",
      type:Type.BUSINESS
    },
    {
      imageUrl:"",
      title:"Chocolate cookie recipe",
      commenter:"Daniel",
      description:"Lorem ipsum dolor the cat the watch the sand",
      type:Type.FOOD
    },
    {
      imageUrl:"",
      title:"Benefits of ergonomic chairs",
      commenter:"Daniel",
      description:"Lorem ipsum dolor the cat the watch the sand",
      type:Type.WORK
    },
  ]


  filter: Type | null = null

  typeEnum = Type

  currentPostcard = 0
  modalCreate = false
  modalEdit = false
  modalDelete = false

  types = Object.values(Type).filter((x) => typeof(x) == typeof("p"))
  typesValues = Object.values(Type).filter((x)=> typeof(x) == typeof(2))

  ngOnInit(){
    const buttons = document.querySelectorAll(".filter-button")
    buttons.forEach( button => {
      button.addEventListener('click', ()=>{
        buttons.forEach(btn => btn.classList.remove('active'))

        button.classList.add('active')
      })
    })
  }

  changeCreatePostcard() {
    this.modalCreate=!this.modalCreate
  }

  changeEditPostcard(i:number){
    this.modalEdit = !this.modalEdit
    this.currentPostcard = i
    this.postcardDetails = this.postcards[i]
  }

  changeDeletePostcard(i:number){
    this.currentPostcard = i
    this.modalDelete = !this.modalDelete
  }

  changeFilter(_type:Type|null){
    this.filter = _type
  }

  postcardDetails:Postcard = {
    imageUrl: '',
    title: '',
    commenter: '',
    description: '',
    type:this.typeEnum.TRAVEL
  };

  submitCreateForm(arg0: any) {
      this.postcards.push(this.postcardDetails)
      this.modalCreate= !this.modalCreate

    }

  submitEditForm(arg0:any){
      this.postcards[this.currentPostcard] = this.postcardDetails
      this.postcards = [...this.postcards]
      this.changeEditPostcard(0)
  }

  deletePostcard() {
    this.postcards.splice(this.currentPostcard,1)

    this.changeDeletePostcard(0)
  }
}
