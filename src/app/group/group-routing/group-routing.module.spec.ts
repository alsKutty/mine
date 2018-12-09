import { GroupRoutingModule } from './group-routing.module';

describe('GroupRoutingModule', () => {
  let groupRoutingModule: GroupRoutingModule;

  beforeEach(() => {
    groupRoutingModule = new GroupRoutingModule();
  });

  it('should create an instance', () => {
    expect(groupRoutingModule).toBeTruthy();
  });
});
