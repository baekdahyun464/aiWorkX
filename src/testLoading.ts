/* 화면 로딩용 데이터 */

// select
export const selectOp = [
  { value: 'select1', label: '선택1' },
  { value: 'select2', label: '선택2' },
  { value: 'select3', label: '선택3' },
];

// menu
export const menuData = [
  {
    name: '1depthMenu_01',
    isDisabled: true,
  },
  {
    name: '1depthMenu_02',
    subMenu: [
      { name: '2depthMenu_02-1', link: 'https://www.naver.com/' },
      { name: '2depthMenu_02-2', link: '#', isDisabled: true },
    ],
  },
  {
    name: '1depthMenu_03',
    link: '#',
    subMenu: [
      { name: '2depthMenu_03-1', link: 'https://www.naver.com/' },
      { name: '2depthMenu_03-2', link: '#' },
    ],
  },
  {
    name: '1depthMenu_04',
    link: '#',
  },
];

// radio
export const radioData = [
  { id: 'test01', name: 'test', text: '라디오01' },
  { id: 'test01', name: 'test', text: '라디오02' },
];

// table
export const columns = [
  'Project',
  'TC',
  'Binary',
  'Started Date',
  'Finished Date',
  'Duration',
  'Action',
];

export const data = [
  [
    'eabsp_2024_la',
    'system-lkboot-8677.py',
    0,
    '2025-05-28 09:51',
    '2025-05-28 09:51',
    '-',
    { btn: true },
  ],
  [
    'eabsp_2024_la',
    'system-lkboot-8677.py',
    0,
    '2025-05-28 09:51',
    '2025-05-28 09:51',
    '-',
    'Action Btns',
  ],
  [
    'other_model',
    'analyze-log.py',
    5,
    '2025-06-01 10:00',
    '2025-06-01 10:30',
    '-',
    { tag: true }, // 태그
  ],
  [
    'log_process',
    'init.py',
    3,
    '2025-06-01 11:00',
    '2025-06-01 11:30',
    '-',
    { input: true }, // 인풋
  ],
];

export const testTitle = [
  'Project',
  'TC',
  'Binary',
  'Duration',
  'Started Date',
  'Finished Date',
];

export const testData = [
  [
    'eabsp_2024_la1',
    'system-lkboot-8677.py',
    0,
    '-',
    '2025-05-28 09:51',
    '2025-05-28 09:51',
  ],
  [
    'eabsp_2024_la2',
    'system-lkboot-8677.py',
    0,
    '-',
    '2025-05-28 09:51',
    '2025-05-28 09:51',
  ],
  [
    'other_model3',
    'analyze-log.py',
    5,
    '-',
    '2025-06-01 10:00',
    '2025-06-01 10:30',
  ],
  ['log_process4', 'init.py', 3, '-', '2025-06-01 11:00', '2025-06-01 11:30'],
  [
    'eabsp_2024_la5',
    'system-lkboot-8677.py',
    0,
    '-',
    '2025-05-28 09:51',
    '2025-05-28 09:51',
  ],
  [
    'eabsp_2024_la6',
    'system-lkboot-8677.py',
    0,
    '-',
    '2025-05-28 09:51',
    '2025-05-28 09:51',
  ],
  [
    'other_model7',
    'analyze-log.py',
    5,
    '-',
    '2025-06-01 10:00',
    '2025-06-01 10:30',
  ],
  ['log_process8', 'init.py', 3, '-', '2025-06-01 11:00', '2025-06-01 11:30'],
];

// card
export const cardListData = [
  {
    id: 1,
    tested: 4,
    goal: 10,
    isStatus: true,
  },
  {
    id: 2,
    tested: 7,
    goal: 10,
    isStatus: false,
  },
  {
    id: 3,
    tested: 10,
    goal: 10,
    isStatus: true,
  },
  {
    id: 4,
    tested: 2,
    goal: 10,
    isStatus: false,
  },
  {
    id: 5,
    tested: 8,
    goal: 10,
    isStatus: false,
  },
  {
    id: 6,
    tested: 8,
    goal: 10,
    isStatus: false,
  },
];

// dutData
export const dutListData = [
  {
    label: 'DUT1',
    rate: 30,
    pass: 3,
    fail: 2,
    total: 10,
    isStatus: 'testing',
  },
  {
    label: 'DUT2',
    rate: 30,
    pass: 3,
    fail: 2,
    total: 10,
    isStatus: 'ready',
  },
  {
    label: 'DUT3',
    rate: 30,
    pass: 3,
    fail: 2,
    total: 10,
    isStatus: 'running',
  },
  {
    label: 'DUT4',
    rate: 30,
    pass: 3,
    fail: 2,
    total: 10,
    isStatus: 'testing',
  },
  {
    label: 'DUT5',
    rate: 30,
    pass: 3,
    fail: 2,
    total: 10,
    isStatus: 'ready',
  },
  {
    label: 'DUT6',
    rate: 30,
    pass: 3,
    fail: 2,
    total: 10,
    isStatus: 'running',
  },
];
