import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'

})

export class ServerComponent {
    private serverId: number = 10;
    public serverStatus: string = 'offline';

    getServerId():number {
        return this.serverId;
    }

    getServerStatus(): string {
        return this.serverStatus;
    }
}