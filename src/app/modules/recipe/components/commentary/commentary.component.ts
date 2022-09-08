import { Commentary } from './../../../../shared/models/recipe.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { last, map, mergeMap, Observable } from 'rxjs';

@Component({
  selector: 'app-commentary',
  templateUrl: './commentary.component.html',
  styleUrls: ['./commentary.component.scss'],
})
export class CommentaryComponent implements OnInit {
  today = new Date();

  newComment: Commentary = {
    user: 'Chef Teste',
    comment: '',
    photoUser:
      'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hlZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    photoRecipe: '',
    date: `${this.today.getFullYear()}-${this.today.getMonth()}-${this.today.getDate()}`,
    likes: [],
    userId: 1, // temporary
  };
  imageSrc: any = '';

  @Output() newCommentEvent = new EventEmitter<Commentary>();

  createNewComment() {
    if (this.imageSrc) {
      this.uploadImage(this.imageSrc).subscribe((url) => {
        this.newCommentEvent.emit({...this.newComment, photoRecipe: url});
        this.clearComment();
      });
    }
    else {
      this.newCommentEvent.emit(this.newComment);
      this.clearComment();
    }
  }

  clearComment() {
    this.newComment = {
      user: '',
      comment: '',
      photoUser: '',
      photoRecipe: '',
      date: `${this.today.getFullYear()}-${this.today.getMonth()}-${this.today.getDate()}`,
      likes: [],
      userId: 1, // temporary
    };
  }



  readURL(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.imageSrc = file;
    }
  }
  uploadImage(fileUpload: any) {
    const filePath = `/images/${fileUpload.name}-${Math.random()}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload);

    return <Observable<string>>uploadTask.snapshotChanges().pipe(
      last(),
      mergeMap(() => {
        return storageRef.getDownloadURL().pipe(map((url) => url));
      })
    );
  }
  constructor(private storage: AngularFireStorage) {}

  ngOnInit(): void {}
}
