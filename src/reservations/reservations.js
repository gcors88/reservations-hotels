let reservations = [
    { date: '2021-12-05', bedroom: 1},
    { date: '2021-12-03', bedroom: 1},
    { date: '2021-12-03', bedroom: 2},
    { date: '2021-12-06', bedroom: 2}
]
module.exports.validateDate = (event,contex,callback) => {
    reservations.map(r => {
        if(r.date === event.date && r.bedroom === event.bedroom)
            callback(null, false);
    })

    callback(null, event);
}