import { ZonesDemoModule } from './zones-demo.module';

describe('ZonesDemoModule', () => {
  let zonesDemoModule: ZonesDemoModule;

  beforeEach(() => {
    zonesDemoModule = new ZonesDemoModule();
  });

  it('should create an instance', () => {
    expect(zonesDemoModule).toBeTruthy();
  });
});
