interface General {
  id: number;
  name: string;
}

export interface Ward extends General {}

export interface District extends General {
  wards?: Ward[];
}

export interface Province extends General {
  districts?: District[];
}

export interface HeaderTableData {
  text: string;
  value: string;
  align?: string;
}

export interface DataTable extends General {
  street: string;
  ward: Ward;
  district: District;
  province: Province;
  person: string;
  countInjection: number;
}
