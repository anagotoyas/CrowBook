import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HistoriaService } from '../shared/historia.service';
import { UsuarioService } from '../../perfiles/shared/usuario.service';//Donacion
import { Historia } from '../shared/historia.model';
import { MatTableDataSource } from '@angular/material/table';
import { CapituloService } from '../../capitulos/shared/capitulo.service';
import { Resena } from '../shared/resena.model';
import { ResenaService } from '../shared/resena.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../shared/modal/modal.component';
//
import { Donacion } from '../shared/donacion.model';
import { DonacionService } from '../shared/donacion.service';
@Component({
  selector: 'app-ver-historia',
  templateUrl: './ver-historia.component.html',
  styleUrls: ['./ver-historia.component.css']
})
export class VerHistoriaComponent implements OnInit {
  @Input() resena: Resena = new Resena();
  dataSource: Historia;
  nombreCategoria: any;
  capitulo: any;
  user: any;
  idResena: any;
  idHistoria: any;
  listaResenas: Resena[];
  displayedColumns: string[] = ['id', 'nombre','visualizar'];
  dataSource2: MatTableDataSource<Historia>;
  id4MODAL: any;

  constructor(
    private historiaService: HistoriaService,
    private usuarioService: UsuarioService,//Donacion
    private capituloService: CapituloService,
    private resenaService: ResenaService,
    private activeRoute: ActivatedRoute,
    public dialog: MatDialog,
    private router: Router,
    private donacionService: DonacionService) { }
    //CLOSE

  //DONAR_CROWCOINS
    donarCrowcoins(donacion: Donacion){
      this.donacionService.donarCrowcoins(donacion).subscribe(
        ()=>{
          this.router.navigate(['user/historias/listar-historia'])
        },
        (error: any)=> {}
      )
    }

  //capitulo =new C();
  //public prueba: Array<any> = [];

  ngOnInit(): void {
    this.getInfoHistoria();
    this.getResenaPorIdHistoria();
  
  }

  getInfoHistoria(){

    this.capituloService.test();
    const params = this.activeRoute.snapshot.params;
    if (params['idx']) {
      this.usuarioService.getidUsuarioPorIdHistoria(params['idx']).subscribe((data:any) => {
        this.id4MODAL = data['body'],
        console.log(params['idx']),
        console.log(this.id4MODAL)
      });
        
      this.historiaService.getHistoriaPorId(params['idx']).subscribe((data:any) => {
        this.dataSource = data['body'];
        this.nombreCategoria = this.dataSource.categoria;
        //this.id4MODAL = this.dataSource.usuario;//DONACION
        this.user = this.dataSource.usuario;
      }
      );
      this.capituloService.getAllCapitulos(params['idx']).subscribe((data: any) =>{
        this.dataSource2 = new MatTableDataSource(data['body']);
        //console.log(data); Obtener caps
      });      
    }  

  }

  getResenaPorIdHistoria(){
    const params = this.activeRoute.snapshot.params;

    this.resenaService.getResenaPorIdHistoria(params['idx']).subscribe((data:any)=>{
      this.listaResenas=data['body'];

    });
  }

  openModal(): void{
    const params = this.activeRoute.snapshot.params;
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '330px',
     
      data: this.id4MODAL
      
    });
    dialogRef.afterClosed().subscribe(data => {
      console.log(data);
    });
  }

  deleteResena(idResena:number){
    //console.log(idResena)
    const ok = confirm('¿Estás seguro de eliminar la Resena?');
    if(ok){
      this.resenaService.deleteResena(idResena).subscribe(()=> {
        this.getResenaPorIdHistoria();
        window.location.reload();
      });
    }
  }
  getInfoResena(idResena: any){
    this.resena = new Resena();
    this.resenaService.getResenaPorId(idResena)
    
      .subscribe(data => {
      //  console.log(data)
      //  console.log(idResena);
        this.resena = data;
        this.idResena=data['idResena'];
        
      }, error => console.log(error));
    }
  
    agregarBiblioteca(){
      const params = this.activeRoute.snapshot.params;
      this.historiaService.getHistoriaPorId(params['idx']).subscribe((data:any) => {
      this.dataSource = data['body'];
      const ok = confirm('¿Estás seguro de agregar esta historia a tu biblioteca?');
      if(ok){
        this.historiaService.agregarABiblioteca(Number(sessionStorage.getItem('idUsuario')),params['idx'] ).subscribe(()=>{
         
        })
      }
          
        });
    
    }
       
    agregarFavorito(){
    const params = this.activeRoute.snapshot.params;
    this.historiaService.getHistoriaPorId(params['idx']).subscribe((data:any) => {
    this.dataSource = data['body'];
    const ok = confirm('¿Estás seguro de agregar esta historia a tus Favoritos?');
    if(ok){
      this.historiaService.agregarAFavorito(Number(sessionStorage.getItem('idUsuario')),params['idx'] ).subscribe(()=>{
       
      })
    }
        
      });
}
     
  
    
}
   
