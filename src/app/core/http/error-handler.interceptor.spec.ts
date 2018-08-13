import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

import { ErrorHandlerInterceptor } from './error-handler.interceptor';
import { ToastrModule, ToastrService } from 'ngx-toastr';

describe('ErrorHandlerInterceptor', () => {
  let errorHandlerInterceptor: ErrorHandlerInterceptor;
  let http: HttpClient;
  let toastr: ToastrService;
  let httpMock: HttpTestingController;

  function createInterceptor() {
    errorHandlerInterceptor = new ErrorHandlerInterceptor(toastr);
    return errorHandlerInterceptor;
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ToastrModule.forRoot()],
      providers: [{
        provide: HTTP_INTERCEPTORS,
        useFactory: createInterceptor,
        multi: true,
      }]
    });
  });

  beforeEach(inject([
    HttpClient,
    HttpTestingController,
    ToastrService,
  ], (_http: HttpClient,
      _httpMock: HttpTestingController,
      _toastr: ToastrService) => {
    toastr = _toastr;
    http = _http;
    httpMock = _httpMock;
  }));

  afterEach(() => {
    httpMock.verify();
  });

  it('should catch error and call error handler', () => {
    // Arrange
    // Note: here we spy on private method since target is customization here,
    // but you should replace it by actual behavior in your app
    spyOn(ErrorHandlerInterceptor.prototype as any, 'errorHandler').and.callThrough();

    // Act
    http.get('/toto').subscribe(() => fail('should error'), () => {
      // Assert
      expect(ErrorHandlerInterceptor.prototype['errorHandler']).toHaveBeenCalled();
    });

    httpMock.expectOne({}).flush(null, {
      status: 404,
      statusText: 'error'
    });
  });
});
