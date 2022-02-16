import {ComponentFixture, TestBed} from "@angular/core/testing";
import {HeaderComponent} from "./header.component";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  describe("changeTitle()", () => {
    test("wenn Title Photo Album ist, sollte dieser geändert werden", () => {
      component.changeTitle();

      expect(component.title).toEqual("Easter Egg")
    });

    test("wenn Title nicht Photo Album ist, sollte er auf Photo Album geändert werden", () => {
      component.title = "Easter Egg"

      component.changeTitle();

      expect(component.title).toEqual("Photo Album");
    });
  })
});
