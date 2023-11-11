import { Component, OnInit } from '@angular/core';
import {
  LoadingController,
  ModalController,
  ToastController,
} from '@ionic/angular';
import {
  Stripe,
  StripeCardElementOptions,
  StripeElements,
  loadStripe,
} from '@stripe/stripe-js';
import { Functions, getFunctions, httpsCallable } from 'firebase/functions';
import * as axios from "axios";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit {
  stripe: Stripe | null = null;
  cardElement: any;
  cardComplete: boolean = false;
  functions: Functions = getFunctions();
  customerId:string="";
  cardId:string="";
  email:string="";
  name:string="";
  address:string="";
  postal_code:string="";
  city:string="";
  country:string="";
  customer:any;

  constructor(
    private modalController: ModalController,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.load();
  }

  return() {
    this.modalController.dismiss();
  }

  test(){
    console.log(this.email);
    console.log(this.address);
    console.log(this.postal_code);
    console.log(this.city);
    console.log(this.name);
  }

  async load() {
    this.stripe = await loadStripe(
      'pk_live_51OB2nhKZmYCKxjedqdZQTCmbwPAxXg2LxOKAsQhbqv5djj4Fc8PJ3vbSJZdyuRTIRyGfSPjyXObcSIcSj4Ie1Utf00DXdpJZZO'
    );
    const cardElementOptions: StripeCardElementOptions = {
      // Set your desired options for the Card Element
      // For example:
      style: {
        base: {
          fontFamily: 'Roboto, sans-serif',
          fontSize: '16px',
          color: '#333333',
        },
      },
      hidePostalCode: false,
    };

    this.cardElement = this.stripe
      ?.elements()
      .create('card', cardElementOptions);
    this.cardElement?.mount('#card-element');
    this.cardElement.on('change', (event: any) => {
      this.cardComplete = event.complete;
    });
  }

  async createToken() {
    const loading = await this.loadingController.create();
    loading.present();
    const token = await this.stripe?.createToken(this.cardElement);
    



    const createCard = httpsCallable(this.functions, 'createCardStripe');
    createCard({ 
      token: token?.token?.id,
      email:this.email,
      name:this.name,
      address:{
        city:this.city,
        postal_code:this.postal_code,
        country:this.country,
        line1:this.address
      }
     })
      .then(async (data: any) => {
        console.log(data);
        console.log(data.data)
        this.customerId = data.data.customer.id;
        this.cardId = data.data.sourceData.id;
        loading.dismiss();
        if (data.data.statusCode === 402) {
          const toast = await this.toastController.create({
            message: 'Carte refusée',
            duration: 2000,
            color: 'danger',
            position: 'top',
            cssClass: 'text-xl text-center',
          });
          toast.present();
        }
      })
      .catch(async (e) => {
        const toast = await this.toastController.create({
          message: 'Carte refusée',
          duration: 2000,
          color: 'danger',
          position: 'top',
          cssClass: 'text-xl text-center',
        });
        toast.present();
        loading.dismiss();
      });
  }



  async pay() {

    const pay = httpsCallable(this.functions, 'newPayment');
    pay({
      customerId:this.customerId
    })
      .then((data: any) => {
        if(data.data.client_secret){
          this.stripe
          ?.confirmCardPayment(data.data.client_secret, {
            payment_method: this.cardId,
          })
          .then(async (result) => {
            const { error } = result;
            console.log(result);
            
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  } 
}
