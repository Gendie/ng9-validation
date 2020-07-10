import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { base64, Base64Validator } from './base64';
import { creditCard, CreditCardValidator } from './credit-card';
import { date, DateValidator } from './date';
import { dateISO, DateISOValidator } from './date-ios';
import { digits, DigitsValidator } from './digits';
import { email, EmailValidator } from './email';
import { equal, EqualValidator } from './equal';
import { equalTo, EqualToValidator } from './equal-to';
import { gt, GreaterThanValidator } from './greater-than';
import { gte, GreaterThanEqualValidator } from './greater-than-equal';
import { json, JSONValidator } from './json';
import { lt, LessThanValidator } from './less-than';
import { lte, LessThanEqualValidator } from './less-than-equal';
import { max, MaxValidator } from './max';
import { maxDate, MaxDateValidator } from './max-date';
import { min, MinValidator } from './min';
import { minDate, MinDateValidator } from './min-date';
import { notEqual, NotEqualValidator } from './not-equal';
import { notEqualTo, NotEqualToValidator } from './not-equal-to';
import { number, NumberValidator } from './number';
// import { phone, PhoneValidator } from './phone';
import { range, RangeValidator } from './range';
import { rangeLength, RangeLengthValidator } from './range-length';
import { url, UrlValidator } from './url';
import { uuid, UUIDValidator } from './uuid';


export { base64, Base64Validator } from './base64';
export { creditCard, CreditCardValidator } from './credit-card';
export { date, DateValidator } from './date';
export { dateISO, DateISOValidator } from './date-ios';
export { digits, DigitsValidator } from './digits';
export { email, EmailValidator } from './email';
export { equal, EqualValidator } from './equal';
export { equalTo, EqualToValidator } from './equal-to';
export { gt, GreaterThanValidator } from './greater-than';
export { gte, GreaterThanEqualValidator } from './greater-than-equal';
export { json, JSONValidator } from './json';
export { lt, LessThanValidator } from './less-than';
export { lte, LessThanEqualValidator } from './less-than-equal';
export { max, MaxValidator } from './max';
export { maxDate, MaxDateValidator } from './max-date';
export { min, MinValidator } from './min';
export { minDate, MinDateValidator } from './min-date';
export { notEqual, NotEqualValidator } from './not-equal';
export { notEqualTo, NotEqualToValidator } from './not-equal-to';
export { number, NumberValidator } from './number';
// export { phone, PhoneValidator } from './phone';
export { range, RangeValidator } from './range';
export { rangeLength, RangeLengthValidator } from './range-length';
export { url, UrlValidator } from './url';
export { uuid, UUIDValidator } from './uuid';

export const CustomValidators: any = {
    base64,
    creditCard,
    date,
    dateISO,
    digits,
    email,
    equal,
    equalTo,
    gt,
    gte,
    json,
    lt,
    lte,
    max,
    maxDate,
    min,
    minDate,
    notEqual,
    notEqualTo,
    number,
    // phone,
    range,
    rangeLength,
    url,
    uuid
};

const CUSTOM_FORM_DIRECTIVES = [
    Base64Validator,
    CreditCardValidator,
    DateValidator,
    DateISOValidator,
    DigitsValidator,
    EmailValidator,
    EqualValidator,
    EqualToValidator,
    GreaterThanValidator,
    GreaterThanEqualValidator,
    JSONValidator,
    LessThanValidator,
    LessThanEqualValidator,
    MaxValidator,
    MaxDateValidator,
    MinValidator,
    MinDateValidator,
    NotEqualValidator,
    NotEqualToValidator,
    NumberValidator,
    // PhoneValidator,
    RangeValidator,
    RangeLengthValidator,
    UrlValidator,
    UUIDValidator
];

@NgModule({
    declarations: [CUSTOM_FORM_DIRECTIVES],
    imports: [
        CommonModule
    ],
    exports: [CUSTOM_FORM_DIRECTIVES]
})
export class CustomFormsModule { }