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
var Dinosaurs_model_1 = require("./models/Dinosaurs.model");
var dinoServices_1 = require("./services/dinoServices");
var AppComponent = (function () {
    function AppComponent(_dinoService) {
        this._dinoService = _dinoService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getDinos();
        this.newDino = new Dinosaurs_model_1.Dinosaurs;
        this.loadedDino = new Dinosaurs_model_1.Dinosaurs;
        this.ErrorMsg = "";
        this.currentPage = 1;
        this.loaded = false;
        this.error = false;
    };
    AppComponent.prototype.getDinos = function () {
        var _this = this;
        this._dinoService.getAll()
            .subscribe(function (results) { return _this._dinos = results; });
    };
    AppComponent.prototype.addDino = function () {
        var _this = this;
        if (this.newDino.name && this.newDino.diet_type) {
            this._dinoService.addDino(this.newDino.name, this.newDino.diet_type, this.newDino.description)
                .subscribe(function () {
                location.reload();
            });
        }
        else {
            this.ErrorMsg = "Il faut absolument un name et un diet type.";
            this.error = true;
            setTimeout(function () {
                _this.error = false;
            }, 3000);
        }
    };
    AppComponent.prototype.delDino = function (id) {
        var _this = this;
        if (id)
            this._dinoService.delDino(id).subscribe(function () { location.reload(); });
        else {
            this.ErrorMsg = "Il faut absolument un ID.";
            this.error = true;
            setTimeout(function () {
                _this.error = false;
            }, 3000);
        }
    };
    AppComponent.prototype.loadDino = function (id) {
        var _this = this;
        if (id) {
            this._dinoService.loadDino(id)
                .subscribe(function (results) { return _this.loadedDino = results; });
            this.loaded = true;
        }
        else {
            this.ErrorMsg = "Il faut absolument un ID.";
            this.error = true;
            setTimeout(function () {
                _this.error = false;
            }, 3000);
        }
    };
    ;
    AppComponent.prototype.updateDino = function () {
        var _this = this;
        if (this.loadedDino.name && this.loadedDino.diet_type) {
            this._dinoService.updateDino(this.loadedDino._id, this.loadedDino)
                .subscribe(function () {
                location.reload();
            });
        }
        else {
            this.ErrorMsg = "Il faut absolument un name et un diet type.";
            this.error = true;
            setTimeout(function () {
                _this.error = false;
            }, 3000);
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: 'templates/test.html',
        styleUrls: ['css/main.css'],
    }),
    __metadata("design:paramtypes", [dinoServices_1.DinoService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map