// status array for Landing Page
export const StatusLanding = [
  { title: 'All Items', value: '2236', styleColor: '#1f1c2e' },
  { title: 'Good', value: '1739', styleColor: '#34c471' },
  { title: 'Under Repair', value: '497', styleColor: '#ff942e' },
];
// status array for Generate Code Page
export const StatusGenerate = [
  { title: 'Ganerated', value: '2236', styleColor: '#1f1c2e' },
  // { title: 'Checked', value: '1739' },
  // { title: 'Pending', value: '497' },
];
// status array for scaning code page
export const StatusScan = [
  { title: 'Total Scan', value: '2236', styleColor: '#1f1c2e' },
  { title: 'This Month', value: '1739', styleColor: '#34c471' },
];
// ----------------------------------------------------------------------------------
export const WidgetLandingData = [
  {
    id: 1,
    // this can be today's date
    date: 'December 10, 2020',
    mainTitle: 'Mechanics', // *******************
    // here i can do if else ,, if there is underRapair Items !== 0 return under Repair
    subTitle: 'All Good',
    // here i can 
    bgColor: '#fee4cb',
    color: '#ff942e',
    // i can do this in front end as well
    progress: '100%',
    // count all itrms / i can do it in front end 
    doneItems: '3',
    // i can do it in front end as well
    pendingItems: '0',
  },
  {
    id: 2,
    date: 'December 10, 2020',
    mainTitle: 'Electricity',
    subTitle: 'Under Repair',
    bgColor: '#e9e7fd',
    color: '#4f3ff0',
    progress: '98%',
    doneItems: '231',
    pendingItems: '12',
  },
  {
    id: 3,
    date: 'December 10, 2020',
    mainTitle: 'Agricultural',
    subTitle: 'Under Repair',
    bgColor: '#ffd3e2',
    color: '#df3670',
    progress: '79%',
    doneItems: '123',
    pendingItems: '21',
  },
  {
    id: 5,
    date: 'December 10, 2020',
    mainTitle: 'Cameras',
    subTitle: 'Under Repair',
    bgColor: '#d5deff',
    color: '#4067f9',
    progress: '90%',
    doneItems: '56',
    pendingItems: '8',
  },
  {
    id: 4,
    date: 'December 10, 2020',
    mainTitle: 'Networks',
    subTitle: 'All Good',
    bgColor: '#c8f7dc',
    color: '#34c471',
    progress: '100%',
    doneItems: '42',
    pendingItems: '0',
  },
  {
    id: 6,
    date: 'December 10, 2020',
    mainTitle: 'swimming Pools',
    subTitle: 'Under Repair',
    bgColor: '#fee4cb',
    color: '#ff942e',
    progress: '80%',
    doneItems: '123',
    pendingItems: '13',
  },
];

// ---------------------------------------------------------
// side bar For Real time Scanning
export const RealTimeScanning = [
  {
    id: 1,
    date: 'Dec, 12',
    title: 'Stephanie',
    body: 'I got your first assignment. It was quite good. 🥳 We can continue with the next assignment',
    avatarUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
    state: 'true',
  },
  {
    id: 2,
    date: 'Dec, 12',
    title: 'Mark',
    body: "Hey, can tell me about progress of project? I'm waiting for your response",
    avatarUrl:
      'https://images.unsplash.com/photo-1543965170-4c01a586684e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    state: 'true',
  },
  {
    id: 3,
    date: 'Dec, 12',
    title: 'David',
    body: "Hey, can tell me about progress of project? I'm waiting for your response",
    avatarUrl:
      'https://images.unsplash.com/photo-1543965170-4c01a586684e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDZ8fG1hbnxlbnwwfDB8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    state: 'false',
  },
  {
    id: 4,
    date: 'Dec, 11',
    title: '',
    body: "Hey, can tell me about progress of project? I'm waiting for your response",
    avatarUrl:
      'https://images.unsplash.com/photo-1533993192821-2cce3a8267d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFuJTIwbW9kZXJufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    state: 'true',
  },
  {
    id: 5,
    date: 'Dec, 10',
    title: 'David',
    body: "Hey, can tell me about progress of project? I'm waiting for your response",
    avatarUrl:
      'https://images.unsplash.com/photo-1533993192821-2cce3a8267d1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fHdvbWFuJTIwbW9kZXJufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
    state: 'true',
  },
];

// ----------------------------------------------------------
// constants for Main Category pages
export const MainCategoryValues = ['Mec', 'Elc', 'Ls', 'Net', 'Cam', 'Pool'];

// constants for Sub Category Pages
export const MechanicsOptions = [
  { code: 'Car', label: 'سيارة' },
  { code: 'Elc-Generator', label: 'مولد كهروبائي' },
];
// -----------------------------------------
export const ElectricityOptions = [
  { code: 'Elc-Panel', label: 'لوحة كهرباء' },
  { code: 'Master-Key', label: 'مفتاح رئيسي' },
  { code: 'Sub-Key', label: 'مفتاح فرعي' },
  { code: 'Ground-Key', label: 'مفتاح ارضي' },
  { code: 'Light-Cell', label: 'خلية ضوئية' },
  { code: 'Contactor-Key', label: 'مفتاح كونتكتور' },
  { code: 'Timer', label: 'تايمر' },
  { code: 'Light-Pole', label: 'عامود إنارة' },
  { code: 'Base-Torch', label: 'كشاف قاعدة' },
  { code: 'Spear-Led', label: 'حربة ليد' },
];
// -----------------------------------------
export const AgriculturalOptions = [
  { code: 'Grass-Machine', label: 'ماكينة قص النجيلة' },
  { code: 'Spray-Motor', label: 'موتور رش' },
  { code: 'Metal-Machine', label: 'ماكينة حديد' },
];
// -----------------------------------------
export const NetworksOptions = [
  { code: 'Bein-Receiver', label: 'ريسيفر بين سبورت' },
  { code: 'OSN-Receiver', label: 'ريسيفر او اس ان' },
  { code: 'Node', label: 'نود' },
];
// -----------------------------------------
export const CamerasOptions = [
  { code: 'Camera', label: 'كاميرا مراقبة' },
  { code: 'Trans', label: 'ترنس' },
  { code: 'Driver', label: 'درايفر' },
  { code: 'Monitor', label: 'شاشة' },
];
// -----------------------------------------
export const poolsOptions = [
  { code: 'Elc-Substation', label: 'نقطة كهرباء' },
  { code: 'Motor', label: 'موتور حمام السباحة' },
  { code: 'Torch', label: 'كشاف إنارة حمام سباحة' },
  { code: 'Stopcock', label: 'محبس حمام سباحة' },
  { code: 'Cleaning-Machine', label: 'مكنة نظافة حمام سباحة' },
  { code: 'Cleaning-brush', label: 'فرشة نظافة حمام' },
  { code: 'Umbrella', label: 'شمسية حمام سباحة' },
  { code: 'Chazlong', label: 'شيزلونج' },
  { code: 'Chaise_Longue-chare', label: 'كرسي شيزلونج' },
  { code: 'chare', label: 'كرسي عادة' },
  { code: 'BeanBag', label: 'بين باج' },
];
// ------------------------------------------
// export const SanitationOptions = [
//   { code: 'A', label: 'ماكينة قص النجيلة' },
//   { code: 'B', label: 'موتور رش' },
//   { code: 'C', label: 'ماكينة حديد' },
// ];
