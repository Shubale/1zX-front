import { Component } from '@angular/core';
import { Socket } from 'socket.io'
import {io} from 'socket.io-client';
import Contestant from './Contestant.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private socket = io('http://localhost:3000');
	public contestantList: Contestant[] = [];
	constructor() {
		this.socket.on('connect', () => {
			console.log('Connected to socket');
		})
		this.socket.on('contestants', (contestants) => {
			console.log('Updating', contestants);
			this.contestantList = contestants;
		})
		

	}
  title = '1z8-front';
}
