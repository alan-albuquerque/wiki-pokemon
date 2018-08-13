import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderComponent } from './loader.component';
import {
  MissingTranslationHandler,
  TranslateCompiler,
  TranslateLoader,
  TranslateModule, TranslateParser,
  TranslateService,
  TranslateStore
} from '@ngx-translate/core';
import { extract } from '@app/core';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [LoaderComponent],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should not be visible by default', () => {
    // Arrange
    const element = fixture.nativeElement;
    const div = element.querySelectorAll('div')[0];

    // Assert
    expect(div.getAttribute('hidden')).not.toBeNull();
  });

  it('should be visible when app is loading', () => {
    // Arrange
    const element = fixture.nativeElement;
    const div = element.querySelectorAll('div')[0];

    // Act
    fixture.componentInstance.isLoading = true;
    fixture.detectChanges();

    // Assert
    expect(div.getAttribute('hidden')).toBeNull();
  });

  it('should display default message', () => {
    // Arrange
    const element = fixture.nativeElement;
    const span = element.querySelectorAll('span')[0];

    // Assert
    expect(span.innerText).toBe(extract('aguarde...'));
  });

  it('should display specified message', () => {
    // Arrange
    const element = fixture.nativeElement;
    const span = element.querySelectorAll('span')[0];

    // Act
    fixture.componentInstance.message = 'testing';
    fixture.detectChanges();

    // Assert
    expect(span.innerText).toBe('testing');
  });
});
