import { ChangeDetectorRefModule } from './change-detector-ref.module';

describe('ChangeDetectorRefModule', () => {
  let changeDetectorRefModule: ChangeDetectorRefModule;

  beforeEach(() => {
    changeDetectorRefModule = new ChangeDetectorRefModule();
  });

  it('should create an instance', () => {
    expect(changeDetectorRefModule).toBeTruthy();
  });
});
