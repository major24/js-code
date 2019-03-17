
// cust data
const customers = [
    {"id": 1, "name": "Steve", "phone": "4165551111"},
    {"id": 2, "name": "Jonathan", "phone": "9056661111"}
];

function maparray() {
    const newObj = customers.map((e) => {
        console.log(e);
        if (e.id == 2){
            return {...e, ...{"phone": "99"}};
        }
        return e;
    });

    console.log('----');
    console.log(newObj);
}











// call ftn
maparray();


console.log('script done');
