import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverConstructionStatus: string ='No server is constructed!';
  serverName: string ='';
  serverConstructed=false;
  servers=['Test server','Test server 2'];
  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },4000);
   }

  ngOnInit(): void {
  }
  onServerClick()
  {   this.serverConstructed=true;
    this.servers.push(this.serverName);
      return this.serverConstructionStatus = 'A NEW SERVER IS NOW CONSTRUCTED!'+"And its name is "+this.serverName;
  }

  onServerUpdate(event: Event)
  {
    this.serverName=(<HTMLInputElement>event.target).value;
  }

}
