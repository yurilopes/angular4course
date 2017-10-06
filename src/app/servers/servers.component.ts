import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: 'servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  totalServers: number = 0;
  serverCreationStatus: string = 'No server was created.';
  serverName: string = '';
  serverCreated: boolean = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer(){
    if(this.serverName == '')
      return;
    this.totalServers++;
    this.serverCreated = true;
    this.serverCreationStatus = 'Server \'' + this.serverName + '\' was created.' + 'Total servers: '+this.totalServers;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
