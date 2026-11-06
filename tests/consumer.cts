import * as api from '@lp-labs/business-day-counter';
import { countBusinessDays } from '@lp-labs/business-day-counter';
console.log(countBusinessDays('2024-06-03', '2024-06-09'));
// @ts-expect-error invalid argument must be rejected by declarations
api.countBusinessDays(20240603, '2024-06-07');
