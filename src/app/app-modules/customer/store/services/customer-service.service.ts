import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class CustomerServiceService {
  customerList: AngularFireList<any>;
  constructor(private db: AngularFireDatabase) {}
  getData() {

    return (
      this.db
        .list('/customer')
        .snapshotChanges()
        .take(1)
        // .pipe(
        .map(snapshot => {
          const result = snapshot.map((data: any) => {
            return {
              ...data.payload.val()
            };
          });
          return result;
        })
    );
    // catchError((error: any) => Observable.throw(error.json()))
    // );

    // return this.customerList;
  }
}
