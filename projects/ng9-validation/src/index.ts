import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Base64Validator } from './base64/directive';
import { base64 } from './base64/validator';
import { CreditCardValidator } from './credit-card/directive';
import { creditCard } from './credit-card/validator';
import { DateValidator } from './date/directive';
import { date } from './date/validator';
import { DateISOValidator } from './date-ios/directive';
import { dateISO } from './date-ios/validator';
import { DigitsValidator } from './digits/directive';
import { digits } from './digits/validator';
import { IntegerValidator } from './integer/directive';
import { integer } from './integer/validator';
import { EmailValidator } from './email/directive';
import { email } from './email/validator';
import { EqualValidator } from './equal/directive';
import { equal } from './equal/validator';
import { EqualToValidator } from './equal-to/directive';
import { equalTo } from './equal-to/validator';
import { GreaterThanValidator } from './greater-than/directive';
import { gt } from './greater-than/validator';
import { GreaterThanEqualValidator } from './greater-than-equal/directive';
import { gte } from './greater-than-equal/validator';
import { JSONValidator } from './json/directive';
import { json } from './json/validator';
import { LessThanValidator } from './less-than/directive';
import { lt } from './less-than/validator';
import { LessThanEqualValidator } from './less-than-equal/directive';
import { lte } from './less-than-equal/validator';
import { MaxValidator } from './max/directive';
import { max } from './max/validator';
import { MaxDateValidator } from './max-date/directive';
import { maxDate } from './max-date/validator';
import { MinValidator } from './min/directive';
import { min } from './min/validator';
import { MinDateValidator } from './min-date/directive';
import { minDate } from './min-date/validator';
import { NotEqualValidator } from './not-equal/directive';
import { notEqual } from './not-equal/validator';
import { NotEqualToValidator } from './not-equal-to/directive';
import { notEqualTo } from './not-equal-to/validator';
import { NumberValidator } from './number/directive';
import { number } from './number/validator';
import { PhoneValidator } from './phone/directive';
import { phone } from './phone/validator';
import { RangeValidator } from './range/directive';
import { range } from './range/validator';
import { RangeLengthValidator } from './range-length/directive';
import { rangeLength } from './range-length/validator';
import { UrlValidator } from './url/directive';
import { url } from './url/validator';
import { UUIDValidator } from './uuid/directive';
import { uuid } from './uuid/validator';

export const CustomValidators = {
    base64,
    creditCard,
    date,
    dateISO,
    digits,
    integer,
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
    phone,
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
    IntegerValidator,
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
    PhoneValidator,
    RangeValidator,
    RangeLengthValidator,
    UrlValidator,
    UUIDValidator
];

@NgModule({
    declarations: [...CUSTOM_FORM_DIRECTIVES],
    imports: [
        CommonModule
    ],
    exports: [...CUSTOM_FORM_DIRECTIVES]
})
export class CustomFormsModule { }