import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lives-indicator',
  templateUrl: './lives-indicator.component.html',
  styleUrls: ['./lives-indicator.component.scss']
})
export class LivesIndicatorComponent {
	constructor() {
		console.log('Am I first?', this.first);
	}

	@Input()
	public live: boolean = false;

	@Input()
	public last: boolean = false;

	@Input()
	public first: boolean = false;
}
