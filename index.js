// Write your solution in this file!
let employee = {
    name:'Greg',
    address:'101 Street'
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, [key]: value,};
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const e2 = {...employee};
    delete e2[key]
    return e2;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}