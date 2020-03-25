import { MaterialCustModule } from './material-cust.module';

describe('MaterialCustModule', () => {
  let materialCustModule: MaterialCustModule;

  beforeEach(() => {
    materialCustModule = new MaterialCustModule();
  });

  it('should create an instance', () => {
    expect(materialCustModule).toBeTruthy();
  });
});
