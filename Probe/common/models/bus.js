"use strict";

module.exports = function (Bus) {

    Bus.remoteMethod("path", {
        http: { path: "/path", verb: "get" },
        accepts: [{ arg: "origin", type: "string" }, { arg: "destination", type: "string" }],
        returns: [{ arg: "Stations", type: "object" }, { arg: "number", type: "string" }]
    });

    Bus.path = function (origin, destination, cb) {
        Bus.find({ where: { and: [{ Stations: origin }, { Stations: destination }] } }, function (err, res) {
            cb(err, res);
        }
        );
    };

    Bus.remoteMethod("stops", {
        http: { path: "/stops", verb: "get" },
        accepts: { arg: "busNumber", type: "string" },
        returns: { arg: "Stations", type: "object" }
    });

    Bus.stops = function (busNumber, cb) {
        Bus.find({ fields: {Stations: true}, where: {number: busNumber}}, function (err, res) {
            cb(err, res);
        }
        );
    };
};
