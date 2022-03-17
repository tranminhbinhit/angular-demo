// import SHA256 from 'crypto-js/sha256';
import * as hmacSHA256 from 'crypto-js/hmac-sha256';
// import SHA1 from 'crypto-js/sha1';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { COMMON_CONST } from './constants';
import * as Base64 from 'crypto-js/enc-base64';

//import Logo from '../../src/assets/common/images/now-logo-white.png';

//import { COMMON_CONST, VERSION_CONFIG } from '../constants/constants';

export function isEmpty(value : string) {
  return value === undefined || value === null || value === '';
}

export function isEmptyObject(obj : any) {
  if (obj !== null && obj !== undefined) return Object.keys(obj).length === 0;
  return true;
}

// export function hashPassword(password, salt, verifyCode) {
//   return String(
//     SHA256(String(SHA256(String(SHA1(password + salt)))) + verifyCode),
//   );
// }

export function isSuccess(response : any) {
  return response.success;
}

// export function getParameterByName(rawName, rawUrl) {
//   let url = rawUrl;
//   if (!rawUrl) {
//     url = window.location.href;
//   }
//   const name = rawName.replace(/[[\]]/g, '\\$&');
//   const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
//   const results = regex.exec(url);
//   if (!results) {
//     return null;
//   }
//   if (!results[2]) {
//     return '';
//   }
//   return decodeURIComponent(results[2].replace(/\+/g, ' '));
// }

// export function validateEmail(email) {
//   // eslint-disable-next-line max-len
//   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// }

// export function genNonce() {
//   const charset =
//     '0123456789ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvwxyz-._~';
//   const result = [];
//   window.crypto
//     .getRandomValues(new Uint8Array(32))
//     .forEach(c => result.push(charset[c % charset.length]));
//   return result.join('');
// }

// export function formatCurrency(
//   value,
//   unit = CONFIG.CURRENCY_SYMBOL,
//   locale = CONFIG.VER,
//   digit = 0,
// ) {
//   const v = parseFloat(value).toLocaleString(locale, {
//     minimumFractionDigits: digit,
//   });
//   if (CONFIG.VER === VERSION_CONFIG.TH) {
//     return unit ? `${unit}${v}` : `${v}`;
//   }
//   return unit ? `${v}${unit}` : `${v}`;
// }

export function getDate(offset = 0) {
  return moment()
    .add(offset, 'days')
    .toDate();
}

// export function parseDate(date) {
//   return moment(date, COMMON_CONST.FormatDate).toDate();
// }

export function parseDateTime(date:any) {
  return moment(date, COMMON_CONST.FormatDateTimeServer).toDate();
}

// export function formatDateServer(date) {
//   return moment(date).format(COMMON_CONST.FormatDateServer);
// }

export function formatDateTimeServer(date : Date) {
  return moment(date).format(COMMON_CONST.FormatDateTimeServer);
}
export function formatDate(date:any) {
  return moment(date).format(COMMON_CONST.FormatDate);
}

export function formatDateTime(date:any) {
  return moment(date).format(COMMON_CONST.FormatDateTime);
}

// export function formatTime(date) {
//   return moment(date).format(COMMON_CONST.FormatTime);
// }

// export function formatDateTimeView(date) {
//   return moment(date).format(COMMON_CONST.FormatDateView);
// }

// export function parseToInt(value) {
//   return parseInt(value, 10);
// }

// export function getIdsPaging(itemIds, activePage, pageSize) {
//   const pageIndex = activePage - 1;
//   return !isEmpty(itemIds)
//     ? itemIds.slice(pageIndex * pageSize, pageIndex * pageSize + pageSize)
//     : [];
// }

// export function getIdsPagingMaps(itemList, activePage, pageSize) {
//   const itemIds = !isEmpty(itemList) ? Array.from(itemList.keys()) : [];
//   return getIdsPaging(itemIds, activePage, pageSize);
// }

export function numberToArray(count: number, start = 1) {
  return [...Array(count - start).keys()].map(item => item + start);
}

// export function decodeUtf8(arrayBuffer) {
//   return new TextDecoder('utf-8').decode(arrayBuffer);
// }

// export async function requestNotificationPermission() {
//   // Check if the browser supports notifications
//   if ('Notification' in window && Notification.permission !== 'denied') {
//     return Notification.requestPermission();
//   }
//   return 'denied';
// }

// export async function sendNotify({ message, icon = Logo, detail }) {
//   // Check if the browser supports notifications
//   if ('Notification' in window) {
//     const createNotification = () => {
//       const notification = new Notification(message, {
//         body: detail,
//         icon,
//         tag: 'uniqueTag',
//       });
//       notification.onclick = () => {
//         window.focus();
//         notification.close();
//       };
//       setTimeout(notification.close.bind(notification), 4000);
//     };

//     if (Notification.permission === 'granted') {
//       createNotification();
//     } else if (Notification.permission !== 'denied') {
//       const permission = await Notification.requestPermission();
//       if (permission === 'granted') {
//         createNotification();
//       }
//     }
//   }
// }

// export function isAllowNotification() {
//   return Notification.permission !== 'denied';
// }

export function getRandomKey(size : number) {
  return Math.random()
    .toString(36)
    .slice(size);
}

export function getKeyHash(url: string, body: any, randomKey : string, timeStamp : string) {
  const newURL = url.replace(/:(\d{1,9})/, '');
  const token = `${newURL}${body}${randomKey}${timeStamp}`;
  const hash = hmacSHA256(token, environment.SERVER_KEY);
  const hashInBase64 = Base64.stringify(hash);
  return hashInBase64;
}

export function getImageCdn(url: string) {
  return `${environment.CDN_URL}/${url}`;
}

export function getHeaders(url : string, body = '', usertoken= ''){
  let randomKey = getRandomKey(-10);
    let timeStamp = formatDateTimeServer(getDate(0));
    let hashKey = getKeyHash(url, body, randomKey, timeStamp);
    return {
      'content-type': 'application/json',
      'E-Client-Language': 'vi',
      'E-Client-Name': 'EnowR',
      'E-Access-Token': hashKey,
      'E-Access-Timestamp': timeStamp,
      'E-Random-Key': randomKey,
      'E-User-Token': usertoken,
    };
}

export function suggetValueRange(value : number = 0, start = 0, end = 120000000, step = 1000000) {
  let result : any = [];
  const lenghtValue = end / step;
  if(value > 0){
    const valueFilter = value.toString().replace(/0/g, '');
    var array = numberToArray(lenghtValue, start);
    result = array.filter(m=> m.toString().indexOf(valueFilter) >= 0 && value <= (m * step) &&  ((m * step < end ) || m < end)).map((m) => {
      return m * step;
    });
  }

  return result;
}
