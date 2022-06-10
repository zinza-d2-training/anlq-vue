export const labelDate = [
  '10/05',
  '11/05',
  '12/05',
  '13/05',
  '14/05',
  '15/05',
  '16/05',
  '17/05',
  '18/05',
  '19/05',
  '20/05',
  '21/05',
  '22/05',
  '23/05',
  '24/05',
  '25/05',
  '26/05',
  '27/05',
  '28/05',
  '29/05',
  '30/05',
  '31/05',
  '01/06',
  '02/06',
  '03/06',
  '04/06',
  '05/06',
  '06/06'
];

export const dataDate = [
  257013, 184428, 186901, 282161, 164700, 79454, 338133, 201046, 559443, 658999, 247410, 39415,
  35735, 177957, 540752, 344891, 310420, 193904, 85168, 59240, 380080, 234456, 165808, 99936,
  226430, 138755, 49776, 179830
];

export const addressData = [
  {
    id: 1,
    name: 'Thành phố Hà Nội',
    districts: [
      {
        id: 1,
        name: 'Quận Ba Đình',
        wards: [
          {
            id: 1,
            name: 'Phường Phúc Xá'
          },
          {
            id: 2,
            name: 'Phường Vĩnh Phúc'
          }
        ]
      },
      { id: 2, name: 'Quận Cầu Giấy' },
      { id: 3, name: 'Quận Hà Đông' }
    ]
  },
  {
    id: 2,
    name: 'Tỉnh Hà Giang'
  },
  {
    id: 3,
    name: 'Tỉnh Cao Bằng'
  },
  {
    id: 4,
    name: 'Tỉnh Hà Nam'
  },
  {
    id: 5,
    name: 'Tỉnh Lào Cai'
  },
  {
    id: 6,
    name: 'Tỉnh Điện Biên'
  },
  {
    id: 7,
    name: 'Tỉnh Hải Phòng'
  },
  {
    id: 8,
    name: 'Tỉnh Hòa Bình'
  },
  {
    id: 9,
    name: 'Thành phố Hồ Chí Minh'
  },
  {
    id: 10,
    name: 'Tỉnh Nam Định'
  }
];

export const headerTableData = [
  {
    text: 'STT',
    value: 'id'
  },
  {
    text: 'Tên điểm tiêm',
    align: 'left',
    value: 'name'
  },
  {
    text: 'Số nhà, tên đường',
    align: 'left',
    value: 'street'
  },
  {
    text: 'Xã/phường',
    align: 'left',
    value: 'ward.name'
  },
  {
    text: 'Quận/Huyện',
    align: 'left',
    value: 'district.name'
  },
  {
    text: 'Tỉnh/Thành phố',
    align: 'left',
    value: 'province.name'
  },
  {
    text: 'Người đứng đầu cơ sở tiêm chủng',
    value: 'person'
  },
  {
    text: 'Số bàn tiêm',
    align: 'left',
    value: 'countInjection'
  }
];

export const dataTables = [
  {
    id: 1,
    name: 'Trạm ý thế Phường Phúc Xá',
    street: '84 Nghĩa Dũng',
    ward: {
      id: 1,
      name: 'Phúc Xá'
    },
    district: {
      id: 1,
      name: 'Quận Ba Đình'
    },
    province: {
      id: 1,
      name: 'Thành phố Hà Nội'
    },
    person: 'Đỗ Thế Bảo',
    countInjection: 1
  },
  {
    id: 2,
    name: 'Bệnh viện Đa khoa Hồng Ngọc',
    street: '55 Yên Ninh',
    ward: {
      id: 1,
      name: 'Trúc Bạch'
    },
    district: {
      id: 1,
      name: 'Quận Ba Đình'
    },
    province: {
      id: 1,
      name: 'Thành phố Hà Nội'
    },
    person: 'Cao Độc Lập',
    countInjection: 1
  },
  {
    id: 3,
    name: 'Bệnh viện Tỉnh Hà Nam',
    street: '55 Yên Ninh',
    ward: {
      id: 1,
      name: 'Hai Bà Trưng'
    },
    district: {
      id: 1,
      name: 'Huyện Kim Bảng'
    },
    province: {
      id: 4,
      name: 'Tỉnh Hà Nam'
    },
    person: 'Nguyễn Văn A',
    countInjection: 1
  },
  {
    id: 4,
    name: 'Trạm ý thế Phường Phúc Xá 1',
    street: '84 Nghĩa Dũng',
    ward: {
      id: 1,
      name: 'Phúc Xá'
    },
    district: {
      id: 1,
      name: 'Quận Ba Đình'
    },
    province: {
      id: 1,
      name: 'Thành phố Hà Nội'
    },
    person: 'Đỗ Thế Bảo',
    countInjection: 1
  },
  {
    id: 5,
    name: 'Bệnh viện Đa khoa Hồng Ngọc 1',
    street: '55 Yên Ninh',
    ward: {
      id: 1,
      name: 'Trúc Bạch'
    },
    district: {
      id: 1,
      name: 'Quận Ba Đình'
    },
    province: {
      id: 1,
      name: 'Thành phố Hà Nội'
    },
    person: 'Cao Độc Lập',
    countInjection: 1
  },
  {
    id: 6,
    name: 'Bệnh viện Tỉnh Hà Nam 1',
    street: '55 Yên Ninh',
    ward: {
      id: 1,
      name: 'Nguyễn Trãi'
    },
    district: {
      id: 1,
      name: 'Huyện Kim Bảng'
    },
    province: {
      id: 4,
      name: 'Tỉnh Hà Nam'
    },
    person: 'Nguyễn Văn A',
    countInjection: 1
  },
  {
    id: 7,
    name: 'Trạm ý thế Phường Phúc Xá 2',
    street: '84 Nghĩa Dũng',
    ward: {
      id: 1,
      name: 'Phúc Xá'
    },
    district: {
      id: 1,
      name: 'Quận Ba Đình'
    },
    province: {
      id: 1,
      name: 'Thành phố Hà Nội'
    },
    person: 'Đỗ Thế Bảo',
    countInjection: 1
  },
  {
    id: 8,
    name: 'Bệnh viện Đa khoa Hồng Ngọc 2',
    street: '55 Yên Ninh',
    ward: {
      id: 1,
      name: 'Trúc Bạch'
    },
    district: {
      id: 1,
      name: 'Quận Ba Đình'
    },
    province: {
      id: 1,
      name: 'Thành phố Hà Nội'
    },
    person: 'Cao Độc Lập',
    countInjection: 1
  },
  {
    id: 9,
    name: 'Bệnh viện Tỉnh Hà Nam 2',
    street: '55 Yên Ninh',
    ward: {
      id: 4,
      name: 'Hai Bà Trưng'
    },
    district: {
      id: 1,
      name: 'Huyện Kim Bảng'
    },
    province: {
      id: 1,
      name: 'Tỉnh Hà Nam'
    },
    person: 'Nguyễn Văn A',
    countInjection: 1
  },
  {
    id: 10,
    name: 'Trạm ý thế Phường Phúc Xá 3',
    street: '84 Nghĩa Dũng',
    ward: {
      id: 1,
      name: 'Phúc Xá'
    },
    district: {
      id: 1,
      name: 'Quận Ba Đình'
    },
    province: {
      id: 1,
      name: 'Thành phố Hà Nội'
    },
    person: 'Đỗ Thế Bảo',
    countInjection: 1
  },
  {
    id: 11,
    name: 'Bệnh viện Đa khoa Hồng Ngọc 3',
    street: '55 Yên Ninh',
    ward: {
      id: 1,
      name: 'Trúc Bạch'
    },
    district: {
      id: 1,
      name: 'Quận Ba Đình'
    },
    province: {
      id: 1,
      name: 'Thành phố Hà Nội'
    },
    person: 'Cao Độc Lập',
    countInjection: 1
  },
  {
    id: 12,
    name: 'Bệnh viện Tỉnh Hà Nam 1',
    street: '55 Yên Ninh',
    ward: {
      id: 1,
      name: 'Hai Bà Trưng'
    },
    district: {
      id: 1,
      name: 'Huyện Kim Bảng'
    },
    province: {
      id: 4,
      name: 'Tỉnh Hà Nam'
    },
    person: 'Nguyễn Văn A',
    countInjection: 1
  }
];
