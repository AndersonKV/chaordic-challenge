export interface IData {
  billingAddress: {
    address1: string;
    city: string;
    country: string;
    name: string;
    number: string;
    state: string;
    status: string;
    zip: string;
  };
  createdAt: string;
  customer: {
    email: string;
    name: string;
    telephone: {
      number: string;
    };
  };
  fulfillments: {
    F1: {
      createdAt: string;
      freightCosts: {
        deliveryEstimatedDate: string;
        totalPrice: number;
        totalTime: number;
      };
      id: string;
      items: Items;
      locationId: string;
      locationType: string;
      processedAt: string;
      shipment: {
        address1: string;
        city: string;
        country: string;
        name: string;
        number: string;
        state: string;
        status: string;
        telephone: { type: string; number: string };
        zip: string;
      };
      status: string;
      type: string;
      updateAt: string;
    };
    F2: {
      id: string;
      locationId: string;
      shipment: {
        zip: string;
        city: string;
        state: string;
        number: string;
        status: string;
        country: string;
        address1: string;
        name: string;
        telephone: {
          type: string;
          number: string;
        };
      };
      status: string;
      type: string;
      createdAt: string;
      updatedAt: string;
      freightCosts: {
        totalTime: number;
        totalPrice: number;
        deliveryEstimatedDate: string;
      };
      processedAt: string;
      locationType: string;
      items: {
        TN35568798: {
          sku: string;
          quantity: number;
          stockType: string;
          name: string;
          size: string;
          color: string;
          image: string;
          acquisitionType: string;
          price: number;
        };
        TC587879785: {
          sku: string;
          quantity: number;
          stockType: string;
          name: string;
          size: string;
          color: string;
          image: string;
          acquisitionType: string;
          price: number;
        };
      };
    };
  };
  id: string;
  payments: {
    [0]: {
      type: string;
      brand: string;
      amount: number;
      installments: string;
      expiresAt: string;
      number: string;
    };
  };
  placedAt: string;
  pointOfSale: string;
  status: string;
  totals: {
    subtotal: number;
    freightCosts: number;
    discount: number;
    total: number;
  };
  updatedAt: string;
}

export interface Items {
  AR384675: {
    color: string;
    image: string;
    name: string;
    price: number;
    quantity: number;
    size: string;
    sku: string;
    stockType: string;
  };
  AR384677: {
    color: string;
    image: string;
    name: string;
    price: number;
    quantity: number;
    size: string;
    sku: string;
    stockType: string;
  };
}
