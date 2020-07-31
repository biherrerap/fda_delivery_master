import { Component } from '@angular/core';

import { Platform,NavController,Events } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { ServerService } from './service/server.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  
  appType:number = 0;
  dir:string = "ltr";
  text:any;
  admin:any;
  public appPages:any = [];

  geoLatitude = null;
  geoLongitude=null;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private geolocation: Geolocation,
    public nav : NavController,
    private oneSignal: OneSignal,
    public events: Events,
    public server : ServerService
  ) {

     this.events.subscribe('lang_change', (type) => {
      
      this.assginAppType(type);

    });

    setInterval(() => {      
        
      if(localStorage.getItem('user_id'))
      {
        this.updateLocation();
      }

    },5000); 

    if(localStorage.getItem('app_text'))
    {
      this.text = JSON.parse(localStorage.getItem('app_text'));

      this.appPages = [
      {
        title: this.text.home,
        url: '/home',
        icon: 'home'
      },
      {
        title: 'Historial de pedidos',
        url: '/city',
        icon: 'cart'
      },
      {
        title: this.text.language,
        url: '/lang',
        icon: 'flag'
      },
      {
        title: this.text.account,
        url: '/profile',
        icon: 'person'
      },
      

  ];
      
    }
    else
    {
      var home:any      = "Inicio";
      var city:any      = "Cambiar ciudad";
      var lang:any      = "Idioma";
      var profile:any   = "Mi cuenta";
      var order:any     = "Mis ordenes";

      this.appPages = [
      {
        title: home,
        url: '/home',
        icon: 'home'
      },
      {
        title: city,
        url: '/city',
        icon: 'pin'
      },
      {
        title: profile,
        url: '/profile',
        icon: 'person'
      },
      {
        title: order,
        url: '/order',
        icon: 'cart'
      },

  ];
    }

     this.events.subscribe('text', (text) => {
      
      this.text = text;

      this.appPages = [
      {
        title: text.home,
        url: '/home',
        icon: 'home'
      },
      {
        title: text.account,
        url: '/profile',
        icon: 'person'
      },
      {
        title: text.order,
        url: '/order',
        icon: 'cart'
      },

  ];

    });
    
    if(localStorage.getItem('app_type'))
    {
      if(localStorage.getItem('app_type') == "1")
      {
        this.dir = "rtl";
      }
      else
      {
         this.dir = "ltr";
      }
      
    }

    if(localStorage.getItem('user_id') && localStorage.getItem('user_id') != 'null')
    {
      this.nav.navigateRoot('/home');
    }
    else
    {
      this.nav.navigateRoot('/login');
    }


    this.initializeApp();

  }

  assginAppType(ty)
  {
    this.dir = ty == 0 ? "ltr" : "rtl";
  }

  getConfiguration() {
    if(localStorage.getItem('admin') == null)
    {
      this.server.configuation().subscribe((response:any) => {
        localStorage.setItem('admin', JSON.stringify(response.data));

        console.log("response.data");
        console.log(response.data);
        this.admin = JSON.parse(localStorage.getItem('admin'));

        if(localStorage.getItem('user_id') && localStorage.getItem('user_id') != 'null')
        {
          this.events.subscribe('user_login', (id) => {

            this.subPush(id);
      
          });
        }
        else
        {
          this.subPush();
        }
      });
    }
  }

  initializeApp() {

    console.log("inicia el app");

    this.platform.ready().then(() => {
      this.getConfiguration();
      this.getGeolocation();

      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#f44336');
      this.statusBar.styleLightContent();

    });


  }

  subPush(id = 0)
  {
    console.log(this.admin);
    this.oneSignal.startInit(this.admin.onesignal_api, this.admin.firebase_api);

        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

        this.oneSignal.handleNotificationReceived().subscribe(() => {
         // do something when notification is received
        });

        this.oneSignal.handleNotificationOpened().subscribe(() => {
          // do something when a notification is opened
        });

      if(localStorage.getItem('user_id') && localStorage.getItem('user_id') != 'null')
      {
          this.oneSignal.sendTags({user_id: localStorage.getItem('user_id')});
      }

      if(id > 0)
      {
          this.oneSignal.sendTags({user_id: id});
      }

      this.oneSignal.endInit();
  }

  getGeolocation(){
    console.log("getGeolocation");
      this.geolocation.getCurrentPosition().then((resp) => {
        this.geoLatitude = resp.coords.latitude;
        this.geoLongitude = resp.coords.longitude; 
        //this.geoAccuracy = resp.coords.accuracy; 
        console.log("this.geolocation.getCurrentPosition()");
        console.log(this.geoLatitude);
        console.log(this.geoLongitude);
        
        
       localStorage.setItem('current_lat',this.geoLatitude);
       localStorage.setItem('current_lng',this.geoLongitude);

       }).catch((error) => {
         
        console.log(error);

       });
    }

    updateLocation()
    {
      var allData = {lat : localStorage.getItem('current_lat'),lng : localStorage.getItem('current_lng'),user_id : localStorage.getItem('user_id')}

      this.server.upLocation(allData).subscribe((response:any) => {

        console.log(response);

      });
    }
}
