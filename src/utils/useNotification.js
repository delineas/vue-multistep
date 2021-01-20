import { ElNotification } from "element-plus";

const useNotification = () => {

  const notification = (type, options) => {
    ElNotification[type](options);
  }

  return notification;

}

export { useNotification }