import {notification} from 'antd'
export const openNotificationWithIcon = (type) => {
    const contentText = type ==='success'? 'Thành Công':'Thất bại'
    notification[type]({
      message: "THÔNG BÁO",
      description: contentText
    });
  };
  