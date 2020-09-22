import { FormControl } from '@angular/forms';

import { integer } from '.';

describe('Integer', () => {
  const error = {digits: true};

  it('"234" should be integer', () => {
    let control = new FormControl('234');
    expect(integer(control)).toBeNull();
  });

  it('234 should be integer', () => {
    let control = new FormControl(234);
    expect(integer(control)).toBeNull();
  });

  it('"-123" should be integer', () => {
    let control = new FormControl('-123');
    expect(integer(control)).toEqual(error);
  });

  it('"abc" should not be integer', () => {
    let control = new FormControl('abc');
    expect(integer(control)).toEqual(error);
  });

  it('"123a" should not be integer', () => {
    let control = new FormControl('123a');
    expect(integer(control)).toEqual(error);
  });

});
