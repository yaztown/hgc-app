import { DeviceOnStatusPipe } from './device-on-status.pipe';

describe('DeviceOnStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new DeviceOnStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
