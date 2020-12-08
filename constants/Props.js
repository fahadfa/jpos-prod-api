"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Props = /** @class */ (function () {
    function Props() {
    }
    Props.APP_NAME = "JAZEERA TECH";
    Props.SALT_KEY = "SALT256DL";
    Props.ACCESS_READ = "READ";
    Props.ACCESS_WRITE = "WRITE";
    Props.REDEEM_CLIENT_ID = "MPOS";
    Props.REDEEM_CLIENT_SECRET = "N7ef3rqHvY6rvJM";
    Props.REDEEM_URL = "http://pos.al-jazeerapaints.com:200/api/Authenticate";
    Props.AXAPTA_URL = "http://pos.al-jazeerapaints.com:200/api/";
    Props.ECOMMERCE_PAYMENT_URL = "https://qa.jazeerapaints.com/jpos_orders/";
    //public static ECOMMERCE_PAYMENT_URL = "https://pre-prod.jazeerapaints.com/jpos_orders/";
    Props._URL = "https://qa-api-mpos-sync.jazeerapaints.com/api/axaptaorders/";
    Props._TOKEN = "UmVzdEFkbWluOkFkbTFuMHdu";
    Props.DAY = "day";
    Props.WEEK = "week";
    Props.MONTH = "month";
    Props.YEAR = "year";
    Props.TOKEN_MESSAGE = "PLEASE_ENTER_THE_TOKEN";
    Props.SAVED_SUCCESSFULLY = "SAVED_SUCCESSFULLY";
    Props.REQUESTED_SUCCESSFULLY = "REQUESTED";
    Props.REJECTED_SUCCESSFULLY = "REJECTED";
    Props.UNRESERVED_SUCCESSFULLY = "UNRESERVED";
    Props.PLEASE_LOGIN = "PLEASE_LOGIN";
    Props.REMOVED_SUCCESSFULLY = "REMOVED";
    Props.INVALID_DATA = "PLEASE_ENTER_VALID_DATA";
    Props.INVALID_AUTH = "INVALID_AUTHENTICATION";
    Props.INVALID_SALESLINE_DATA = "PLEASE_PROVIDE_THE_SUMMARY_DATA";
    Props.MOBILE_EXISTS = "MOBILE_ALREADY_EXISTS";
    Props.EMAIL_EXISTS = "Your email already exists";
    Props.NO_WORKFLOW_REQUIRED = "WORKFLOW_NOT_REQUIRED";
    Props.ORDER_NOT_FOUND = "ORDER_NOT_FOUND";
    Props.INVALID_PASSWORD = "INVAILD_PASWORD";
    Props.INVALID_USERNAME = "INVALID_USERNAME/PASSWORD";
    Props.INVALID_TOKEN = "INVALID_TOKEN";
    Props.PASSWORD_UPDATED_SUCCESSFULLY = "PASSWORD_UPDATED";
    Props.PASSWORD_RESET_SUCCESSFULLY = "PASSWORD_RESETED";
    Props.PASSWORD_RESET_TOKEN = "RESET_TOKEN_SENT_TO_YOUR_MAIL";
    Props.CUSTOMER_RECORD_EXISTS = "RECORD_ALREASY_EXISTS";
    Props.PROVIDE_ID = "PLEASE_PROVIDE_ID";
    Props.DUPLICATE_RECORD = "DUPLICATE_RECORD";
    Props.DATA_NOT_FOUND = "DATA_NOT_FOUND";
    Props.NO_NUMBER_SEQUENCE = "CANNOT_FIND_SEQUENCE_FORMAT_FROM_NUMBER_SEQUENCE_TABLE";
    Props.VERIFIED = "VERIFIED";
    Props.OTP_EXPIRED = "OTP_EXPIRED";
    Props.INVALID_MOBILE = "MOBILE_NUMBER_IS_NOT_VALID";
    Props.SALES_ID_REQUIRED = "Sales Id Required";
    Props.NO_VENDOR_FOR_CUSTOMER = "CANNOT_CREATE_PURCHASE_ORDER_BECAUSE_THERE_IS_NO_CUSTOMER_ACCOUNT_RELATED_TO_THIS_VENDOR_ID";
    Props.TRANSKIND_REQUIRED = "TRANSKIND_REQUIRED";
    Props.ALREADY_CONVERTED = "ALREADY_CONVERTED";
    Props.NO_RM = "NO_RM_ADDED_TO_YOUR_GROUP_PLEASE_CONTACT_SYSTEM_ADMIN";
    Props.NO_RA = "NO_RA_ADDED_TO_YOUR_GROUP_PLEASE_CONTACT_SYSTEM_ADMIN";
    Props.NO_DESIGNER = "NO_DESIGNER_ADDED_TO_YOUR_GROUP_PLEASE_CONTACT";
    Props.RECORD_EXISTS = "RECORD_ALREADY_EXISTS";
    Props.RECORD_NOT_EXISTS = "RECORD_NOT_FOUND";
    Props.MISS_MATCH_MESSAGE = "ALREADY_UPDATED_THE_RECORD_PLEASE_DO_REFRESH_AND_CONTINUESome one updated the recored, please do refresh and continue.";
    Props.RECORD_NOT_FOUND = "RECORD_NOT_FOUND";
    Props.ACCOUNT_DEACTIVATED = "ACCOUNT_DEACTIVATED,_PLEASE_CONTACT_ADMIN";
    Props.TRACK_STATUS_NEW = "NEW";
    Props.TRACK_STATUS_PROCESSING = "PROCESSING";
    Props.TRACK_STATUS_COMPLETE = "COMPLETE";
    Props.TRACK_STATUS_CANCEL = "CANCEL";
    Props.TRACK_STATUS_PAID = "PAID";
    Props.TRACK_STATUS_REFUND = "REFUND";
    Props.TRACK_STATUS_REPAID = "REPAID";
    Props.TRACK_STATUS_DISCONNECT = "DISCONNECT";
    Props.TRACK_STATUS_BOOKING = "BOOKING";
    Props.TRACK_STATUS_CHECK_IN = "CHECK IN";
    Props.TRACK_STATUS_CHECK_OUT = "CHECK OUT";
    Props.PROFILE_STATUS_VERIFIED = "VERIFIED";
    Props.PROFILE_STATUS_INPROGRESS = "INPROGRESS";
    Props.PROFILE_STATUS_UNVERIFIED = "UNVERIFIED";
    Props.PROFILE_STATUS_CHANGE_REQUIRED = "CHANGE_REQUIRED";
    Props.NO_ITEM_AMOUNT = "No price is attached to this customer price group";
    Props.RCUSTTYPE = {
        0: [0, "Charity", "الاعمال الخيرية"],
        1: [1, "Individual", "أفراد"],
        2: [2, "Painters", "دهان"],
        3: [3, "Paints Contractor", "دهان مقاول - مؤسسات"],
        4: [4, "Interior Designer", "مصمم داخلي"],
        5: [5, "Decoration Shops", "محلات الديكور"],
        6: [6, "Family", "عوائل"],
        7: [7, "Real Estate", "العقاريون"],
        8: [8, "Tile Workers", "مبلطين"],
        9: [9, "ISOLATION", "عوازل"],
    };
    Props.rcusttypeEn = {
        Charity: 0,
        Individual: 1,
        Painters: 2,
        "Paints Contractor": 3,
        "Interior Designer": 4,
        "Decoration Shops": 5,
        Family: 6,
        "Real Estate": 7,
        "Tile Workers": 8,
        ISOLATION: 9,
    };
    Props.rcusttypeAr = {
        "الاعمال الخيرية": 0,
        أفراد: 1,
        دهان: 2,
        "دهان مقاول - مؤسسات": 3,
        "مصمم داخلي": 4,
        "محلات الديكور": 5,
        عوائل: 6,
        العقاريون: 7,
        مبلطين: 8,
        عوازل: 9,
    };
    Props.WORKFLOW_ORDER_TYPE = {
        SALESQUOTATION: [2, "SALESQUOTATION", "Sales Quotation"],
        SALESORDER: [3, "SALESORDER", "Sales Order"],
        PURCHASEREQUEST: [4, "PURCHASEREQUEST", "Purchase Request"],
        PURCHASEORDER: [5, "PURCHASEORDER", "Purchase Order"],
        INVENTORYMOVEMENT: [6, "INVENTORYMOVEMENT", "Movement"],
        RETURNORDER: [7, "RETURNORDER", "Return Order"],
        PURCHSERETURNORDER: [8, "PURCHSERETURNORDER", "Purchase Return Order"],
        DESIGNERSERVICERETURN: [9, "DESIGNERSERVICERETURN", "designer Service Return Order"],
        DESIGNERSERVICE: [10, "DESIGNERSERVICE", "designer Service"],
    };
    Props.Workflow_Order_Type = {
        2: [2, "SALESQUOTATION", "Sales Quotation"],
        3: [3, "SALESORDER", "Sales Order"],
        4: [4, "PURCHASEREQUEST", "Purchase Request"],
        5: [5, "PURCHASEORDER", "Purchase Order"],
        6: [6, "INVENTORYMOVEMENT", "Movement"],
        7: [7, "RETURNORDER", "Return Order"],
        8: [8, "PURCHSERETURNORDER", "Purchase Return Order"],
        9: [9, "DESIGNERSERVICERETURN", "designer Service Return Order"],
        10: [10, "DESIGNERSERVICE", "designer Service"],
    };
    Props.CUSTTYPE = {
        0: ["CHARITY", 0, "Charity", "Charity"],
        1: ["AGENT", 1, "Agent", "Agent"],
        2: ["PROJECT", 2, "Project", "Project"],
        3: ["SHOWROOM", 3, "Showroom", "Showroom"],
        4: ["OTHERS", 4, "Others", "Others"],
        5: ["NONE", 5, "None", "None"],
        6: ["OEM", 6, "OEM", "OEM"],
        7: ["WHOLESALE", 7, "Wholesale", "Wholesale"],
        8: ["WEBSITE", 8, "Website", "Website"],
    };
    Props.WORKFLOW_STATUSID = {
        RO_DRAFTED: ["DRAFTED", "Drafted", "تم الانشاء"],
        PENDINGDSNRAPPROVAL: ["PENDINGDSNRAPPROVAL", "Pending for Designer approval", "بانتظار موافقة مهندس التصميم"],
        APPROVEDBYDSNR: ["APPROVEDBYDSNR", "Approved by Designer", "تمت موافقة مهندس التصميم"],
        REJECTEDBYDSNR: ["REJECTEDBYDSNR", "Rejected by Designer", "مرفوضة من قبل مهندس التصميم"],
        PENDINGRMAPPROVAL: [
            "PENDINGRMAPPROVAL",
            "Pending for Regional Manager approval",
            "بانتظار موافقة مدير مبيعات المنطقة",
        ],
        PENDINGRAAPPROVAL: [
            "PENDINGRAAPPROVAL",
            "Pending for Regional Accountant approval",
            "بانتظار موافقة محاسب المنطقة",
        ],
        REJECTEDBYRM: ["REJECTEDBYRM", "Rejected by Regional Manager", "تم رفضها من قبل مدير مبيعات المنطقة"],
        APPROVEDBYRA: ["APPROVEDBYRA", "Approved by Regional Accountant", "تمت الموافقة من قبل محاسب المنطقة"],
        APPROVEDBYRM: ["APPROVEDBYRM", "Approved by Regional Manager", "تمت الموافقة من قبل مدير المنطقة"],
        REJECTEDBYRA: ["REJECTEDBYRA", "Rejected by Regional Accountant", "تم رفضها من قبل محاسب المنطقة"],
        RO_POSTED: ["POSTED", "Posted", "تم التأكيد"],
        PENDINGINGFORDESIGNERAPPROVAL: ["PENDINGINGFORDESIGNERAPPROVAL", "Pending For Designer Approval", "تم التأكيد"],
        APPROVEDBYDESIGNER: ["APPROVEDBYDESIGNER", "Approved By Designer", "تم التأكيد"],
    };
    Props.DIMENSION_CODE = {
        REGION: 0,
        PROJECT: 101,
        DEPARTMENT: 1,
        PRODUCTLINE: 104,
        SALESMAN: 102,
        COSTCENTER: 2,
        BRAND: 103,
        EMPLOYEE: 100,
    };
    Props.ACCOUNT_TYPE = {
        0: "Profit And Loss",
        1: "Revenue",
        2: "Cost",
        3: "Balance",
        4: "Asset",
        5: "Liability",
        6: "Header",
        9: "Total",
        10: "Group Total",
    };
    Props.DIMENSION_OPTIONS = {
        0: "Optional",
        1: "ToBeFilledIn",
        2: "List",
        3: "Fixed",
    };
    Props.ITEM_TYPE = {
        0: "NONE",
        1: "INTERIOR",
        2: "EXTERIOR",
        3: "BOTH",
        4: "CEMENT",
    };
    // public static REGION_NAME = "REGION";
    // public static PROJECT_NAME = "PROJECT";
    // public static DEPARTMENT_NAME = "DEPARTMENT";
    // public static PRODUCTLINE_NAME = "PRODUCTLINE";
    // public static SALESMAN_NAME = "SALESMAN";
    // public static COSTCENTER_NAME = "COSTCENTER";
    // public static BRAND_NAME = "BRAND";
    // public static EMPLOYEE_NAME = "EMPLOYEE";
    Props.testStoreIds = [
        "HYD-002",
        "STAW-0055",
        "STAW-0056",
        "SSHW-0050",
        "SMAW-0045",
        "SMYW-0063",
        "SMJW-0068",
        "SAEW-0070",
        "SMOHW-24",
        "SMOHW-24",
        "SBESH-0025",
        "TBKMRJ-13",
        "TBKDKL-04",
        "TTAW-0039",
        "TTAW-0040",
        "TMAW-0038",
        "DMVSB-0075",
        "DMVSA-0076",
    ];
    return Props;
}());
exports.Props = Props;
