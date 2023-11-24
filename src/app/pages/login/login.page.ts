import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials: any;

  constructor( 
     private authService: AuthService,
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() { 
    this.credentials = this.fb.group({
    email: ['fischer@medien.ms', [Validators.required, Validators.email]],
    password: ['123456', Validators.required],
  });
  }

  async signUp() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.authService.signUp(this.credentials.value).then(async (data) => {
      await loading.dismiss();

      if (data.error) {
        this.showAlert('Registrierung fehlgeschlagen!', data.error.message);
      } else {
        this.showAlert('Die Anmeldung war erfolgreich!', 'Bitte bestätigen Sie Ihre E-Mail Adresse, schauen Sie in Ihr E-Mail Postfach.');
      }
    });
  }

  async login() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.authService.signIn(this.credentials.value).then(async (data) => {
      await loading.dismiss();

      if (data.error) {
        this.showAlert('Anmeldung fehlgeschlagen', data.error.message);
      } else {
        this.router.navigateByUrl('/captions', { replaceUrl: true });
       console.log('success on login ',data)
      }
    });
  }

  async showAlert(title, msg) {
    const alert = await this.alertController.create({
      header: title,
      message: msg,
      buttons: ['OK'],
    });
    await alert.present();
  }


}
