
// cust data
const customers = [
    {"id": 1, "name": "Steve", "orders": [100]},
    {"id": 2, "name": "Jonathan", "orders": [101, 103, 102]}
];
const orders = [
    {"id": 100, "product": "Sony Television"},
    {"id": 101, "product": "iPhone 6s"},
    {"id": 102, "product": "Blueberry Watch"},
    {"id": 103, "product": "Samsung Tablet"}
];


//------------------------------------------------------------
// get customer
async function getCustomer(id) {
    let promise = new Promise((resolve, reject) => {
        // simulate api call..
        setTimeout(() => {
            let cust = customers.filter((x) => x.id === id)[0];
            // console.log(cust);
            resolve(cust);
        }, 1000);
    });
    
    // wait for promise to resolve
    let result = await promise;
    return result;
};
//------------------------------------------------------------

// get order
async function getOrder(id) {
    let promise = new Promise((resolve, reject) => {
        // simulate api call..
        setTimeout(() => {
            let ord = orders.filter((x) => x.id === id)[0];
            resolve(ord);
        }, 400);
    });
    
    // wait for promise to resolve
    let result = await promise;
    return result;
};
//------------------------------------------------------------

async function getOrders(ids) {
    let requests = ids.map((e) => getOrder(e));

    let promise = new Promise((resolve, reject) => {

        Promise.all(requests).then((responses) => {
            let data = responses.map((d) => {
                return d;
            });
            //console.log(data);
            resolve(data);
        }); //endof Promise.all

    });

    let result = await promise;
    return result;
}
//------------------------------------------------------------

// get customer and orders
async function getCustomerAndOrders(id) {

    let promise = new Promise((resolve, reject) => {

        getCustomer(id).then((cust) => {

            getOrders(cust.orders).then((orders) => {
                let data = {};
                //data.customer = cust;
                //data.orders = orders;
                data.custid = cust.id;
                data.name = cust.name;
                data.orders = orders;
                resolve(data);
            })
        }); //endof getCusomer(id)

    }); // endof promise

    let result = await promise;
    return result;
};

/*
getCustomer(2).then((res) => {
    //console.log(res);
});

getOrder(101).then((res) => {
    //console.log(res);
});

getOrders([100, 101]).then(data => {
    console.log(data);
})
*/

getCustomerAndOrders(1).then(x => {
    console.log(x);
    console.log('----------------------------------');
});

getCustomerAndOrders(2).then(x => {
    console.log(x);
    console.log('----------------------------------');
});


//---------------------------------------------------------

async function multiply(n) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let x = n * n;
            resolve(x);
        }, 400);
    });

    let res = await promise;
    //console.log(res);
    return res;
}

function testMultiplay() {
    var arr = [1, 2, 3, 4];
    let res = arr.map((e) => multiply(e));
    //console.log(res);

    Promise.all(res).then((result) => result.map((r) => {
        console.log(r)
        })
    );
}

//testMultiplay();

console.log('script done');



