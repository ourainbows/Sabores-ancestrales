import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';
import Swal from "sweetalert2";
import { Router } from '@angular/router';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {

  toast = Swal.mixin({
    toast: true,
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    position: "bottom-end",
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  searchKeyup = new Subject<any>();
  show: boolean = false
  @Output() search = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    this.searchKeyup.pipe(debounceTime(500)).subscribe((search: string) => {
      console.log(search)
      this.search.emit(search)
    }), (err: any) => {
      this.toast.fire({
        title: 'Error en la busqueda',
      })
    }
  }

  OnSearch(search: any) {
    this.searchKeyup.next(search.target.value)
  }
}
