import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject, Subject, from } from 'rxjs';
import { ProdHelp, ProdAssignHelp, DummylsProdAssign,AssignUsertoProd } from './HelperProd';
import { HttpClient, HttpErrorResponse, HttpHeaders ,HttpParams} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  selprod: ProdHelp[] = [];
  baseurl = environment.baseURL;
  newProdURL = '';
  newProdListURL = '';
  newProdAssignURL='';
  myAssignmentURL='';
  getMyAssignment():Observable <ProdAssignHelp[]> {
    //return DummylsProdAssign

    // Add safe, URL encoded search parameter if there is a search term
    /* const options = term ?
     { params: new HttpParams().set('name', term).set('pageno',pageno.toString()) } : {};
     console.log('Search term '+term);
     console.log('Page No '+pageno); */
     
    return this.http.get<ProdAssignHelp[]>(this.baseurl + this.myAssignmentURL)
    .pipe(catchError(this.handleError<ProdAssignHelp[]>('', [])));
  }
  assignUserToProd(assignusertoprod:AssignUsertoProd):Observable<number>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };

    return this.http.post<number>(this.baseurl + this.newProdAssignURL, assignusertoprod, httpOptions)
      .pipe(catchError(this.handleError<number>('error while assign product to user', 3)));

  }
  getCreatedProdList(term: string,pageno:number): Observable<ProdHelp[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ?
     { params: new HttpParams().set('name', term).set('pageno',pageno.toString()) } : {};
     console.log('Search term '+term);
     console.log('Page No '+pageno);
     
    return this.http.get<ProdHelp[]>(this.baseurl + this.newProdListURL, options)
    .pipe(catchError(this.handleError<ProdHelp[]>('', [])));
  }
  saveNewProd(newProd: ProdHelp): Observable<string> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };

    return this.http.post<string>(this.baseurl + this.newProdURL, newProd, httpOptions)
      .pipe(catchError(this.handleError('error while creating new product', 'Error Field')));

  }

  /**
* Handle Http operation that failed.
* Let the app continue.
* @param operation - name of the operation that failed
* @param result - optional value to return as the observable result
*/
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      alert(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
