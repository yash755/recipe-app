import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeListTemplateComponent } from './recipe-list-template.component';

describe('RecipeListTemplateComponent', () => {
  let component: RecipeListTemplateComponent;
  let fixture: ComponentFixture<RecipeListTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeListTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeListTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
