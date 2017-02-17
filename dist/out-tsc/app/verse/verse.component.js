var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VerseService } from './verse.service';
var VerseComponent = (function () {
    function VerseComponent(verseService, router) {
        this.verseService = verseService;
        this.router = router;
    }
    VerseComponent.prototype.getAllVerse = function () {
        var _this = this;
        this.verseService
            .getAllVerse()
            .then(function (allVerse) { return _this.allVerse = allVerse; });
    };
    VerseComponent.prototype.ngOnInit = function () {
        this.getAllVerse();
    };
    return VerseComponent;
}());
VerseComponent = __decorate([
    Component({
        selector: 'app-verse',
        templateUrl: './verse.component.html',
        styleUrls: ['./verse.component.css']
    }),
    __metadata("design:paramtypes", [VerseService,
        Router])
], VerseComponent);
export { VerseComponent };
//# sourceMappingURL=../../../../src/app/verse/verse.component.js.map