(function () {
    'use strict';

    let Observable = Rx.Observable;
    let values = Observable.create(observer => {
        observer.next('foo');
    });

    values.subscribe(data => {
        console.log(data);
    });
})();
