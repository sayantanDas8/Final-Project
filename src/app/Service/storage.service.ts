import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  //save in dstorage
  setData(first_name: string, last_name: string, email: string, token: string, img: string)
  {
    window.localStorage.setItem('f_name',first_name);
    window.localStorage.setItem('l_name',last_name);
    window.localStorage.setItem('email',email);
    window.sessionStorage.setItem('token',token);
    window.localStorage.setItem('img', img);
  }

  //fetch from local storage
  getData()
  {
    const setData=[];
    let data={
      first_name:window.localStorage.getItem('f_name'),
      last_name:window.localStorage.getItem('l_name'),
      email:window.localStorage.getItem('email'),
      proImg: window.localStorage.getItem('img')
    }

    const savedData = []

    savedData.push(data);
    return savedData;
  }

  getToken()
  {
    return window.sessionStorage.getItem('token');
  }

  //delete data from storage
  getDestroy()
  {
    return window.sessionStorage.clear();
  }

  constructor() { }
}
