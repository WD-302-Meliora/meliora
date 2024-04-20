// about.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  // Define teamMembers property with sample data
  teamMembers = [
    {
      name: 'Denise D. Santos',
      position: 'Founder',
      image: 'https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/432759355_3757912931194513_8509327126963249944_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=iWjYx_aZ4XUAb5g6zxP&_nc_ht=scontent.fcrk1-3.fna&oh=00_AfAKd0Vs-j-zKnELi-rsx_Z3n9mB_xL5rBleAfniCPtpBw&oe=6625A7AF'
    },
    {
      name: 'Kharla Rhoen A. Manabat',
      position: 'Marketing Director',
      image: 'https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/283985643_5296591067045947_2293217741115196331_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=FnViA3ymcN8Ab5IQYWf&_nc_ht=scontent.fcrk1-3.fna&oh=00_AfDU1DOJ6k2wgwwsWoATjEYnm1V864kv5_kSrEBwbCj-UA&oe=662589BD'
    },
    {
      name: 'Venice L. Luoang',
      position: 'Spokesperson',
      image: 'https://scontent.fcrk1-3.fna.fbcdn.net/v/t1.6435-9/87848719_2598894557051933_6906357371027587072_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=88nZYFs4ECkAb6TfZJI&_nc_ht=scontent.fcrk1-3.fna&oh=00_AfAvhkr80Asw-inCkQ9ROIPAsyX5jJeo_lwxa8Dg7CQkAA&oe=66473C95'
    },
    {
      name: 'Gian Carlo E. Manuel',
      position: 'Graphic Designer',
      image: 'https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/423313369_7235309086557236_5883146867386620465_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=f9I8pTTCbncAb4OuVnc&_nc_ht=scontent.fcrk1-3.fna&oh=00_AfBwyvhDBGJ5_thiehJzAETlwI-tTX2pNYdHX9YqAMrEVQ&oe=66258C54'
    }
  ];
}
