import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import user from './user.json';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'my-angular-app';
  users = user;

  editUser(user: any) {
    // Logic to handle edit action, for example, redirecting to an edit page
    console.log('Editing user:', user);
    (<HTMLInputElement>document.getElementById('name')).value = user.name;
    (<HTMLInputElement>document.getElementById('email')).value = user.email;
    (<HTMLInputElement>document.getElementById('City')).value = user.city;
    (<HTMLInputElement>document.getElementById('zip')).value = user.zip;
    (<HTMLInputElement>document.getElementById('age')).value = user.age;
    // Add your logic here, for example, redirecting to edit page with user id
    // this.router.navigate(['/edit-user', user.id]);
    //AJAX call to get user asp api
    // fetch('https://localhost:44390/api/user/' + user.id).then(response => {
    //   return response.json();
    // }).then(data => {
    //   console.log(data);
    // }).catch(err => {
    //   console.log(err);
    // });
  }

  deleteUser(user: any) {
    // Logic to handle edit action, for example, redirecting to an edit page
    console.log('Deleting user:', user);
    // Add your logic here, for example, redirecting to edit page with user id
    // this.router.navigate(['/edit-user', user.id]);
    //AJAX call to delete user asp api
  }

  saveUser() {
    // Logic to handle edit action, for example, redirecting to an edit page
    let name = (<HTMLInputElement>document.getElementById('name')).value;
    let email = (<HTMLInputElement>document.getElementById('email')).value;
    let city = (<HTMLInputElement>document.getElementById('City')).value;
    let zip = (<HTMLInputElement>document.getElementById('zip')).value;
    let age = (<HTMLInputElement>document.getElementById('age')).value;
  
    let obj = {
      "name": name,
      "email": email,
      "city": city,
      "zip": zip,
      "age": age
    }

    console.log('Save user:', obj);
    // Add your logic here, for example, redirecting to edit page with user id
    // this.router.navigate(['/edit-user', user.id]);
    //AJAX call to delete user asp api
  }

}
