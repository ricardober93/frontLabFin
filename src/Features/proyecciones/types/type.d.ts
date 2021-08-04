

export interface Iactivos {
    name: string;
    valor: number;
  }
  
  export interface Ipasivos {
    name: string;
    valor: number;
  }
  export interface Ipatrimonio {
    name: string;
    valor: number;
  }
  

  export interface Iproduct {
    id: number | null;
    name: string;
    price: number;
    quantity: number;
    rate_cost: number;
    price_cost: number;
    inventary_final: number;
    rate_raise: number;
    rate_of_sale: number;
    rate_of_purchases: number;
}


export interface Isalary {
  name: string;
  salary: number;
  daysWorks: number;
  pension: number;
  salud: number;
  transport?: number;
  comision?: number;
}

