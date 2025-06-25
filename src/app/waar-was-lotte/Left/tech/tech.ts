import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-tech',
  imports: [CommonModule],
  templateUrl: './tech.html',
  styleUrls: ['./tech.css']
})
export class Tech implements OnInit {
  technologies = [
    {
      name: 'Angular',
      category: 'Frontend Framework',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5L2.5 6.5l1.5 13L12 21.5l8-2L22.5 6.5L12 2.5zm0 2.2l6.9 15.3h-2.6L15 17H9l-1.3 3H5.1L12 4.7zm0 5.8L9.5 15h5L12 10.5z" fill="#DD0031"/></svg>'
    },
    {
      name: 'TypeScript',
      category: 'Programming Language',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" id="typescript"><path fill="#007acc" d="M2,63.91v62.5H127V1.41H2Zm100.73-5a15.56,15.56,0,0,1,7.82,4.5,20.58,20.58,0,0,1,3,4c0,.16-5.4,3.81-8.69,5.85-.12.08-.6-.44-1.13-1.23a7.09,7.09,0,0,0-5.87-3.53c-3.79-.26-6.23,1.73-6.21,5a4.58,4.58,0,0,0,.54,2.34c.83,1.73,2.38,2.76,7.24,4.86,8.95,3.85,12.78,6.39,15.16,10,2.66,4,3.25,10.46,1.45,15.24-2,5.2-6.9,8.73-13.83,9.9a38.32,38.32,0,0,1-9.52-.1A23,23,0,0,1,80,109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34,9.34,0,0,1,1.15-.73L82.5,101l3.59-2.08.75,1.11a16.78,16.78,0,0,0,4.74,4.54c4,2.1,9.46,1.81,12.16-.62a5.43,5.43,0,0,0,.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48,16.48,0,0,1-3.43-6.25,25,25,0,0,1-.22-8c1.33-6.23,6-10.58,12.82-11.87A31.66,31.66,0,0,1,102.73,58.93ZM73.39,64.15l0,5.12H57.16V115.5H45.65V69.26H29.38v-5a49.19,49.19,0,0,1,.14-5.16c.06-.08,10-.12,22-.1L73.33,59Z"></path></svg>'
    },
    {
      name: 'Tailwind CSS',
      category: 'CSS Framework',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.47 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C10.61 13.15 9.47 12 7 12z" fill="#06B6D4"/></svg>'
    },
    {
      name: 'Supabase',
      category: 'Backend as a Service',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 64 64" style="fill:none;display:block;margin:0 auto"><path d="m 37.41219,62.936701 c -1.634985,2.05896 -4.950068,0.93085 -4.989463,-1.69817 L 31.846665,22.786035 h 25.855406 c 4.683108,0 7.294967,5.409033 4.382927,9.07673 z" style="fill:url(#paint0_linear);stroke-width:0.57177335"/><path d="m 37.41219,62.936701 c -1.634985,2.05896 -4.950068,0.93085 -4.989463,-1.69817 L 31.846665,22.786035 h 25.855406 c 4.683108,0 7.294967,5.409033 4.382927,9.07673 z" style="fill:url(#paint1_linear);fill-opacity:0.2;stroke-width:0.57177335"/><path d="m 26.89694,1.0634102 c 1.634986,-2.05918508 4.950125,-0.93090008 4.989521,1.698149 L 32.138899,41.214003 H 6.607076 c -4.6832501,0 -7.29518376,-5.409032 -4.3830007,-9.07673 z" style="fill:#3ecf8e;stroke-width:0.57177335"/><defs><linearGradient id="paint0_linear" x1="53.973801" y1="54.973999" x2="94.163498" y2="71.829498" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.57177306,0,0,0.57177334,0.98590077,-0.12074988)"><stop stop-color="#249361"/><stop offset="1" stop-color="#3ECF8E"/></linearGradient><linearGradient id="paint1_linear" x1="36.1558" y1="30.577999" x2="54.484402" y2="65.080597" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.57177306,0,0,0.57177334,0.98590077,-0.12074988)"><stop/><stop offset="1" stop-opacity="0"/></linearGradient></defs></svg>'
    },
    {
      name: 'Mapbox',
      category: 'Mapping Platform',
      icon: '<svg fill="#000000" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Mapbox icon</title><path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.696 14.943c-4.103 4.103-11.433 2.794-11.433 2.794S4.94 10.421 9.057 6.304c2.281-2.281 6.061-2.187 8.45.189s2.471 6.168.189 8.45zm-4.319-7.91l-1.174 2.416-2.416 1.174 2.416 1.174 1.174 2.416 1.174-2.416 2.416-1.174-2.416-1.174-1.174-2.416z"></path></g></svg>'
    },
    {
      name: 'RxJS',
      category: 'Reactive Programming',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 283.5"><path d="M29.6,175.3c-5.2-16.2-6.7-33.3-3.7-50.9c1.3-7.3,3.3-14.3,5.5-21.4c0,0,13.8-45.3,60.5-66 c0,0,16.1-8.5,40.3-9.1c0,0-3.3-3.2-5.4-4.6c-11.4-7.6-28.4-10.1-38.7,0.6c-3.1,3.2-5.7,6.7-8.6,9.9c-3.3,3.6-7.3,6.6-11.9,8.3 c-4,1.5-8,1.2-12.1,1.9c-4.2,0.7-8.5,2.2-11.9,4.9c-3.7,3-5.2,7-5.6,11.6c-0.4,3.6-0.3,7.3-0.5,10.9c-0.5,10.6-3.9,13.6-11.5,19.5 c-3.2,2.4-5.9,5.6-7.9,9c-6,10.6,3.6,21.6,4.1,32.3c0.1,2.2-0.1,4.4-0.9,6.5c-0.8,2.3-2.4,3.8-3.7,5.7c-1.8,2.5-3,5.5-2.5,8.6 c0.5,3.1,2.1,6,3.6,8.7c2.9,4.8,6.5,9.1,10.3,13.2C29.2,174.9,29.4,175.1,29.6,175.3" fill="#e32286"/><path d="M220.4,213.7c23-10,32.8-27.3,32.8-27.3c21.5-29.3,14.2-60.2,14.2-60.2c-13.7,29.8-26.2,38-26.2,38 c33.7-51.3,0.2-82.3,0.2-82.3c13.7,29.2-4.5,64.8-4.5,64.8c-15.3,32.2-37,43.7-37,43.7c24.2,4.5,42-11.8,42-11.8 c-34.7,37.5-72.3,35.7-72.3,35.7c15.8,17.7,39.5,16.2,39.5,16.2c-31,7.3-60.1-3-84-22.9c-4.5-3.7-8.8-7.7-12.8-12 c0,0-3.6-3.8-4.3-4.8l-0.1-0.1c-0.5,18.5,18.8,35.7,18.8,35.7c-24.2-10-35.3-31.7-35.3-31.7s-16.3-27.8-4.5-59.5 c11.8-31.7,47.5-38.5,47.5-38.5c29.5,14.3,54.5,18.8,54.5,18.8C241.5,124.2,238.5,98.4,238.5,98.4z M171.6,78.7c-3,0-5.4-2.4-5.4-5.4 s2.4-5.4,5.4-5.4s5.4,2.4,5.4,5.4S174.6,78.7,171.6,78.7z" fill="url(#SVGID_1_)"/><path d="M137.4,58.2l-34.1-10.6c-0.2,0-1.2-0.5-3,0c0,0-20.1,5.1-16.6,16.1c0,0,2.1,6.9,7.8,13.6l37.5-1.8L137.4,58.2z" fill="url(#SVGID_3_)"/><defs><linearGradient id="SVGID_1_" x1="53.496" x2="177.932" y1="247.701" y2="115.323" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#E01D84"/><stop offset=".401" stop-color="#DF1D85"/><stop offset=".77" stop-color="#932C87"/><stop offset="1" stop-color="#5D2F88"/></linearGradient><linearGradient id="SVGID_2_" cx="190.456" cy="80.2" r="121.582" gradientTransform="matrix(1 2.387956e-03 -1.996728e-03 0.8362 0.1607 12.6849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#E01D84"/><stop offset=".139" stop-color="#DE1E85"/><stop offset=".285" stop-color="#D62085"/><stop offset=".434" stop-color="#C92386"/><stop offset=".586" stop-color="#B72786"/><stop offset=".739" stop-color="#9D2B87"/><stop offset=".891" stop-color="#7C2E88"/><stop offset="1" stop-color="#5D2F88"/></linearGradient><linearGradient id="SVGID_3_" x1="83.212" x2="137.371" y1="62.336" y2="62.336" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#E01D84"/><stop offset=".238" stop-color="#DA1E85"/><stop offset=".658" stop-color="#C72085"/><stop offset=".999" stop-color="#B52284"/></linearGradient></defs></svg>'
    }
  ];

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // Component initialization logic here
  }

  getSafeHtml(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
