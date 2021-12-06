import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { HistoriaService } from '../historias/shared/historia.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  
  private apiBase: string = environment.apiBase;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    
   
    
  }
  signOut(){
    this.router.navigate([``]);
  }
  
}