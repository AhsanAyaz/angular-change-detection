import { ChangeDetectionOnPushModule } from './change-detection-on-push.module';

describe('ChangeDetectionOnPushModule', () => {
  let changeDetectionOnPushModule: ChangeDetectionOnPushModule;

  beforeEach(() => {
    changeDetectionOnPushModule = new ChangeDetectionOnPushModule();
  });

  it('should create an instance', () => {
    expect(changeDetectionOnPushModule).toBeTruthy();
  });
});
