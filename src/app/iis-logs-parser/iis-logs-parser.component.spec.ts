import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IisLogsParserComponent } from './iis-logs-parser.component';

describe('IisLogsParserComponent', () => {
  let component: IisLogsParserComponent;
  let fixture: ComponentFixture<IisLogsParserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IisLogsParserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IisLogsParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
