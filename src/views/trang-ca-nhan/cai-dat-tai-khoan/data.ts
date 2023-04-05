import { FormSchema } from '/@/components/Form/index';

export interface ListItem {
  key: string;
  title: string;
  description: string;
  extra?: string;
  avatar?: string;
  color?: string;
}
const colLienHe = 12;
const colTTkhac = 8;
const labelWidth = 150;
// tab的list
export const settingList = [
  {
    key: '1',
    name: 'Thông tin cá nhân',
    component: 'ThongTinCaNhan',
  },
  {
    key: '2',
    name: 'Thông tin liên hệ',
    component: 'ThongTinLienHe',
  },
  {
    key: '3',
    name: 'Thông tin khác',
    component: 'ThongTinKhac',
  },
  {
    key: '4',
    name: 'Đổi mật khẩu',
    component: 'DoiMatKhau',
  },
];

// 基础设置 form
export const thongTinCaNhanSchemas: FormSchema[] = [
  {
    field: 'email',
    component: 'Input',
    label: 'Tên thánh',
    labelWidth: labelWidth,
    colProps: { span: 18 },
  },
  {
    field: 'name',
    component: 'Input',
    label: 'Tên gọi',
    labelWidth: labelWidth,
    colProps: { span: 18 },
  },
  {
    field: 'introduction',
    component: 'DatePicker',
    label: 'Ngày tháng năm sinh',
    labelWidth: labelWidth,
    colProps: { span: 18 },
  },
  {
    field: 'phone',
    component: 'Input',
    label: 'Số điện thoại',
    labelWidth: labelWidth,
    colProps: { span: 18 },
  },
  {
    field: 'address',
    component: 'Input',
    label: '所在地区',
    labelWidth: labelWidth,
    colProps: { span: 18 },
  },
];
export const thongTinLienHeSchemas: FormSchema[] = [
  {
    field: 'tenBo',
    component: 'Input',
    label: 'Tên thánh/ tên gọi Bố',
    labelWidth: labelWidth,
    colProps: { span: colLienHe },
  },
  {
    field: 'tenBo',
    component: 'Input',
    label: 'Số điện thoại Bố',
    labelWidth: labelWidth,
    colProps: { span: colLienHe },
  },
  {
    field: 'tenBo',
    component: 'Input',
    label: 'Tên thánh/ tên gọi Mẹ',
    labelWidth: labelWidth,
    colProps: { span: colLienHe },
  },
  {
    field: 'tenBo',
    component: 'Input',
    label: 'Số điện thoại Mẹ',
    labelWidth: labelWidth,
    colProps: { span: colLienHe },
  },
  {
    field: 'tenBo',
    component: 'ApiTreeSelect',
    label: 'Giáo xứ',
    labelWidth: labelWidth,
    colProps: { span: colLienHe },
  },
  {
    field: 'tenBo',
    component: 'InputTextArea',
    label: 'Địa chỉ hành chính',
    labelWidth: labelWidth,
    colProps: { span: colLienHe },
  },
];
export const thongTinKhacSchemas: FormSchema[] = [
  {
    field: 'ngayRuaToi',
    component: 'DatePicker',
    label: 'Ngày rửa tội',
    labelWidth: labelWidth,
    colProps: { span: colTTkhac },
  },
  {
    field: 'nguoiRuaToi',
    component: 'Input',
    label: 'Người rửa tội',
    labelWidth: labelWidth,
    colProps: { span: colTTkhac },
  },
  {
    field: 'nguoiDoDauRuaToi',
    component: 'Input',
    label: 'Người đỡ đầu',
    labelWidth: labelWidth,
    colProps: { span: colTTkhac },
  },
  {
    field: 'ngayThemSuc',
    component: 'DatePicker',
    label: 'Ngày thêm sức',
    labelWidth: labelWidth,
    colProps: { span: colTTkhac },
  },
  {
    field: 'nguoiThemSuc',
    component: 'Input',
    label: 'Người thêm sức',
    labelWidth: labelWidth,
    colProps: { span: colTTkhac },
  },
  {
    field: 'nguoiDoDauThemSuc',
    component: 'Input',
    label: 'Người đỡ đầu',
    labelWidth: labelWidth,
    colProps: { span: colTTkhac },
  },
  {
    field: 'ngayKetHon',
    component: 'DatePicker',
    label: 'Ngày kết hôn',
    labelWidth: labelWidth,
    colProps: { span: colTTkhac },
  },
  {
    field: 'phoiNgauId',
    component: 'Input',
    label: 'Phối ngẫu',
    labelWidth: labelWidth,
    colProps: { span: colTTkhac },
  },
  {
    field: 'nguoiLamChung1',
    component: 'Input',
    label: 'Người làm chứng 1',
    labelWidth: labelWidth,
    colProps: { span: colTTkhac },
  },
  {
    field: 'nguoiLamChung2',
    component: 'Input',
    label: 'Người làm chứng 2',
    labelWidth: labelWidth,
    colProps: { span: colTTkhac },
  },
];
export const doiMatKhauSchemas: FormSchema[] = [
  {
    field: 'email',
    component: 'InputPassword',
    label: 'Mật khẩu cũ',
    labelWidth: labelWidth,
    colProps: { span: 18 },
  },
  {
    field: 'name',
    component: 'InputPassword',
    label: 'Mật khẩu mới',
    labelWidth: labelWidth,
    colProps: { span: 18 },
  },
  {
    field: 'introduction',
    component: 'InputPassword',
    label: 'Nhập lại mật khẩu mới',
    labelWidth: labelWidth,
    colProps: { span: 18 },
  },
];
