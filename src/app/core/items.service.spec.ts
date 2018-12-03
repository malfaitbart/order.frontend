import {
  async,
  getTestBed,
  TestBed
} from '@angular/core/testing';
import {
  BaseRequestOptions,
  Http,
  Response,
  ResponseOptions,
  XHRBackend
} from '@angular/http';
import {
  MockBackend,
  MockConnection
} from '@angular/http/testing';

import { ItemsService } from './items.service';
import { Item } from './item';

describe('Service: ItemsService', () => {
  let backEnd: MockBackend;
  let service: ItemsService;
  let mockItems = [
    {
      "id": "cdceae9d74724a84a6bc1a26395dcb66",
      "name": "product 04",
      "description": "blablablablaaaaaaa",
      "price": 14,
      "amountOfStock": 3,
      "stockUrgency": "STOCK_LOW"
    },
    {
      "id": "d5069a3e6f894ad2a045faa629aaa175",
      "name": "product 02",
      "description": "blabla",
      "price": 13,
      "amountOfStock": 5,
      "stockUrgency": "STOCK_MEDIUM"
    }
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        BaseRequestOptions,
        MockBackend,
        ItemsService,
        {
          deps: [
            MockBackend,
            BaseRequestOptions
          ],
          provide: Http,
          useFactory: (backEnd: XHRBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backEnd, defaultOptions);
          }
        }
      ]
    });
    const testbed = getTestBed();
    backEnd = testbed.get(MockBackend);
    service = testbed.get(ItemsService);
  }));
  function setupConnections(backend: MockBackend, options: any) {
    backend.connections.subscribe((connection: MockConnection) => {
        if (connection.request.url === 'http://localhost:57340/api/Items') {
            const responseOptions = new ResponseOptions(options);
            const response = new Response(responseOptions);

            connection.mockRespond(response);
        }
    });
}
it('should return the list of forms from the server on success', () => {
  setupConnections(backEnd, {
      body: [
        {
          "id": "cdceae9d74724a84a6bc1a26395dcb66",
          "name": "product 04",
          "description": "blablablablaaaaaaa",
          "price": 14,
          "amountOfStock": 3,
          "stockUrgency": "STOCK_LOW"
        },
        {
          "id": "d5069a3e6f894ad2a045faa629aaa175",
          "name": "product 02",
          "description": "blabla",
          "price": 13,
          "amountOfStock": 5,
          "stockUrgency": "STOCK_MEDIUM"
        }
      ],
      status: 200
  });

  service.GetItems().subscribe((data: Item[]) => {
      expect(data.length).toBe(3);
      expect(data[0].name).toBe('product 04');
      expect(data[1].name).toBe('product 02');
  });
});
it('should log an error to the console on error', () => {
  setupConnections(backEnd, {
      body: { error: `I'm afraid I've got some bad news!` },
      status: 500
  });
  spyOn(console, 'error');

  service.GetItems().subscribe(null, () => {
      expect(console.error).toHaveBeenCalledWith(`I'm afraid I've got some bad news!`);
  });
});
});