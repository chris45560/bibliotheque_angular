import {Component} from '@angular/core';
import * as firebase from 'firebase';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'bookshelves';

    constructor() {
        const config = {
            apiKey: 'AIzaSyBgnN0QIxQj-ZlTrYtpobnRktT7kHW9eEI',
            authDomain: 'bookshelves-de362.firebaseapp.com',
            databaseURL: 'https://bookshelves-de362.firebaseio.com',
            projectId: 'bookshelves-de362',
            storageBucket: 'bookshelves-de362.appspot.com',
            messagingSenderId: '542640883613'
        };
        firebase.initializeApp(config);
    }
}
