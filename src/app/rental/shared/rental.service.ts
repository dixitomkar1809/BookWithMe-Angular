import {Injectable} from "@angular/core";
import { Observable } from "rxjs";
import { Rental } from "./rental.model";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RentalService {

    constructor(private http: HttpClient) {}

    public getRentalById(rentalId: string): Observable<any> {
        return this.http.get('/api/v1/rentals/' + rentalId);
    }

    // Arrow function helps in binding Observable to this context to relate to rentals just above
    public getRentals(): Observable<any> {
        return this.http.get('/api/v1/rentals');
    }

}