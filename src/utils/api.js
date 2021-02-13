import axios from 'axios';

export const CMS_API_KEY = 'http://cms.pasukanlangit.id';
export const API_KEY = 'http://20.20.20.3:3500/api/apps/';
export const PASLANG_KEY = 'http://dev.pasukanlangit.id/api/apps/';
export const API_NICE_PAY_KEY = 'https://20.20.20.3:2600/';

export const RECAPTCHA_API_KEY = '6LdP4i0aAAAAAIxWX48V2lF3Y8_ylf8wfcN-CmMS';

export const USERS_REGISTER = 'users/register';
export const USERS_LOGIN = 'users/login';
export const USERS_LOGOUT = 'users/logout';
export const USERS_PROFILE = 'users/profile';
export const USERS_CHANGE_PIN = 'users/change_pin';
export const USERS_CHANGE_PIN_AWAL = 'users/change_pin_awal';
export const USERS_PROFILE_UPDATE = 'users/profile_update';
export const USERS_RESET_PIN = 'users/reset_pin';
export const USERS_RESET_PIN_OTP = 'users/reset_pin_otp';
export const USERS_RESET_PASS = 'users/reset_pass';
export const USERS_RESET_PASS_OTP = 'users/reset_pass_otp';
export const USERS_MSG_SEND = 'users/msg_send';
export const USERS_MSG_SEND_UNICODE = 'users/msg_send_unicode';
export const USERS_PULL_INBOX = 'users/pull_inbox';
export const USERS_PARALLEL_NUMBER = 'users/parallel_number';

export const BALANCE_CHECK = 'balance/check';
export const BALANCE_MUTATION = 'balance/mutation';
export const BALANCE_TOPUP = 'balance/topup';
export const BALANCE_TOPUP_VA = 'balance/topupva';
export const BALANCE_TOPUP_CVS = 'balance/topupcvs';
export const BALANCE_TOPUP_WALLET = 'balance/topupwallet';
export const BALANCE_TRANSFER = 'balance/transfer';
export const BALANCE_RETRACT = 'balance/retract';
export const BALANCE_DEPOSIT_HISTORY = 'balance/deposit_history';

export const TRX_SEND = 'trx/send';
export const TRX_CHECK = 'trx/check';
export const TRX_HISTORY = 'trx/history';
export const TRX_SUMMARY = 'trx/summary';
export const PRINT_RECEIPT = 'trx/print_receipt';

export const DOWNLINE_REGISTER = 'downline/register';
export const DOWNLINE_LIST = 'downline/list';
export const DOWNLINE_MARKUP = 'downline/markup';
export const DOWNLINE_BLOCK = 'downline/block';
export const DOWNLINE_UNBLOCK = 'downline/unblock';

export const PRODUCT_LIST = 'product/list';
export const PROVIDER_LIST = 'provider/list';

export const LOOKUP_PROVINCES = 'lookup/provinces';
export const LOOKUP_REGENCIES = 'lookup/regencies';
export const LOOKUP_DISTRICTS = 'lookup/districts';
export const LOOKUP_VILLAGES = 'lookup/villages';
export const LOOKUP_PROVIDER_LIST = 'lookup/provider_list';
export const LOOKUP_PRODUCT_LIST = 'lookup/product_list';
export const LOOKUP_PDAM_LIST = 'lookup/pdam_list';

export const getProductList = async (category, kode_provider) => {
  const response = await axios.post(PASLANG_KEY + LOOKUP_PRODUCT_LIST, {
    category,
    kode_provider,
    is_faktur: '',
  });
  return response.data;
};
