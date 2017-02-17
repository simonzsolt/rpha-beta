import { TestBed, inject } from '@angular/core/testing';
import { VerseService } from './verse.service';
describe('VerseService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [VerseService]
        });
    });
    it('should ...', inject([VerseService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=../../../../src/app/verse/verse.service.spec.js.map