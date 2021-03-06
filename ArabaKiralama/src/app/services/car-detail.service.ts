import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarDetailService {
  apiUrl = 'https://localhost:44325/api/';
  constructor(private httpClient: HttpClient) {}

  getCardetails(): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/cardetails';
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetailByBrand(id: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getbybrand?brandId=' + id;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetailByColor(id: number): Observable<ListResponseModel<CarDetail>> {
    let newPath = this.apiUrl + 'cars/getbycolor?colorId=' + id;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCardetailsById(carId:number){
    let newPath = this.apiUrl + 'cars/cardetailsbyid?carId='+ carId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }
}
