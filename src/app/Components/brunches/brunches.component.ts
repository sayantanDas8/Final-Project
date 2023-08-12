import { Component } from '@angular/core';

@Component({
  selector: 'app-brunches',
  templateUrl: './brunches.component.html',
  styleUrls: ['./brunches.component.scss']
})
export class BrunchesComponent {
  brunches: any = [
    {
      State: 'Andhra Pradesh',
      address: 'Kalyani Auto Diesel Works, nh-5, thotada Junction Ankapalli, Andhra Pradesh',
      email: 'kalyanitass@yahoo.com'
    },
    {
      State: 'Mumbai',
      address: 'Ramak Auto, daund Patas State Highway, survey No-83/1, Near Railway Station, daund, Mumbai',
      email: 'ramakautomotive@gmail.com'
    },
    {
      State: 'Delhi',
      address: 'Mithila Motors , Dtc Land Vasant Vihar, Delhi, delhi - 110057',
      email: 'dilooparikh@mithilamotors.com'
    },
    {
      State: 'Rajasthan',
      address: 'Gargi Motors, plot No-28/2, village Bhatian, phalodi, jodhpur Dist. Rajasthan - 302013',
      email: 'gauravpanchariya@gmail.com'
    },
    {
      State: 'Bangalore',
      address: 'Express Auto Service, Survey No-10 & 11, attibelle Industrial Area Anekal Taluq, Bangalore',
      email: 'vijaytechnic@gmail.com'
    },
    {
      State: 'Coimbatore',
      address: 'Stanes Motor (south India) Ltd., 1596, trichy Road, Near Government Hospital, Coimbatore',
      email: 'k.mathibalan@stanesmotor.com'
    },
    {
      State: 'Gujarat',
      address: 'Cama Motors, rustom Cama Marg, opp. Air India Office, Khanpur, ahmedabad, Gujarat',
      email: 'service@camamotors.com'
    }
  ]
}
