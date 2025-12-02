const registrationDate = new Datde('2023-09-17T10:00:00z');

const option = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timezone: 'Asia/Bangkok'
};

const formattedDate = registrationDate.toLocaleDateString('th-TH', option);
console.log("Registration Date: " + formattedDate);