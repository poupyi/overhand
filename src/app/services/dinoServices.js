"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var DinoService = (function () {
    function DinoService(http) {
        this.http = http;
        this.urlDinoApi = 'http://139.162.121.14/api/';
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'api_key': 'SAFm2354213*3rer6#32234@!@!4a654f' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    ;
    DinoService.prototype.getAll = function () {
        return this.http.get(this.urlDinoApi + 'dinosaurs/diet_type/0')
            .map(this.extractData);
    };
    DinoService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    DinoService.prototype.addDino = function (name, diet_type, description) {
        return this.http.post(this.urlDinoApi + 'dinosaurs', { name: name, diet_type: diet_type, description: description }, this.options)
            .map(this.extractData);
    };
    DinoService.prototype.delDino = function (deleteId) {
        return this.http.delete(this.urlDinoApi + 'dinosaurs/' + deleteId, this.options);
    };
    DinoService.prototype.loadDino = function (loadedId) {
        return this.http.get(this.urlDinoApi + 'dinosaurs/' + loadedId)
            .map(function (response) { return response.json(); });
    };
    DinoService.prototype.updateDino = function (idSelected, loadedDino) {
        var name;
        var diet_type;
        var description;
        var picture;
        name = loadedDino.name;
        diet_type = loadedDino.diet_type;
        description = loadedDino.description;
        picture = loadedDino.picture;
        return this.http.put(this.urlDinoApi + 'dinosaurs/' + idSelected, { name: name, diet_type: diet_type, description: description, picture: picture }, this.options)
            .map(function (response) { return response.json(); });
    };
    return DinoService;
}());
DinoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DinoService);
exports.DinoService = DinoService;
//# sourceMappingURL=dinoServices.js.map