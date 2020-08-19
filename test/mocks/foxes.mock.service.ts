import { Fox, FoxesService } from 'src/app/foxes/foxes.service';

class MockFoxesService extends FoxesService {
  foxes: Fox[] = [{ id: 1, name: 'fox mock 1' }];

  add(foxname: string): Fox {
    return { ...this.foxes[0], name: foxname };
  }
}
