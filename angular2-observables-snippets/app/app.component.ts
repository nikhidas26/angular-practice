import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'my-app',
  template: `
  
  
  <div class="container">
    
    <h1>Observable from arguments </h1>
    <p>Check console of your browser </p>
  
  </div>
  
  `
})
export class AppComponent {
  
  ngAfterViewInit() {

    console.log("Observable arguments");
    Observable.of(1).subscribe(x => console.log(x));
    Observable.of(1,2,3).subscribe( x => console.log(x));

    console.log("Observable empty");
    Observable.empty().subscribe( x => console.log(x));

    console.log("Observable range");
    Observable.range(10,5).subscribe( x => console.log(x));

    console.log("Observable array as an argument");
    Observable.of([1,2,3]).subscribe(x=>console.log(x));


    // console.log("Observable interval examples");
    // var intervalObservable1 = Observable.interval(1000)
    //           .subscribe( (x) => console.log("Waiting every 1 sec" ));

    // var intervalObservable2 = Observable.interval(1000)
    //           .map( () => {
    //             console.log("Calling the server to get the latest news");
    //             return [1,2,3];
    //           })
    //           .subscribe( news => console.log(news));

    // var intervalObservable3 = Observable.interval(1000)
    //           .flatMap( () => {
    //             console.log("Calling the server to get the latest news");
    //             return [1,2,3];
    //           })
    //           .subscribe( news => console.log(news));

    // Observable.interval(10000).subscribe(
    //   () => {
    //     intervalObservable1.unsubscribe();
    //     intervalObservable2.unsubscribe();
    //     intervalObservable3.unsubscribe();
    // });
  

  console.log("Fork Join examples");

  var userStream = Observable.of({
    userId: 1,
    userName: 'Test_User'
  }).delay(2000);

  var tweetsStream = Observable.of([1,2,3])
                      .delay(1500);
  
  console.log("Fork Join result");
  Observable.forkJoin(userStream, tweetsStream)
            .subscribe(result => console.log(result));

 console.log("Fork Join with map result");
  Observable.forkJoin(userStream, tweetsStream)
            .map( joined => new Object({
              user: joined[0],
              tweets: joined[1]
            }))
            .subscribe(result => console.log(result));

  console.log("Error handling");

  var errorObservable = Observable.throw(new Error("Observable custom error"));

  errorObservable.subscribe(
    x => console.log(x),
    error => console.log(error)
  );
    
  errorObservable.catch(
    err => {
        var localDataStream = Observable.of(["catch","Observable","error"]);
        return localDataStream;
    })
    .subscribe( x => console.log(x));
  }

  // Observables have retry's timeouts, and the three arguments of subscribe are 
  // what to do once you get the data, errors and complete
  // subscribe(what_to_do, error_handling, completion_handling);
}
