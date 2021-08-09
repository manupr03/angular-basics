import { Component } from '@angular/core'

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})

export class ServerComponent{
    serverId:number = 10;
    serverStatus:string = 'offline';
    allowNewServer = false
    serverCreationStatus = 'No server was created..'
    ServerName ='TestServer'
    ServerCreated = false

    constructor(){
        setTimeout(()=>{
            this.allowNewServer = true
        },2000)
    }

    getServerStatus(){
      return this.serverStatus  
    }

    onCreateServer(){
        this.ServerCreated = true 
        this.serverCreationStatus = 'server was created Name is :' + this.ServerName
    }

    onUpdateServer(event:Event){
        this.ServerName = (<HTMLInputElement>event.target).value
    }

}